'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Link as LinkIcon,
  Unlink,
  Quote,
  Minus,
  Undo,
  Redo,
  RemoveFormatting,
  Highlighter,
  Baseline,
  Palette,
  ChevronDown,
  X,
  Ban,
  Eye,
  Code
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const TEXT_COLOR_PRESETS = [
  { name: 'Normal / Black (Default)', hex: 'inherit' },
  { name: 'Gold (FabFit Signature)', hex: '#d4af37' },
  { name: 'Yellow', hex: '#eab308' },
  { name: 'Red', hex: '#ef4444' },
  { name: 'Green', hex: '#10b981' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Cyan', hex: '#06b6d4' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Purple', hex: '#a855f7' },
  { name: 'Pink', hex: '#ec4899' },
  { name: 'Silver Gray', hex: '#9ca3af' },
  { name: 'White', hex: '#ffffff' },
];

const HIGHLIGHT_COLOR_PRESETS = [
  { name: 'Yellow', hex: '#fef08a' },
  { name: 'Pastel Green', hex: '#bbf7d0' },
  { name: 'Pastel Cyan', hex: '#bae6fd' },
  { name: 'Pastel Pink', hex: '#fbcfe8' },
  { name: 'Pastel Orange', hex: '#fed7aa' },
  { name: 'Pastel Purple', hex: '#e9d5ff' },
];

const FONT_SIZES = [
  { label: 'Size', value: '' },
  { label: '12px', value: '12px' },
  { label: '14px', value: '14px' },
  { label: '16px', value: '16px' },
  { label: '18px', value: '18px' },
  { label: '20px', value: '20px' },
  { label: '24px', value: '24px' },
  { label: '28px', value: '28px' },
  { label: '32px', value: '32px' },
];

export function RichTextEditor({
  value,
  onChange,
  placeholder = 'Write full article here...',
  minHeight = '320px',
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const highlightPickerRef = useRef<HTMLDivElement>(null);

  // Visual / HTML Mode Switcher
  const [editorMode, setEditorMode] = useState<'visual' | 'html'>('visual');
  const [rawHtml, setRawHtml] = useState<string>(value || '');

  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const [currentBlock, setCurrentBlock] = useState<'p' | 'h1' | 'h2' | 'h3'>('p');
  const [currentFontSize, setCurrentFontSize] = useState<string>('');

  // Active toolbar formats indicator
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    ul: false,
    ol: false,
    h1: false,
    h2: false,
    h3: false,
    p: true,
    blockquote: false,
  });

  // Text Color State (Defaults to Black)
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState('#000000');

  // Highlight State
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  const [customHighlight, setCustomHighlight] = useState('#fef08a');

  const savedSelectionRef = useRef<Range | null>(null);
  const lastHtmlRef = useRef<string | null>(null);
  const isInteractingWithPickerRef = useRef(false);

  // Enable standard paragraph separation in Chrome so Enter creates clean <p> blocks
  useEffect(() => {
    try {
      document.execCommand('defaultParagraphSeparator', false, 'p');
    } catch {}
  }, []);

  // Sync value into contentEditable on initial mount and when value changes from outside
  useEffect(() => {
    if (value !== lastHtmlRef.current) {
      lastHtmlRef.current = value || '';
      setRawHtml(value || '');
      if (editorRef.current) {
        editorRef.current.innerHTML = value || '';
      }
    } else if (editorRef.current && editorRef.current.innerHTML === '' && value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  // Close color/highlight pickers on outside click (ignores clicks during custom color interaction)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isInteractingWithPickerRef.current) return;
      const target = e.target as Node;
      if (colorPickerRef.current && !colorPickerRef.current.contains(target)) {
        setShowColorPicker(false);
      }
      if (highlightPickerRef.current && !highlightPickerRef.current.contains(target)) {
        setShowHighlightPicker(false);
      }
    };
    if (showColorPicker || showHighlightPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showColorPicker, showHighlightPicker]);

  const updateActiveFormats = () => {
    if (!editorRef.current || typeof window === 'undefined') return;
    try {
      const bold = document.queryCommandState('bold');
      const italic = document.queryCommandState('italic');
      const underline = document.queryCommandState('underline');
      const strike = document.queryCommandState('strikeThrough');
      const ul = document.queryCommandState('insertUnorderedList');
      const ol = document.queryCommandState('insertOrderedList');

      let block: 'p' | 'h1' | 'h2' | 'h3' = 'p';
      let isBlockquote = false;
      let detectedFontSize = '';
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        let node: Node | null = sel.anchorNode;
        while (node && node !== editorRef.current) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            const tag = el.tagName.toLowerCase();
            if (tag === 'blockquote') {
              isBlockquote = true;
            }
            if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'p') {
              block = tag as any;
            }
            if (!detectedFontSize && el.style && el.style.fontSize) {
              detectedFontSize = el.style.fontSize;
            }
          }
          node = node.parentNode;
        }
      }

      setCurrentFontSize(detectedFontSize);
      setCurrentBlock(block);
      setActiveFormats({
        bold,
        italic,
        underline,
        strike,
        ul,
        ol,
        h1: block === 'h1',
        h2: block === 'h2',
        h3: block === 'h3',
        p: block === 'p',
        blockquote: isBlockquote,
      });
    } catch {}
  };

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      const cleanHtml = (html === '<br>' || html === '<p><br></p>' || html.trim() === '') ? '' : html;
      lastHtmlRef.current = cleanHtml;
      setRawHtml(cleanHtml);
      onChange(cleanHtml);
    }
    updateActiveFormats();
  };

  const exec = (command: string, val: string | undefined = undefined) => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, val);
    handleInput();
  };

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      savedSelectionRef.current = sel.getRangeAt(0).cloneRange();
    }
  };

  const restoreSelection = () => {
    const sel = window.getSelection();
    if (sel && savedSelectionRef.current) {
      sel.removeAllRanges();
      sel.addRange(savedSelectionRef.current);
    }
  };

  // Heading toggle & switch handler:
  // Perfectly switches between H1, H2, H3, and Paragraph without relying on stale selection
  const handleHeadingChange = (tag: 'p' | 'h1' | 'h2' | 'h3') => {
    if (editorRef.current) {
      editorRef.current.focus();
    }

    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;

    // Find the enclosing block element (h1, h2, h3, p, div, blockquote)
    let blockEl: HTMLElement | null = null;
    let node: Node | null = sel.anchorNode;
    while (node && node !== editorRef.current) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = (node as HTMLElement).tagName.toLowerCase();
        if (['h1', 'h2', 'h3', 'p', 'div', 'blockquote'].includes(tagName)) {
          blockEl = node as HTMLElement;
          break;
        }
      }
      node = node.parentNode;
    }

    const currentTag = blockEl ? blockEl.tagName.toLowerCase() : currentBlock;
    // Clicking H1 when already H1 toggles back to Paragraph!
    const targetTag = (currentTag === tag && tag !== 'p') ? 'p' : tag;

    if (blockEl && blockEl !== editorRef.current && blockEl.parentNode) {
      // Direct DOM tag swap: instantly converts <h1> to <h2>, <h3>, or <p>
      const newEl = document.createElement(targetTag);
      while (blockEl.firstChild) {
        newEl.appendChild(blockEl.firstChild);
      }
      for (let i = 0; i < blockEl.attributes.length; i++) {
        const attr = blockEl.attributes[i];
        newEl.setAttribute(attr.name, attr.value);
      }
      blockEl.parentNode.replaceChild(newEl, blockEl);

      // Restore cursor inside the newly created block element
      const newRange = document.createRange();
      newRange.selectNodeContents(newEl);
      newRange.collapse(false);
      sel.removeAllRanges();
      sel.addRange(newRange);
    } else {
      // Fallback formatBlock
      const blockTag = targetTag === 'p' ? '<p>' : `<${targetTag}>`;
      try {
        document.execCommand('formatBlock', false, blockTag);
      } catch {
        try {
          document.execCommand('formatBlock', false, targetTag);
        } catch {}
      }
    }

    setCurrentBlock(targetTag as any);
    handleInput();
  };

  // Blockquote toggle handler:
  // Clicking quote button toggles blockquote on/off
  const toggleBlockquote = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }

    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;

    let bqEl: HTMLElement | null = null;
    let node: Node | null = sel.anchorNode;
    while (node && node !== editorRef.current) {
      if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName.toLowerCase() === 'blockquote') {
        bqEl = node as HTMLElement;
        break;
      }
      node = node.parentNode;
    }

    if (bqEl && bqEl.parentNode) {
      // Toggle OFF: convert blockquote into standard paragraph(s)
      const parent = bqEl.parentNode;
      const frag = document.createDocumentFragment();
      const hasParagraphs = bqEl.querySelectorAll('p').length > 0;
      if (hasParagraphs) {
        while (bqEl.firstChild) {
          frag.appendChild(bqEl.firstChild);
        }
      } else {
        const p = document.createElement('p');
        while (bqEl.firstChild) {
          p.appendChild(bqEl.firstChild);
        }
        frag.appendChild(p);
      }
      const lastChild = frag.lastChild;
      parent.replaceChild(frag, bqEl);
      if (lastChild) {
        const range = document.createRange();
        range.selectNodeContents(lastChild);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else {
      // Toggle ON: wrap in blockquote
      try {
        document.execCommand('formatBlock', false, '<blockquote>');
      } catch {
        try {
          document.execCommand('formatBlock', false, 'blockquote');
        } catch {}
      }
    }
    handleInput();
  };

  // Keyboard shortcut & Enter key handler for smooth escape from blockquotes
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;

      // Check if inside a blockquote
      let bqEl: HTMLElement | null = null;
      let node: Node | null = sel.anchorNode;
      while (node && node !== editorRef.current) {
        if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName.toLowerCase() === 'blockquote') {
          bqEl = node as HTMLElement;
          break;
        }
        node = node.parentNode;
      }

      if (bqEl && bqEl.parentNode) {
        const textContent = (bqEl.textContent || '').trim();
        const anchorNodeText = sel.anchorNode?.textContent?.trim() || '';

        // If user presses Enter on an empty line or empty blockquote, exit smoothly
        if (anchorNodeText === '' || textContent === '') {
          e.preventDefault();
          const newP = document.createElement('p');
          newP.innerHTML = '<br>';
          bqEl.parentNode.insertBefore(newP, bqEl.nextSibling);

          // If the blockquote was completely empty, remove it cleanly
          if (textContent === '') {
            bqEl.remove();
          }

          const range = document.createRange();
          range.setStart(newP, 0);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
          handleInput();
          return;
        }
      }
    }
  };

  // Mode switching between Visual and HTML (keeps both synced without content loss)
  const handleModeChange = (newMode: 'visual' | 'html') => {
    if (newMode === editorMode) return;
    if (newMode === 'html') {
      const currentHtml = editorRef.current ? editorRef.current.innerHTML : (value || '');
      setRawHtml(currentHtml);
      setEditorMode('html');
    } else {
      if (editorRef.current) {
        editorRef.current.innerHTML = rawHtml;
      }
      lastHtmlRef.current = rawHtml;
      onChange(rawHtml);
      setEditorMode('visual');
    }
  };

  const handleRawHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newHtml = e.target.value;
    setRawHtml(newHtml);
    lastHtmlRef.current = newHtml;
    onChange(newHtml);
  };

  // Font Size Application (handles both selected text AND typing at cursor, plus smooth size changes)
  const handleFontSizeChange = (size: string) => {
    setCurrentFontSize(size);
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }

    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;

    const range = sel.getRangeAt(0);

    // CASE 1: Cursor is collapsed (User selects size BEFORE typing)
    if (sel.isCollapsed) {
      if (!size) {
        // Reset to default size: step outside any existing font-size span
        let node: Node | null = range.startContainer;
        if (node && node.nodeType === Node.TEXT_NODE) {
          node = node.parentElement;
        }
        const fontSpan = (node as HTMLElement)?.closest('span[style*="font-size"], font[size]');
        if (fontSpan && editorRef.current?.contains(fontSpan)) {
          const afterText = document.createTextNode('\u200B');
          if (fontSpan.nextSibling) {
            fontSpan.parentNode?.insertBefore(afterText, fontSpan.nextSibling);
          } else {
            fontSpan.parentNode?.appendChild(afterText);
          }
          const newRange = document.createRange();
          newRange.setStart(afterText, 1);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);
        }
        setCurrentFontSize('');
        handleInput();
        return;
      }

      // User chose a font size (e.g. '28px') to type in
      let node: Node | null = range.startContainer;
      if (node && node.nodeType === Node.TEXT_NODE) {
        node = node.parentElement;
      }
      const currentSpan = (node as HTMLElement)?.closest('span[style*="font-size"]');

      // If cursor is inside an empty font-size span, simply update its fontSize
      if (currentSpan && (currentSpan.textContent === '' || currentSpan.textContent === '\u200B')) {
        (currentSpan as HTMLElement).style.fontSize = size;
        setCurrentFontSize(size);
        handleInput();
        return;
      }

      // Create a new span with the chosen font size and a zero-width space anchor
      const newSpan = document.createElement('span');
      newSpan.style.fontSize = size;
      const zeroNode = document.createTextNode('\u200B');
      newSpan.appendChild(zeroNode);
      range.insertNode(newSpan);

      // Place cursor inside the new span after the zero-width space
      const newRange = document.createRange();
      newRange.setStart(zeroNode, 1);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      setCurrentFontSize(size);
      handleInput();
      return;
    }

    // CASE 2: Text IS selected (!sel.isCollapsed)
    if (!size) {
      // RESET FONT SIZE: remove font-size on selection
      if (editorRef.current) {
        const allSpans = editorRef.current.querySelectorAll('span[style*="font-size"], font[size]');
        allSpans.forEach((el) => {
          if (sel.containsNode(el, true)) {
            (el as HTMLElement).style.fontSize = '';
            el.removeAttribute('size');
            if (!el.getAttribute('style') && el.attributes.length === 0) {
              const parent = el.parentNode;
              while (el.firstChild) {
                parent?.insertBefore(el.firstChild, el);
              }
              el.remove();
            }
          }
        });
      }
      setCurrentFontSize('');
      handleInput();
      return;
    }

    // APPLY SPECIFIC SIZE TO SELECTION:
    // Check if the entire selection is within an existing font-size span
    let container: Node | null = range.commonAncestorContainer;
    if (container && container.nodeType === Node.TEXT_NODE) {
      container = container.parentElement;
    }
    const enclosingFontSpan = (container as HTMLElement)?.closest('span[style*="font-size"]') as HTMLElement | null;

    if (enclosingFontSpan && editorRef.current?.contains(enclosingFontSpan)) {
      const selectedText = range.toString().trim();
      const spanText = (enclosingFontSpan.textContent || '').trim();
      // If the selection encompasses the full text of this span, update directly!
      if (selectedText === spanText && selectedText.length > 0) {
        enclosingFontSpan.style.fontSize = size;
        // Clean any inner spans with conflicting font-size
        enclosingFontSpan.querySelectorAll('span[style*="font-size"]').forEach((inner) => {
          (inner as HTMLElement).style.fontSize = '';
        });
        const reselectRange = document.createRange();
        reselectRange.selectNodeContents(enclosingFontSpan);
        sel.removeAllRanges();
        sel.addRange(reselectRange);

        setCurrentFontSize(size);
        handleInput();
        return;
      }
    }

    // Clean old font-size on all spans contained within the selection
    if (editorRef.current) {
      const innerSpans = editorRef.current.querySelectorAll('span[style*="font-size"], font[size]');
      innerSpans.forEach((el) => {
        if (sel.containsNode(el, true)) {
          (el as HTMLElement).style.fontSize = '';
          el.removeAttribute('size');
        }
      });
    }

    // Wrap the selected content cleanly in a new span
    try {
      const extracted = range.extractContents();
      // Strip any leftover font-size in extracted fragment
      const fragmentSpans = (extracted as DocumentFragment).querySelectorAll?.('span[style*="font-size"], font[size]');
      if (fragmentSpans) {
        fragmentSpans.forEach((el) => {
          (el as HTMLElement).style.fontSize = '';
          el.removeAttribute('size');
        });
      }

      const wrapper = document.createElement('span');
      wrapper.style.fontSize = size;
      wrapper.appendChild(extracted);
      range.insertNode(wrapper);

      // Reselect the wrapped contents so user can see it selected
      const newRange = document.createRange();
      newRange.selectNodeContents(wrapper);
      sel.removeAllRanges();
      sel.addRange(newRange);
    } catch {
      // Fallback
      document.execCommand('styleWithCSS', false, 'true');
      document.execCommand('fontSize', false, '7');
      if (editorRef.current) {
        const markers = editorRef.current.querySelectorAll('font[size="7"], span[style*="xxx-large"]');
        markers.forEach((el) => {
          el.removeAttribute('size');
          (el as HTMLElement).style.fontSize = size;
          el.querySelectorAll('span[style*="font-size"]').forEach((child) => {
            (child as HTMLElement).style.fontSize = '';
          });
        });
      }
    }

    setCurrentFontSize(size);
    handleInput();
  };

  // Text Color Application
  const openColorPicker = () => {
    saveSelection();
    setShowHighlightPicker(false);
    setShowColorPicker(prev => !prev);
  };

  const isNearBlack = (color: string) => {
    if (!color) return false;
    const c = color.trim().toLowerCase();
    if (['inherit', 'default', 'black', '#000', '#000000', '#111', '#111111', '#222', '#222020', '#222222', '#1a1a1a', '#2a2a2a', '#333', '#333333'].includes(c)) return true;
    const hex = c.replace('#', '');
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return r < 60 && g < 60 && b < 60;
    }
    return false;
  };

  const resetTextColor = () => {
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      document.execCommand('styleWithCSS', false, 'true');
      document.execCommand('foreColor', false, 'inherit');
      if (!sel.isCollapsed) {
        if (editorRef.current) {
          const spans = editorRef.current.querySelectorAll('span[style*="color"], font[color]');
          spans.forEach((el) => {
            if (sel.containsNode(el, true)) {
              (el as HTMLElement).style.color = '';
              el.removeAttribute('color');
            }
          });
        }
      } else {
        // Cursor is collapsed (user wants subsequent typed text to be normal default text)
        const range = sel.getRangeAt(0);
        let node: Node | null = range.startContainer;
        if (node && node.nodeType === Node.TEXT_NODE) {
          node = node.parentElement;
        }
        const coloredSpan = (node as HTMLElement)?.closest('span[style*="color"], font[color]');
        if (coloredSpan && !coloredSpan.closest('[style*="background-color"], mark')) {
          const afterText = document.createTextNode('\u200B');
          if (coloredSpan.nextSibling) {
            coloredSpan.parentNode?.insertBefore(afterText, coloredSpan.nextSibling);
          } else {
            coloredSpan.parentNode?.appendChild(afterText);
          }
          const newRange = document.createRange();
          newRange.setStart(afterText, 1);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);
        }
      }
    }
    handleInput();
    setShowColorPicker(false);
  };

  const applyTextColor = (color: string, keepOpen = false) => {
    if (isNearBlack(color)) {
      resetTextColor();
      return;
    }
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand('foreColor', false, color);
    handleInput();
    if (!keepOpen) {
      setShowColorPicker(false);
    }
  };

  // Highlight Application & Removal
  const openHighlightPicker = () => {
    saveSelection();
    setShowColorPicker(false);
    setShowHighlightPicker(prev => !prev);
  };

  const applyHighlight = (color: string, keepOpen = false) => {
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      if (!keepOpen) setShowHighlightPicker(false);
      return;
    }

    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand('hiliteColor', false, color);
    handleInput();
    if (!keepOpen) {
      setShowHighlightPicker(false);
    }
  };

  const removeHighlight = () => {
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      setShowHighlightPicker(false);
      return;
    }

    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand('hiliteColor', false, 'transparent');

    if (editorRef.current) {
      const marks = editorRef.current.querySelectorAll('mark');
      marks.forEach((mark) => {
        if (sel.containsNode(mark, true)) {
          const parent = mark.parentNode;
          while (mark.firstChild) {
            parent?.insertBefore(mark.firstChild, mark);
          }
          parent?.removeChild(mark);
        }
      });

      const styledSpans = editorRef.current.querySelectorAll('span[style*="background"]');
      styledSpans.forEach((span) => {
        if (sel.containsNode(span, true)) {
          (span as HTMLElement).style.backgroundColor = '';
        }
      });
    }

    handleInput();
    setShowHighlightPicker(false);
  };

  // Link Dialog
  const openLinkDialog = () => {
    saveSelection();
    const sel = window.getSelection();
    const selectedText = sel ? sel.toString() : '';
    setLinkText(selectedText);
    setLinkUrl('');
    setShowLinkModal(true);
  };

  const applyLink = (e?: React.FormEvent | React.MouseEvent | React.KeyboardEvent) => {
    if (e && 'preventDefault' in e) e.preventDefault();
    setShowLinkModal(false);

    if (!linkUrl.trim()) return;

    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }

    const formattedUrl = linkUrl.startsWith('http://') || linkUrl.startsWith('https://') || linkUrl.startsWith('/') || linkUrl.startsWith('#')
      ? linkUrl
      : `https://${linkUrl}`;

    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      const textToUse = linkText.trim() || range.toString() || formattedUrl;

      const anchor = document.createElement('a');
      anchor.href = formattedUrl;
      anchor.textContent = textToUse;
      anchor.className = 'text-[#d4af37] underline font-semibold hover:text-yellow-600';
      if (openInNewTab) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }

      range.deleteContents();
      range.insertNode(anchor);
      
      range.setStartAfter(anchor);
      range.setEndAfter(anchor);
      sel.removeAllRanges();
      sel.addRange(range);

      handleInput();
    }
  };

  // Word and character counts
  const getCounts = () => {
    if (!value) return { words: 0, chars: 0 };
    if (typeof window === 'undefined') return { words: 0, chars: 0 };
    const temp = document.createElement('div');
    temp.innerHTML = value;
    const plainText = temp.textContent || temp.innerText || '';
    const words = plainText.trim() ? plainText.trim().split(/\s+/).length : 0;
    const chars = plainText.length;
    return { words, chars };
  };

  const { words, chars } = getCounts();

  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-sm focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 transition-all">
      {/* Top Toolbar */}
      <div className="bg-gray-100 border-b border-gray-200 p-2 flex flex-wrap items-center justify-between gap-2 select-none">
        {/* Controls - Left Toolbar Buttons */}
        <div className={`flex flex-wrap items-center gap-1.5 transition-opacity ${editorMode === 'html' ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
          
          {/* Quick H1 / H2 / H3 / Paragraph One-Click Toggle Buttons */}
          <div className="flex items-center gap-0.5 bg-gray-200/80 p-0.5 rounded-lg border border-gray-300">
            <button
              type="button"
              title="Heading 1 (H1)"
              onMouseDown={(e) => { e.preventDefault(); handleHeadingChange('h1'); }}
              className={`px-2.5 py-1 text-xs font-black rounded transition-all ${
                activeFormats.h1 ? 'bg-black text-white shadow-xs' : 'hover:bg-white text-gray-700'
              }`}
            >
              H1
            </button>
            <button
              type="button"
              title="Heading 2 (H2)"
              onMouseDown={(e) => { e.preventDefault(); handleHeadingChange('h2'); }}
              className={`px-2.5 py-1 text-xs font-black rounded transition-all ${
                activeFormats.h2 ? 'bg-black text-white shadow-xs' : 'hover:bg-white text-gray-700'
              }`}
            >
              H2
            </button>
            <button
              type="button"
              title="Heading 3 (H3)"
              onMouseDown={(e) => { e.preventDefault(); handleHeadingChange('h3'); }}
              className={`px-2.5 py-1 text-xs font-black rounded transition-all ${
                activeFormats.h3 ? 'bg-black text-white shadow-xs' : 'hover:bg-white text-gray-700'
              }`}
            >
              H3
            </button>
            <button
              type="button"
              title="Paragraph (Normal Text)"
              onMouseDown={(e) => { e.preventDefault(); handleHeadingChange('p'); }}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
                activeFormats.p && !activeFormats.h1 && !activeFormats.h2 && !activeFormats.h3
                  ? 'bg-black text-white shadow-xs'
                  : 'hover:bg-white text-gray-700'
              }`}
            >
              Paragraph
            </button>
          </div>

          {/* Compact Font Size Selector */}
          <div className="relative">
            <select
              value={FONT_SIZES.some(s => s.value === currentFontSize) ? currentFontSize : ''}
              onMouseDown={saveSelection}
              onFocus={saveSelection}
              onChange={(e) => handleFontSizeChange(e.target.value)}
              title="Font Size"
              className="w-[72px] px-2 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-bold text-gray-800 focus:outline-none focus:ring-1 focus:ring-black cursor-pointer text-center"
            >
              {FONT_SIZES.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <div className="h-5 w-px bg-gray-300 mx-0.5" />

          {/* Inline Styles */}
          <button
            type="button"
            title="Bold (Ctrl+B)"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('bold')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeFormats.bold ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
            }`}
          >
            <Bold className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Italic (Ctrl+I)"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('italic')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeFormats.italic ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
            }`}
          >
            <Italic className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Underline (Ctrl+U)"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('underline')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeFormats.underline ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
            }`}
          >
            <Underline className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Strikethrough"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('strikeThrough')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeFormats.strike ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
            }`}
          >
            <Strikethrough className="w-4 h-4" />
          </button>

          {/* Text Color Picker Dropdown (Solid Black Default) */}
          <div className="relative" ref={colorPickerRef}>
            <button
              type="button"
              title="Text Color"
              onMouseDown={(e) => e.preventDefault()}
              onClick={openColorPicker}
              className={`p-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                showColorPicker ? 'bg-gray-300 text-black' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
              }`}
            >
              <Baseline className="w-4 h-4" />
              <div
                className="w-3 h-1.5 rounded-xs border border-gray-400"
                style={{ backgroundColor: customColor }}
              />
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {/* Text Color Popover */}
            {showColorPicker && (
              <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-3 w-64 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-yellow-600" />
                    Text Color
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      isInteractingWithPickerRef.current = false;
                      setShowColorPicker(false);
                    }}
                    className="text-gray-400 hover:text-gray-700 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-6 gap-1.5 mb-3">
                  {TEXT_COLOR_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      title={preset.name}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => applyTextColor(preset.hex, false)}
                      className="w-8 h-8 rounded-lg border border-gray-300 hover:scale-110 hover:border-black transition-transform flex items-center justify-center shadow-xs"
                      style={{
                        backgroundColor: preset.hex === 'inherit' ? '#ffffff' : preset.hex,
                      }}
                    >
                      {preset.hex === 'inherit' ? (
                        <span className="text-[9px] font-black text-black">Black</span>
                      ) : preset.hex === '#ffffff' ? (
                        <span className="text-[8px] font-bold text-gray-400">White</span>
                      ) : null}
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-gray-600">Custom:</span>
                    <input
                      type="color"
                      value={customColor}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        isInteractingWithPickerRef.current = true;
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        isInteractingWithPickerRef.current = true;
                      }}
                      onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        const val = e.currentTarget.value;
                        setCustomColor(val);
                        applyTextColor(val, true);
                      }}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCustomColor(val);
                        applyTextColor(val, true);
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          isInteractingWithPickerRef.current = false;
                        }, 250);
                      }}
                      className="w-7 h-7 rounded-md border border-gray-300 cursor-pointer p-0.5 bg-white shadow-xs hover:border-black transition-all"
                    />
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        isInteractingWithPickerRef.current = false;
                        setShowColorPicker(false);
                      }}
                      className="px-2 py-1 bg-black text-white text-[10px] font-bold rounded hover:bg-gray-800 transition-colors shadow-xs"
                    >
                      Done
                    </button>
                  </div>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={resetTextColor}
                    className="text-[10px] font-bold text-gray-500 hover:text-black hover:underline"
                  >
                    Reset (Black / Default)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Highlight Color Picker & Remover */}
          <div className="relative" ref={highlightPickerRef}>
            <button
              type="button"
              title="Highlight Background Color"
              onMouseDown={(e) => e.preventDefault()}
              onClick={openHighlightPicker}
              className={`p-1.5 rounded-lg transition-colors flex items-center gap-1 ${
                showHighlightPicker ? 'bg-yellow-200 text-yellow-900' : 'hover:bg-yellow-100 text-yellow-800'
              }`}
            >
              <Highlighter className="w-4 h-4" />
              <div
                className="w-3 h-1.5 rounded-xs border border-yellow-400"
                style={{ backgroundColor: customHighlight }}
              />
              <ChevronDown className="w-3 h-3 text-yellow-600" />
            </button>

            {/* Highlight Popover */}
            {showHighlightPicker && (
              <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-3 w-60 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                    <Highlighter className="w-3.5 h-3.5 text-yellow-600" />
                    Highlight Color
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowHighlightPicker(false)}
                    className="text-gray-400 hover:text-gray-700 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Remove Highlight Button */}
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={removeHighlight}
                  className="w-full mb-3 px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Ban className="w-3.5 h-3.5" />
                  <span>Remove Highlight (No Color)</span>
                </button>

                {/* Highlight Swatches */}
                <div className="grid grid-cols-6 gap-1.5 mb-3">
                  {HIGHLIGHT_COLOR_PRESETS.map((preset) => (
                    <button
                      key={preset.hex}
                      type="button"
                      title={preset.name}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => applyHighlight(preset.hex)}
                      className="w-7 h-7 rounded-lg border border-gray-300 hover:scale-110 hover:border-black transition-transform shadow-xs"
                      style={{ backgroundColor: preset.hex }}
                    />
                  ))}
                </div>

                {/* Custom Highlight Color */}
                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-gray-600">Custom:</span>
                    <input
                      type="color"
                      value={customHighlight}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        isInteractingWithPickerRef.current = true;
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        isInteractingWithPickerRef.current = true;
                      }}
                      onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        const val = e.currentTarget.value;
                        setCustomHighlight(val);
                        applyHighlight(val, true);
                      }}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCustomHighlight(val);
                        applyHighlight(val, true);
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          isInteractingWithPickerRef.current = false;
                        }, 250);
                      }}
                      className="w-7 h-7 rounded-md border border-gray-300 cursor-pointer p-0.5 bg-white shadow-xs hover:border-black transition-all"
                    />
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        isInteractingWithPickerRef.current = false;
                        setShowHighlightPicker(false);
                      }}
                      className="px-2 py-1 bg-black text-white text-[10px] font-bold rounded hover:bg-gray-800 transition-colors shadow-xs"
                    >
                      Done
                    </button>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">Pick color</span>
                </div>
              </div>
            )}
          </div>

          <div className="h-5 w-px bg-gray-300 mx-0.5" />

          {/* Lists */}
          <button
            type="button"
            title="Bullet Points"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('insertUnorderedList')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeFormats.ul ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
            }`}
          >
            <List className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Numbered List"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('insertOrderedList')}
            className={`p-1.5 rounded-lg transition-colors ${
              activeFormats.ol ? 'bg-black text-white' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
            }`}
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Blockquote (Quote text - click to toggle on/off)"
            onMouseDown={(e) => { e.preventDefault(); toggleBlockquote(); }}
            className={`p-1.5 rounded-lg transition-colors ${
              activeFormats.blockquote ? 'bg-black text-white shadow-xs' : 'hover:bg-gray-200 text-gray-700 hover:text-black'
            }`}
          >
            <Quote className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Divider Line"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('insertHorizontalRule')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-gray-300 mx-0.5" />

          {/* Links */}
          <button
            type="button"
            title="Insert Link"
            onMouseDown={(e) => e.preventDefault()}
            onClick={openLinkDialog}
            className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-700 hover:text-blue-900 transition-colors"
          >
            <LinkIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Remove Link"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('unlink')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Unlink className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-gray-300 mx-0.5" />

          {/* Clean & History */}
          <button
            type="button"
            title="Clear Formatting"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('removeFormat')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <RemoveFormatting className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Undo (Ctrl+Z)"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('undo')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Undo className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Redo (Ctrl+Y)"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec('redo')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>

        {/* Visual vs HTML Mode Switcher */}
        <div className="flex items-center bg-gray-200 p-0.5 rounded-lg border border-gray-300 shrink-0 ml-auto">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleModeChange('visual')}
            className={`px-3 py-1 text-xs font-bold rounded-md flex items-center gap-1.5 transition-all ${
              editorMode === 'visual'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Visual</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleModeChange('html')}
            className={`px-3 py-1 text-xs font-bold rounded-md flex items-center gap-1.5 transition-all ${
              editorMode === 'html'
                ? 'bg-white text-gray-900 shadow-xs'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>HTML</span>
          </button>
        </div>
      </div>

      {/* Editor Body Area - Both views stay mounted in DOM to prevent any content loss */}
      {/* Visual WYSIWYG View */}
      <div className={`relative bg-white ${editorMode === 'visual' ? 'block' : 'hidden'}`}>
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={handleInput}
          onKeyDown={handleKeyDown}
          onKeyUp={updateActiveFormats}
          onMouseUp={updateActiveFormats}
          style={{ minHeight, color: '#111827' }}
          data-placeholder={placeholder}
          className="admin-rich-editor px-5 py-3.5 text-gray-950 text-base leading-relaxed focus:outline-none overflow-y-auto max-h-[500px] bg-white
            [&>*:first-child]:!mt-0
            [&_h1:first-child]:!mt-0 [&_h2:first-child]:!mt-0 [&_h3:first-child]:!mt-0 [&_p:first-child]:!mt-0
            [&_h1]:text-3xl [&_h1]:font-black [&_h1]:mt-2 [&_h1]:mb-2 [&_h1]:!text-gray-950
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-3 [&_h2]:mb-1.5 [&_h2]:!text-gray-900
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-2.5 [&_h3]:mb-1 [&_h3]:!text-gray-800
            [&_p]:mb-2.5 [&_p]:leading-relaxed [&_p]:!text-gray-950
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-2.5 [&_ul]:space-y-1
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-2.5 [&_ol]:space-y-1
            [&_li]:!text-gray-900
            [&_blockquote]:border-l-4 [&_blockquote]:border-yellow-500 [&_blockquote]:pl-4 [&_blockquote]:py-1.5 [&_blockquote]:my-2.5 [&_blockquote]:bg-yellow-50 [&_blockquote]:italic [&_blockquote]:!text-gray-800
            [&_hr]:my-3.5 [&_hr]:border-gray-300
            [&_a]:text-yellow-600 [&_a]:underline [&_a]:font-semibold
            [&_mark]:px-1 [&_mark]:rounded
            empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:cursor-text"
        />
      </div>

      {/* HTML Code View */}
      <div className={`relative bg-gray-50 p-3 ${editorMode === 'html' ? 'block' : 'hidden'}`}>
        <textarea
          value={rawHtml}
          onChange={handleRawHtmlChange}
          placeholder="<p>Enter or edit raw HTML content here...</p>"
          style={{ minHeight, color: '#111827', backgroundColor: '#ffffff' }}
          className="w-full bg-white text-gray-900 font-mono text-xs leading-relaxed p-4 focus:outline-none focus:ring-2 focus:ring-black resize-y rounded-xl border border-gray-300 shadow-inner"
          spellCheck={false}
        />
      </div>

      {/* Editor Footer / Info Bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="text-gray-500">
            {editorMode === 'visual' ? (
              <>Use <strong>H1</strong>, <strong>H2</strong>, <strong>H3</strong>, <strong>Paragraph</strong> or select text to format.</>
            ) : (
              <span className="text-gray-700 font-semibold font-mono">Editing raw HTML source code. Click 'Visual' above to preview formatted design.</span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>{words} words</span>
          <span>•</span>
          <span>{chars} characters</span>
        </div>
      </div>

      {/* Link Insertion Modal Dialog (Div based, avoids nested form hydration error) */}
      {showLinkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-yellow-600" />
              <span>Insert Hyperlink</span>
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Add a clickable URL to your text for articles, references or backlinking.
            </p>

            <div
              className="space-y-4"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  applyLink(e);
                }
              }}
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Link Text (Display Text)
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="e.g. Read FabFit Personal Training Guide"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Target URL (Link) *
                </label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="e.g. https://fabfitperformance.com/personal-trainer-dlf-phase-4"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
                  autoFocus
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="editorNewTab"
                  checked={openInNewTab}
                  onChange={(e) => setOpenInNewTab(e.target.checked)}
                  className="w-4 h-4 rounded-sm border-gray-300 text-black focus:ring-black cursor-pointer"
                />
                <label htmlFor="editorNewTab" className="text-xs font-medium text-gray-700 cursor-pointer">
                  Open link in new browser tab (recommended for external links)
                </label>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-4 py-2 border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={applyLink}
                  className="px-5 py-2 bg-black hover:bg-yellow-600 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                >
                  Apply Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RichTextEditor;

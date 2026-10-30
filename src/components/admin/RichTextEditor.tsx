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
  Ban
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const TEXT_COLOR_PRESETS = [
  { name: 'Gold (FabFit)', hex: '#d4af37' },
  { name: 'Yellow', hex: '#eab308' },
  { name: 'Red', hex: '#ef4444' },
  { name: 'Green', hex: '#10b981' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Purple', hex: '#a855f7' },
  { name: 'Dark Charcoal', hex: '#1f2937' },
  { name: 'Pure White', hex: '#ffffff' },
  { name: 'Silver Gray', hex: '#9ca3af' },
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

  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [openInNewTab, setOpenInNewTab] = useState(true);
  const [currentBlock, setCurrentBlock] = useState<'p' | 'h1' | 'h2' | 'h3'>('p');
  const [currentFontSize, setCurrentFontSize] = useState<string>('');

  // Text Color State
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customColor, setCustomColor] = useState('#d4af37');

  // Highlight State
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  const [customHighlight, setCustomHighlight] = useState('#fef08a');

  const savedSelectionRef = useRef<Range | null>(null);

  // Sync value into contentEditable only when it differs (avoids cursor jump)
  useEffect(() => {
    if (editorRef.current) {
      if (editorRef.current.innerHTML !== (value || '')) {
        editorRef.current.innerHTML = value || '';
      }
    }
  }, [value]);

  // Close color/highlight pickers on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
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

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      if (html === '<br>' || html === '<p><br></p>' || html.trim() === '') {
        onChange('');
      } else {
        onChange(html);
      }
    }
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

  const handleHeadingChange = (tag: 'p' | 'h1' | 'h2' | 'h3') => {
    setCurrentBlock(tag);
    if (editorRef.current) {
      editorRef.current.focus();
    }
    if (tag === 'p') {
      document.execCommand('formatBlock', false, '<p>');
    } else {
      document.execCommand('formatBlock', false, `<${tag}>`);
    }
    handleInput();
  };

  // Font Size Application
  const handleFontSizeChange = (size: string) => {
    setCurrentFontSize(size);
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }

    if (!size) {
      document.execCommand('styleWithCSS', false, 'true');
      document.execCommand('fontSize', false, '3');
      handleInput();
      return;
    }

    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;

    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand('fontSize', false, '7');

    if (editorRef.current) {
      const markers = editorRef.current.querySelectorAll('font[size="7"], span[style*="xxx-large"]');
      if (markers.length > 0) {
        markers.forEach((el) => {
          el.removeAttribute('size');
          (el as HTMLElement).style.fontSize = size;
        });
      } else {
        try {
          const range = sel.getRangeAt(0);
          const span = document.createElement('span');
          span.style.fontSize = size;
          span.appendChild(range.extractContents());
          range.insertNode(span);
        } catch (e) {
          // ignore
        }
      }
    }

    handleInput();
  };

  // Text Color Application
  const openColorPicker = () => {
    saveSelection();
    setShowHighlightPicker(false);
    setShowColorPicker(prev => !prev);
  };

  const applyTextColor = (color: string) => {
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand('foreColor', false, color);
    handleInput();
    setShowColorPicker(false);
  };

  // Highlight Application & Removal
  const openHighlightPicker = () => {
    saveSelection();
    setShowColorPicker(false);
    setShowHighlightPicker(prev => !prev);
  };

  const applyHighlight = (color: string) => {
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      setShowHighlightPicker(false);
      return;
    }

    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand('hiliteColor', false, color);
    handleInput();
    setShowHighlightPicker(false);
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

    // Native clear
    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand('hiliteColor', false, 'transparent');

    // Also strip any surrounding/nested <mark> or background-color spans in the selection
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
      anchor.className = 'text-[#d4af37] underline font-semibold hover:text-yellow-400';
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

  // Counts
  const getCounts = () => {
    if (!value) return { words: 0, chars: 0 };
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
      <div className="bg-gray-100 border-b border-gray-200 p-2 flex flex-wrap items-center justify-between gap-1 select-none">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-1">
          {/* Headings Selector */}
          <div className="relative">
            <select
              value={currentBlock}
              onChange={(e) => handleHeadingChange(e.target.value as any)}
              className="px-2.5 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-bold text-gray-800 focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
            >
              <option value="p">Paragraph</option>
              <option value="h1">Heading 1 (H1)</option>
              <option value="h2">Heading 2 (H2)</option>
              <option value="h3">Heading 3 (H3)</option>
            </select>
          </div>

          {/* Compact Font Size Selector (Narrow Width) */}
          <div className="relative">
            <select
              value={currentFontSize}
              onMouseDown={saveSelection}
              onChange={(e) => handleFontSizeChange(e.target.value)}
              title="Font Size"
              className="w-[72px] px-2 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-bold text-gray-800 focus:outline-none focus:ring-1 focus:ring-black cursor-pointer text-center"
            >
              {FONT_SIZES.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <div className="h-5 w-px bg-gray-300 mx-1" />

          {/* Inline Styles */}
          <button
            type="button"
            title="Bold (Ctrl+B)"
            onClick={() => exec('bold')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Bold className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Italic (Ctrl+I)"
            onClick={() => exec('italic')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Italic className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Underline (Ctrl+U)"
            onClick={() => exec('underline')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Underline className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Strikethrough"
            onClick={() => exec('strikeThrough')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Strikethrough className="w-4 h-4" />
          </button>

          {/* Text Color Picker Dropdown */}
          <div className="relative" ref={colorPickerRef}>
            <button
              type="button"
              title="Text Color"
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
              <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-3 w-56 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-yellow-600" />
                    Text Color
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowColorPicker(false)}
                    className="text-gray-400 hover:text-gray-700 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-1.5 mb-3">
                  {TEXT_COLOR_PRESETS.map((preset) => (
                    <button
                      key={preset.hex}
                      type="button"
                      title={preset.name}
                      onClick={() => applyTextColor(preset.hex)}
                      className="w-8 h-8 rounded-lg border border-gray-300 hover:scale-110 hover:border-black transition-transform flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: preset.hex }}
                    >
                      {preset.hex === '#ffffff' && (
                        <span className="text-[9px] text-gray-400 font-bold">W</span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <label className="text-[11px] font-semibold text-gray-600 flex items-center gap-1 cursor-pointer">
                    <span>Custom:</span>
                    <input
                      type="color"
                      value={customColor}
                      onChange={(e) => {
                        setCustomColor(e.target.value);
                        applyTextColor(e.target.value);
                      }}
                      className="w-6 h-6 rounded-md border border-gray-300 cursor-pointer p-0 bg-transparent"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => applyTextColor('inherit')}
                    className="text-[10px] font-bold text-gray-500 hover:text-black hover:underline"
                  >
                    Reset Color
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
                      onClick={() => applyHighlight(preset.hex)}
                      className="w-7 h-7 rounded-lg border border-gray-300 hover:scale-110 hover:border-black transition-transform shadow-xs"
                      style={{ backgroundColor: preset.hex }}
                    />
                  ))}
                </div>

                {/* Custom Highlight Color */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <label className="text-[11px] font-semibold text-gray-600 flex items-center gap-1 cursor-pointer">
                    <span>Custom:</span>
                    <input
                      type="color"
                      value={customHighlight}
                      onChange={(e) => {
                        setCustomHighlight(e.target.value);
                        applyHighlight(e.target.value);
                      }}
                      className="w-6 h-6 rounded-md border border-gray-300 cursor-pointer p-0 bg-transparent"
                    />
                  </label>
                  <span className="text-[10px] text-gray-400 font-medium">Pick any color</span>
                </div>
              </div>
            )}
          </div>

          <div className="h-5 w-px bg-gray-300 mx-1" />

          {/* Lists */}
          <button
            type="button"
            title="Bullet Points"
            onClick={() => exec('insertUnorderedList')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <List className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Numbered List"
            onClick={() => exec('insertOrderedList')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <ListOrdered className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Blockquote"
            onClick={() => exec('formatBlock', '<blockquote>')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Quote className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Divider Line"
            onClick={() => exec('insertHorizontalRule')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-gray-300 mx-1" />

          {/* Links */}
          <button
            type="button"
            title="Insert Link"
            onClick={openLinkDialog}
            className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-700 hover:text-blue-900 transition-colors"
          >
            <LinkIcon className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Remove Link"
            onClick={() => exec('unlink')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Unlink className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-gray-300 mx-1" />

          {/* Clean & History */}
          <button
            type="button"
            title="Clear Formatting"
            onClick={() => exec('removeFormat')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <RemoveFormatting className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Undo (Ctrl+Z)"
            onClick={() => exec('undo')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Undo className="w-4 h-4" />
          </button>

          <button
            type="button"
            title="Redo (Ctrl+Y)"
            onClick={() => exec('redo')}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Body Area - Pure Visual WYSIWYG */}
      <div className="relative">
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={handleInput}
          style={{ minHeight }}
          data-placeholder={placeholder}
          className="p-5 text-gray-900 text-base leading-relaxed focus:outline-none overflow-y-auto max-h-[500px]
            [&_h1]:text-2xl [&_h1]:font-black [&_h1]:mb-3 [&_h1]:text-black
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-4 [&_h2]:mb-2 [&_h2]:text-gray-900
            [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-3 [&_h3]:mb-1 [&_h3]:text-gray-800
            [&_p]:mb-3 [&_p]:leading-relaxed
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul]:space-y-1
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3 [&_ol]:space-y-1
            [&_li]:text-gray-800
            [&_blockquote]:border-l-4 [&_blockquote]:border-yellow-500 [&_blockquote]:pl-4 [&_blockquote]:py-1 [&_blockquote]:my-3 [&_blockquote]:bg-yellow-50/50 [&_blockquote]:italic [&_blockquote]:text-gray-700
            [&_hr]:my-4 [&_hr]:border-gray-200
            [&_a]:text-yellow-600 [&_a]:underline [&_a]:font-semibold
            [&_mark]:px-1 [&_mark]:rounded
            empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:cursor-text"
        />
      </div>

      {/* Editor Footer / Info Bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="text-gray-400">
            Select text to apply <strong>Size</strong>, <strong>Color</strong>, <strong>Highlight</strong>, or <strong>Link</strong>.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>{words} words</span>
          <span>•</span>
          <span>{chars} characters</span>
        </div>
      </div>

      {/* Link Insertion Modal Dialog */}
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
                  required
                  autoFocus
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="e.g. https://fabfitperformance.com/personal-trainer-dlf-phase-4"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-900"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="openInNewTab"
                  checked={openInNewTab}
                  onChange={(e) => setOpenInNewTab(e.target.checked)}
                  className="w-4 h-4 rounded text-black focus:ring-black border-gray-300"
                />
                <label htmlFor="openInNewTab" className="text-xs font-medium text-gray-700 cursor-pointer">
                  Open link in new browser tab (recommended for external links)
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={applyLink}
                  className="px-5 py-2 rounded-xl bg-black text-white text-xs font-bold hover:bg-zinc-800 transition-all shadow-md"
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FabFit Admin Login',
  description: 'Login to FabFit Admin Panel',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {children}
    </div>
  );
}


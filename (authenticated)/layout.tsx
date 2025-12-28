'use client';

import { ProtectedRoute } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing on the server for hydration purposes
    return null;
  }

  return (
    <ProtectedRoute fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">Please log in to access this page.</div>}>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation can be added here */}
        <main className="container mx-auto py-6">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
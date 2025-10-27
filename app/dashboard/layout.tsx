import React from 'react';

export const experimental_ppr = true; // bu satır burada olmalı

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* isteğe bağlı SideNav veya ortak layout */}
      <main>{children}</main>
    </div>
  );
}
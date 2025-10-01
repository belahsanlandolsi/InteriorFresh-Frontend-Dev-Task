import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="max-w-2xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

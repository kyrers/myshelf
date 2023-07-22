import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Myshelf",
  description: "An app",
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

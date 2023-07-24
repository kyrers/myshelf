import { DefaultLayout } from "@/components/Layouts";
import { GlobalStyle } from "@/style";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Myshelf",
  description: "An app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}

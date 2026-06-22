import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malanda",
  description: "Find the Perfect Business Instantly",
};

export default function RootLayout({
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
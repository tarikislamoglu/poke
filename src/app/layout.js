import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-amber-300 ">{children}</body>
    </html>
  );
}

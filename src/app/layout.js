import "./globals.css";

export const metadata = {
  title: "Happy 100-Day Snapchat Streak!",
  description: "A celebration of our Snapchat streak milestone",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

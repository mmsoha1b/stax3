import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swap Api",
  description: "Swap Api Task",
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div id='modals' />
        {children}
      </body>
    </html>
  );
}

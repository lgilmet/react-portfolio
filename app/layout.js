import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Rubik, Inter } from "next/font/google";
// Rubik looks kinda techniky, like videotron
// Raleway looks too 2010s smooth
// Inter is a clean arial alternative

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Lucas Guillemette",
  description: "Web Developer | Photographer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          themes={["dark", "light"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

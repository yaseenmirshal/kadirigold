import { Poppins } from "next/font/google";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust weights as needed
});

export const metadata = {
  title: "Kadiri Gold L.L.C",
  description: "Bullion Jewellery L.L.C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}

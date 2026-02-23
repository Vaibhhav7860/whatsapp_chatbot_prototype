import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "TechSummit2026 — WhatsApp Event Chatbot Prototype",
  description: "High-fidelity interactive prototype demonstrating a WhatsApp Event Chatbot for TechSummit2026. Features registration, tickets, agenda, speakers, FAQs, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}

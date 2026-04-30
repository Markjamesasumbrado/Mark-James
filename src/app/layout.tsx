import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Cubes from "../components/Cubes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Professional Design",
  description: "Portfolio of a UI/UX Designer & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body>
        <div className="cubes-background-wrapper">
          <Cubes 
            gridSize={16}
            maxAngle={30}
            radius={5}
            borderStyle="1px solid rgba(139, 92, 246, 0.15)"
            faceColor="#020617"
            rippleColor="rgba(139, 92, 246, 0.3)"
            rippleSpeed={2}
            autoAnimate={true}
            rippleOnClick={true}
            cellGap={0}
          />
        </div>
        {children}
      </body>
    </html>
  );
}

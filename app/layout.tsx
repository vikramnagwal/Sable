import type { Metadata } from "next";
import { Geist_Mono, Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
	variable: "--font-lexend-deca",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sable - Stylish Calendar App",
	description: "Create and manage your appointments with style using Sable.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lexendDeca.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

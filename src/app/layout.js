import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              fontSize: "16px",
              colorPrimary: "rgba(60, 185, 209, 1)",
              colorFillSecondary: "#DBF1FF",
              colorText: "#374151",
              colorTextSecondary: "#A0ACE0",
              // Customize primary color
              fontFamily: "Gilroy", // Customize font
            },
          }}
          wave={{ disabled: true }}
        >
          <div className="App">
            {children} {/* Render the content of the current page */}
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider} from "antd"
import antTheme from "@/theme/AntTheme";

// custom fonts
const roboto = Roboto({ 
    subsets: ["latin"],
    weight: ["400", "500","700"],
    variable: "--font-roboto",
    display: "swap"
  });

  const kumbh_sans = Kumbh_Sans({ 
    subsets: ["latin"],
    weight: ["400", "600", "800"],
    variable: "--kumbh_sans",
    display: "swap"
  });


//gobalo metaData
export const metadata: Metadata = {
  title:{
    default: "Home | Fetal",
    template: "%s | Fetal"
  },
  description: "This is Official Application for Fetal Med&C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${kumbh_sans.variable}`}>
        <AntdRegistry>
        <ConfigProvider theme={antTheme}>
        {children}
        </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

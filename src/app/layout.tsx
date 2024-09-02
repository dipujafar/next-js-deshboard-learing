import type { Metadata } from "next";
import { Roboto, Kumbh_Sans, Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider} from "antd"
import antTheme from "../theme/antTheme";
import { Toaster } from "sonner";

// custom fonts
const roboto = Roboto({ 
    subsets: ["latin"],
    weight: ["400", "500","700"],
    variable: "--font-roboto",
    display: "swap"
  });

  const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400","500","700"],
    variable: "--font-poppins",
    display: "swap"
  });

  const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400","500","600", "700"],
    variable: "--font-urbanist",
    display: "swap"
  })

  const kumbh_sans = Kumbh_Sans({ 
    subsets: ["latin"],
    weight: ["400","500","600", "700"],
    variable: "--font-kumbh-sans",
    display: "swap"
  });


//gobalo metaData
export const metadata: Metadata = {
  title:{
    default: "Home | Fetal",
    template: "%s | Fetal Mad&C"
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
      <body className={`${roboto.className} ${kumbh_sans.variable} ${poppins.variable} ${urbanist.variable  }`}>
        <AntdRegistry>
        <ConfigProvider theme={antTheme}>
        {children}
        <Toaster></Toaster>
        </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

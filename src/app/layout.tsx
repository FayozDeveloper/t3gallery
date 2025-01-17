import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {ClerkProvider} from "@clerk/nextjs";
import {Navbar} from "~/app/_components/navbar";
import {NextSSRPlugin} from "@uploadthing/react/next-ssr-plugin";
import {extractRouterConfig} from "uploadthing/server";
import {ourFileRouter} from "~/app/api/uploadthing/core";
import {Toaster} from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "Next Gallery",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
  modal
}: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
}>) {
  return (
      <ClerkProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}/>
              <body>
                <div className='flex flex-col h-screen'>
                    <Navbar/>
                    <main className='flex flex-1 justify-center overflow-y-scroll'>
                        {children}
                    </main>
                </div>
                {modal}
                <div id='modal-root'/>
                <Toaster/>
              </body>
        </html>
      </ClerkProvider>
  );
}

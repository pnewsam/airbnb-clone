import { AppLayout } from "@/components/AppLayout";
import "./globals.css";
import type { Metadata } from "next";
import { inter, prompt } from "./fonts";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Clone of Airbnb UI",
};

/**
 * Adding force-dynamic was necessitated by the use of cookies for Supabase,
 * which are themselves required for Supabase Auth. If the following issue:
 * https://github.com/vercel/next.js/issues/49373 is resolved, this line
 * may be removable.
 */
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}, ${prompt.variable}`}>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

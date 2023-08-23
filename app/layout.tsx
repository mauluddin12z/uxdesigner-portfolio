/* eslint-disable @next/next/no-page-custom-font */
import FooterSection from "./components/footerSection";
import HeaderSection from "./components/headerSection";
import "./globals.css";

export const metadata = {
  title: "UX Designer - Portfolio",
  description: "UX Designer - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <section>
          <HeaderSection />
        </section>
        {children}
        <section className="mt-10">
          <FooterSection />
        </section>
      </body>
    </html>
  );
}

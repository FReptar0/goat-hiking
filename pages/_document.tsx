import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Metadatos básicos */}
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Goat Hiking - Explora rutas de senderismo únicas y conecta con la naturaleza."
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />

        {/* Metadatos para redes sociales */}
        <meta
          content="Goat Hiking - Aventuras únicas en la naturaleza"
          property="og:title"
        />
        <meta
          content="Explora rutas de senderismo únicas y conecta con la naturaleza como nunca antes."
          property="og:description"
        />
        <meta content="/social-card.png" property="og:image" />
        <meta content="https://goathiking.com" property="og:url" />
        <meta content="website" property="og:type" />

        {/* Metadatos para Twitter */}
        <meta content="/social-card.png" name="twitter:card" />
        <meta
          content="Goat Hiking - Aventuras únicas en la naturaleza"
          name="twitter:title"
        />
        <meta
          content="Explora rutas de senderismo únicas y conecta con la naturaleza como nunca antes."
          name="twitter:description"
        />
        <meta content="/social-card.png" name="twitter:image" />
        <meta content="https://goathiking.com" name="twitter:url" />
      </Head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Head from "next/head";

import { title, subtitle } from "@/components/primitives";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Inicio - Goat Hiking</title>
        <meta
          content="Explora rutas de senderismo únicas y conecta con la naturaleza como nunca antes."
          name="description"
        />
      </Head>
      <section className="flex flex-col items-center justify-center h-screen">
        <div className="inline-block max-w-xl text-center">
          <span className={title()}>¡Bienvenido a&nbsp;</span>
          <span className={title({ color: "green" })}>Goat Hiking!&nbsp;</span>
          <br />
          <span className={title()}>Estamos construyendo algo increíble.</span>
          <div className={subtitle({ class: "mt-4" })}>
            Pronto podrás explorar aventuras únicas y conectar con la naturaleza
            como nunca antes.
          </div>
        </div>
      </section>
    </>
  );
}

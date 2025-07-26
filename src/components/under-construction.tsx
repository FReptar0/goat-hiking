import { title, subtitle } from "@/components/primitives";

export const UnderConstruction = () => {
  return (
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
  );
};

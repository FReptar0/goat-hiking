import Head from "next/head";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import DefaultLayout from "@/pages/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { MountainIcon, CompassIcon } from "@/components/icons";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página No Encontrada - 404 | Goat Hiking</title>
        <meta
          name="description"
          content="Lo sentimos, la página que buscas no existe. Explora nuestras aventuras de montañismo, hiking y trekking en México."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center min-h-screen py-8 md:py-10 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="inline-block max-w-lg text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center">
                <CompassIcon className="text-red-600" size={48} />
              </div>
            </div>
            
            <h1 className={`${title({ size: "lg" })} text-gray-800 mb-6`}>
              Oops!{" "}
              <span className={title({ color: "pink", size: "lg" })}>
                Ruta no encontrada
              </span>
            </h1>
            
            <div className={`${subtitle()} text-gray-600 mb-8`}>
              Parece que te has desviado del sendero. La página que buscas no existe 
              o ha sido movida a otra ubicación.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                as={NextLink}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 shadow-lg"
                href="/"
                size="lg"
              >
                <MountainIcon size={20} />
                Volver al Inicio
              </Button>
              <Button
                as={NextLink}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 shadow-lg"
                href="/adventures"
                size="lg"
                variant="flat"
              >
                Ver Aventuras
              </Button>
            </div>

            <div className="text-sm text-gray-500">
              <p className="mb-2">¿Buscabas algo específico?</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  as={NextLink}
                  className="text-green-600 hover:text-green-700"
                  href="/adventures"
                >
                  Aventuras
                </Link>
                <span>•</span>
                <Link
                  as={NextLink}
                  className="text-green-600 hover:text-green-700"
                  href="/destinations"
                >
                  Destinos
                </Link>
                <span>•</span>
                <Link
                  as={NextLink}
                  className="text-green-600 hover:text-green-700"
                  href="/about"
                >
                  Nosotros
                </Link>
                <span>•</span>
                <Link
                  as={NextLink}
                  className="text-green-600 hover:text-green-700"
                  href="/faq"
                >
                  FAQ
                </Link>
                <span>•</span>
                <Link
                  as={NextLink}
                  className="text-green-600 hover:text-green-700"
                  href="/contact"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}
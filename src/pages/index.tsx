import Head from "next/head";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  MountainIcon,
  TrekkingIcon,
  CompassIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  StarIcon,
  CheckIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Goat Hiking - Aventuras únicas en la naturaleza</title>
        <meta
          content="Explora rutas de senderismo únicas y conecta con la naturaleza. Hiking, trekking y montañismo en destinos únicos con Goat Hiking."
          name="description"
        />
        <meta
          content="hiking, trekking, montañismo, aventura, naturaleza, argentina"
          name="keywords"
        />
        <meta content="Goat Hiking" property="og:site_name" />
        <meta
          content="Goat Hiking - Aventuras únicas en la naturaleza"
          property="og:title"
        />
        <meta
          content="Explora rutas de senderismo únicas y conecta con la naturaleza como nunca antes."
          property="og:description"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 w-full text-center px-6">
          {/* Contenido principal del hero */}
          <div className="mb-8 max-w-4xl mx-auto">
            <h1 className={`${title({ size: "lg" })} text-gray-800 mb-6`}>
              Descubre la{" "}
              <span className={title({ color: "green", size: "lg" })}>
                naturaleza
              </span>{" "}
              como nunca antes
            </h1>
            <p
              className={`${subtitle()} text-gray-700 max-w-3xl mx-auto text-xl mb-8`}
            >
              Únete a nosotros en experiencias únicas de{" "}
              <strong className="text-green-700">
                hiking, trekking y montañismo
              </strong>{" "}
              en los destinos más espectaculares. Conecta con la naturaleza y
              supera tus límites.
            </p>

            {/* Chip como elemento de refuerzo después del contenido principal */}
            <Chip
              className="bg-green-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-green-500/30"
              color="success"
              size="lg"
              variant="solid"
            >
              🏔️ Go Hiking With Goat Hiking
            </Chip>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              isExternal
              as={Link}
              className="bg-green-600/90 backdrop-blur-md hover:bg-green-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-green-500/30 transition-all duration-300"
              href={siteConfig.links.whatsapp}
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon size={20} />
              Consultar fechas disponibles
            </Button>
            <Button
              as={NextLink}
              className="bg-white/80 backdrop-blur-md border-2 border-green-600/50 text-green-700 hover:bg-green-50/80 shadow-lg transition-all duration-300"
              href="/adventures"
              size="lg"
              variant="bordered"
            >
              Ver aventuras
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-green-100/80 backdrop-blur-md hover:bg-green-200/80 text-green-700 shadow-md border border-green-200/50 transition-all duration-300"
              href={siteConfig.links.instagram}
              rel="noopener noreferrer"
              variant="flat"
            >
              <InstagramIcon className="text-green-700" size={24} />
            </Button>
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-blue-100/80 backdrop-blur-md hover:bg-blue-200/80 text-blue-700 shadow-md border border-blue-200/50 transition-all duration-300"
              href={siteConfig.links.facebook}
              rel="noopener noreferrer"
              variant="flat"
            >
              <FacebookIcon className="text-blue-700" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Actividades Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`${title({ size: "md" })} mb-4 text-gray-800`}>
              Nuestras{" "}
              <span className={title({ color: "green", size: "md" })}>
                actividades
              </span>
            </h2>
            <p className={`${subtitle()} text-gray-600`}>
              Experiencias diseñadas para todos los niveles de aventureros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-200">
              <CardBody className="text-center p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrekkingIcon className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Hiking & Trekking</h3>
                <p className="text-gray-600 mb-6">
                  Recorre senderos únicos y descubre paisajes increíbles en
                  caminatas de medio día hasta expediciones de varios días.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-green-600" size={16} />
                    <span className="text-sm text-gray-700">Guías certificados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-green-600" size={16} />
                    <span className="text-sm text-gray-700">Equipamiento incluido</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-green-600" size={16} />
                    <span className="text-sm text-gray-700">Grupos reducidos</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-200">
              <CardBody className="text-center p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MountainIcon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Montañismo</h3>
                <p className="text-gray-600 mb-6">
                  Desafía las cumbres más altas y vive la experiencia única de
                  conquistar montañas emblemáticas.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-blue-600" size={16} />
                    <span className="text-sm text-gray-700">Técnicas de escalada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-blue-600" size={16} />
                    <span className="text-sm text-gray-700">Equipo especializado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-blue-600" size={16} />
                    <span className="text-sm text-gray-700">Preparación física</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-200">
              <CardBody className="text-center p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CompassIcon className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Expediciones</h3>
                <p className="text-gray-600 mb-6">
                  Aventuras de múltiples días en destinos remotos y
                  espectaculares para los más aventureros.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-orange-600" size={16} />
                    <span className="text-sm text-gray-700">Campamentos base</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-orange-600" size={16} />
                    <span className="text-sm text-gray-700">Logística completa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-orange-600" size={16} />
                    <span className="text-sm text-gray-700">Experiencia inmersiva</span>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${title({ size: "md" })} mb-6`}>
                ¿Quiénes somos en{" "}
                <span className={title({ color: "green", size: "md" })}>
                  Goat Hiking?
                </span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Somos una empresa especializada en turismo de aventura con más
                de 10 años de experiencia guiando exploradores hacia los lugares
                más increíbles de la naturaleza.
              </p>
              <p className="text-gray-600 mb-8">
                Nuestro equipo está formado por guías certificados, montañistas
                experimentados y apasionados por la naturaleza que se dedican a
                crear experiencias únicas e inolvidables.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <StarIcon className="text-yellow-500" size={20} />
                  <span className="font-medium">
                    +500 aventureros satisfechos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <StarIcon className="text-yellow-500" size={20} />
                  <span className="font-medium">10+ años de experiencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <StarIcon className="text-yellow-500" size={20} />
                  <span className="font-medium">Guías certificados</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
              <MountainIcon className="text-green-600 mx-auto mb-4" size={80} />
              <h3 className="text-2xl font-bold mb-4">Nuestra misión</h3>
              <p className="text-gray-700">
                Conectar a las personas con la naturaleza a través de
                experiencias auténticas y seguras, promoviendo el respeto por el
                medio ambiente y el crecimiento personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-emerald-700 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="cta" />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-emerald-800/30 backdrop-blur-sm z-15" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "md" })} text-white mb-6`}>
              ¿Listo para tu próxima{" "}
              <span className="text-emerald-100">aventura?</span>
            </h2>
            <p className="text-emerald-50 text-xl mb-8">
              Contáctanos por WhatsApp para conocer nuestras próximas fechas
              disponibles y comenzar a planificar tu experiencia única en la
              naturaleza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              isExternal
              as={Link}
              className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg"
              href={siteConfig.links.whatsapp}
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon size={20} />
              Consultar por WhatsApp
            </Button>
            <Button
              isExternal
              as={Link}
              className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-emerald-700 shadow-lg transition-all duration-300"
              href={siteConfig.links.instagram}
              rel="noopener noreferrer"
              size="lg"
              variant="bordered"
            >
              <InstagramIcon size={20} />
              Síguenos en Instagram
            </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

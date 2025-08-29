import { NextPage } from "next";
import Head from "next/head";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import {
  MountainIcon,
  WhatsAppIcon,
  StarIcon,
  ClockIcon,
  WarningIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import destinationsData from "@/data/destinations.json";

const DestinationsPage: NextPage = () => {
  const destinations = destinationsData.destinations;

  return (
    <>
      <Head>
        <title>Destinos de Montaña y Aventura en México | Goat Hiking</title>
        <meta
          name="description"
          content="Descubre los mejores destinos para hiking, trekking y montañismo en México: Nevado de Toluca, Pico de Orizaba, La Malinche, Iztaccíhuatl y más. Tours guiados con expertos."
        />
        <meta
          name="keywords"
          content="destinos montañismo méxico, nevado toluca, pico orizaba, la malinche, iztaccihuatl, sierra norte puebla, real catorce, hiking méxico"
        />
        <meta property="og:title" content="Destinos de Montaña y Aventura en México | Goat Hiking" />
        <meta
          property="og:description"
          content="Explora las montañas más espectaculares de México con nuestros tours guiados. Desde volcanes nevados hasta desiertos únicos."
        />
      </Head>
      
      <Navbar />

      {/* Hero Section - Full Screen como el Index */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className={`${title({ size: "lg" })} text-gray-800 mb-6`}>
              Destinos{" "}
              <span className={title({ color: "blue", size: "lg" })}>
                Únicos
              </span>{" "}
              para tu Aventura
            </h1>
            
            <p className={`${subtitle()} text-gray-700 max-w-4xl mx-auto mb-8 text-xl`}>
              Desde los volcanes más altos de México hasta bosques de niebla y desiertos espectaculares. 
              Cada destino ofrece una experiencia única con la seguridad y profesionalismo que nos caracteriza.
            </p>

            <div className="mb-12">
              <Chip
                className="bg-blue-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-blue-500/30"
                color="primary"
                size="lg"
                variant="solid"
              >
                🏔️ Los mejores destinos de México
              </Chip>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-12 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-700 font-medium">Destinos Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5,636m</div>
                <div className="text-gray-700 font-medium">Altura Máxima</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">365</div>
                <div className="text-gray-700 font-medium">Días al Año</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                isExternal
                as={Link}
                className="bg-blue-600/90 backdrop-blur-md hover:bg-blue-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-blue-500/30 transition-all duration-300"
                href={`https://wa.me/525572097559?text=${encodeURIComponent("Hola, me interesan los tours a diferentes destinos de montaña. ¿Podrían darme información sobre las opciones disponibles?")}`}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                Consultar Destinos
              </Button>
              <Button
                as={NextLink}
                className="bg-white/80 backdrop-blur-md border-2 border-blue-600/50 text-blue-700 hover:bg-blue-50/80 shadow-lg transition-all duration-300"
                href="#destinations"
                size="lg"
                variant="bordered"
              >
                Explorar todos los destinos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`${title({ size: "md" })} mb-4 text-gray-800`}>
              Explora nuestros{" "}
              <span className={title({ color: "blue", size: "md" })}>
                destinos favoritos
              </span>
            </h2>
            <p className={`${subtitle()} text-gray-600`}>
              Cada destino ha sido cuidadosamente seleccionado por nuestro equipo de expertos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200">
                <CardBody className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                      <MountainIcon className="text-blue-600" size={24} />
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{destination.location}</p>
                    <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="flex items-center gap-1">
                      <MountainIcon className="text-gray-500" size={12} />
                      <span>{destination.elevation}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <WarningIcon className="text-gray-500" size={12} />
                      <span>{destination.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="text-gray-500" size={12} />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="text-gray-500" size={12} />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {destination.activities.map((activity, index) => (
                        <Chip
                          key={index}
                          className="text-xs"
                          color="primary"
                          size="sm"
                          variant="flat"
                        >
                          {activity}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-800 text-sm">Destacados:</h4>
                    <ul className="space-y-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <StarIcon className="text-yellow-500 mt-0.5" size={10} />
                          <span className="text-xs text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    isExternal
                    as={Link}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full"
                    href={`https://wa.me/525572097559?text=${encodeURIComponent(destination.whatsappMessage)}`}
                    rel="noopener noreferrer"
                    size="sm"
                  >
                    <WhatsAppIcon size={16} />
                    Consultar {destination.name}
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-4 text-gray-800`}>
              ¿Por qué elegir nuestros{" "}
              <span className={title({ color: "blue", size: "md" })}>destinos?</span>
            </h2>
            <p className={`${subtitle()} text-gray-600`}>
              Cada destino ha sido cuidadosamente seleccionado y explorado por nuestro equipo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MountainIcon className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold mb-2 text-gray-800">Rutas Probadas</h3>
              <p className="text-sm text-gray-600">Cada ruta ha sido explorada y documentada por nuestros guías expertos</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold mb-2 text-gray-800">Experiencia Única</h3>
              <p className="text-sm text-gray-600">Combinamos aventura, cultura local y respeto por el medio ambiente</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <WarningIcon className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold mb-2 text-gray-800">Seguridad Garantizada</h3>
              <p className="text-sm text-gray-600">Protocolos de seguridad estrictos y guías certificados en montañismo</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold mb-2 text-gray-800">Flexibilidad</h3>
              <p className="text-sm text-gray-600">Tours adaptados a tu nivel de experiencia y fechas disponibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width con Wave Background como el Index */}
      <section className="relative py-20 bg-blue-700 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="cta" />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-blue-800/30 backdrop-blur-sm z-15" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "md" })} text-white mb-6`}>
              ¿Listo para explorar{" "}
              <span className="text-blue-100">México?</span>
            </h2>
            <p className="text-blue-50 text-xl mb-8">
              Cada destino ofrece una experiencia única. Contáctanos para recibir recomendaciones 
              personalizadas según tu nivel de experiencia y intereses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                isExternal
                as={Link}
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg"
                href={siteConfig.links.whatsappPrivateTour}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                Consulta Personalizada
              </Button>
              <Button
                isExternal
                as={Link}
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-blue-700 shadow-lg transition-all duration-300"
                href="/adventures"
                rel="noopener noreferrer"
                size="lg"
                variant="bordered"
              >
                Ver Todas las Aventuras
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DestinationsPage;
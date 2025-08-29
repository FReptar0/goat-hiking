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
  TrekkingIcon,
  CompassIcon,
  WhatsAppIcon,
  CheckIcon,
  StarIcon,
  ClockIcon,
  UsersIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import adventuresData from "@/data/adventures.json";

const AdventuresPage: NextPage = () => {
  // Map icons from strings to components
  const iconMap = {
    TrekkingIcon,
    MountainIcon,
    CompassIcon,
  };

  // Process adventures data and add icons
  const adventures = adventuresData.adventures.map(adventure => ({
    ...adventure,
    icon: iconMap[adventure.icon as keyof typeof iconMap] || TrekkingIcon,
    whatsappLink: siteConfig.links[adventure.whatsappLink as keyof typeof siteConfig.links] || siteConfig.links.whatsapp
  }));

  return (
    <>
      <Head>
        <title>Aventuras de Montaña - Hiking, Trekking y Montañismo | Goat Hiking</title>
        <meta
          name="description"
          content="Descubre nuestras aventuras de montaña: hiking de un día, trekking multi-día, montañismo técnico y expediciones remotas. Guías certificados, equipo incluido, grupos pequeños."
        />
        <meta
          name="keywords"
          content="hiking méxico, trekking aventura, montañismo, escalada montaña, expediciones remotas, guías certificados, turismo aventura"
        />
        <meta property="og:title" content="Aventuras de Montaña - Hiking, Trekking y Montañismo | Goat Hiking" />
        <meta
          property="og:description"
          content="Explora la naturaleza con nuestras aventuras diseñadas para todos los niveles. Desde hiking de un día hasta expediciones de múltiples días."
        />
      </Head>
      
      <Navbar />

      {/* Hero Section - Full Screen como el Index */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className={`${title({ size: "lg" })} text-gray-800 mb-6`}>
              Nuestras{" "}
              <span className={title({ color: "green", size: "lg" })}>
                Aventuras
              </span>{" "}
              de Montaña
            </h1>
            
            <p className={`${subtitle()} text-gray-700 max-w-4xl mx-auto mb-8 text-xl`}>
              Desde caminatas de un día hasta expediciones de múltiples días, 
              cada aventura está diseñada para conectarte con la naturaleza 
              y superar tus límites de forma segura y memorable.
            </p>

            <div className="mb-12">
              <Chip
                className="bg-green-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-green-500/30"
                color="success"
                size="lg"
                variant="solid"
              >
                🏔️ Aventuras para todos los niveles
              </Chip>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-12 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                <div className="text-gray-700 font-medium">Tipos de Aventura</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Rutas Disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Seguridad</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                isExternal
                as={Link}
                className="bg-green-600/90 backdrop-blur-md hover:bg-green-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-green-500/30 transition-all duration-300"
                href={siteConfig.links.whatsappPrivateTour}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                Consultar Tour Privado
              </Button>
              <Button
                as={NextLink}
                className="bg-white/80 backdrop-blur-md border-2 border-green-600/50 text-green-700 hover:bg-green-50/80 shadow-lg transition-all duration-300"
                href="#adventures"
                size="lg"
                variant="bordered"
              >
                Ver todas las aventuras
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section id="adventures" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`${title({ size: "md" })} mb-4 text-gray-800`}>
              Explora nuestras{" "}
              <span className={title({ color: "green", size: "md" })}>
                experiencias
              </span>
            </h2>
            <p className={`${subtitle()} text-gray-600`}>
              Cada aventura está diseñada con el más alto estándar de seguridad y calidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {adventures.map((adventure) => (
              <Card key={adventure.id} className="hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200">
                <CardBody className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon and Title */}
                    <div className={
                      adventure.color === 'green' ? 'bg-green-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0' :
                      adventure.color === 'blue' ? 'bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0' :
                      adventure.color === 'orange' ? 'bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0' :
                      adventure.color === 'purple' ? 'bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0' :
                      'bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0'
                    }>
                      <adventure.icon className={
                        adventure.color === 'green' ? 'text-green-600' :
                        adventure.color === 'blue' ? 'text-blue-600' :
                        adventure.color === 'orange' ? 'text-orange-600' :
                        adventure.color === 'purple' ? 'text-purple-600' :
                        'text-gray-600'
                      } size={32} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{adventure.title}</h3>
                      <p className="text-gray-600 mb-6">{adventure.description}</p>
                      
                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <ClockIcon className="text-gray-500" size={16} />
                          <span className="text-sm font-medium">{adventure.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <StarIcon className="text-gray-500" size={16} />
                          <span className="text-sm font-medium">{adventure.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="text-gray-500" size={16} />
                          <span className="text-sm font-medium">{adventure.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-600">{adventure.price}</span>
                        </div>
                      </div>

                      {/* Includes */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Incluye:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {adventure.includes.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckIcon className={
                                adventure.color === 'green' ? 'text-green-600' :
                                adventure.color === 'blue' ? 'text-blue-600' :
                                adventure.color === 'orange' ? 'text-orange-600' :
                                adventure.color === 'purple' ? 'text-purple-600' :
                                'text-gray-600'
                              } size={14} />
                              <span className="text-xs text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Destacados:</h4>
                        <div className="space-y-1">
                          {adventure.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <StarIcon className="text-yellow-500" size={14} />
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        isExternal
                        as={Link}
                        className={
                          adventure.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white font-semibold w-full' :
                          adventure.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full' :
                          adventure.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700 text-white font-semibold w-full' :
                          adventure.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white font-semibold w-full' :
                          'bg-gray-600 hover:bg-gray-700 text-white font-semibold w-full'
                        }
                        href={adventure.whatsappLink}
                        rel="noopener noreferrer"
                        size="md"
                      >
                        <WhatsAppIcon size={18} />
                        Reservar {adventure.title}
                      </Button>
                    </div>
                  </div>
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
              ¿Por qué elegir{" "}
              <span className={title({ color: "green", size: "md" })}>
                Goat Hiking?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold mb-3 text-gray-800">Seguridad Garantizada</h3>
              <p className="text-gray-600">
                Guías certificados, equipo de primera calidad y protocolos de seguridad estrictos 
                en cada aventura.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold mb-3 text-gray-800">Grupos Pequeños</h3>
              <p className="text-gray-600">
                Experiencias personalizadas con grupos reducidos para una mejor atención 
                y conexión con la naturaleza.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold mb-3 text-gray-800">Experiencia Única</h3>
              <p className="text-gray-600">
                Más de 10 años creando aventuras memorables y transformadoras en los 
                destinos más espectaculares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width con Wave Background como el Index */}
      <section className="relative py-20 bg-emerald-700 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="cta" />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-emerald-800/30 backdrop-blur-sm z-15" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "md" })} text-white mb-6`}>
              ¿No encuentras la aventura{" "}
              <span className="text-emerald-100">perfecta?</span>
            </h2>
            <p className="text-emerald-50 text-xl mb-8">
              Creamos tours personalizados según tus intereses, nivel de experiencia 
              y fechas disponibles. Contáctanos para diseñar tu aventura ideal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                isExternal
                as={Link}
                className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg"
                href={siteConfig.links.whatsappPrivateTour}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                Tour Personalizado
              </Button>
              <Button
                isExternal
                as={Link}
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-emerald-700 shadow-lg transition-all duration-300"
                href="/contact"
                rel="noopener noreferrer"
                size="lg"
                variant="bordered"
              >
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdventuresPage;
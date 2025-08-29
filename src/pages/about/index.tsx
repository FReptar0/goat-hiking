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
  StarIcon,
  CheckIcon,
  WhatsAppIcon,
  UsersIcon,
  WarningIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import teamData from "@/data/team.json";
import valuesData from "@/data/values.json";

export default function AboutPage() {
  // Map icons from strings to components
  const iconMap = {
    WarningIcon,
    StarIcon,
    MountainIcon,
    UsersIcon,
  };

  const teamMembers = teamData.teamMembers;

  // Process values data and add icons
  const values = valuesData.values.map(value => ({
    ...value,
    icon: iconMap[value.icon as keyof typeof iconMap] || MountainIcon
  }));

  return (
    <>
      <Head>
        <title>Sobre Nosotros - Guías Certificados de Montañismo | Goat Hiking</title>
        <meta
          name="description"
          content="Conoce a Goat Hiking: 10+ años de experiencia en turismo de aventura, guías certificados, más de 500 aventureros satisfechos. Seguridad, profesionalismo y pasión por la naturaleza."
        />
        <meta
          name="keywords"
          content="goat hiking equipo, guías montañismo méxico, turismo aventura profesional, guías certificados hiking, empresa trekking méxico"
        />
        <meta property="og:title" content="Sobre Nosotros - Guías Certificados de Montañismo | Goat Hiking" />
        <meta
          property="og:description"
          content="Conoce nuestro equipo de guías certificados y nuestra pasión por compartir las montañas más espectaculares de México de forma segura."
        />
      </Head>
      
      <Navbar />

      {/* Hero Section - Full Screen como el Index */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-100 to-teal-200 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className={`${title({ size: "lg" })} text-gray-800 mb-6`}>
              Conoce a{" "}
              <span className={title({ color: "green", size: "lg" })}>
                Goat Hiking
              </span>
            </h1>
            
            <p className={`${subtitle()} text-gray-700 max-w-4xl mx-auto mb-8 text-xl`}>
              Somos una empresa especializada en turismo de aventura con más de 10 años de experiencia 
              guiando exploradores hacia los lugares más increíbles de la naturaleza mexicana.
            </p>

            <div className="mb-12">
              <Chip
                className="bg-green-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-green-500/30"
                color="success"
                size="lg"
                variant="solid"
              >
                🏔️ 10+ años de experiencia
              </Chip>
            </div>

            <div className="flex justify-center gap-12 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Aventureros</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-700 font-medium">Años</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Destinos</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                isExternal
                as={Link}
                className="bg-green-600/90 backdrop-blur-md hover:bg-green-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-green-500/30 transition-all duration-300"
                href={siteConfig.links.whatsapp}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                Contáctanos
              </Button>
              <Button
                as={NextLink}
                className="bg-white/80 backdrop-blur-md border-2 border-green-600/50 text-green-700 hover:bg-green-50/80 shadow-lg transition-all duration-300"
                href="/adventures"
                size="lg"
                variant="bordered"
              >
                Ver nuestras aventuras
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className={`${title({ size: "md" })} mb-6 text-gray-800`}>
                Nuestra{" "}
                <span className={title({ color: "green", size: "md" })}>Misión</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Conectar a las personas con la naturaleza a través de experiencias auténticas y seguras, 
                promoviendo el respeto por el medio ambiente y el crecimiento personal.
              </p>
              <p className="text-gray-600">
                Creemos que las montañas tienen el poder de transformar vidas, enseñar humildad y 
                crear conexiones profundas tanto con la naturaleza como con uno mismo.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 text-center">
              <MountainIcon className="text-green-600 mx-auto mb-4" size={80} />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser la empresa líder en turismo de aventura sustentable en México, 
                reconocida por nuestros estándares de seguridad, profesionalismo y 
                compromiso con la conservación.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-4 text-gray-800`}>
              Nuestros{" "}
              <span className={title({ color: "green", size: "md" })}>Valores</span>
            </h2>
            <p className={`${subtitle()} text-gray-600`}>
              Los principios que guían cada una de nuestras aventuras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${value.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`text-${value.color}-600`} size={32} />
                </div>
                <h3 className="font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-4 text-gray-800`}>
              Nuestro{" "}
              <span className={title({ color: "green", size: "md" })}>Equipo</span>
            </h2>
            <p className={`${subtitle()} text-gray-600`}>
              Guías certificados y apasionados por compartir la aventura
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200">
                <CardBody className="p-6 text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience} de experiencia</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-gray-700">Certificaciones:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <li key={certIndex} className="flex items-center justify-center gap-1">
                          <CheckIcon className="text-green-600" size={12} />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Especialidades:</h4>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.specialties.map((specialty, specIndex) => (
                        <Chip
                          key={specIndex}
                          className="text-xs"
                          color="success"
                          size="sm"
                          variant="flat"
                        >
                          {specialty}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`${title({ size: "md" })} mb-8 text-gray-800`}>
            Nuestra{" "}
            <span className={title({ color: "green", size: "md" })}>Historia</span>
          </h2>
          
          <div className="text-left space-y-6 text-gray-600">
            <p className="text-lg">
              <strong className="text-gray-800">Goat Hiking nació de una pasión compartida:</strong> mostrar 
              la belleza de las montañas mexicanas de manera segura y responsable. Comenzamos como un grupo 
              de amigos montañistas que compartían sus conocimientos con otros aventureros.
            </p>
            
            <p>
              Con el tiempo, nos dimos cuenta de que podíamos hacer más que solo guiar: podíamos educar, 
              inspirar y crear una comunidad de personas que aman y respetan la naturaleza. Así nació 
              nuestra empresa, con el compromiso de ofrecer experiencias transformadoras.
            </p>
            
            <p>
              Hoy, después de más de <strong className="text-green-600">500 aventureros satisfechos</strong> y 
              <strong className="text-green-600"> 10 años de experiencia</strong>, seguimos con la misma pasión 
              del primer día: compartir la magia de las montañas mexicanas con cada persona que se une a nosotros.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">¿Por qué &ldquo;Goat Hiking&rdquo;?</h3>
            <p className="text-gray-600 mb-6">
              Las cabras monteses son animales que conocen cada sendero de la montaña, se adaptan a cualquier 
              terreno y siempre encuentran el camino seguro hacia la cumbre. Al igual que ellas, nosotros 
              conocemos cada ruta, nos adaptamos a las necesidades de nuestros aventureros y siempre 
              los guiamos de forma segura hacia sus objetivos.
            </p>
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
              ¿Listo para conocernos en{" "}
              <span className="text-emerald-100">persona?</span>
            </h2>
            <p className="text-emerald-50 text-xl mb-8">
              Únete a nuestra comunidad de aventureros y descubre por qué más de 500 personas 
              han confiado en nosotros para vivir experiencias únicas en la naturaleza.
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
                Contáctanos por WhatsApp
              </Button>
              <Button
                isExternal
                as={Link}
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-emerald-700 shadow-lg transition-all duration-300"
                href="/adventures"
                rel="noopener noreferrer"
                size="lg"
                variant="bordered"
              >
                Ver Nuestras Aventuras
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
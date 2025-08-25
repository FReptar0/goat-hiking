import { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import faqData from "@/data/faq.json";

const FAQPage: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  // Enhanced FAQ data with complete answers
  const enhancedFaqData = {
    ...faqData.faq,
    categories: faqData.faq.categories.map(category => {
      if (category.id === "general") {
        return {
          ...category,
          questions: [
            {
              ...category.questions[0],
              answer: "Ofrecemos aventuras para todos los niveles, desde principiantes hasta expertos. Cada actividad está claramente categorizada por nivel de dificultad: Principiante (sin experiencia previa), Intermedio (algo de experiencia en senderismo), y Avanzado (experiencia en montañismo). Nuestros guías adaptan la experiencia según el grupo y siempre priorizamos la seguridad."
            },
            {
              id: "q2",
              question: "¿Qué incluyen los paquetes de aventura?",
              answer: "Nuestros paquetes incluyen: guías certificados con amplia experiencia, transporte desde/hacia el punto de encuentro, equipo de seguridad (cascos, arneses cuando sea necesario), primeros auxilios, seguro de actividad, snacks energéticos y agua durante la actividad, y fotos digitales del recorrido. Para expediciones de múltiples días también incluimos: equipo de campamento completo, alimentación, y alojamiento en refugios o campamentos.",
              tags: ["paquetes", "incluido", "servicios"]
            },
            {
              id: "q2b",
              question: "¿Cuánto cuestan las aventuras?",
              answer: "Los precios varían según el tipo de aventura: Hiking de día completo desde $80 USD, Trekking multi-día desde $250 USD, Montañismo técnico desde $400 USD, y Expediciones remotas desde $800 USD. Ofrecemos descuentos para grupos de más de 6 personas y paquetes especiales para familias. Los precios incluyen todo lo mencionado en nuestros paquetes.",
              tags: ["precios", "costos", "tarifas"]
            }
          ]
        };
      }
      
      if (category.id === "reservas") {
        return {
          ...category,
          questions: [
            {
              id: "q3",
              question: "¿Cómo puedo hacer una reserva?",
              answer: "El proceso es muy sencillo: 1) Contáctanos por WhatsApp indicando la aventura que te interesa y tus fechas preferidas. 2) Te enviaremos disponibilidad y detalles del itinerario. 3) Para confirmar, requiere un anticipo del 50% vía transferencia bancaria o depósito. 4) El resto se paga el día de la actividad. Te enviaremos toda la información necesaria incluyendo punto de encuentro, qué llevar, y contactos de emergencia.",
              tags: ["reservas", "proceso", "booking"]
            },
            {
              id: "q4",
              question: "¿Qué métodos de pago aceptan?",
              answer: "Aceptamos: transferencias bancarias (BBVA, Santander, HSBC), depósitos en efectivo en sucursales bancarias, y pago en efectivo el día de la actividad (solo para el saldo restante). Para expediciones internacionales también aceptamos PayPal. Todos los pagos se confirman con comprobante y factura cuando sea requerida.",
              tags: ["pago", "métodos", "transferencia"]
            },
            {
              id: "q4b",
              question: "¿Cuál es la política de cancelación?",
              answer: "Cancelación con más de 7 días: reembolso del 90% del anticipo. Cancelación entre 3-7 días: reembolso del 50%. Cancelación con menos de 3 días: no hay reembolso (excepto por condiciones climáticas adversas). Si nosotros cancelamos por clima o seguridad, hay reembolso completo o reprogramación sin costo adicional.",
              tags: ["cancelación", "reembolso", "políticas"]
            }
          ]
        };
      }

      if (category.id === "equipamiento") {
        return {
          ...category,
          questions: [
            {
              id: "q5",
              question: "¿Necesito traer mi propio equipamiento?",
              answer: "Proporcionamos todo el equipo técnico de seguridad (cascos, arneses, cuerdas, crampones según la actividad). TÚ DEBES TRAER: ropa adecuada (capas), botas de montaña, mochila personal, cantimplora, lentes de sol, protector solar, gorra, y comida personal extra. Para expediciones de varios días incluimos tiendas y equipo de campamento. Te enviamos una lista detallada al confirmar tu reserva.",
              tags: ["equipamiento", "incluido", "personal"]
            },
            {
              id: "q5b", 
              question: "¿Qué tipo de ropa debo usar?",
              answer: "Sistema de capas: primera capa térmica (evita algodón), segunda capa aislante (fleece o plumón), tercera capa impermeable. Pantalón resistente, botas de montaña con buen agarre, gorra, guantes, lentes de sol obligatorios. Para alta montaña: ropa técnica especializada. Evita jeans y ropa de algodón. El clima en montaña cambia rápidamente, ¡prepárate para todo!",
              tags: ["ropa", "vestimenta", "capas"]
            }
          ]
        };
      }

      if (category.id === "seguridad") {
        return {
          ...category,
          questions: [
            {
              id: "q6",
              question: "¿Qué medidas de seguridad implementan?",
              answer: "SEGURIDAD ES NUESTRA PRIORIDAD: Guías certificados por FMTM/CONAMM, ratio máximo 1 guía por 8 participantes, comunicación satelital en expediciones, botiquín de primeros auxilios wilderness, protocolos de evacuación establecidos, seguimiento meteorológico constante, equipo de seguridad certificado y verificado. Todos nuestros guías tienen entrenamiento en rescate y primeros auxilios.",
              tags: ["seguridad", "protocolos", "seguros"]
            },
            {
              id: "q6b",
              question: "¿Qué pasa en caso de mal tiempo?",
              answer: "La seguridad es primero. Monitoreamos el clima constantemente y tenemos protocolos claros: si las condiciones son peligrosas, posponemos o cancelamos. En caso de nuestro cancelación hay reembolso completo o reprogramación gratuita. Siempre tenemos planes alternativos y rutas de escape. Nunca arriesgamos la seguridad del grupo por cumplir un itinerario.",
              tags: ["clima", "mal tiempo", "cancelación"]
            },
            {
              id: "q6c",
              question: "¿Está incluido el seguro?",
              answer: "SÍ, incluimos seguro básico de actividad que cubre accidentes durante la aventura. Para expediciones de alto riesgo recomendamos seguro adicional de montañismo que puedes contratar independientemente. Te daremos recomendaciones de aseguradoras especializadas. El seguro cubre gastos médicos y evacuación de emergencia hasta ciertos límites especificados en la póliza.",
              tags: ["seguro", "cobertura", "protección"]
            }
          ]
        };
      }

      return category;
    })
  };

  return (
    <>
      <Head>
        <title>Preguntas Frecuentes - Todo sobre nuestras Aventuras | Goat Hiking</title>
        <meta
          name="description"
          content="Encuentra respuestas a todas tus preguntas sobre nuestras aventuras de montañismo, hiking y trekking: precios, qué incluye, reservas, equipamiento, seguridad y más."
        />
        <meta
          name="keywords"
          content="faq goat hiking, preguntas montañismo, reservas hiking méxico, precios trekking, equipamiento montaña, seguridad aventuras"
        />
        <meta property="og:title" content="Preguntas Frecuentes - Todo sobre nuestras Aventuras | Goat Hiking" />
        <meta
          property="og:description"
          content="Resuelve todas tus dudas sobre nuestras aventuras: desde cómo reservar hasta qué llevar en tu mochila."
        />
      </Head>
      
      <Navbar />

      {/* Hero Section - Full Screen como el Index */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-200 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className={`${title({ size: "lg" })} text-gray-800 mb-6`}>
              {enhancedFaqData.title}
            </h1>
            
            <p className={`${subtitle()} text-gray-700 max-w-4xl mx-auto mb-8 text-xl`}>
              {enhancedFaqData.subtitle}
            </p>

            <div className="mb-12">
              <Chip
                className="bg-purple-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-purple-500/30"
                color="secondary"
                size="lg"
                variant="solid"
              >
                ❓ Resuelve tus dudas
              </Chip>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-12 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Atención WhatsApp</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Transparencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Dudas Resueltas</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                isExternal
                as={Link}
                className="bg-purple-600/90 backdrop-blur-md hover:bg-purple-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-purple-500/30 transition-all duration-300"
                href={siteConfig.links.whatsapp}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                ¿No encuentras tu respuesta?
              </Button>
              <Button
                as={NextLink}
                className="bg-white/80 backdrop-blur-md border-2 border-purple-600/50 text-purple-700 hover:bg-purple-50/80 shadow-lg transition-all duration-300"
                href="#faq-content"
                size="lg"
                variant="bordered"
              >
                Ver todas las preguntas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {enhancedFaqData.categories.map((category) => (
              <Button
                key={category.id}
                className={
                  activeCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
                size="sm"
                variant={activeCategory === category.id ? "solid" : "flat"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section id="faq-content" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          {enhancedFaqData.categories
            .filter(category => category.id === activeCategory)
            .map(category => (
              <div key={category.id}>
                <div className="text-center mb-12">
                  <h2 className={`${title({ size: "md" })} mb-4 text-gray-800`}>
                    {category.name}
                  </h2>
                  <p className={`${subtitle()} text-gray-600`}>
                    Haz clic en cada pregunta para ver la respuesta
                  </p>
                </div>

                <div className="space-y-4">
                  {category.questions.map((question) => (
                    <Card 
                      key={question.id} 
                      className="shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200"
                    >
                      <CardBody className="p-0">
                        <button
                          className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => toggleQuestion(question.id)}
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800 pr-4">
                              {question.question}
                            </h3>
                            <div className={`transform transition-transform duration-200 ${
                              openQuestions.has(question.id) ? 'rotate-45' : ''
                            }`}>
                              <span className="text-2xl text-purple-600">+</span>
                            </div>
                          </div>
                        </button>
                        
                        {openQuestions.has(question.id) && (
                          <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                            <div className="pt-4">
                              <p className="text-gray-700 leading-relaxed mb-4">
                                {question.answer}
                              </p>
                              
                              {question.tags && (
                                <div className="flex flex-wrap gap-2">
                                  {question.tags.map((tag, tagIndex) => (
                                    <Chip
                                      key={tagIndex}
                                      className="text-xs"
                                      color="secondary"
                                      size="sm"
                                      variant="flat"
                                    >
                                      {tag}
                                    </Chip>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-6 text-gray-800`}>
              ¿Tienes más{" "}
              <span className={title({ color: "violet", size: "md" })}>preguntas?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Nuestro equipo está disponible por WhatsApp para resolver cualquier duda específica 
              sobre tu próxima aventura. ¡No dudes en contactarnos!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2 text-gray-800">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-3">Respuesta inmediata</p>
              <p className="text-purple-600 font-medium">{siteConfig.links.phone}</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2 text-gray-800">Email</h3>
              <p className="text-sm text-gray-600 mb-3">Consultas detalladas</p>
              <p className="text-purple-600 font-medium">{siteConfig.links.email}</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2 text-gray-800">Horario</h3>
              <p className="text-sm text-gray-600 mb-3">Lunes a Domingo</p>
              <p className="text-purple-600 font-medium">8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width con Wave Background como el Index */}
      <section className="relative py-20 bg-purple-700 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="cta" />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-purple-800/30 backdrop-blur-sm z-15" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "md" })} text-white mb-6`}>
              ¿Listo para tu próxima{" "}
              <span className="text-purple-100">aventura?</span>
            </h2>
            <p className="text-purple-50 text-xl mb-8">
              Ya tienes toda la información que necesitas. Ahora es momento de vivir 
              la experiencia. Contáctanos y comienza tu aventura con Goat Hiking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                isExternal
                as={Link}
                className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg"
                href={siteConfig.links.whatsapp}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                Contactar por WhatsApp
              </Button>
              <Button
                isExternal
                as={Link}
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-purple-700 shadow-lg transition-all duration-300"
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
};

export default FAQPage;
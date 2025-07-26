import { NextPage } from "next";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import Head from "next/head";

import DefaultLayout from "@/pages/layouts/default";
import { title } from "@/components/primitives";
import { WarningIcon, WhatsAppIcon } from "@/components/icons";
import policiesData from "@/data/policies.json";

const CancellationPage: NextPage = () => {
  const { cancellationPolicy } = policiesData;

  return (
    <DefaultLayout>
      <Head>
        <title>Políticas de Participación - Goat Hiking</title>
        <meta
          content="Conoce las políticas de participación y servicio de Goat Hiking. Información importante sobre cancelaciones, pagos y conducta durante las aventuras."
          name="description"
        />
      </Head>

      <div className="max-w-4xl mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className={`${title({ size: "lg" })} text-gray-800`}>
              {cancellationPolicy.title}
            </h1>
          </div>
          <Chip
            className="bg-green-100 text-green-800 px-4 py-2"
            color="success"
            variant="flat"
          >
            Última actualización: {cancellationPolicy.lastUpdated}
          </Chip>
        </div>

        {/* Políticas */}
        <div className="space-y-6">
          {cancellationPolicy.policies.map((policy) => (
            <Card 
              key={policy.id} 
              className={`shadow-lg border-2 ${
                policy.id === 'payments_reservations' 
                  ? 'border-red-200 bg-red-50' 
                  : policy.id === 'fitness_evaluation'
                  ? 'border-orange-200 bg-orange-50'
                  : 'border-green-200 bg-green-50'
              }`}
            >
              <CardHeader className={`pb-4 ${
                policy.id === 'payments_reservations' 
                  ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white' 
                  : policy.id === 'fitness_evaluation'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
              }`}>
                <h3 className="text-xl font-bold flex items-center gap-3">
                  {policy.id === 'payments_reservations' || policy.id === 'fitness_evaluation' ? (
                    <WarningIcon className="text-white" size={24} />
                  ) : null}
                  {policy.title}
                </h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <p className="text-gray-800 font-medium leading-relaxed">
                  {policy.description}
                </p>
                
                {policy.details && (
                  <ul className="space-y-2 ml-4">
                    {policy.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {policy.action && (
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r-lg">
                    <p className="text-blue-800 font-medium text-sm leading-relaxed">
                      <strong>Acción:</strong> {policy.action}
                    </p>
                  </div>
                )}
                
                {policy.paymentRule && (
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4 bg-red-100 p-4 rounded-r-lg">
                      <h5 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                        <WarningIcon className="text-red-600" size={16} />
                        {policy.paymentRule.title}
                      </h5>
                      <p className="text-red-800 font-medium text-sm leading-relaxed mb-2">
                        {policy.paymentRule.requirement}
                      </p>
                      <p className="text-red-900 font-bold text-sm">
                        <strong>Consecuencia:</strong> {policy.paymentRule.consequence}
                      </p>
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Contacto */}
        <Card className="shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white mt-12">
          <CardBody className="text-center space-y-6 py-8">
            <h3 className="text-2xl font-bold">¿Tienes preguntas sobre nuestras políticas?</h3>
            <p className="text-green-100 text-lg">
              Contáctanos para aclarar cualquier duda antes de tu aventura
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-green-100 text-sm">{cancellationPolicy.contact.email}</p>
              </div>
              <div>
                <p className="font-semibold">Teléfono</p>
                <p className="text-green-100 text-sm">{cancellationPolicy.contact.phone}</p>
              </div>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-green-100 text-sm">Disponible 24/7</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                isExternal
                as={Link}
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3"
                href={`mailto:${cancellationPolicy.contact.email}`}
                size="lg"
              >
                Enviar Email
              </Button>
              <Button
                isExternal
                as={Link}
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-green-600 px-8 py-3"
                href={cancellationPolicy.contact.whatsapp}
                size="lg"
                variant="bordered"
              >
                <WhatsAppIcon size={20} />
                WhatsApp
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Disclaimer final */}
        <Card className="shadow-lg border-2 border-yellow-200 bg-yellow-50">
          <CardBody className="text-center py-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <WarningIcon className="text-yellow-600" size={24} />
              <h4 className="text-lg font-bold text-yellow-800">Importante</h4>
            </div>
            <p className="text-yellow-800 font-medium">
              Al realizar tu reserva, confirmas que has leído, entendido y aceptas 
              todas las políticas de participación y servicio de Goat Hiking.
            </p>
          </CardBody>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default CancellationPage;

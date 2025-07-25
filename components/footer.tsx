import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Goat Hiking</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Tu compañía de confianza para experiencias únicas de hiking,
              trekking y montañismo en la naturaleza.
            </p>
            <div className="flex gap-4">
              <Button
                isExternal
                isIconOnly
                as={Link}
                className="bg-transparent hover:bg-white/10"
                href={siteConfig.links.instagram}
                variant="ghost"
              >
                <InstagramIcon className="text-white" size={20} />
              </Button>
              <Button
                isExternal
                isIconOnly
                as={Link}
                className="bg-transparent hover:bg-white/10"
                href={siteConfig.links.facebook}
                variant="ghost"
              >
                <FacebookIcon className="text-white" size={20} />
              </Button>
              <Button
                isExternal
                isIconOnly
                as={Link}
                className="bg-transparent hover:bg-white/10"
                href={siteConfig.links.whatsapp}
                variant="ghost"
              >
                <WhatsAppIcon className="text-white" size={20} />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/hiking">
                  Hiking
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/trekking">
                  Trekking
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/mountaineering">
                  Montañismo
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/expeditions">
                  Expediciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/about">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/contact">
                  Contacto
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/terms">
                  Términos
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/privacy">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/cancellation">
                  Cancelación
                </Link>
              </li>
              <li>
                <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/refunds">
                  Reembolsos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              © 2025 Goat Hiking. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/terms">
                Términos
              </Link>
              <span>•</span>
              <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/privacy">
                Privacidad
              </Link>
              <span>•</span>
              <Link className="text-grey-500 hover:text-green-400 transition-colors" href="/cancellation">
                Cancelación
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

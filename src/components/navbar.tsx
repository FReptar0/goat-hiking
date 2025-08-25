import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { MountainIcon, WhatsAppIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar 
      className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
      maxWidth="xl" 
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <MountainIcon className="text-green-600" size={32} />
            <p className="font-bold text-xl text-gray-800">Goat Hiking</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-green-600 data-[active=true]:font-medium hover:text-green-600 transition-colors font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition-all duration-300"
            href={siteConfig.links.whatsapp}
            rel="noopener noreferrer"
            size="sm"
            startContent={<WhatsAppIcon size={16} />}
          >
            Contáctanos
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-white/95 backdrop-blur-md">
        <div className="mx-4 mt-6 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="font-medium text-lg hover:text-green-600 transition-colors"
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              isExternal
              as={Link}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md w-fit mt-4"
              href={siteConfig.links.whatsapp}
              rel="noopener noreferrer"
              size="md"
              startContent={<WhatsAppIcon size={18} />}
            >
              Contáctanos por WhatsApp
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const quickLinks = [
    "Home",
    "About",
    "Programs",
    "Admissions",
    "Community",
    "Contact",
  ];

  return (
    <footer className="bg-emerald-900 text-white py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-6 md:mb-8">
          <div>
            <div className="mb-3 md:mb-4">
              <img
                src="/images/logo.jpg"
                alt="Emmaville Academy logo"
                className="h-14 w-14 rounded-full object-cover"
              />
            </div>
            <h3
              className="text-xl md:text-2xl text-amber-400 mb-3 md:mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Emmaville Academy
            </h3>
            <p className="text-cream-100 mb-3 md:mb-4 text-sm md:text-base">
              Nurturing curious minds and building character through excellence
              in education.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream-100 hover:text-amber-400 transition-colors text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-base md:text-lg mb-3 md:mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com/emmavilleacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 hover:bg-amber-500 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/emmavilleacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 hover:bg-amber-500 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-cream-100 text-xs md:text-sm">
              Instagram & Facebook: @EmmavilleAcademy
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-6 md:pt-8">
          <p className="text-cream-100 text-xs md:text-sm text-center mb-2">
            (c) 2025 Emmaville Academy. All Rights Reserved.
          </p>
          <p className="text-cream-100 text-xs text-center">
            BX4 3RD Avenue, Federal Housing Estate, Off Agip Road, Rumueme,
            <br className="hidden sm:inline" /> Port Harcourt, Rivers State,
            Nigeria
          </p>
          <p className="text-cream-100 text-xs text-center mt-2">
            +234 818 628 1225 | emmavilleacademy@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

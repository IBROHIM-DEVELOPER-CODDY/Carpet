import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Facebook, Instagram, Phone,  } from "lucide-react"
import { SiTelegram } from "@icons-pack/react-simple-icons";
const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-teal-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kartal Carpets</h3>
            <p className="text-teal-100 mb-4">Premium quality carpets and rugs for your home and office.</p>
            <div className="flex space-x-4">
              <a href="https://t.me/KARTALCARPETS?fbclid=PAZXh0bgNhZW0CMTEAAabSLS65xYpG55hjgfOtC4V2XiRUg6egxF5g_nOkEJBmF_cgFNHjO0VVKbE_aem_L0ZItpVUnHI1eny_xqxL3g" className="text-white hover:text-teal-200 transition-colors">
              <SiTelegram className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/kartal.carpets?igsh=MXB2aHluZzl5NmM3MA==" className="text-white hover:text-teal-200 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="tel:+998936981111" className="text-white hover:text-teal-200 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-teal-100 hover:text-white transition-colors">
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-teal-100 hover:text-white transition-colors">
                  {t("header.products")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-teal-100 hover:text-white transition-colors">
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-teal-100 hover:text-white transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-teal-100 hover:text-white transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-teal-100 hover:text-white transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-teal-100">
              <p className="mb-2">123 Carpet Street</p>
              <p className="mb-2">Tashkent, Uzbekistan</p>
              <p className="mb-2">Email: info@carpet.com</p>
              <p>Phone: +998936981111</p>
            </address>
          </div>
        </div>

        <div className="border-t border-teal-600 mt-8 pt-6 text-center text-teal-100">{t("footer.copyright")}</div>
      </div>
    </footer>
  )
}

export default Footer


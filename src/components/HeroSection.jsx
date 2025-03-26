"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import gilam from '../images/processed_photo_1_2025-03-02_15-22-21.jpg'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <div className="relative bg-teal-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("home.hero.title")}</h1>
            <p className="text-xl mb-6 text-teal-100">{t("home.hero.subtitle")}</p>
            <motion.button
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-teal-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("home.hero.cta")}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={gilam}
              alt="Premium Carpet"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-teal-600 rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-sm">OFF</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default HeroSection


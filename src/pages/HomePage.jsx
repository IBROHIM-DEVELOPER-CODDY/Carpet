"use client"

import { useTranslation } from "react-i18next"
import HeroSection from "../components/HeroSection"
import FeaturedProducts from "../components/FeaturedProducts"
import ContactForm from "../components/ContactForm"
import { motion } from "framer-motion"
import gilam from '../images/processed_photo_1_2025-03-02_15-22-21.jpg'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50">
      <HeroSection />

      <FeaturedProducts />

      {/* Categories Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("home.categories")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Modern", "Traditional", "Vintage"].map((category, index) => (
              <motion.div
                key={category}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={gilam}
                
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-teal-500 mt-2 transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                text: "The quality of the carpets is exceptional. I've purchased three different rugs and each one has exceeded my expectations.",
                rating: 5,
              },
              {
                name: "Michael Brown",
                text: "Fast shipping and the carpet looks even better in person than in the photos. Very satisfied with my purchase.",
                rating: 4,
              },
              {
                name: "Emily Davis",
                text: "The customer service was outstanding. They helped me choose the perfect carpet for my living room and I couldn't be happier.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage


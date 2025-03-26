"use client"

import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import ContactForm from "../components/ContactForm"

const ProductPage = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://67a4a138c0ac39787a1bf048.mockapi.io/products/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch product")
        }
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded"></div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">Error loading product. Please try again later.</div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <nav className="mb-6">
          <ol className="flex text-sm text-gray-600">
            <li className="hover:text-teal-600">
              <a href="/">Home</a>
            </li>
            <li className="mx-2">/</li>
            <li className="hover:text-teal-600">
              <a href="/products">Products</a>
            </li>
            <li className="mx-2">/</li>
            <li className="text-teal-600">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <img src={product.image} className="w-full h-auto rounded-lg" alt={product.name} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <div className="mb-6">
                {product.oldPrice && (
                  <span className="text-gray-500 line-through mr-2 text-lg">${product.oldPrice}</span>
                )}
                <span className="text-2xl font-bold text-teal-600">${product.price}</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("product.addToCart")}
                </motion.button>
                <motion.button
                  className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("product.contact")}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Interested in this product?</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ProductPage

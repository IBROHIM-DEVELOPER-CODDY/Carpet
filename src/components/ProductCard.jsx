"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const ProductCard = ({ product }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              -{product.discount}%
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
          <div className="flex justify-between items-center">
            <div>
              {product.oldPrice && <span className="text-gray-500 line-through mr-2">${product.oldPrice}</span>}
              <span className="text-teal-600 font-bold">${product.price}</span>
              {/* <img src={product.image} alt="" /> */}
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full text-sm transition-colors">
              {t("product.addToCart")}
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard


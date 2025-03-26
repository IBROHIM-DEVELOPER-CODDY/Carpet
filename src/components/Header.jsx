"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Logo from "../images/ea2db36d-fffb-485c-bb12-22c2667c5365_removalai_preview.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="w-12 md:w-16" src={Logo} alt="Logo" />
          <h1 className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold">Kartal Carpet</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-teal-200 transition-colors">
            {t("header.home")}
          </Link>
          <Link to="/products" className="hover:text-teal-200 transition-colors">
            {t("header.products")}
          </Link>
          <Link to="/contact" className="hover:text-teal-200 transition-colors">
            {t("header.contact")}
          </Link>
        </nav>

        {/* Search, Cart, User, Language */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder={t("header.search")}
              className="pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300 w-48 md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          </div>

          {/* Icons */}
          <button className="hover:text-teal-200 transition-colors">
            <ShoppingCart className="w-6 h-6" />
          </button>

          <button className="hover:text-teal-200 transition-colors">
            <User className="w-6 h-6" />
          </button>

          {/* Language Selector */}
          <div className="flex space-x-1">
            {["en", "uz", "ru"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`px-2 py-1 rounded text-sm ${
                  i18n.language === lang ? "bg-teal-700" : "hover:bg-teal-700"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-teal-700 px-4 py-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-teal-200 transition-colors" onClick={toggleMenu}>
                {t("header.home")}
              </Link>
              <Link to="/products" className="hover:text-teal-200 transition-colors" onClick={toggleMenu}>
                {t("header.products")}
              </Link>
              <Link to="/contact" className="hover:text-teal-200 transition-colors" onClick={toggleMenu}>
                {t("header.contact")}
              </Link>

              {/* Mobile Search */}
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder={t("header.search")}
                  className="pl-10 pr-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
              </div>

              {/* Cart & User */}
              <div className="flex justify-between">
                <button className="hover:text-teal-200 transition-colors flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-2" />
                  {t("header.cart")}
                </button>

                <button className="hover:text-teal-200 transition-colors flex items-center">
                  <User className="w-6 h-6 mr-2" />
                  {t("header.account")}
                </button>
              </div>

              {/* Language Selector */}
              <div className="flex space-x-2 mt-2">
                {["en", "uz", "ru"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-2 py-1 rounded ${
                      i18n.language === lang ? "bg-teal-800" : "hover:bg-teal-700"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

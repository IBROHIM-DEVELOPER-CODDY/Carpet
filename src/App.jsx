"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import qilingan
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

// React Query uchun yangi QueryClient yaratamiz
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <motion.main
              className="flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
              </Routes>
            </motion.main>
            <Footer />
          </div>
        </Router>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;

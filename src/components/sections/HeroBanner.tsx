"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/images/logo.png";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

export default function HeroBanner({
  title = "Elite Glass - Премиальные стеклянные решения",
  subtitle = "Современные стеклянные конструкции для вашего дома и бизнеса от ведущего производителя",
  ctaText = "Получить бесплатную консультацию",
  onCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
  backgroundImage = "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1920&q=80",
}: HeroBannerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-slate-900/65" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 w-full max-w-xs sm:max-w-sm"
        >
          <Image
            src={logo}
            width={400}
            height={400}
            alt="Elite Glass"
            className="mx-auto h-full w-full rounded-lg  p-3 shadow-lg"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-2xl text-xl text-gray-200 sm:text-2xl"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-blue-600 px-8 py-6 text-lg font-semibold hover:bg-blue-700"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10"
            onClick={() => {
              const productsSection =
                document.getElementById("products-section");
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Наши продукты
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <button
          onClick={() => {
            const productsSection = document.getElementById("products-section");
            if (productsSection) {
              productsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex flex-col items-center text-white"
          aria-label="Прокрутить вниз"
        >
          <span className="mb-2 text-sm">Узнать больше</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}

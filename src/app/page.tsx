"use client";
import React from "react";
import HeroBanner from "@/components/sections/HeroBanner";
import ProductShowcase from "@/components/sections/ProductShowcase";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ContactForm from "@/components/sections/ContactForm";
import { Separator } from "@/components/ui/separator";
import image from "@/images/7.png"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between bg-background">
      {/* Hero Banner Section */}
      <HeroBanner />

      <Separator className="w-full max-w-7xl mx-auto my-8" />

      {/* Product Showcase Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <ProductShowcase />
      </motion.section>

      <Separator className="w-full max-w-7xl mx-auto my-8" />

      {/* Benefits/Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full sm:py-16 bg-muted/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают наши продукты?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Премиальное качество
              </h3>
              <p className="text-muted-foreground text-center">
                Наши продукты изготовлены из высококачественных материалов,
                обеспечивающих долговечность и надежность.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Энергоэффективность
              </h3>
              <p className="text-muted-foreground text-center">
                Наши окна и двери разработаны для обеспечения отличной изоляции,
                снижая затраты на энергию.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Быстрая установка
              </h3>
              <p className="text-muted-foreground text-center">
                Наша профессиональная команда обеспечивает быструю и эффективную
                установку всех наших продуктов.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Узнать больше о наших преимуществах
            </a>
          </div>
        </div>
      </motion.section>

      <Separator className="w-full max-w-7xl mx-auto my-8" />

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <TestimonialCarousel />
      </motion.section>

      <Separator className="w-full max-w-7xl mx-auto my-8" />

      {/* About Us/Manufacturing Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="about"
        className="w-full sm:py-16 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наш производственный процесс
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={image.src}
                alt="Manufacturing facility"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Современные технологии
              </h3>
              <p className="text-muted-foreground mb-6">
                Наш производственный цех оснащен новейшими технологиями и
                оборудованием для обеспечения точности и качества каждого
                создаваемого продукта. От передовых станков с ЧПУ до современных
                систем контроля качества, мы инвестируем в лучшие инструменты
                для производства превосходных стеклянных окон и дверей.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Точная инженерия с компьютерным управлением
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Строгий контроль качества на каждом этапе производства
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Экологически чистые материалы и процессы
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Возможности индивидуализации для удовлетворения конкретных
                    требований клиентов
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                >
                  Записаться на экскурсию по фабрике
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Separator className="w-full max-w-7xl mx-auto my-8" />

      {/* Contact Form Section */}
      <section id="contact" className="w-full">
        <ContactForm />
      </section>
    </main>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  testimonials?: {
    id: string;
    name: string;
    quote: string;
    rating: number;
    image?: string;
    company?: string;
  }[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function TestimonialCarousel({
  testimonials = [
    {
      id: "1",
      name: "Алексей Петров",
      quote:
        "Мы заказали окна для нашего нового офиса, и результат превзошел все ожидания. Качество материалов и исполнения на высшем уровне. Особенно впечатлила шумоизоляция и энергоэффективность.",
      rating: 5,
      company: "ООО 'СтройИнвест'",
    },
    {
      id: "2",
      name: "Мурод Мамаджонов",
      quote:
        "Заказывали пластиковые двери для частного дома. Консультанты помогли выбрать оптимальный вариант, а монтажники установили всё быстро и аккуратно. Двери прекрасно держат тепло и выглядят элегантно.",
      rating: 5,
      image: "",
    },
    {
      id: "3",
      name: "Афзал Шерматов",
      quote:
        "Сотрудничаем с компанией уже третий год для наших строительных проектов. Всегда точные сроки, конкурентные цены и индивидуальный подход к каждому заказу. Рекомендую как надежного партнера.",
      rating: 4,
      company: "ЗАО 'ГородСтрой'",
      image: "",
    },
    {
      id: "4",
      name: "Марина Козлова",
      quote:
        "Заказывала окна для квартиры. Очень довольна качеством продукции и сервисом. Менеджеры были внимательны к моим пожеланиям, а монтаж выполнен профессионально и без лишнего мусора.",
      rating: 5,
      image: "",
    },
    {
      id: "5",
      name: "Амина Султанова",
      quote:
        "Отличная компания! Заказывал комплексное остекление для загородного дома. Порадовало разнообразие дизайнерских решений и возможность выбрать оптимальную конфигурацию для каждого помещения.",
      rating: 5,
      company: "Частный заказчик",
      image: "",
    },
  ],
  title = "Отзывы наших клиентов",
  subtitle = "Узнайте, почему клиенты выбирают нашу продукцию для своих проектов",
  ctaText = "Получить бесплатную консультацию",
  ctaLink = "#contact",
}: TestimonialProps) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="sm:py-16 px-4 md:px-8 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          {testimonial.image ? (
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                          ) : (
                            <AvatarFallback className="bg-primary  text-primary-foreground">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          {testimonial.company && (
                            <p className="text-sm text-gray-500">
                              {testimonial.company}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="italic text-gray-700 flex-grow mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-md transition-colors"
            onClick={() => {
              const element = document.querySelector(ctaLink);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}

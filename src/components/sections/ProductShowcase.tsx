"use client";

import { useState } from "react";
import type { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import img1 from "@/images/1.png";
import img2 from "@/images/22.png";
import img3 from "@/images/3.jpg";
import img4 from "@/images/4.jpg";
import img5 from "@/images/5.jpg";
import img6 from "@/images/6.jpg";
import img7 from "@/images/7.png";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category:
    | "bathrooms"
    | "interior"
    | "decor"
    | "windows-doors"
    | "interior-exterior";
  description: string;
  image: StaticImageData;
  features: string[];
}

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "bathrooms" | "interior" | "decor" | "windows-doors" | "interior-exterior"
  >("all");

  const products: Product[] = [
    {
      id: "1",
      name: "Цельностеклянные перегородки",
      category: "interior",
      description:
        "Цельностеклянные перегородки из закаленного или ламинированного стекла создают эффект открытого пространства, пропуская свет и не загромождая интерьер. Идеальны для офисов, торговых помещений и отелей.",
      image: img1,
      features: [
        "Закаленное или ламинированное стекло",
        "Максимальная прозрачность и светопропускание",
        "Нет видимого каркаса",
        "Подходит для офисов, торговых помещений и отелей",
        "Эстетика современного дизайна",
        "10-летняя гарантия",
      ],
    },
    {
      id: "2",
      name: "Душевые кабины",
      category: "bathrooms",
      description:
        "Душевые кабины из стекла — это идеальный выбор для экономии пространства и создания уникального дизайна в ванной комнате. Современные технологии позволяют применять различные фактуры и рисунки стекла.",
      image: img2,
      features: [
        "Экономия пространства",
        "Матовые, прозрачные и пескоструйные рисунки на стекле",
        "Уникальный дизайн для ванной комнаты",
        "Простота ухода — достаточно протирать влажной губкой",
        "Сочетание эстетики и функциональности",
        "Долговечность и стойкость материала",
      ],
    },
    {
      id: "3",
      name: "Межкомнатные раздвижные перегородки",
      category: "interior",
      description:
        "Межкомнатные раздвижные перегородки идеально подходят для экономии пространства и создания функциональных зон в доме или офисе. Современные материалы и механизмы обеспечивают удобство и стильный внешний вид.",
      image: img3,
      features: [
        "Экономия пространства",
        "Легкие материалы и удобство в использовании",
        "Прозрачные или полупрозрачные двери для визуальной легкости",
        "Современный и привлекательный дизайн",
        "Широкий выбор материалов и отделок",
        "Простота в управлении механизмом открывания/закрывания",
      ],
    },
    {
      id: "4",
      name: "Зеркало с подцветкой",
      category: "bathrooms",
      description:
        "Зеркала с подсветкой не только украшают интерьер, но и обеспечивают идеальное освещение для макияжа, бритья и ухода за кожей. Современные модели предлагают различные варианты подсветки и дополнительные функции для повышения комфорта.",
      image: img4,
      features: [
        "Элегантный стиль и эстетика с мягким или точечным освещением",
        "Равномерное освещение для улучшенной видимости",
        "Регулируемая яркость подсветки",
        "Функция защиты от запотевания",
        "Дополнительные функции, такие как увлажнение воздуха и звук",
        "Энергоэффективные LED технологии и долгий срок службы",
        "Повышенная безопасность и автоматическое выключение",
      ],
    },
    {
      id: "5",
      name: "Зеркальное Панно",
      category: "decor",
      description:
        "Зеркальное панно состоит из зеркальных фрагментов, создающих уникальную композицию. Это декоративный элемент, который визуально расширяет пространство, улучшает освещенность и скрывает несовершенства стен и потолков.",
      image: img5,
      features: [
        "Визуальное расширение пространства",
        "Увеличение освещенности помещения",
        "Скрытие несовершенств стен и потолков",
        "Универсальность для различных стилей и помещений",
        "Разнообразие форм и стилизаций",
        "Органично вписывается как в большие, так и в маленькие пространства",
        "Подходит для спальни, ванной, коридора и других помещений",
      ],
    },
    {
      id: "6",
      name: "Окна и двери из алюминия LEGA",
      category: "windows-doors",
      description:
        "Компания LEGA предлагает изготовление, сборку и монтаж окон, дверей и витражей из алюминия и ПВХ с использованием трехкамерных систем для улучшенной теплоизоляции и шумоизоляции.",
      image: img6,
      features: [
        "Трехкамерная система для улучшенной тепло- и шумоизоляции",
        "Элегантный внешний вид с уклонами и округлениями",
        "Герметичность и долговечность благодаря качественным уплотнителям",
        "Терморасцепление для улучшенной теплоизоляции и снижения потерь тепла",
        "Подходит для окон больших размеров",
        "Монтаж и изготовление под ключ в максимально сжатые сроки",
        "Алюминиевые профили с 25-30% стекловолокна для повышения теплоизоляции",
      ],
    },
    {
      id: "7",
      name: "Ограждения / Перила из закалённого стекла",
      category: "interior-exterior",
      description:
        "Стеклянные ограждения и перила из закалённого стекла обеспечивают высокую прочность, долговечность и безопасность, при этом добавляют эстетичности и визуально расширяют пространство. Они подходят для различных помещений и объектов.",
      image: img7,
      features: [
        "Закалённое стекло, в 6-7 раз прочнее обычного",
        "Высокая прочность и долговечность, устойчивость к механическим воздействиям",
        "Безопасность с системой триплекс, предотвращающей распад стекла",
        "Визуальное расширение пространства",
        "Простота ухода — легко очищаются от пыли и загрязнений",
        "Экономия на освещении за счет отражения света",
        "Экологичность — стекло не содержит вредных химических веществ",
        // "Простота монтажа, установка не требует много времени",
        // "Универсальность и возможность вписаться в любой интерьер",
        // "Эстетичность и привлекательный внешний вид",
      ],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const openProductDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeProductDialog = () => {
    setIsDialogOpen(false);
  };

  const handleRequestQuote = () => {
    // Scroll to contact form section
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeProductDialog();
  };

  return (
    <section
      id="products-section"
      className="sm:py-20 mt-20 sm:mt-[0] sm:px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Наши премиальные продукты
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Откройте для себя наши высококачественные стеклянные окна и двери,
            разработанные для долговечности, энергоэффективности и эстетической
            привлекательности.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12  ">
          <TabsList className="flex flex-row flex-wrap h-auto  sm:max-w-5xl sm:justify-between   w-full  overflow-x-auto sm:overflow-hidden  mx-auto  gap-2">
            <TabsTrigger
              value="all"
              onClick={() => setActiveCategory("all")}
              className="text-sm md:text-base"
            >
              Все продукты
            </TabsTrigger>
          
            <TabsTrigger
              value="bathrooms"
              onClick={() => setActiveCategory("bathrooms")}
              className="text-sm md:text-base"
            >
              Ванные комнаты
            </TabsTrigger>
            <TabsTrigger
              value="interior"
              onClick={() => setActiveCategory("interior")}
              className="text-sm md:text-base"
            >
              Интерьер
            </TabsTrigger>
            <TabsTrigger
              value="decor"
              onClick={() => setActiveCategory("decor")}
              className="text-sm md:text-base"
            >
              Декор
            </TabsTrigger>
            <TabsTrigger
              value="windows-doors"
              onClick={() => setActiveCategory("windows-doors")}
              className="text-sm md:text-base"
            >
              Окна и двери
            </TabsTrigger>
            <TabsTrigger
              value="interior-exterior"
              onClick={() => setActiveCategory("interior-exterior")}
              className="text-sm md:text-base"
            >
              Интерьер и экстерьер
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    {/* {product.category === "windows" ? "Окна" : "Двери"} */}
                    {{
                      
                      bathrooms: "Ванные комнаты",
                      interior: "Интерьер",
                      decor: "Декор",
                      "windows-doors": "Окна и двери",
                      "interior-exterior": "Интерьер и экстерьер",
                    }[product.category] || "Неизвестная категория"}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={() => openProductDialog(product)}
                      className="text-sm"
                    >
                      Подробнее
                    </Button>
                    {/* <Button
                      onClick={handleRequestQuote}
                      className="text-sm flex items-center gap-1"
                    >
                      Запросить цену <ArrowRight size={16} />
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedProduct && (
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProduct.name}
                </DialogTitle>
                {/* <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  onClick={closeProductDialog}
                >
                  <X size={18} />
                </Button> */}
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-md overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <DialogDescription className="text-base mb-4">
                    {selectedProduct.description}
                  </DialogDescription>
                  <h4 className="font-bold text-lg mb-2">
                    Ключевые особенности:
                  </h4>
                  <ul className="space-y-1 mb-6">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <DialogFooter>
                <Button
                  onClick={handleRequestQuote}
                  className="w-full sm:w-auto"
                >
                  Запросить цену
                </Button>
              </DialogFooter> */}
            </DialogContent>
          )}
        </Dialog>

        {/* <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={handleRequestQuote}
            className="text-base px-8 py-6 h-auto"
          >
            Просмотреть все продукты и получить индивидуальное предложение
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductShowcase;

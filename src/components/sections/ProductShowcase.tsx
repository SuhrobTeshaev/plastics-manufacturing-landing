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
import img2 from "@/images/2.png";
import img3 from "@/images/3.png";
import img4 from "@/images/4.png";
import img5 from "@/images/5.png";
import img6 from "@/images/6.png";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: "windows" | "doors";
  description: string;
  image: StaticImageData;
  features: string[];
}

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "windows" | "doors"
  >("all");

  const products: Product[] = [
    {
      id: "1",
      name: "Premium Vinyl Windows",
      category: "windows",
      description:
        "Energy-efficient vinyl windows with superior insulation properties. Perfect for residential buildings seeking to reduce energy costs.",
      image: img1,
      features: [
        "Triple-pane glass option",
        "UV protection",
        "Sound insulation",
        "Multiple frame colors",
        "10-year warranty",
      ],
    },
    {
      id: "2",
      name: "Sliding Patio Doors",
      category: "windows",
      description:
        "Elegant sliding patio doors that maximize your view while providing excellent thermal performance and security.",
      image: img2,
      features: [
        "Smooth sliding mechanism",
        "Multi-point locking system",
        "Tempered safety glass",
        "Custom sizing available",
        "Energy Star certified",
      ],
    },
    {
      id: "3",
      name: "Casement Windows",
      category: "doors",
      description:
        "Modern casement windows that open outward for maximum ventilation. Featuring easy-to-clean design and enhanced security.",
      image: img3,
      features: [
        "Easy-to-operate crank mechanism",
        "Multi-point locking system",
        "Weather-resistant seals",
        "Various grid patterns available",
        "Low-E glass option",
      ],
    },
    {
      id: "4",
      name: "Entry Doors",
      category: "doors",
      description:
        "Durable and secure entry doors that make a statement. Combining aesthetics with superior thermal performance.",
      image: img4,
      features: [
        "Steel reinforced frames",
        "Multiple design options",
        "Custom glass inserts available",
        "Weather-tight seal",
        "High security lock systems",
      ],
    },
    {
      id: "5",
      name: "Bay Windows",
      category: "windows",
      description:
        "Elegant bay windows that add space, light, and architectural interest to any room. Custom configurations available.",
      image: img5,
      features: [
        "Custom angles and configurations",
        "Built-in seating option",
        "Superior insulation",
        "Variety of interior finishes",
        "Integrated ventilation options",
      ],
    },
    {
      id: "6",
      name: "French Doors",
      category: "windows",
      description:
        "Classic French doors that add elegance and natural light to your space. Available in various styles and finishes.",
      image: img6,
      features: [
        "Traditional or contemporary designs",
        "Multiple glass options",
        "Solid construction",
        "Custom sizing",
        "Coordinating hardware options",
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
      className="sm:py-20 px-4 md:px-8 lg:px-16 bg-gray-50"
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

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger
              value="all"
              onClick={() => setActiveCategory("all")}
              className="text-sm md:text-base"
            >
              Все продукты
            </TabsTrigger>
            <TabsTrigger
              value="windows"
              onClick={() => setActiveCategory("windows")}
              className="text-sm md:text-base"
            >
              Окна
            </TabsTrigger>
            <TabsTrigger
              value="doors"
              onClick={() => setActiveCategory("doors")}
              className="text-sm md:text-base"
            >
              Двери
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
                    {product.category === "windows" ? "Окна" : "Двери"}
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
                  <h4 className="font-bold text-lg mb-2">Key Features:</h4>
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

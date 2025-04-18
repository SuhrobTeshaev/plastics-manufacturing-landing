"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Instagram } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  companyAddress?: string;
  companyPhone1?: string;
  companyPhone2?: string;
  companyEmail?: string;
  instagram?: string;
}

export default function ContactForm({
  title = "Elite Glass - Контакты",
  subtitle = "Свяжитесь с нами для консультации",
  companyAddress = "г. Душанбе, ул. Карин Ман 130",
  companyPhone1 = "+992 330100000",
  companyPhone2 = "+992 330110000",
  companyEmail = "info@eliteglass.tj",
  instagram = "@EliteGlass.tj",
}: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: "windows",
    message: "",
    preferredContact: "email",
    privacyConsent: false,
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({ submitted: false, success: false, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, preferredContact: value }));
  };

  const handleProductChange = (value: string) => {
    setFormState((prev) => ({ ...prev, productInterest: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, privacyConsent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formState.name ||
      !formState.email ||
      !formState.message ||
      !formState.privacyConsent
    ) {
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "Пожалуйста, заполните все обязательные поля и примите политику конфиденциальности.",
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
      });

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        productInterest: "windows",
        message: "",
        preferredContact: "email",
        privacyConsent: false,
      });
    }, 1000);
  };

  return (
    <section id="contact" className="sm:py-16  sm:px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 mx-auto">
            <div>
              <div className="p-6 mx-auto">
                <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>

                <div className=" flex flex-row flex-wrap gap-6 sm:gap-[0] justify-between">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Наш адрес</h4>
                      <p className="text-gray-600">{companyAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start  space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <a
                        href={`tel:${companyPhone1.replace(/[^0-9+]/g, "")}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-start space-x-4 hover:text-primary transition-colors"
                      >
                        <div>
                          <h4 className="font-medium">Телефон</h4>
                          <p className="text-gray-600">{companyPhone1}</p>
                        </div>
                      </a>

                      <a
                        href={`tel:${companyPhone2.replace(/[^0-9+]/g, "")}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-start space-x-4 hover:text-primary transition-colors"
                      >
                        <div>
                          <p className="text-gray-600">{companyPhone2}</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <a
                      href={`mailto:${companyEmail}`}
                      className="flex items-start space-x-4 hover:text-primary transition-colors"
                    >
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">{companyEmail}</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="flex items-start space-x-4 hover:text-primary transition-colors">
                      <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Instagram </h4>
                        <p className="text-gray-600">{instagram}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
}

export default function ContactForm({
  title = "Elite Glass - Обратная связь",
  subtitle = "Оставьте заявку или позвоните нам для получения консультации",
  companyAddress = "г. Москва, ул. Промышленная, 123",
  companyPhone = "+9 923 301 00000",
  companyEmail = "info@eliteglass.ru",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Наш адрес</h4>
                      <p className="text-gray-600">{companyAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <a
                      href={`tel:${companyPhone.replace(/[^0-9+]/g, "")}`}
                      className="flex items-start space-x-4 hover:text-primary transition-colors"
                    >
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Телефон</h4>
                        <p className="text-gray-600">{companyPhone}</p>
                      </div>
                    </a>
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
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Оставить заявку</h3>

                {formStatus.submitted && (
                  <div
                    className={`mb-6 p-4 rounded-md ${formStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Полное имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Ваше полное имя"
                        className="mt-1"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Электронная почта *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="ваша.почта@пример.ру"
                          className="mt-1"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Номер телефона</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+7 (999) 123-4567"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Интересующие продукты *</Label>
                      <RadioGroup
                        value={formState.productInterest}
                        onValueChange={handleProductChange}
                        className="flex flex-col space-y-2 mt-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="windows" id="windows" />
                          <Label htmlFor="windows" className="cursor-pointer">
                            Окна
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="doors" id="doors" />
                          <Label htmlFor="doors" className="cursor-pointer">
                            Двери
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both" className="cursor-pointer">
                            Окна и двери
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other" className="cursor-pointer">
                            Другие продукты
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="message">Детали проекта *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Пожалуйста, опишите требования к вашему проекту, размеры, количество или любые конкретные детали..."
                        className="mt-1"
                        rows={5}
                        required
                      />
                    </div>

                    <div>
                      <Label>Предпочтительный способ связи</Label>
                      <RadioGroup
                        value={formState.preferredContact}
                        onValueChange={handleRadioChange}
                        className="flex space-x-4 mt-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label
                            htmlFor="email-contact"
                            className="cursor-pointer"
                          >
                            Электронная почта
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-contact" />
                          <Label
                            htmlFor="phone-contact"
                            className="cursor-pointer"
                          >
                            Телефон
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formState.privacyConsent}
                        onCheckedChange={handleCheckboxChange}
                        className="mt-1"
                      />
                      <Label htmlFor="privacy" className="text-sm">
                        Я согласен на обработку моих данных в соответствии с
                        политикой конфиденциальности. *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

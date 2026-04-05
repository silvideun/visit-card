/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Phone, Mail, Menu, X, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-primary font-sans text-graphite selection:bg-accent selection:text-graphite">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-serif text-2xl font-semibold tracking-tight text-graphite">
                Ольга<span className="text-[#C69A8F]">.</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <a href="#approach" className="text-sm font-medium text-graphite-light hover:text-graphite transition-colors">Подход</a>
              <a href="#experience" className="text-sm font-medium text-graphite-light hover:text-graphite transition-colors">Опыт</a>
              <a href="#services" className="text-sm font-medium text-graphite-light hover:text-graphite transition-colors">Услуги</a>
              <a href="#reviews" className="text-sm font-medium text-graphite-light hover:text-graphite transition-colors">Отзывы</a>
              <a href="#contacts" className="text-sm font-medium text-graphite-light hover:text-graphite transition-colors">Контакты</a>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <a href="#contacts" className="bg-graphite text-primary px-6 py-2.5 rounded-full text-sm font-medium hover:bg-graphite/90 transition-all shadow-sm">
                Записаться
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-graphite hover:text-accent transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-primary border-b border-accent/20 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#approach" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-graphite-light hover:text-graphite hover:bg-accent/10 rounded-md">Подход</a>
                <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-graphite-light hover:text-graphite hover:bg-accent/10 rounded-md">Опыт</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-graphite-light hover:text-graphite hover:bg-accent/10 rounded-md">Услуги</a>
                <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-graphite-light hover:text-graphite hover:bg-accent/10 rounded-md">Отзывы</a>
                <a href="#contacts" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-graphite-light hover:text-graphite hover:bg-accent/10 rounded-md">Контакты</a>
                <a href="#contacts" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4 w-full text-center bg-graphite text-primary px-6 py-3 rounded-full text-base font-medium hover:bg-graphite/90 transition-all">
                  Записаться на консультацию
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center space-x-2 bg-accent/30 px-4 py-2 rounded-full mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-sm font-medium tracking-wide uppercase">Клиника «Шарм»</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
                  Ольга - Главный врач
                </h1>
                <p className="text-lg md:text-xl text-graphite-light mb-4 font-light leading-relaxed">
                  Врач косметолог, дерматолог, трихолог, криотерапевт, лазеротерапевт. Член Лиги косметологов и пластических хирургов.
                </p>
                <p className="text-base md:text-lg font-medium mb-10 border-l-2 border-accent pl-4 py-1">
                  Уже 20 лет на страже вашей молодости и красоты.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contacts" className=" whitespace-nowrap inline-flex justify-center items-center bg-graphite text-primary px-8 py-4 rounded-full text-base font-medium hover:bg-graphite/90 transition-all shadow-lg hover:shadow-xl">
                    Записаться на консультацию
                  </a>
                  <a href="#services" className="inline-flex justify-center items-center bg-transparent border border-graphite/20 text-graphite px-8 py-4 rounded-full text-base font-medium hover:border-graphite/40 hover:bg-graphite/5 transition-all">
                    Смотреть услуги
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative lg:ml-auto"
              >
                <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-accent/20 mix-blend-multiply z-10"></div>
                  <img
                    src="main.webp"
                    alt="Врач косметолог"
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full blur-3xl opacity-50 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-y border-graphite/5 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <p className="text-sm text-graphite-light uppercase tracking-widest mb-4 text-center md:text-left">О нас пишут</p>
                <div className="flex items-center justify-center md:justify-start gap-8 flex-wrap py-2">
                  <a href="https://nn.plus.rbc.ru/partners/610157907a8aa92919406d11?utm_source=nn&utm_medium=main&utm_campaign=840711-840749-610157907a8aa92919406d11&from=column_4" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl font-bold opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:text-[#C69A8F] transition-all duration-300">РБК</a>
                  <a href="https://www.sobaka.ru/nn/beauty/beauty/151783" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl italic opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:text-[#C69A8F] transition-all duration-300">Собака.ru</a>
                  <a href="https://www.vremyan.ru/interviews/500610" target="_blank" rel="noopener noreferrer" className="font-serif text-xl font-medium uppercase tracking-wider opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:text-[#C69A8F] transition-all duration-300">Время Н</a>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-graphite/10"></div>
              <div className="flex-1 text-center md:text-right">
                <div className="inline-flex flex-col items-center md:items-end">
                  <span className="text-4xl font-serif text-[#C69A8F] mb-1">60+</span>
                  <span className="text-sm text-graphite-light max-w-[200px]">дипломов и сертификатов, включая международные (Европа)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach (5P Medicine) */}
        <section id="approach" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
                  <img
                    src="_normal.webp"
                    alt="Эстетика медицины"
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Медицина 5П</h2>
                <p className="text-xl font-light text-graphite-light mb-8">
                  Системный и персонализированный подход. Сочетание классической врачебной косметологии и превентивной медицины.
                </p>

                <blockquote className="border-l-2 border-accent pl-6 py-2 mb-10">
                  <p className="text-lg italic text-graphite">
                    «Я не только улучшаю внешний вид с помощью инъекций, но и помогаю расцвести изнутри. Моя цель - построить слаженную работу всех систем организма».
                  </p>
                </blockquote>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium mb-4">Что получает пациент:</h3>
                  {[
                    "Индивидуальный план лечения",
                    "Чек-ап дефицитов организма",
                    "Рекомендации по питанию и домашнему уходу",
                    "Сохранение естественных черт лица"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C69A8F] shrink-0 mt-0.5 mr-3" />
                      <span className="text-graphite-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section id="experience" className="py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Образование и опыт</h2>
              <p className="text-graphite-light">Фундаментальные знания и непрерывное развитие</p>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent">
              {[
                {
                  year: "База",
                  title: "Нижегородская Государственная Медицинская Академия",
                  desc: "Красный диплом, русско-немецкое отделение."
                },
                {
                  year: "Практика",
                  title: "Клиника пластической хирургии",
                  desc: "г. Эссен, Германия. Стажировка и обмен опытом с европейскими коллегами."
                },
                {
                  year: "Ординатура",
                  title: "Дерматовенерология",
                  desc: "НИКВИ. Углубленное изучение кожных патологий."
                },
                {
                  year: "Специализация",
                  title: "Врачебная косметология",
                  desc: "РУДН, Москва. Современные инъекционные и аппаратные методики."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-primary border border-graphite/5 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[#C69A8F] uppercase tracking-wider">{item.year}</span>
                    </div>
                    <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                    <p className="text-graphite-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Pricing */}
        <section id="services" className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Услуги и стоимость</h2>
              <p className="text-graphite-light">Инвестиции в вашу красоту и здоровье</p>
            </div>

            <div className="space-y-4">
              <AccordionItem
                title="Консультация"
                items={[
                  { name: "Первичная (косметология, дерматология, трихология)", price: "2 000 ₽" },
                  { name: "По превентивной медицине, нутрициологии, похудении (с анализами)", price: "5 000 ₽" },
                  { name: "Повторный приём", price: "50% от стоимости" },
                  { name: "Пенсионерам и студентам", price: "Скидка 50%" }
                ]}
                isOpen={true}
              />
              <AccordionItem
                title="Инъекционная косметология"
                items={[
                  { name: "Диспорт", price: "140 ₽ / ед." },
                  { name: "Ботокс", price: "350 ₽ / ед." },
                  { name: "Ксеомин", price: "320 ₽ / ед." },
                  { name: "Контурная пластика филлерами (гиалуроновая кислота)", price: "12 000 — 16 000 ₽" },
                  { name: "Коррекция губ", price: "14 500 — 16 000 ₽" },
                  { name: "Радиесс 1,5 мл", price: "21 000 ₽" }
                ]}
                note="*От 2х шприцев скидка 10%. Все препараты имеют регистрационное удостоверение в РФ."
              />
              <AccordionItem
                title="Коллагеностимуляторы"
                items={[
                  { name: "Эстефилл (Aesthefill) 10 мл", price: "40 000 ₽" },
                  { name: "Repart PLA", price: "35 000 ₽" },
                  { name: "Мезорадиесс 1,5 мл", price: "21 000 ₽" }
                ]}
              />
              <AccordionItem
                title="Мезотерапия и биоревитализация"
                items={[
                  { name: "Мезотерапия", price: "3 500 — 5 500 ₽" },
                  { name: "Мезотерапия зоны глаз", price: "4 000 ₽" },
                  { name: "Безинъекционная мезотерапия", price: "3 500 ₽" },
                  { name: "Мезотерапия волосистой части головы", price: "4 500 ₽" },
                  { name: "Липолитики (за 1 зону, от 2х зон скидка 10%)", price: "3 500 — 4 500 ₽" },
                  { name: "Биостимуляция NITHYA 2,5 мл", price: "9 500 ₽" },
                  { name: "Биостимуляция NITHYA 5 мл", price: "19 000 ₽" },
                  { name: "Плазматерапия (за 1 пробирку)", price: "3 500 ₽" },
                  { name: "Биоревитализация, биорепарация", price: "7 400 — 15 500 ₽" }
                ]}
                note="Препараты подбираются индивидуально: IAL SYSTEM, NOVACUTAN, Hyon, Restylane Vital, TWAC, REVI."
              />
              <AccordionItem
                title="Нитевой лифтинг"
                items={[
                  { name: "Aptos (за комплект)", price: "40 000 ₽" },
                  { name: "Линейные мезонити (1 шт)", price: "800 ₽" },
                  { name: "Спиральные мезонити (1 шт)", price: "800 ₽" },
                  { name: "4D с насечками (1 шт)", price: "4 500 ₽" }
                ]}
              />
              <AccordionItem
                title="Пилинги и чистки"
                items={[
                  { name: "Миндальный / Салициловый+азелаиновый / Пировиноградный", price: "2 500 ₽" },
                  { name: "Ферруловый + молочный + миндальный", price: "2 500 ₽" },
                  { name: "Джесснер", price: "3 500 ₽" },
                  { name: "BioRePeel / PRX", price: "3 500 — 4 500 ₽" },
                  { name: "Ретиноевый + джесснер", price: "4 500 ₽" },
                  { name: "Питоновый", price: "5 000 — 5 500 ₽" },
                  { name: "Срединный TCA", price: "5 500 ₽" },
                  { name: "Ультразвуковая чистка лица", price: "2 500 ₽" },
                  { name: "Комбинированная чистка (УЗ + механическая)", price: "3 800 ₽" }
                ]}
              />
              <AccordionItem
                title="Удаление новообразований"
                items={[
                  { name: "Удаление (папилломы, бородавки, кератомы, гемангиомы)", price: "400 — 1 500 ₽" },
                  { name: "Криодеструкция / электрокоагуляция", price: "по запросу" },
                  { name: "Анестезия местная (лидокаин / ультракаин)", price: "500 / 1 500 ₽" },
                  { name: "Криомассаж 1 зоны", price: "800 ₽" }
                ]}
              />
              <AccordionItem
                title="Трихология"
                items={[
                  { name: "Мезотерапия", price: "3 500 — 4 500 ₽" },
                  { name: "Лаеннектерапия", price: "4 500 ₽" },
                  { name: "Плазматерапия", price: "3 500 ₽" },
                  { name: "Криомассаж", price: "800 ₽" },
                  { name: "Дарсонваль", price: "500 ₽" }
                ]}
              />
              <AccordionItem
                title="СО2 Лазерная шлифовка ACU PULS"
                items={[
                  { name: "Лицо", price: "25 000 ₽" },
                  { name: "Шея / Декольте", price: "15 000 ₽" },
                  { name: "Веки верхние + нижние", price: "15 000 ₽" },
                  { name: "Веки верхние или нижние", price: "10 000 ₽" },
                  { name: "Лицо + веки", price: "25 000 ₽" },
                  { name: "Шлифовка рубца (1 см)", price: "800 ₽" },
                  { name: "Шлифовка стрий", price: "от 3 000 ₽" }
                ]}
              />
              <AccordionItem
                title="Лазерная эпиляция"
                items={[
                  { name: "Верхняя губа / подбородок", price: "600 ₽" },
                  { name: "Белая линия живота", price: "990 ₽" },
                  { name: "Подмышечные впадины", price: "1 200 ₽" },
                  { name: "Плечи / Предплечье", price: "1 800 ₽" },
                  { name: "Руки полностью", price: "2 900 ₽" },
                  { name: "Классическое бикини", price: "2 200 ₽" },
                  { name: "Полное глубокое бикини", price: "2 900 ₽" },
                  { name: "Часть бедра (передняя/задняя/боковая)", price: "1 800 ₽" },
                  { name: "Голени", price: "2 300 ₽" },
                  { name: "Бедра", price: "2 990 ₽" },
                  { name: "Ноги полностью", price: "4 900 ₽" }
                ]}
                note="*Мужчинам +20% к прайсу."
              />
              <AccordionItem
                title="Сосудистый диодный лазер"
                items={[
                  { name: "Удаление звёздочкой гемангиомы", price: "1 500 — 3 500 ₽" },
                  { name: "Удаление сосудов на крыльях носа", price: "2 500 — 3 500 ₽" },
                  { name: "Удаление капиллярной сетки", price: "2 500 — 9 000 ₽" },
                  { name: "Лечение пигментации", price: "1 500 — 5 000 ₽" },
                  { name: "Лечение розацеа и купероза", price: "5 000 — 10 000 ₽" },
                  { name: "Лечение угревой сыпи", price: "3 500 — 10 000 ₽" },
                  { name: "Лазерное омоложение шеи", price: "8 000 ₽" },
                  { name: "Лазерное омоложение (лицо / декольте)", price: "10 000 ₽" }
                ]}
              />
              <AccordionItem
                title="Игольчатый RF лифтинг"
                items={[
                  { name: "Аппарат ENDYMED (одна индивидуальная насадка)", price: "35 000 ₽" },
                  { name: "Аппарат Scarlet", price: "от 25 000 ₽" }
                ]}
                note="Фракционное микроигольчатое ремоделирование кожи. Эффект подтяжки сразу после процедуры, нарастает в течение месяца."
              />
              <AccordionItem
                title="Микротоковая терапия"
                items={[
                  { name: "Без сыворотки", price: "2 500 ₽" }
                ]}
              />
              <AccordionItem
                title="SMAS-лифтинг"
                items={[
                  { name: "300 линий", price: "30 000 ₽" },
                  { name: "500 линий (Подбородок + лицо до глаз)", price: "45 000 ₽" },
                  { name: "700 линий (Подбородок + глаза и лоб)", price: "60 000 ₽" },
                  { name: "900 линий (Вся шея + лицо полностью)", price: "75 000 ₽" },
                  { name: "Все лицо", price: "35 000 ₽" }
                ]}
                note="Сфокусированный ультразвук. Альтернатива пластической операции без реабилитации."
              />
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-graphite-light mb-6">
                *В прайсе представлены основные позиции. Полный перечень услуг, включая трихологию, удаление новообразований, лазерную эпиляцию и нитевой лифтинг, доступен на консультации.
              </p>
              <a href="#contacts" className="inline-flex items-center text-graphite font-medium hover:text-accent transition-colors">
                Уточнить стоимость <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Отзывы пациентов</h2>
              <div className="flex justify-center items-center space-x-1 text-[#C69A8F]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  text: "Ольга — потрясающий специалист! Очень деликатный подход, никаких лишних назначений. Результат превзошел все ожидания, лицо выглядит свежим и отдохнувшим.",
                  author: "Елена В."
                },
                {
                  text: "Пришла с проблемой акне, которую не могла решить годами. Благодаря комплексному подходу и чек-апу мы нашли причину. Сейчас кожа идеальная!",
                  author: "Мария С."
                },
                {
                  text: "Делала SMAS-лифтинг. Очень боялась, но Ольга все подробно объяснила. Процедура прошла комфортно, а эффект просто вау! Минус 5 лет.",
                  author: "Анна К."
                }
              ].map((review, i) => (
                <div key={i} className="bg-primary p-8 rounded-2xl border border-graphite/5 flex flex-col">
                  <p className="text-graphite-light italic mb-6">"{review.text}"</p>
                  <p className="font-medium text-graphite mt-auto">— {review.author}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#"
                className="inline-flex justify-center items-center bg-transparent border border-graphite/20 text-graphite px-8 py-3 rounded-full text-sm font-medium hover:border-graphite/40 hover:bg-graphite/5 transition-all"
              >
                Читать все отзывы на Яндекс Картах
              </a>
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section id="contacts" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Свяжитесь со мной</h2>
                <p className="text-graphite-light mb-10">
                  Оставьте заявку, и администратор клиники свяжется с вами для подбора удобного времени консультации.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#C69A8F] shrink-0 mr-4" />
                    <div>
                      <h4 className="font-medium">Клиника «Шарм»</h4>
                      <p className="text-graphite-light mt-1">г. Нижний Новгород, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#C69A8F] shrink-0 mr-4" />
                    <div>
                      <h4 className="font-medium">Телефон</h4>
                      <p className="text-graphite-light mt-1">+7 (999) 000-00-00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#C69A8F] shrink-0 mr-4" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-graphite-light mt-1">hello@charm-clinic.ru</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-graphite/5">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-graphite/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-semibold tracking-tight text-graphite">
            Ольга<span className="text-[#C69A8F]">.</span>
          </div>
          <p className="text-sm text-graphite-light">
            © {new Date().getFullYear()} Клиника «Шарм». Все права защищены.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-graphite-light hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-graphite-light hover:text-accent transition-colors">Telegram</a>
            <a href="#" className="text-graphite-light hover:text-accent transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AccordionItem({ title, items, note, isOpen: defaultOpen = false }: { title: string, items: { name: string, price: string }[], note?: string, isOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl border border-graphite/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-primary/50 transition-colors"
      >
        <span className="font-serif text-xl">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-graphite-light" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 pt-2 border-t border-graphite/5">
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row justify-between sm:items-end gap-1 sm:gap-4">
                    <span className="text-graphite-light leading-snug">{item.name}</span>
                    <div className="hidden sm:block flex-1 border-b border-dotted border-graphite/20 mb-1.5"></div>
                    <span className="font-medium text-graphite sm:whitespace-nowrap mt-1 sm:mt-0">{item.price}</span>
                  </li>
                ))}
              </ul>
              {note && (
                <div className="mt-6 pt-4 border-t border-graphite/5">
                  <p className="text-sm text-graphite-light italic">{note}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/ashenofash@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Новая заявка с сайта клиники «Шарм»!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-graphite mb-2">Ваше имя</label>
        <input
          type="text"
          id="name"
          name="Имя"
          required
          className="w-full px-4 py-3 rounded-xl border border-graphite/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-primary/50"
          placeholder="Анна"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-graphite mb-2">Телефон</label>
        <input
          type="tel"
          id="phone"
          name="Телефон"
          required
          className="w-full px-4 py-3 rounded-xl border border-graphite/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-primary/50"
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-graphite mb-2">Комментарий (необязательно)</label>
        <textarea
          id="message"
          name="Комментарий"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-graphite/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-primary/50 resize-none"
          placeholder="Напишите, что вас беспокоит..."
        ></textarea>
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm flex items-start">
          <CheckCircle2 className="w-5 h-5 mr-2 shrink-0" />
          <p>Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">
          <p>Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-graphite text-primary px-8 py-4 rounded-xl text-base font-medium hover:bg-graphite/90 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
      >
        {status === 'submitting' ? (
          <span className="inline-block w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span>
        ) : (
          'Отправить заявку'
        )}
      </button>
      <p className="text-xs text-graphite-light text-center mt-4">
        Нажимая на кнопку, вы даете согласие на обработку персональных данных.
      </p>
    </form>
  );
}

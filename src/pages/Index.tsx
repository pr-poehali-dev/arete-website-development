import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/f2b94142-540f-45b8-bb9d-c953f3eddc94.jpg" 
                alt="ARETÉ" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'О компании', 'Услуги', 'Кейсы', 'Команда', 'Контакты'].map((item) => {
                const sectionId = item === 'Главная' ? 'home' : 
                                  item === 'О компании' ? 'about' :
                                  item === 'Услуги' ? 'services' :
                                  item === 'Кейсы' ? 'cases' :
                                  item === 'Команда' ? 'team' : 'contacts';
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      activeSection === sectionId ? 'text-accent' : 'text-secondary'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-accent hover:bg-accent/90 text-primary font-medium"
            >
              Консультация
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-primary to-primary/95">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display text-secondary mb-6">
                Защищаем ваше настоящее,<br />
                <span className="text-accent">строим уверенное будущее</span>
              </h1>
              <p className="text-xl text-secondary/80 mb-8 max-w-2xl mx-auto font-light">
                Комплексное юридическое сопровождение для вашей семьи и бизнеса. 
                Конфиденциально. Профессионально. Результативно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('contacts')}
                  className="bg-accent hover:bg-accent/90 text-primary font-medium text-lg px-8"
                >
                  Получить консультацию
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('services')}
                  className="border-accent text-accent hover:bg-accent/10 text-lg px-8"
                >
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">
                Философия <span className="text-accent">ARETÉ</span>
              </h2>
              <p className="text-lg text-primary/70 leading-relaxed">
                Слово «Ареté» (ἀρετή) в древнегреческой культуре означало совершенство, доблесть и стремление к высшему благу. 
                Для нас это не просто название — это принцип работы. Мы стремимся обеспечить правовую безопасность 
                и уверенность наших клиентов в самых сложных жизненных ситуациях.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: 'Shield', title: 'Конфиденциальность', desc: 'Абсолютная защита ваших данных и интересов' },
                { icon: 'Users', title: 'Индивидуальный подход', desc: 'Каждый клиент получает персональное решение' },
                { icon: 'Award', title: 'Глубокая экспертиза', desc: 'Многолетний опыт в сложных делах' }
              ].map((item, idx) => (
                <Card key={idx} className="bg-background border-accent/20 hover:border-accent transition-all hover-scale">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name={item.icon as any} className="text-accent" size={32} />
                    </div>
                    <h3 className="text-xl font-display text-primary mb-3">{item.title}</h3>
                    <p className="text-primary/60">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">
                Комплексное решение для вашей<br />
                <span className="text-accent">семьи и бизнеса</span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              {[
                {
                  icon: 'Home',
                  title: 'Защита и приумножение семейного капитала',
                  items: [
                    'Сопровождение сделок с недвижимостью',
                    'Наследственное планирование и споры',
                    'Составление брачных договоров и соглашений',
                    'Оптимизация личных финансов и решение проблем с долговой нагрузкой'
                  ]
                },
                {
                  icon: 'Briefcase',
                  title: 'Юридическое сопровождение бизнеса',
                  items: [
                    'Регистрация и ликвидация компаний',
                    'Абонентское юридическое обслуживание',
                    'Налоговое консультирование и споры',
                    'Санация и финансовое оздоровление бизнеса. Реструктуризация долгов и активов'
                  ]
                },
                {
                  icon: 'Scale',
                  title: 'Разрешение споров и представительство',
                  items: [
                    'Арбитражные споры',
                    'Споры с кредитными организациями',
                    'Защита от взысканий',
                    'Представительство в судах всех инстанций'
                  ]
                }
              ].map((service, idx) => (
                <Card key={idx} className="bg-secondary border-accent/20 hover:border-accent transition-all animate-fade-in">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name={service.icon as any} className="text-accent" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display text-primary mb-4">{service.title}</h3>
                        <ul className="space-y-2">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={18} />
                              <span className="text-primary/70">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">
                Кейсы и <span className="text-accent">отзывы</span>
              </h2>
              <p className="text-secondary/80 text-lg">
                Истории успеха наших клиентов
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Михаил С.',
                  role: 'Владелец бизнеса',
                  text: 'Команда ARETÉ помогла реструктурировать долги компании и сохранить активы. Профессиональный подход и конфиденциальность на высшем уровне.'
                },
                {
                  name: 'Елена К.',
                  role: 'Частный клиент',
                  text: 'Благодарна за помощь в наследственном споре. Деликатно, быстро и с отличным результатом. Рекомендую!'
                },
                {
                  name: 'Андрей П.',
                  role: 'Предприниматель',
                  text: 'Грамотное юридическое сопровождение сделки с недвижимостью. Все риски были учтены и минимизированы.'
                },
                {
                  name: 'Ольга М.',
                  role: 'Частный клиент',
                  text: 'Нашла выход из сложной финансовой ситуации благодаря команде ARETÉ. Чувствую себя защищенной.'
                }
              ].map((review, idx) => (
                <Card key={idx} className="bg-secondary border-accent/20 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                      ))}
                    </div>
                    <p className="text-primary/70 mb-4 italic">"{review.text}"</p>
                    <div>
                      <p className="font-medium text-primary">{review.name}</p>
                      <p className="text-sm text-primary/50">{review.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">
                Наша <span className="text-accent">команда</span>
              </h2>
              <p className="text-primary/70 text-lg">
                Опытные юристы с многолетней практикой
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Александр Петров', role: 'Управляющий партнер', exp: '15+ лет практики' },
                { name: 'Мария Соколова', role: 'Старший юрист', exp: '12+ лет практики' },
                { name: 'Дмитрий Волков', role: 'Юрист по корпоративному праву', exp: '10+ лет практики' }
              ].map((member, idx) => (
                <Card key={idx} className="bg-background border-accent/20 hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-accent" size={48} />
                    </div>
                    <h3 className="text-xl font-display text-primary mb-2">{member.name}</h3>
                    <p className="text-primary/60 mb-1">{member.role}</p>
                    <p className="text-sm text-accent">{member.exp}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">
                  Получить <span className="text-accent">консультацию</span>
                </h2>
                <p className="text-primary/70 text-lg">
                  Оставьте заявку, и мы свяжемся с вами в течение 1 часа
                </p>
              </div>

              <Card className="bg-secondary border-accent/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Ваше имя</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-background focus:border-accent focus:outline-none transition-colors"
                          placeholder="Иван"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Телефон</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-background focus:border-accent focus:outline-none transition-colors"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-background focus:border-accent focus:outline-none transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Опишите вашу ситуацию</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-accent/20 bg-background focus:border-accent focus:outline-none transition-colors resize-none"
                        placeholder="Кратко расскажите о вашей ситуации..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-primary font-medium text-lg"
                    >
                      Отправить заявку
                    </Button>

                    <p className="text-sm text-primary/50 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Icon name="Phone" className="mx-auto mb-3 text-accent" size={32} />
                  <p className="text-primary/70">+7 (495) 123-45-67</p>
                </div>
                <div>
                  <Icon name="Mail" className="mx-auto mb-3 text-accent" size={32} />
                  <p className="text-primary/70">info@arete-law.ru</p>
                </div>
                <div>
                  <Icon name="MapPin" className="mx-auto mb-3 text-accent" size={32} />
                  <p className="text-primary/70">Москва, ул. Пречистенка, 40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-12 border-t border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/f2b94142-540f-45b8-bb9d-c953f3eddc94.jpg" 
                alt="ARETÉ" 
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-secondary/60 text-sm text-center">
              © 2024 ARETÉ. Юридическая компания. Все права защищены.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-secondary/60 hover:text-accent transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-secondary/60 hover:text-accent transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-secondary/60 hover:text-accent transition-colors">
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
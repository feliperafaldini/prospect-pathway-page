import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Users, 
  Target, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  Lightbulb,
  Shield,
  TrendingUp,
  Heart,
  Award,
  Clock
} from "lucide-react";

const SaibaMais = () => {
  const values = [
    {
      icon: Users,
      title: "Comunidade",
      description: "Conectamos estudantes e empresas em uma comunidade próspera e colaborativa.",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Priorizamos a segurança e privacidade dos dados de todos os nossos usuários.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos tecnologia avançada para facilitar o match perfeito entre talentos e oportunidades.",
    },
    {
      icon: Heart,
      title: "Impacto Social",
      description: "Acreditamos no poder da educação e do trabalho para transformar vidas e comunidades.",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Match Inteligente",
      description: "Algoritmo avançado que conecta estudantes às vagas mais adequadas ao seu perfil e interesses.",
      benefits: ["Análise de compatibilidade", "Recomendações personalizadas", "Feedback contínuo"]
    },
    {
      icon: Building2,
      title: "Rede de Empresas",
      description: "Parceria com empresas líderes do mercado que buscam talentos universitários.",
      benefits: ["500+ empresas parceiras", "Vagas exclusivas", "Networking profissional"]
    },
    {
      icon: Award,
      title: "Desenvolvimento",
      description: "Recursos e ferramentas para acelerar o crescimento profissional dos estudantes.",
      benefits: ["Cursos gratuitos", "Mentoria especializada", "Certificações"]
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento",
      description: "Monitoramento do progresso da carreira e suporte contínuo durante a jornada profissional.",
      benefits: ["Relatórios de progresso", "Metas personalizadas", "Suporte dedicado"]
    },
  ];

  const stats = [
    { number: "10,000+", label: "Estudantes cadastrados", description: "De universidades de todo o Brasil" },
    { number: "500+", label: "Empresas parceiras", description: "Startups e grandes corporações" },
    { number: "2,500+", label: "Vagas publicadas", description: "Oportunidades ativas mensalmente" },
    { number: "95%", label: "Taxa de satisfação", description: "Avaliação dos nossos usuários" },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Fundação",
      description: "LinkedU nasce com a missão de conectar estudantes a oportunidades profissionais."
    },
    {
      year: "2024",
      title: "Crescimento",
      description: "Alcançamos mais de 10 mil estudantes e 500 empresas parceiras."
    },
    {
      year: "Futuro",
      title: "Expansão",
      description: "Planejamos expandir para toda a América Latina e implementar IA avançada."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Sobre o 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> LinkedU</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Somos uma plataforma inovadora que conecta estudantes universitários às melhores 
              oportunidades de estágio e emprego, transformando o futuro profissional do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cadastro">
                <Button size="lg" className="bg-gradient-primary">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" size="lg">
                  Como Funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground">
                Democratizar o acesso a oportunidades profissionais de qualidade para estudantes 
                universitários, criando pontes entre o talento acadêmico e as necessidades do 
                mercado de trabalho.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    <strong>Inclusão:</strong> Garantimos que todos os estudantes, independente 
                    de origem social, tenham acesso às melhores oportunidades.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    <strong>Qualidade:</strong> Parceria com empresas comprometidas com o 
                    desenvolvimento profissional dos jovens talentos.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    <strong>Inovação:</strong> Uso de tecnologia avançada para criar matches 
                    precisos entre candidatos e oportunidades.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              LinkedU em Números
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossos resultados refletem o impacto que estamos gerando na vida dos estudantes brasileiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-primary">{stat.number}</div>
                  <h3 className="text-xl font-semibold text-foreground">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O que oferecemos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma completa com ferramentas avançadas para acelerar sua carreia profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-muted-foreground">
              Desde o início, focamos em criar impacto real na vida dos estudantes
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Faça parte da nossa história
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Junte-se aos milhares de estudantes que já transformaram suas carreiras com o LinkedU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cadastro">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SaibaMais;
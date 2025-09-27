import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  Users, 
  Briefcase, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Building2,
  GraduationCap,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Crie seu perfil completo",
      description: "Preencha suas habilidades, experiências e interesses para se destacar no mercado.",
    },
    {
      icon: Target,
      title: "Encontre oportunidades",
      description: "Visualize vagas alinhadas com seu perfil e receba recomendações personalizadas.",
    },
    {
      icon: Building2,
      title: "Faça match com empresas",
      description: "Conheça potenciais empregadores e candidate-se facilmente às melhores oportunidades.",
    },
  ];

  const stats = [
    { number: "10k+", label: "Estudantes ativos" },
    { number: "500+", label: "Empresas parceiras" },
    { number: "2k+", label: "Vagas publicadas" },
    { number: "95%", label: "Taxa de aprovação" },
  ];

  const benefits = [
    "Perfil profissional completo",
    "Match inteligente com vagas",
    "Networking com recrutadores",
    "Dicas de carreira personalizadas",
    "Acompanhamento de candidaturas",
    "Suporte especializado",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Sua carreira
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> começa </span>
                  aqui
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Conectamos estudantes talentosos com empresas que buscam os melhores profissionais. 
                  Encontre estágios e oportunidades que fazem a diferença.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cadastro">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-lg transition-all duration-300">
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

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heroImage}
                  alt="Estudantes e profissionais colaborando"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Como Funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Em três passos simples, conectamos você às melhores oportunidades do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Por que escolher o LinkedU?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Oferecemos uma plataforma completa para impulsionar sua carreira desde a universidade.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/saiba-mais">
                <Button variant="outline" size="lg">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Para Estudantes</h3>
                <p className="text-sm text-muted-foreground">
                  Encontre estágios e oportunidades que aceleram sua carreira profissional.
                </p>
              </Card>

              <Card className="p-6 text-center mt-8">
                <Building2 className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Para Empresas</h3>
                <p className="text-sm text-muted-foreground">
                  Encontre talentos universitários qualificados para sua equipe.
                </p>
              </Card>

              <Card className="p-6 text-center -mt-8">
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Crescimento</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolva suas habilidades com recursos exclusivos e mentoria.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Oportunidades</h3>
                <p className="text-sm text-muted-foreground">
                  Acesso às melhores vagas do mercado brasileiro.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Pronto para dar o próximo passo na sua carreira?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Junte-se a milhares de estudantes que já encontraram suas oportunidades através do LinkedU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cadastro">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Criar Conta Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/vagas">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ver Vagas Disponíveis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

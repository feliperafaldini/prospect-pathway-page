import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  BookOpen, 
  Users, 
  MessageSquare, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  FileText,
  Video,
  Headphones,
  Coffee
} from "lucide-react";

const Recursos = () => {
  const mainResources = [
    {
      icon: BookOpen,
      title: "Central de Conhecimento",
      description: "Biblioteca completa com guias, templates e melhores práticas para acelerar sua carreira.",
      features: ["200+ artigos especializados", "Templates de CV", "Guias de entrevista", "Dicas de networking"],
      category: "Aprendizado",
      level: "Todos os níveis",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Mentoria Especializada",
      description: "Conecte-se com profissionais experientes da sua área para orientação personalizada.",
      features: ["Mentores verificados", "Sessões 1:1", "Feedback especializado", "Planos de carreira"],
      category: "Mentoria",
      level: "Intermediário",
      color: "bg-success/10 text-success"
    },
    {
      icon: TrendingUp,
      title: "Cursos de Desenvolvimento",
      description: "Cursos práticos para desenvolver habilidades técnicas e comportamentais valorizadas pelo mercado.",
      features: ["Certificados reconhecidos", "Projetos práticos", "Instrutores especialistas", "Comunidade ativa"],
      category: "Educação",
      level: "Todos os níveis",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: MessageSquare,
      title: "Comunidade Profissional",
      description: "Participe de discussões, eventos e networking com outros estudantes e profissionais.",
      features: ["Grupos por área", "Eventos semanais", "Networking ativo", "Fóruns especializados"],
      category: "Networking",
      level: "Todos os níveis",
      color: "bg-destructive/10 text-destructive"
    },
  ];

  const additionalResources = [
    {
      icon: FileText,
      title: "Templates e Modelos",
      description: "CVs, cartas de apresentação e portfolios profissionais.",
      link: "#",
    },
    {
      icon: Video,
      title: "Vídeo Aulas",
      description: "Conteúdo audiovisual sobre preparação para entrevistas.",
      link: "#",
    },
    {
      icon: Headphones,
      title: "Podcasts",
      description: "Histórias de sucesso e dicas de carreira semanais.",
      link: "#",
    },
    {
      icon: Coffee,
      title: "Encontros Presenciais",
      description: "Eventos de networking em diversas cidades brasileiras.",
      link: "#",
    },
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Desenvolvedora Frontend",
      company: "Startup Fintech",
      content: "Os recursos do LinkedU foram fundamentais para conseguir minha primeira vaga na área de tech. Os templates de CV e as dicas de entrevista fizeram toda diferença!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Analista de Marketing",
      company: "Agência Digital",
      content: "A mentoria personalizada me ajudou a entender melhor o mercado de marketing digital. Hoje trabalho em uma das melhores agências da cidade.",
      rating: 5
    },
    {
      name: "Julia Santos",
      role: "Designer UX/UI",
      company: "E-commerce Global",
      content: "Os cursos de desenvolvimento complementaram minha formação acadêmica. Aprendi habilidades práticas que uso no dia a dia do trabalho.",
      rating: 5
    },
  ];

  const stats = [
    { number: "1,500+", label: "Horas de conteúdo" },
    { number: "50+", label: "Mentores ativos" },
    { number: "200+", label: "Recursos disponíveis" },
    { number: "95%", label: "Satisfação dos usuários" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Recursos para 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> acelerar </span>
              sua carreira
            </h1>
            <p className="text-xl text-muted-foreground">
              Uma biblioteca completa de ferramentas, cursos e mentorias para impulsionar 
              seu desenvolvimento profissional desde a universidade.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Resources Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Principais Recursos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas completas para todas as etapas da sua jornada profissional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <resource.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {resource.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge className={resource.color}>
                            {resource.category}
                          </Badge>
                          <Badge variant="outline">
                            {resource.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="space-y-2">
                    {resource.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Explorar Recurso
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Recursos Complementares
            </h2>
            <p className="text-xl text-muted-foreground">
              Ferramentas adicionais para enriquecer sua experiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalResources.map((resource, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 mb-4">
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                  <Button variant="ghost" size="sm" className="w-full">
                    Acessar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja como nossos recursos transformaram carreiras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Award className="h-16 w-16 mx-auto opacity-80" />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Acelere sua carreira hoje mesmo
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Tenha acesso completo a todos os recursos, mentorias e cursos que vão 
              transformar sua trajetória profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cadastro">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/saiba-mais">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recursos;
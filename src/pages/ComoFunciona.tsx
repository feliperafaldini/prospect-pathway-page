import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  UserPlus, 
  Search, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Building2,
  Star,
  Award,
  TrendingUp
} from "lucide-react";

const ComoFunciona = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Crie seu perfil completo",
      description: "Cadastre-se gratuitamente e preencha suas informações acadêmicas, habilidades e experiências. Quanto mais completo o perfil, melhor o algoritmo consegue encontrar oportunidades para você.",
      details: [
        "Informações pessoais e acadêmicas",
        "Habilidades técnicas e soft skills",
        "Experiências anteriores e projetos",
        "Preferências de carreira e localização"
      ]
    },
    {
      number: "02",
      icon: Search,
      title: "Encontre oportunidades",
      description: "Nosso algoritmo inteligente analisa seu perfil e recomenda vagas de estágio e emprego que combinam com suas qualificações e interesses. Você também pode buscar ativamente por oportunidades.",
      details: [
        "Recomendações personalizadas",
        "Busca avançada por filtros",
        "Alertas de novas vagas",
        "Score de compatibilidade"
      ]
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Conecte-se com empresas",
      description: "Candidate-se às vagas de interesse e interaja diretamente com recrutadores. Receba feedback, participe de processos seletivos e acompanhe o status das suas candidaturas.",
      details: [
        "Candidatura com um clique",
        "Chat direto com recrutadores",
        "Acompanhamento de status",
        "Feedback dos processos"
      ]
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Conquiste sua vaga",
      description: "Com suporte contínuo e recursos exclusivos, você estará preparado para conquistar a vaga dos seus sonhos e dar o primeiro passo importante na sua carreira profissional.",
      details: [
        "Preparação para entrevistas",
        "Negociação de proposta",
        "Suporte durante o processo",
        "Acompanhamento pós-contratação"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Networking Profissional",
      description: "Conecte-se com profissionais da sua área e construa uma rede valiosa de contatos.",
    },
    {
      icon: Target,
      title: "Match Inteligente",
      description: "Algoritmo avançado que encontra as oportunidades perfeitas para seu perfil.",
    },
    {
      icon: Building2,
      title: "Empresas Verificadas",
      description: "Todas as empresas passam por processo de verificação para garantir oportunidades legítimas.",
    },
    {
      icon: Star,
      title: "Suporte Especializado",
      description: "Equipe dedicada para te ajudar em todas as etapas da sua jornada profissional.",
    },
    {
      icon: Award,
      title: "Recursos Exclusivos",
      description: "Acesso a cursos, mentorias e ferramentas para acelerar seu desenvolvimento.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento de Carreira",
      description: "Monitore seu progresso e receba insights para alavancar sua carreira.",
    },
  ];

  const faqs = [
    {
      question: "O LinkedU é realmente gratuito?",
      answer: "Sim! O LinkedU é 100% gratuito para estudantes. Não cobramos nenhuma taxa para criação de perfil, busca de vagas ou candidaturas."
    },
    {
      question: "Quais tipos de oportunidades posso encontrar?",
      answer: "Oferecemos vagas de estágio, trainee, CLT júnior e freelances em diversas áreas como tecnologia, marketing, design, finanças, recursos humanos e muito mais."
    },
    {
      question: "Como funciona o algoritmo de match?",
      answer: "Nosso algoritmo analisa seu perfil, habilidades, experiências e preferências para recomendar vagas com alta compatibilidade. Quanto mais completo seu perfil, melhores as recomendações."
    },
    {
      question: "Posso me candidatar a quantas vagas quiser?",
      answer: "Sim! Não há limite para candidaturas. Recomendamos focar em oportunidades que realmente interessam para aumentar suas chances de sucesso."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Como 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> funciona </span>
              o LinkedU?
            </h1>
            <p className="text-xl text-muted-foreground">
              Em apenas 4 passos simples, conectamos você às melhores oportunidades 
              de estágio e emprego do mercado brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                      {step.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {index === 0 && (
                    <Link to="/cadastro">
                      <Button size="lg" className="bg-gradient-primary">
                        Começar Agora
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                </div>

                <div className={`${index % 2 === 1 ? 'order-1' : ''}`}>
                  <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que escolher o LinkedU?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos muito mais que uma simples plataforma de vagas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre como funciona o LinkedU
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold">
              Pronto para começar sua jornada?
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

export default ComoFunciona;
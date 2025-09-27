import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Building2,
  HelpCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas.",
      });
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      description: "Nossa equipe responde em até 24h",
      value: "contato@linkedu.com",
      link: "mailto:contato@linkedu.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Atendimento de segunda a sexta",
      value: "+55 (11) 9999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Endereço",
      description: "Nossa sede principal",
      value: "São Paulo, SP - Brasil",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      description: "Atendimento comercial",
      value: "08h às 18h",
      link: "#"
    },
  ];

  const supportCategories = [
    {
      icon: Users,
      title: "Suporte ao Estudante",
      description: "Dúvidas sobre cadastro, perfil e candidaturas",
      topics: ["Criação de conta", "Problemas de login", "Configuração de perfil", "Candidaturas"]
    },
    {
      icon: Building2,
      title: "Suporte Empresarial",
      description: "Para empresas interessadas em parcerias",
      topics: ["Publicar vagas", "Planos corporativos", "Parcerias", "Relatórios"]
    },
    {
      icon: MessageSquare,
      title: "Feedback e Sugestões",
      description: "Compartilhe sua experiência conosco",
      topics: ["Melhorias na plataforma", "Novas funcionalidades", "Bugs reportados", "Elogios"]
    },
    {
      icon: HelpCircle,
      title: "Dúvidas Gerais",
      description: "Informações sobre a plataforma",
      topics: ["Como funciona", "Planos e preços", "Recursos disponíveis", "Política de privacidade"]
    },
  ];

  const faqs = [
    {
      question: "Como posso alterar as informações do meu perfil?",
      answer: "Acesse sua conta, vá em 'Meu Perfil' e clique em 'Editar'. Você pode alterar suas informações acadêmicas, habilidades e experiências a qualquer momento."
    },
    {
      question: "Por que não estou recebendo recomendações de vagas?",
      answer: "Certifique-se de que seu perfil está completo (100%) e que você definiu suas preferências de localização e área de interesse nas configurações."
    },
    {
      question: "Como funciona o processo de candidatura?",
      answer: "Clique em 'Candidatar-se' na vaga de interesse. Seu perfil será enviado automaticamente para a empresa, que entrará em contato se houver interesse."
    },
    {
      question: "O LinkedU é realmente gratuito?",
      answer: "Sim! Todas as funcionalidades principais são gratuitas para estudantes, incluindo criação de perfil, busca de vagas e candidaturas."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Entre em 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> contato </span>
              conosco
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para ajudar você a acelerar sua carreira. Nossa equipe está 
              pronta para responder suas dúvidas e oferecer suporte personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                  <a 
                    href={info.link} 
                    className="text-primary hover:underline font-medium block"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Send className="h-6 w-6 text-primary" />
                  <span>Envie sua mensagem</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Suporte ao Estudante</SelectItem>
                        <SelectItem value="company">Suporte Empresarial</SelectItem>
                        <SelectItem value="feedback">Feedback e Sugestões</SelectItem>
                        <SelectItem value="general">Dúvidas Gerais</SelectItem>
                        <SelectItem value="technical">Suporte Técnico</SelectItem>
                        <SelectItem value="partnership">Parcerias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Resumo do seu contato"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva sua dúvida ou sugestão em detalhes..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Categories */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Categorias de Suporte</h2>
              <div className="space-y-4">
                {supportCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-primary p-2 rounded-lg flex-shrink-0">
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {category.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {category.topics.map((topic, idx) => (
                              <span 
                                key={idx}
                                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
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
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Não encontrou o que procurava?
            </h2>
            <p className="text-xl opacity-90">
              Nossa equipe está sempre disponível para ajudar você com qualquer dúvida 
              sobre a plataforma ou sua jornada profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contato@linkedu.com">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Enviar E-mail Direto
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:+5511999999999">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ligar Agora
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
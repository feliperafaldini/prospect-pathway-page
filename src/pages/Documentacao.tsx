import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { 
  FileText, 
  Code, 
  Palette, 
  Database,
  Settings,
  Globe,
  Shield,
  Zap,
  GitBranch,
  Smartphone
} from "lucide-react";

const Documentacao = () => {
  const sections = [
    {
      icon: Code,
      title: "Arquitetura Técnica",
      description: "Stack tecnológico e estrutura do projeto",
      topics: [
        "React 18 + TypeScript",
        "Vite para build e desenvolvimento",
        "React Router para navegação",
        "Tailwind CSS para estilização",
        "shadcn/ui para componentes",
        "Lucide React para ícones"
      ]
    },
    {
      icon: Palette,
      title: "Design System",
      description: "Sistema de design e tokens visuais",
      topics: [
        "Paleta de cores HSL definida em index.css",
        "Tokens semânticos (primary, secondary, success)",
        "Gradientes profissionais",
        "Sombras e transições consistentes",
        "Componentes reutilizáveis",
        "Tema escuro compatível"
      ]
    },
    {
      icon: Database,
      title: "Estrutura de Dados",
      description: "Modelos e estruturas de dados utilizados",
      topics: [
        "Usuários (estudantes e empresas)",
        "Vagas com filtros e categorias",
        "Sistema de match por algoritmo",
        "Candidaturas e status",
        "Empresas verificadas",
        "Métricas e analytics"
      ]
    },
    {
      icon: Globe,
      title: "Páginas e Rotas",
      description: "Estrutura de navegação e páginas",
      topics: [
        "/ - Landing page principal",
        "/login - Autenticação de usuários",
        "/cadastro - Registro de novos usuários",
        "/vagas - Listagem de oportunidades",
        "/saiba-mais - Sobre a plataforma",
        "/como-funciona - Processo explicativo"
      ]
    }
  ];

  const modifications = [
    {
      file: "src/index.css",
      description: "Design system principal com tokens de cores, gradientes e sombras",
      changes: [
        "Adicionar novas cores no formato HSL",
        "Modificar gradientes existentes",
        "Ajustar sombras e transições",
        "Customizar tokens para modo escuro"
      ]
    },
    {
      file: "tailwind.config.ts",
      description: "Configuração do Tailwind CSS com tokens customizados",
      changes: [
        "Estender cores com novos tokens",
        "Adicionar gradientes personalizados",
        "Configurar sombras customizadas",
        "Definir transições específicas"
      ]
    },
    {
      file: "src/components/ui/button.tsx",
      description: "Componente de botão com variantes customizadas",
      changes: [
        "Criar novas variantes (hero, success, outline)",
        "Ajustar cores usando tokens semânticos",
        "Modificar tamanhos e espaçamentos",
        "Adicionar estados hover e focus"
      ]
    },
    {
      file: "src/components/Header.tsx",
      description: "Cabeçalho principal com navegação",
      changes: [
        "Adicionar novos links de navegação",
        "Modificar logo e branding",
        "Ajustar responsividade",
        "Customizar menu mobile"
      ]
    },
    {
      file: "src/pages/",
      description: "Páginas individuais da aplicação",
      changes: [
        "Modificar conteúdo e textos",
        "Ajustar layout e componentes",
        "Adicionar novas seções",
        "Customizar formulários e inputs"
      ]
    }
  ];

  const deploymentSteps = [
    {
      step: "1",
      title: "Build da Aplicação",
      description: "npm run build - Gera build otimizado"
    },
    {
      step: "2", 
      title: "Deploy no Lovable",
      description: "Usar botão 'Publish' no painel do Lovable"
    },
    {
      step: "3",
      title: "Domínio Customizado",
      description: "Configurar domínio próprio nas configurações"
    },
    {
      step: "4",
      title: "Monitoramento",
      description: "Acompanhar métricas e performance"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header Section */}
        <section className="py-12 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Documentação Técnica
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guia completo para modificação e manutenção da plataforma LinkedU
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Vite</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Visão Geral da Arquitetura
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{section.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-foreground text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modification Guide */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Guia de Modificações
              </h2>
              <p className="text-xl text-muted-foreground">
                Como modificar componentes e estilos principais
              </p>
            </div>

            <div className="space-y-6">
              {modifications.map((mod, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-primary text-white">
                    <div className="flex items-center space-x-3">
                      <Code className="h-6 w-6" />
                      <div>
                        <CardTitle className="text-white">{mod.file}</CardTitle>
                        <p className="text-white/80 text-sm">{mod.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">Modificações possíveis:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {mod.changes.map((change, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Settings className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{change}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design System Guide */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Sistema de Design
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-6 w-6 text-primary" />
                    <span>Paleta de Cores</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                      <div>
                        <p className="font-medium">Primary Blue</p>
                        <p className="text-sm text-muted-foreground">hsl(210 100% 47%)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-success rounded-lg"></div>
                      <div>
                        <p className="font-medium">Success Green</p>
                        <p className="text-sm text-muted-foreground">hsl(142 76% 36%)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-lg"></div>
                      <div>
                        <p className="font-medium">Secondary Gray</p>
                        <p className="text-sm text-muted-foreground">hsl(215 16% 47%)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span>Gradientes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
                      <div>
                        <p className="font-medium">Primary Gradient</p>
                        <p className="text-sm text-muted-foreground">Blue to Dark Blue</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-success rounded-lg"></div>
                      <div>
                        <p className="font-medium">Success Gradient</p>
                        <p className="text-sm text-muted-foreground">Green to Dark Green</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-hero rounded-lg"></div>
                      <div>
                        <p className="font-medium">Hero Gradient</p>
                        <p className="text-sm text-muted-foreground">Blue to Green</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Deployment Guide */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Deploy e Publicação
              </h2>
              <p className="text-xl text-muted-foreground">
                Passos para publicar alterações na plataforma
              </p>
            </div>

            <div className="space-y-6">
              {deploymentSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Boas Práticas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Segurança</h3>
                <p className="text-muted-foreground text-sm">
                  Sempre validar inputs, usar tokens semânticos e seguir práticas de segurança web.
                </p>
              </Card>

              <Card className="text-center p-6">
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Responsividade</h3>
                <p className="text-muted-foreground text-sm">
                  Testar em diferentes dispositivos e garantir experiência consistente.
                </p>
              </Card>

              <Card className="text-center p-6">
                <GitBranch className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Versionamento</h3>
                <p className="text-muted-foreground text-sm">
                  Usar git para controle de versão e fazer commits descritivos das mudanças.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nossa documentação está sempre sendo atualizada. Para dúvidas específicas, entre em contato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:dev@linkedu.com" className="inline-block">
                <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6" />
                      <span>dev@linkedu.com</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Documentacao;
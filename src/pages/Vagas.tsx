import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building2,
  Filter,
  Heart,
  BookOpen
} from "lucide-react";

const Vagas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const vagas = [
    {
      id: 1,
      title: "Desenvolvedor Frontend React",
      company: "TechStart Brasil",
      location: "São Paulo, SP",
      type: "Estágio",
      salary: "R$ 1.800",
      period: "Híbrido",
      description: "Oportunidade para desenvolver interfaces modernas com React, TypeScript e Tailwind CSS.",
      requirements: ["React", "TypeScript", "CSS", "Git"],
      posted: "2 dias atrás",
      applicants: 15,
      match: 95,
    },
    {
      id: 2,
      title: "Analista de Marketing Digital Jr",
      company: "Agência Criativa",
      location: "Rio de Janeiro, RJ",
      type: "Estágio",
      salary: "R$ 1.500",
      period: "Presencial",
      description: "Desenvolvimento de campanhas digitais e análise de métricas para grandes marcas.",
      requirements: ["Marketing Digital", "Google Ads", "Analytics", "Redes Sociais"],
      posted: "1 dia atrás",
      applicants: 23,
      match: 88,
    },
    {
      id: 3,
      title: "Desenvolvedor Full Stack",
      company: "Startup Fintech",
      location: "Belo Horizonte, MG",
      type: "CLT Júnior",
      salary: "R$ 4.500",
      period: "Remoto",
      description: "Desenvolvimento de aplicações financeiras usando Node.js, React e PostgreSQL.",
      requirements: ["Node.js", "React", "PostgreSQL", "API REST"],
      posted: "3 dias atrás",
      applicants: 31,
      match: 92,
    },
    {
      id: 4,
      title: "Designer UX/UI",
      company: "E-commerce Global",
      location: "Florianópolis, SC",
      type: "Estágio",
      salary: "R$ 2.000",
      period: "Híbrido",
      description: "Criação de interfaces intuitivas e experiências digitais memoráveis.",
      requirements: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      posted: "1 dia atrás",
      applicants: 18,
      match: 85,
    },
    {
      id: 5,
      title: "Analista de Dados Jr",
      company: "Consultoria Analytics",
      location: "Porto Alegre, RS",
      type: "CLT Júnior",
      salary: "R$ 3.800",
      period: "Presencial",
      description: "Análise de dados e criação de dashboards para suporte à tomada de decisões.",
      requirements: ["Python", "SQL", "Power BI", "Estatística"],
      posted: "4 dias atrás",
      applicants: 27,
      match: 78,
    },
    {
      id: 6,
      title: "Estagiário em Recursos Humanos",
      company: "Multinacional Tech",
      location: "São Paulo, SP",
      type: "Estágio",
      salary: "R$ 1.600",
      period: "Híbrido",
      description: "Apoio em processos de recrutamento e seleção de talentos tech.",
      requirements: ["Comunicação", "Excel", "Recrutamento", "Psicologia"],
      posted: "5 dias atrás",
      applicants: 42,
      match: 72,
    },
  ];

  const filteredVagas = vagas.filter(vaga => 
    vaga.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-success";
    if (match >= 80) return "text-primary";
    return "text-secondary";
  };

  const getTypeColor = (type: string) => {
    if (type === "Estágio") return "bg-primary/10 text-primary";
    return "bg-success/10 text-success";
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header Section */}
        <section className="py-12 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Encontre sua próxima oportunidade
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Descubra vagas de estágio e emprego que combinam com seu perfil
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por cargo ou empresa..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as cidades</SelectItem>
                    <SelectItem value="sp">São Paulo, SP</SelectItem>
                    <SelectItem value="rj">Rio de Janeiro, RJ</SelectItem>
                    <SelectItem value="bh">Belo Horizonte, MG</SelectItem>
                    <SelectItem value="poa">Porto Alegre, RS</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as áreas</SelectItem>
                    <SelectItem value="tech">Tecnologia</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="rh">Recursos Humanos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground">
                {filteredVagas.length} vagas encontradas
              </h2>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>

            <div className="grid gap-6">
              {filteredVagas.map((vaga) => (
                <Card key={vaga.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {vaga.title}
                          </CardTitle>
                          <Badge className={getTypeColor(vaga.type)}>
                            {vaga.type}
                          </Badge>
                        </div>
                        <div className="flex items-center text-muted-foreground space-x-4">
                          <div className="flex items-center">
                            <Building2 className="h-4 w-4 mr-1" />
                            {vaga.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {vaga.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {vaga.posted}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center text-muted-foreground mb-1">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {vaga.salary}
                          </div>
                          <div className={`text-sm font-medium ${getMatchColor(vaga.match)}`}>
                            {vaga.match}% compatível
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {vaga.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {vaga.requirements.map((req, index) => (
                        <Badge key={index} variant="secondary">
                          {req}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{vaga.applicants} candidatos</span>
                        <span className="mx-2">•</span>
                        <span>{vaga.period}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Ver Detalhes
                        </Button>
                        <Button>
                          Candidatar-se
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Carregar mais vagas
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Vagas;
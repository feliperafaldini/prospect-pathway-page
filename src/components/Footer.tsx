import { Link } from "react-router-dom";
import { Briefcase, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Plataforma",
      links: [
        { name: "Início", href: "/" },
        { name: "Como Funciona", href: "/como-funciona" },
        { name: "Vagas", href: "/vagas" },
        { name: "Recursos", href: "/recursos" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "/suporte" },
        { name: "Contato", href: "/contato" },
        { name: "Documentação", href: "/documentacao" },
        { name: "Status", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "/saiba-mais" },
        { name: "Carreiras", href: "#" },
        { name: "Imprensa", href: "#" },
        { name: "Parcerias", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacidade", href: "#" },
        { name: "Termos de Uso", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "LGPD", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Email", href: "mailto:contato@linkedu.com", icon: Mail },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">LinkedU</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Conectamos estudantes talentosos com empresas que buscam os melhores profissionais. 
              Sua carreira começa aqui.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-background rounded-lg"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 LinkedU. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Feito com ❤️ para estudantes brasileiros
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
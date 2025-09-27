import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import SaibaMais from "./pages/SaibaMais";
import Vagas from "./pages/Vagas";
import ComoFunciona from "./pages/ComoFunciona";
import Recursos from "./pages/Recursos";
import Contato from "./pages/Contato";
import Documentacao from "./pages/Documentacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/saiba-mais" element={<SaibaMais />} />
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/documentacao" element={<Documentacao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Team from "./pages/Team";
import AITraining from "./pages/AITraining";
import MaatwerkAutomatiseringen from "./pages/MaatwerkAutomatiseringen";
import BeterzoOplossingen from "./pages/BeterzoOplossingen";
import ToetsVragenGenerator from "./pages/ToetsVragenGenerator";
import NotFound from "./pages/NotFound";
import TelefoonService from "./pages/TelefoonService";
import LesstofUitwerken from "./pages/LesstofUitwerken";
import Privacy from "./pages/Privacy";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/ai-training" element={<AITraining />} />
          <Route path="/maatwerk-automatiseringen" element={<MaatwerkAutomatiseringen />} />
          <Route path="/beterzo-oplossingen" element={<BeterzoOplossingen />} />
          <Route path="/toetsvragen-generator" element={<ToetsVragenGenerator />} />
          <Route path="/telefoon-service" element={<TelefoonService />} />
          <Route path="/lesstof-uitwerken" element={<LesstofUitwerken />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

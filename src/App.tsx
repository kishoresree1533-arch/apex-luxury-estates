import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Construction from "./pages/Construction.tsx";
import Estate from "./pages/Estate.tsx";
import Interiors from "./pages/Interiors.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import PropertiesPage from "./pages/PropertiesPage.tsx";
import Calculator from "./pages/Calculator.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/about" element={<About />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/estate" element={<Estate />} />
          <Route path="/interiors" element={<Interiors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/properties-catalog" element={<PropertiesPage />} />
          <Route path="/calculator" element={<Calculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

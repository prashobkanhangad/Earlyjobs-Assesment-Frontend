
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Assessments from "./pages/Assessments";
import Assessment from "./pages/Assessment";
import VideoQuestion from "./pages/VideoQuestion";
import Results from "./pages/Results";
import Jobs from "./pages/Jobs";
import BulkApplying from "./pages/BulkApplying";
import BulkApplyingVerify from "./pages/BulkApplyingVerify";
import BulkApplyingPayment from "./pages/BulkApplyingPayment";
import BulkApplyingSuccess from "./pages/BulkApplyingSuccess";
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
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessment/:id" element={<Assessment />} />
          <Route path="/video-question/:id" element={<VideoQuestion />} />
          <Route path="/results/:id" element={<Results />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bulk-applying" element={<BulkApplying />} />
          <Route path="/bulk-applying/verify/:count" element={<BulkApplyingVerify />} />
          <Route path="/bulk-applying/payment/:count" element={<BulkApplyingPayment />} />
          <Route path="/bulk-applying/success" element={<BulkApplyingSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

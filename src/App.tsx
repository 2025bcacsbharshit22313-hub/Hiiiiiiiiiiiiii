import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ChatbotDemoSection } from '@/components/sections/ChatbotDemoSection';
import { LanguageSection } from '@/components/sections/LanguageSection';
import { ImpactFutureSection } from '@/components/sections/ImpactFutureSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { FloatingChatButton } from '@/components/chatbot/FloatingChatButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Section */}
        <SolutionSection />

        {/* Chatbot Demo Section */}
        <ChatbotDemoSection />

        {/* Language Section */}
        <LanguageSection />

        {/* Impact & Future Section */}
        <ImpactFutureSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chat Button */}
      <FloatingChatButton />
    </div>
  );
}

export default App;

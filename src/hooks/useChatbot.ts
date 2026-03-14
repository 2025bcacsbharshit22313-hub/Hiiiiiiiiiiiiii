import { useState, useCallback, useRef, useEffect } from 'react';
import type { Message } from '@/types';
import { supportedLanguages } from '@/lib/chatbotLogic';

export function useChatbot() {

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: 'Hello! I am Sehat-Saathi, your AI health companion. How can I help you today?\n\nYou can ask me about:\n• Dengue symptoms\n• Fever treatment\n• Malaria prevention\n• Diabetes symptoms\n• Cold & cough remedies\n• General health tips',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState('en');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(async (text: string) => {

    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {

      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text,
          language: language
        })
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't connect to the AI service. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);

    }

    setIsTyping(false);

  }, [language]);

  const clearChat = useCallback(() => {

    setMessages([
      {
        id: 'welcome',
        text: 'Hello! I am Sehat-Saathi, your AI health companion. How can I help you today?',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);

  }, []);

  const changeLanguage = useCallback((langCode: string) => {

    setLanguage(langCode);

    const lang = supportedLanguages.find(l => l.code === langCode);

    if (lang) {

      const welcomeMessages: { [key: string]: string } = {

        en: 'Hello! I am Sehat-Saathi, your AI health companion. How can I help you today?',

        hi: 'नमस्ते! मैं सेहत-साथी हूं, आपका AI स्वास्थ्य साथी। मैं आज आपकी कैसे मदद कर सकता हूं?',

        bn: 'হ্যালো! আমি সেহত-সাথী, আপনার AI স্বাস্থ্য সঙ্গী। আমি আজ আপনাকে কীভাবে সাহায্য করতে পারি?',

        ta: 'வணக்கம்! நான் செஹத்-சாதி, உங்கள் AI சுகாதார துணை. இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?',

        te: 'హలో! నేను సెహత్-సాథి, మీ AI ఆరోగ్య సహచరుడిని. నేను ఈరోజు మీకు ఎలా సహాయం చేయగలను?',

        mr: 'नमस्कार! मी सेहत-साथी आहे, तुमचा AI आरोग्य साथी. मी आज तुम्हाला कशी मदत करू शकतो?',

        gu: 'હેલો! હું સેહત-સાથી છું, તમારો AI આરોગ્ય સાથી. હું આજે તમને કેવી રીતે મદદ કરી શકું?',

        kn: 'ಹಲೋ! ನಾನು ಸೆಹತ್-ಸಾಥಿ, ನಿಮ್ಮ AI ಆರೋಗ್ಯ ಸಂಗಾತಿ. ನಾನು ಇಂದು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',

      };

      setMessages(() => [

        {
          id: 'welcome-' + langCode,
          text: welcomeMessages[langCode] || welcomeMessages['en'],
          sender: 'bot',
          timestamp: new Date(),
        },

      ]);
    }

  }, []);

  return {
    messages,
    isTyping,
    language,
    supportedLanguages,
    sendMessage,
    clearChat,
    changeLanguage,
    messagesEndRef,
  };

}
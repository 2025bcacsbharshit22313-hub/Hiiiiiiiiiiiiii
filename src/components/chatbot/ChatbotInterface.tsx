import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Minimize2, Maximize2, Trash2, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useChatbot } from '@/hooks/useChatbot';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { SuggestionChips } from './SuggestionChips';

interface ChatbotInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  isFloating?: boolean;
}

export function ChatbotInterface({ isOpen, onClose, isFloating = false }: ChatbotInterfaceProps) {
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, isTyping, language, supportedLanguages, sendMessage, clearChat, changeLanguage, messagesEndRef } = useChatbot();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const message = input;
    setInput('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionSelect = (suggestion: string) => {
    sendMessage(suggestion);
  };

  if (!isOpen) return null;

  const content = (
    <motion.div
      initial={isFloating ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 0, y: 50 }}
      animate={isFloating ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, y: 0 }}
      exit={isFloating ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col ${
        isFloating
          ? 'w-full h-full'
          : 'w-full max-w-4xl mx-auto h-[600px]'
      }`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1E88E5] to-[#43A047] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🩺</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">Sehat-Saathi</h3>
            <p className="text-white/70 text-xs">AI Health Assistant</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <Select value={language} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[130px] bg-white/20 border-white/30 text-white text-sm">
              <Languages className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {supportedLanguages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.nativeName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Chat */}
          <Button
            variant="ghost"
            size="icon"
            onClick={clearChat}
            className="text-white/70 hover:text-white hover:bg-white/20"
          >
            <Trash2 className="w-4 h-4" />
          </Button>

          {/* Minimize/Maximize */}
          {isFloating && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/70 hover:text-white hover:bg-white/20"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
          )}

          {/* Close */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white/70 hover:text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Chat Content */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <MessageBubble key={message.id} message={message} index={index} />
                ))}
                
                {isTyping && <TypingIndicator />}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestion Chips */}
              {!isTyping && messages.length < 3 && (
                <SuggestionChips onSelect={handleSuggestionSelect} language={language} />
              )}
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your health query..."
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E88E5]/50 focus:border-[#1E88E5] transition-all"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="h-12 w-12 bg-gradient-to-r from-[#1E88E5] to-[#43A047] hover:from-[#1976D2] hover:to-[#388E3C] rounded-xl disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
              
              <p className="text-xs text-gray-400 mt-2 text-center">
                This is for awareness only. Consult a doctor for medical advice.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (isFloating) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-lg max-h-[80vh]">
          {content}
        </div>
      </div>
    );
  }

  return content;
}

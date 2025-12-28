"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { useChat } from '@/hooks/use-chat';
import { ChatMessage } from './chat-message';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, isLoading, sendMessage } = useChat();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current && isOpen) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isOpen]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      sendMessage(message);
      setMessage('');
    }
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggleChat}
                className={cn(
                  "h-12 w-12 rounded-full shadow-lg",
                  isOpen ? "bg-muted hover:bg-muted/80" : "bg-primary hover:bg-primary/90"
                )}
                aria-label={isOpen ? "Close chat" : "Open chat"}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <MessageSquare className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{isOpen ? 'Close chat' : 'Ask me anything'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 rounded-lg overflow-hidden shadow-xl bg-card border border-border"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between bg-muted p-3 border-b border-border">
              <h3 className="font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Assistant
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-col h-96">
              <ScrollArea className="flex-grow p-3" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center text-muted-foreground text-sm py-8">
                      <p className="mb-2">👋 Hi there!</p>
                      <p>Ask me anything about my skills, projects, or experience.</p>
                    </div>
                  ) : (
                    messages.map((msg, i) => (
                      <ChatMessage key={i} message={msg} />
                    ))
                  )}
                  
                  {isLoading && (
                    <div className="flex gap-2 items-center text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <form 
                onSubmit={handleSubmit}
                className="p-3 border-t border-border flex items-end gap-2"
              >
                <Textarea
                  ref={inputRef}
                  placeholder="Type your message..."
                  className="min-h-10 max-h-32 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!message.trim() || isLoading}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
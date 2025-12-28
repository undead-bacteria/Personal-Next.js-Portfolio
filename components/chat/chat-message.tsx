"use client"

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Message } from '@/hooks/use-chat';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex gap-2 items-start",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="flex-shrink-0 rounded-full h-8 w-8 bg-primary/10 flex items-center justify-center">
          <Bot className="h-4 w-4 text-primary" />
        </div>
      )}
      
      <div
        className={cn(
          "rounded-lg px-3 py-2 text-sm max-w-[85%]",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        {message.content}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 rounded-full h-8 w-8 bg-secondary/20 flex items-center justify-center">
          <User className="h-4 w-4" />
        </div>
      )}
    </motion.div>
  );
}
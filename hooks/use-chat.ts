"use client"

import { useState, useEffect, useCallback } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Load messages from localStorage on initial mount
  useEffect(() => {
    const storedMessages = localStorage.getItem('chat-messages');
    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (e) {
        console.error('Failed to parse stored messages', e);
      }
    }
  }, []);
  
  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chat-messages', JSON.stringify(messages));
    }
  }, [messages]);
  
  const sendMessage = useCallback(async (content: string) => {
    // Add the user message to the chat
    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    try {
      // Send the message to the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const data = await response.json();
      
      // Add the assistant's response to the chat
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add an error message
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const clearMessages = useCallback(() => {
    setMessages([]);
    localStorage.removeItem('chat-messages');
  }, []);
  
  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
  };
}
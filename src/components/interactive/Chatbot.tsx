import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, Calendar, ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface ChatbotProps {
  onOpenConsultationModal: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickActions?: Array<{ label: string; action: string; payload?: string }>;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenConsultationModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [leadStep, setLeadStep] = useState<'idle' | 'name' | 'phone' | 'type' | 'location' | 'done'>('idle');
  const [leadData, setLeadData] = useState({ name: '', phone: '', type: '', location: '', note: '' });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Welcome to Capsule Company 👋\nHow can we help create your space?',
      timestamp: 'Just now',
      quickActions: [
        { label: 'CONSTRUCTION', action: 'service', payload: 'construction' },
        { label: 'INTERIORS', action: 'service', payload: 'interiors' },
        { label: 'EXTERIORS', action: 'service', payload: 'exteriors' },
        { label: 'MODULAR KITCHEN', action: 'service', payload: 'kitchen' },
        { label: 'CARPENTRY', action: 'service', payload: 'carpentry' },
        { label: 'GET FREE CONSULTATION', action: 'lead_start' },
        { label: 'FREE SITE VISIT', action: 'lead_start' },
        { label: 'WHATSAPP', action: 'whatsapp' },
        { label: 'CALL US', action: 'call' },
      ],
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const addMessage = (sender: 'bot' | 'user', text: string, quickActions?: Message['quickActions']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickActions,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleAction = (action: string, label: string, payload?: string) => {
    // Show user choice
    addMessage('user', label);

    setTimeout(() => {
      switch (action) {
        case 'service':
          if (payload === 'construction') {
            addMessage(
              'bot',
              'We handle complete residential & commercial construction, structural civil works, RCC framing, and masonry in Bengaluru with uncompromised engineering quality.',
              [
                { label: 'Schedule Site Visit', action: 'lead_start' },
                { label: 'Chat on WhatsApp', action: 'whatsapp' },
              ]
            );
          } else if (payload === 'interiors') {
            addMessage(
              'bot',
              'Our turnkey interior solutions include modular kitchens, custom wardrobes, POP false ceilings, electrical, luxury lighting, and Italian marble flooring.',
              [
                { label: 'Get Free Interior Quote', action: 'lead_start' },
                { label: 'View Modular Kitchens', action: 'service', payload: 'kitchen' },
              ]
            );
          } else if (payload === 'exteriors') {
            addMessage(
              'bot',
              'We craft contemporary residential elevations, exterior facade panelling, weather-resistant textures, structural glazing, and architectural outdoor spaces.',
              [{ label: 'Request Exterior Assessment', action: 'lead_start' }]
            );
          } else if (payload === 'kitchen') {
            addMessage(
              'bot',
              'Our customized modular kitchens feature smart ergonomic layouts, waterproof plywood, soft-close German fittings, and luxury countertops built for everyday comfort.',
              [{ label: 'Book Kitchen Consultation', action: 'lead_start' }]
            );
          } else if (payload === 'carpentry') {
            addMessage(
              'bot',
              'Expert carpentry crafted with precision, built to last. We craft bespoke furniture, custom wardrobes, wooden doors, and acoustic wall panels.',
              [{ label: 'Discuss Carpentry Needs', action: 'lead_start' }]
            );
          }
          break;

        case 'lead_start':
          setLeadStep('name');
          addMessage('bot', "Excellent! Let's arrange your Free Consultation & Site Visit. What is your Full Name?");
          break;

        case 'whatsapp':
          window.open(
            `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`,
            '_blank'
          );
          addMessage('bot', 'Opening WhatsApp to connect with our team directly.');
          break;

        case 'call':
        case 'call_1':
          window.location.href = `tel:${companyConfig.phones[0].raw}`;
          addMessage('bot', `Dialing Line 1: ${companyConfig.phones[0].display}\n(Also available on Line 2: ${companyConfig.phones[1].display} & Line 3: ${companyConfig.phones[2].display})`);
          break;

        case 'call_2':
          window.location.href = `tel:${companyConfig.phones[1].raw}`;
          addMessage('bot', `Dialing Line 2: ${companyConfig.phones[1].display}`);
          break;

        case 'call_3':
          window.location.href = `tel:${companyConfig.phones[2].raw}`;
          addMessage('bot', `Dialing Line 3: ${companyConfig.phones[2].display}`);
          break;

        default:
          addMessage('bot', 'How else may we assist you today?', initialMessages[0].quickActions);
      }
    }, 400);
  };

  const handleSendInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue('');
    addMessage('user', userText);

    // If capturing lead information step by step:
    if (leadStep === 'name') {
      setLeadData((prev) => ({ ...prev, name: userText }));
      setLeadStep('phone');
      setTimeout(() => {
        addMessage('bot', `Nice to meet you, ${userText}! What is your 10-digit Phone Number?`);
      }, 500);
      return;
    }

    if (leadStep === 'phone') {
      setLeadData((prev) => ({ ...prev, phone: userText }));
      setLeadStep('type');
      setTimeout(() => {
        addMessage('bot', 'Got it. Which service are you interested in?', [
          { label: 'Construction', action: 'lead_type_select', payload: 'Construction' },
          { label: 'Interiors', action: 'lead_type_select', payload: 'Interiors' },
          { label: 'Exteriors', action: 'lead_type_select', payload: 'Exteriors' },
          { label: 'Renovation', action: 'lead_type_select', payload: 'Renovation' },
        ]);
      }, 500);
      return;
    }

    if (leadStep === 'type') {
      setLeadData((prev) => ({ ...prev, type: userText }));
      setLeadStep('location');
      setTimeout(() => {
        addMessage('bot', 'Where is your project located in Bengaluru (e.g., Hebbal, Yelahanka, Whitefield)?');
      }, 500);
      return;
    }

    if (leadStep === 'location') {
      const finalData = { ...leadData, location: userText };
      setLeadData(finalData);
      setLeadStep('done');

      // Save locally or dispatch lead
      try {
        const stored = JSON.parse(localStorage.getItem('capsule_leads') || '[]');
        stored.push({ ...finalData, timestamp: new Date().toISOString(), source: 'chatbot' });
        localStorage.setItem('capsule_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage disabled', err);
      }

      setTimeout(() => {
        addMessage(
          'bot',
          `Thank you ${finalData.name}! 🎉 Your request for a Free Consultation in ${userText} has been recorded. Our senior project lead will contact you at ${finalData.phone} shortly.`,
          [
            { label: 'Chat on WhatsApp Now', action: 'whatsapp' },
            { label: 'Call Office Directly', action: 'call' },
          ]
        );
      }, 600);
      return;
    }

    // Default response logic if not in guided flow
    setTimeout(() => {
      const lower = userText.toLowerCase();
      if (lower.includes('cost') || lower.includes('price') || lower.includes('budget') || lower.includes('quote')) {
        addMessage(
          'bot',
          'At Capsule Company, we stand by 100% Price Transparency. We provide detailed itemized BOQs without hidden charges after a site assessment.',
          [{ label: 'Request Free Site Visit', action: 'lead_start' }]
        );
      } else if (lower.includes('address') || lower.includes('office') || lower.includes('where')) {
        addMessage(
          'bot',
          `Our office is located at:\n${companyConfig.addressFull}\nNear Outer Ring Road, Hebbal Kempapura.`,
          [{ label: 'View On Google Maps', action: 'map' }]
        );
      } else if (lower.includes('phone') || lower.includes('call') || lower.includes('contact') || lower.includes('number')) {
        addMessage(
          'bot',
          `You can reach Capsule Company at any of our 3 direct lines:\n1. ${companyConfig.phones[0].display}\n2. ${companyConfig.phones[1].display}\n3. ${companyConfig.phones[2].display}`,
          [
            { label: `Call Line 1 (${companyConfig.phones[0].number})`, action: 'call_1' },
            { label: `Call Line 2 (${companyConfig.phones[1].number})`, action: 'call_2' },
            { label: `Call Line 3 (${companyConfig.phones[2].number})`, action: 'call_3' },
          ]
        );
      } else {
        addMessage(
          'bot',
          "Thank you for your message. Would you like to schedule a Free Site Visit or speak with an engineer right now?",
          [
            { label: 'Book Free Consultation', action: 'lead_start' },
            { label: 'WhatsApp Us', action: 'whatsapp' },
            { label: 'Call Us Now', action: 'call' },
          ]
        );
      }
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-brand-black hover:bg-brand-copper text-white rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-4 focus:ring-brand-copper/30 group"
          aria-label={isOpen ? 'Close Space Maker Chatbot' : 'Open Space Maker Chatbot'}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6 text-brand-ivory group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-copper rounded-full ring-2 ring-brand-black" />
            </div>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-40 w-[92vw] sm:w-96 max-w-sm h-[520px] max-h-[82vh] bg-brand-ivory border border-brand-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-reveal"
          role="dialog"
          aria-label="Capsule Company Assistant"
        >
          {/* Header */}
          <div className="bg-brand-black text-white p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-ivory p-1 overflow-hidden shrink-0 border border-brand-copper">
                <img
                  src="/assets/logo.jpeg"
                  alt="Capsule Bot"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-white">
                  CAPSULE CONCIERGE
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Online • Bengaluru</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-md"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-brand-ivory/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-black text-white rounded-br-none shadow-sm'
                      : 'bg-white text-brand-black border border-brand-border rounded-bl-none shadow-sm whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-brand-muted mt-1 px-1">{msg.timestamp}</span>

                {/* Quick action chips */}
                {msg.quickActions && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.quickActions.map((qa) => (
                      <button
                        key={qa.label}
                        onClick={() => handleAction(qa.action, qa.label, qa.payload)}
                        className="text-[11px] font-semibold tracking-wider bg-white hover:bg-brand-copper hover:text-white text-brand-black border border-brand-border hover:border-brand-copper px-2.5 py-1.5 rounded-full transition-all active:scale-95 shadow-2xs"
                      >
                        {qa.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendInput} className="p-3 bg-white border-t border-brand-border flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question or type details..."
              className="flex-1 text-xs py-2.5 px-3.5 bg-brand-cream/40 border border-brand-border rounded-full focus:outline-none focus:border-brand-copper focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 bg-brand-copper text-white rounded-full disabled:opacity-40 hover:bg-brand-copperLight active:scale-95 transition-all"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

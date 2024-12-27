import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-yellow-400/20 rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-5 sm:p-6 text-left flex justify-between items-center hover:bg-surface/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-yellow-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-yellow-400" />
        )}
      </button>

      <div
        className={`px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-200 ease-in-out ${
          isOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <p className="text-text-secondary">{answer}</p>
      </div>
    </div>
  );
}

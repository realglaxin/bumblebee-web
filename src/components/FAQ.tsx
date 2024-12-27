import { FAQItem } from "./FAQItem";

const faqs = [
  {
    question: "How do I add Bumblebee to my server?",
    answer:
      'Click the "Add to Discord" button at the top of the page and follow the OAuth2 authorization process. You\'ll need the "Manage Server" permission in your Discord server.',
  },
  {
    question: "Is Bumblebee free to use?",
    answer:
      "Yes! Bumblebee is free to use with all essential features. We also offer a Premium tier for advanced features and higher usage limits.",
  },
  {
    question: "What permissions does Bumblebee need?",
    answer:
      "Bumblebee requires basic permissions like Send Messages, Read Messages, and Manage Messages for core functionality. Additional permissions may be needed for specific features.",
  },
  {
    question: "How can I customize Bumblebee's settings?",
    answer:
      "View the documentation to learn how to customize Bumblebee's settings, including the prefix, anti-nuke, and other options.",
  },
  {
    question: "Is there a limit to how many commands I can use?",
    answer:
      "No, there is no limit to how many commands you can use. Bumblebee is designed to be used as much as you need.",
  },
  {
    question: "How do I get support if i need any type of help?",
    answer:
      "Join our support server for direct assistance, check out our documentation for guides.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-text-secondary">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

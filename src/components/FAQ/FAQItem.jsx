import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <span className="icon">{open ? "−" : "+"}</span>
      </button>

      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

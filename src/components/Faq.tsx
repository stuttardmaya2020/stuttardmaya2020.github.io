import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { WhyMe } from "../lib/content";

function FaqItem({ item }: { item: WhyMe["faq"][number] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="faq-item">
      <h4>
        <button type="button" className="faq-trigger" aria-expanded={open} aria-controls={open ? panelId : undefined} onClick={() => setOpen(!open)}>
          {item.q}
          <motion.span className="faq-icon" aria-hidden="true" animate={{ rotate: open ? 45 : 0 }}>
            +
          </motion.span>
        </button>
      </h4>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="faq-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}>
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Faq({ items }: { items: WhyMe["faq"] }) {
  return (
    <ul className="faq">
      {items.map((item) => (
        <FaqItem key={item.q} item={item} />
      ))}
    </ul>
  );
}

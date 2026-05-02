import { useState } from "react";
import { accordionItems } from "../data/portofolioData";
import AccordionItem from "./AccordionItem";

export default function PortfolioAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  const styles = {
    accordionList: {
      overflow: "hidden",
      border: "1px solid rgba(226, 232, 240, 0.92)",
      borderRadius: 16,
      background: "rgba(255, 255, 255, 0.84)",
      boxShadow: "0 12px 32px rgba(15, 23, 42, 0.04)",
      boxSizing: "border-box",
    },
  };

  return (
    <section style={styles.accordionList}>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.title}
          item={item}
          isOpen={openIndex === index}
          isFirst={index === 0}
          onClick={() => handleToggleAccordion(index)}
        />
      ))}
    </section>
  );
}

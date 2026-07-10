import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Markio",
      src: "/card1.png",
      link: "https://github.com/anurag-rawat12/Markio",
    },
    {
      title: "Auris",
      src: "/card2.png",
      link: "https://github.com/RakshitRao2712/AURIS",
    },
    {
      title: "Terraform",
      src: "/card3.png",
      link: "https://github.com/RakshitRao2712/TerraformProject",
    },
    {
      title: "Inscriptify",
      src: "/card4.png",
      link: "https://github.com/RakshitRao2712/Inscriptify",
    },
    {
      title: "Voyage",
      src: "/card5.png",
      link: "https://github.com/RakshitRao2712/voyage",
    },
    {
      title: "Expense Tracker",
      src: "/card6.png",
      link: "https://github.com/RakshitRao2712/Expense-Tracker-Backend",
    },
  ];

  return <div className="py-20 w-full"><FocusCards cards={cards} /></div>;
}

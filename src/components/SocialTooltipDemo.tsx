import React from 'react';
import { SocialTooltip, SocialItem } from '@/components/ui/social-media';

// Data for the social media links, now using external SVG URLs
const socialLinks: SocialItem[] = [
  {
    href: "#",
    ariaLabel: "Shopify",
    tooltip: "Shopify",
    color: "#64943E",
    svgUrl: "https://svgl.app/library/shopify.svg",
  },
  {
    href: "#",
    ariaLabel: "Edge",
    tooltip: "Edge",
    color: "#0078D7",
    svgUrl: "https://svgl.app/library/edge.svg",
  },
  {
    href: "#",
    ariaLabel: "Facebook",
    tooltip: "Facebook",
    color: "#3b5998",
    svgUrl: "https://svgl.app/library/facebook.svg",
  },
  {
    href: "#",
    ariaLabel: "Telegram",
    tooltip: "Telegram",
    color: "#0088cc",
    svgUrl: "https://svgl.app/library/telegram.svg",
  },
];

const SocialTooltipDemo = () => {
  return (
    <div className="flex items-center justify-center py-20 w-full h-full bg-background">
      <SocialTooltip items={socialLinks} />
    </div>
  );
};

export default SocialTooltipDemo;

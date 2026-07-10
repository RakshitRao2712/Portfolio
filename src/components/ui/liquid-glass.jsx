import React, { useState, useRef } from "react";
import {
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Mail,
  FileDown,
  ChevronLeft,
} from "lucide-react";

const dockIcons = [
  { icon: Code2, label: "Skills", href: "#skills", type: "link" },
  { icon: FolderOpen, label: "Projects", href: "#projects", type: "link" },
  { icon: Briefcase, label: "Experience", href: "#experience", type: "link" },
  { icon: Mail, label: "Contact", href: "#contact", type: "link" },
  { icon: FileDown, label: "Resume", href: "/MYRESUME(FINALE).pdf", type: "download" },
];

export const LiquidGlass = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeout = useRef(null);

  const handleTriggerEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setIsVisible(true);
  };

  const handleDockLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleDockEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setIsVisible(true);
  };

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "80px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
      onMouseEnter={handleTriggerEnter}
      onMouseLeave={handleDockLeave}
    >
      {/* Invisible hover trigger strip on the far right edge */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "20px",
        }}
      />

      {/* Edge hint indicator — pulses to signal interactivity */}
      <div
        style={{
          position: "absolute",
          right: "6px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          opacity: isVisible ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        {/* Animated chevron */}
        <div
          style={{
            animation: "dockPulse 2s ease-in-out infinite",
          }}
        >
          <ChevronLeft
            size={16}
            strokeWidth={2}
            color="rgba(255,255,255,0.45)"
          />
        </div>
        {/* Three dot trail */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.3)",
              animation: `dockDotPulse 1.6s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dockPulse {
          0%, 100% { transform: translateX(0px); opacity: 0.45; }
          50% { transform: translateX(-4px); opacity: 0.9; }
        }
        @keyframes dockDotPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.3); }
        }
      `}</style>

      {/* Dock panel */}
      <div
        onMouseEnter={handleDockEnter}
        onMouseLeave={handleDockLeave}
        style={{
          marginRight: "24px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0px)" : "translateX(40px)",
          transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: isVisible ? "auto" : "none",
          background: "rgba(15, 15, 15, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "22px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {dockIcons.map((item, index) => {
          const IconComponent = item.icon;
          const isHovered = hoveredIndex === index;
          const isDownload = item.type === "download";

          return (
            <div
              key={index}
              style={{ position: "relative", display: "flex", alignItems: "center" }}
            >
              {/* Tooltip — slides in from the left */}
              <div
                style={{
                  position: "absolute",
                  right: "calc(100% + 12px)",
                  top: "50%",
                  background: "rgba(255, 255, 255, 0.95)",
                  color: "#111",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered
                    ? "translateY(-50%) translateX(0px)"
                    : "translateY(-50%) translateX(6px)",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
                }}
              >
                {item.label}
              </div>

              {/* Icon tile */}
              <a
                href={item.href}
                download={isDownload ? true : undefined}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: isHovered
                    ? "rgba(45, 45, 45, 1)"
                    : "rgba(22, 22, 22, 0.95)",
                  border: isHovered
                    ? "1px solid rgba(255, 255, 255, 0.18)"
                    : "1px solid rgba(255, 255, 255, 0.09)",
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                  transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.4)",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <IconComponent
                  size={22}
                  strokeWidth={1.5}
                  color={isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)"}
                  style={{ transition: "color 0.2s ease" }}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

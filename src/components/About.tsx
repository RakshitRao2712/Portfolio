import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "motion/react";
export function TimelineDemo() {
  const data = [
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started with Google UI/UX course and made my first ever UI/UX project
          </p>
          <div className="grid grid-cols-2 gap-4">

            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/ux-project-1.png"
              alt="UX Design Project 1"
              width={500}
              height={500}
              className="h-20 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-55 hover:scale-105 transition-transform duration-300"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/ux-project-2.png"
              alt="UX Design Project 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/ux-cert.png"
              alt="Google UX Design Certificate"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started learning full stack development with Java.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built projects like Expense tracker, blog post website to learn the fundamentals of development.          </p>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/udemy1.png"
              alt="Udemy Course"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
            />
            <a href="https://github.com/RakshitRao2712" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
                src="/github.png"
                alt="GitHub"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Internship",
      content: (
        <div>
          <h3 className="mb-4 text-lg font-bold text-neutral-800 md:text-xl dark:text-neutral-100">
            Unified Mentor Pvt. Ltd.
            <span className="block text-sm font-normal text-neutral-500 mt-1">
              Apr 2025 – Jul 2025
            </span>
          </h3>
          <div className="mb-8">
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <li>
                Engineered a Cruise Ship Management system using Spring Boot, React.js,
                and PostgreSQL, serving over 200 users.
              </li>
              <li>
                Created 5+ interactive modules including movie ticketing and resort bookings with 95%
                uptime during testing.
              </li>
              <li>
                Applied role-based access control for 4 staff roles, reducing processing errors by 30%.
              </li>
              <li>
                Delivered 12+ REST APIs handling real-time bookings and data operations with
                500ms average response time.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/Unified.png"
              alt="Unified Mentor Internship"
              width={1000}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <a href="https://www.linkedin.com/company/unified-mentor-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
                src="/linkedin.png"
                alt="GitHub"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Made a resolution and started with leetcode and started learning DSA in depth.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            still learning various Data Structures and Algorithm and practicing them.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/udemy2.png"
              alt="Udemy Course"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
            />
            <a href="https://leetcode.com/u/RakshitRao/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
                src="/leetcode.png"
                alt="GitHub"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started building projects from scratch for solving real world problems.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Worked as a full stack developer in these projects.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/markio.png"
              alt="Udemy Course"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/auris.jpeg"
              alt="Udemy Course"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
            />
            <a href="https://leetcode.com/u/RakshitRao/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
                src="/leetcode.png"
                alt="GitHub"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Internship",
      content: (
        <div>
          <h3 className="mb-4 text-lg font-bold text-neutral-800 md:text-xl dark:text-neutral-100">
            Seabird Logistics
            <span className="block text-sm font-normal text-neutral-500 mt-1">
              Nov 2025 – Feb 2026
            </span>
          </h3>
          <div className="mb-8">
            <ul className="list-disc list-outside ml-4 space-y-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <li>
                Contributed to the development and testing of the Gnosis Vendor Portal, a logistics
                platform handling vendor onboarding and shipment workflows.
              </li>
              <li>
                Built and enhanced backend services using Spring Boot and REST APIs, improving system
                performance and scalability.
              </li>
              <li>
                Implemented UI improvements to streamline vendor interactions and reduce friction in
                key workflows.
              </li>
              <li>
                Designed and executed test cases for modules including vendor onboarding, shipment
                tracking, order processing, and documentation.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              src="/seabird.png"
              alt="Unified Mentor Internship"
              width={1000}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <a href="https://www.linkedin.com/company/seabird-logistics" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
                src="/linkedin.png"
                alt="GitHub"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      ),
    },

  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

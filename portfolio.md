# Portfolio Data and Specifications: Krish

This document serves as the absolute source of truth for generating, styling, and structuring my personal portfolio website. A website-builder agent can use the structured sections, content blocks, design specifications, and asset guidelines below to build a state-of-the-art interactive portfolio.

---

## ─── Section 1: Visual Identity & Design System ───
*Use these guidelines to build the UI, CSS design tokens, and components.*

### 🎨 Color Palette & Themes
*   **Default Theme**: Pure AMOLED Black (Default) with user toggle for Light Mode.
*   **Dark Mode Palette**:
    *   `Background (AMOLED Black)`: `#000000` (pure black)
    *   `Surface (Glassmorphism)`: `#0a0a0a` (frosted deep charcoal)
    *   `Primary Accent (Neon Purple)`: `#a855f7` (highly vibrant purple)
    *   `Secondary Accent (Electric Cyan)`: `#06b6d4` (neon electric cyan)
    *   `Text Primary (Snow Slate)`: `#ffffff`
    *   `Text Secondary (Muted Gray)`: `#9ca3af`
    *   `Border Glow`: `#1f2937` with custom purple glow shadows (`rgba(168, 85, 247, 0.18)`)
*   **Light Mode Palette**:
    *   `Background`: `#f9fafb` (slate white)
    *   `Surface`: `#ffffff`
    *   `Primary Accent`: `#7c3aed` (deep violet)
    *   `Secondary Accent`: `#0891b2` (deep cyan)
    *   `Text Primary`: `#111827`
    *   `Text Secondary`: `#4b5563`
    *   `Border Glow`: `#e5e7eb`

### ✍️ Typography & Font Choices
*   **Primary Font (Headings)**: `Outfit` or `Inter` (Sans-serif, bold, geometric layout)
*   **Secondary Font (Body)**: `Inter` or `Geist` (Clean, legible, tech-oriented)
*   **Monospace Font (Code/Tech tags)**: `Fira Code` or `JetBrains Mono`

### 💫 Design Language & Micro-Animations
*   **Theme Style**: modern, clean glassmorphism (`backdrop-filter: blur(12px)`), soft shadows, glowing hover rings, and gradient outlines.
*   **Animations to Implement**:
    *   **Smooth Scroll**: Active viewport highlighting in navbar.
    *   **Text Gradient Animation**: Gradient headers that shimmer or move slowly on hover.
    *   **Hover Scaling**: Hovering cards (Projects, Experience, Skills) should scale by `1.03x` and increase shadow brightness.
    *   **Staggered Fade-in**: Content nodes should fade and slide up sequentially as the user scrolls.

---

## ─── Section 2: Personal Profile & Details ───

### 👤 Contact & Core Profile
*   **Full Name**: Krish
*   **Professional Title**: Full-Stack Software Engineer & Creative UI Designer
*   **Current Location**: India
*   **Tagline**: "Crafting pixel-perfect web interfaces & high-performance backend systems."
*   **Short Hero Bio**: "I specialize in building scalable web applications with premium user interfaces, robust backend APIs, and seamless integrations. Bridging the gap between robust engineering and state-of-the-art aesthetics."
*   **Email**: `krish@example.dev` (Placeholder - replace dynamically)
*   **GitHub**: [github.com/Krish-Dev](https://github.com/) 
*   **LinkedIn**: [linkedin.com/in/krish-dev](https://linkedin.com/)
*   **Twitter/X**: [twitter.com/krish_dev](https://twitter.com/)
*   **Resume/CV**: Link to `/resume.pdf`

---

## ─── Section 3: Technical Skills & Tools ───
*Grouped by tiers of expertise for interactive visualizations (e.g., progress rings, interactive filter tags, or hexagonal visual clouds).*

### 💻 Frontend Development
*   **Core Languages**: HTML5, CSS3, ES6+ JavaScript, TypeScript
*   **Frameworks & Libraries**: React.js, Next.js, Vue.js, Tailwind CSS
*   **State Management**: Redux Toolkit, Zustand, Context API
*   **Animations**: Framer Motion, GSAP, CSS Transitions

### ⚙️ Backend & API Development
*   **Core Systems**: Node.js, Express.js, NestJS
*   **Databases**: PostgreSQL (Relational), MongoDB (NoSQL), Redis (Caching)
*   **APIs**: GraphQL, RESTful APIs, gRPC
*   **Authentication & Security**: JWT, OAuth 2.0, NextAuth.js

### 🛠️ DevOps & Industry Tools
*   **Version Control**: Git & GitHub (GitHub Actions CI/CD)
*   **Containerization**: Docker, Kubernetes (Basics)
*   **Hosting & Cloud**: AWS (S3, EC2), Vercel, Netlify, Render
*   **Design Tools**: Figma, Adobe XD

---

## ─── Section 4: Featured Projects ───
*Detailed specs for portfolio project layouts, including technical stacks, key highlights, and active links.*

### Project 1: DevSpace — Collaborative Developer Workspace
*   **Summary**: A real-time collaborative IDE and workspace facilitating live multi-user editing, shared terminal logs, and integrated chat.
*   **Tech Stack**: Next.js (App Router), Node.js, WebSockets (Socket.io), Redis (pub/sub), Monaco Editor, PostgreSQL, TailwindCSS.
*   **Key Features**:
    1.  **Collaborative Canvas**: Multi-user cursor tracking and keypress replication using Operational Transformation algorithms.
    2.  **Shared Sandbox**: Running Node.js/Python scripts immediately in isolated worker threads.
    3.  **Encrypted Chats**: Integrated team chat with end-to-end encryption.
*   **GitHub Link**: `https://github.com/Krish-Dev/devspace`
*   **Live App Demo**: `https://devspace-workspace.vercel.app`
*   **Key Highlight Image**: Placeholder at `/assets/projects/devspace.webp`

### Project 2: ZenithPay — Crypto & Fiat Financial Dashboard
*   **Summary**: A sleek modern fintech dashboard that aggregates cryptocurrency wallet analytics alongside fiat accounts with instant conversions.
*   **Tech Stack**: React.js, TypeScript, Chart.js, Tailwind CSS, Express.js, MongoDB, CoinGecko API, Stripe API.
*   **Key Features**:
    1.  **Rich Visualizations**: Custom responsive charts detailing monthly income/expense splits and asset allocations.
    2.  **Web3 Ledger Integrations**: Track and reconcile Ethereum/Solana wallet balances in real-time.
    3.  **Instant Invoicing**: Generates PDF invoices and supports Stripe Checkout out-of-the-box.
*   **GitHub Link**: `https://github.com/Krish-Dev/zenithpay`
*   **Live App Demo**: `https://zenithpay-crypto.vercel.app`
*   **Key Highlight Image**: Placeholder at `/assets/projects/zenithpay.webp`

### Project 3: PrismaShop — Headless E-Commerce Platform
*   **Summary**: A blisteringly fast headless e-commerce store utilizing incremental static regeneration for instant product pages.
*   **Tech Stack**: Next.js, GraphQL, Shopify Headless API, Stripe, Tailwind CSS, Algolia Search.
*   **Key Features**:
    1.  **Algolia Instant Search**: Millisecond search indexing with filters for size, tags, ratings, and price range.
    2.  **Fully Audited Accessibility**: Compliant with WCAG 2.1 AAA accessibility rules.
    3.  **Advanced Cart Logic**: Side-drawer persistent cart utilizing client-side state synchronized to localStorage.
*   **GitHub Link**: `https://github.com/Krish-Dev/prismashop`
*   **Live App Demo**: `https://prismashop-headless.vercel.app`
*   **Key Highlight Image**: Placeholder at `/assets/projects/prismashop.webp`

---

## ─── Section 5: Work Experience ───
*Can be rendered as a timeline dashboard or drop-down accordion tabs.*

### Senior Full-Stack Engineer | TechVantage Solutions
*Duration: Jan 2024 - Present*
*   **Led Frontend Redesign**: Re-engineered core CRM dashboard to React & Next.js, improving page load speeds by 40% (Lighthouse Score rose from 56 to 98).
*   **API Optimization**: Structured microservices handling user authentication and reporting, reducing DB query bottlenecks by 25% via Redis caching layers.
*   **Team Mentorship**: Guided a team of 4 junior developers, running weekly design system reviews and optimizing Git flow practices.

### Software Developer | CloudSprint Agency
*Duration: Jun 2022 - Dec 2023*
*   **API Integrations**: Developed full-stack SaaS integrations with Salesforce, Stripe, and SendGrid using Node.js/Express.
*   **Modular Architecture**: Authored internal reusable UI library in Tailwind CSS and React, speeding up delivery of client sub-pages by 35%.
*   **Database Management**: Migrated data structures from legacy MongoDB instances to PostgreSQL, standardizing schemas and constraints.

---

## ─── Section 6: Education & Certificates ───

*   **Bachelor of Technology (B.Tech) in Computer Science & Engineering**
    *   *Institution*: Technical University (2018 - 2022)
    *   *Key Focus*: Systems Engineering, Data Structures, Algorithms, Web Technologies
*   **AWS Certified Developer — Associate**
    *   *Issuer*: Amazon Web Services (AWS)
    *   *Valid*: 2024 - 2027
*   **Meta Front-End Developer Professional Certificate**
    *   *Issuer*: Meta (via Coursera)
    *   *Key focus*: Advanced React state, UI libraries, Git management, Testing

---

## ─── Section 7: Services Offered ───
*Use these to display service cards or packages on the website.*

1.  **Single Page & Multi Page Web Applications**: Modern, responsive, and robust websites coded in React/Next.js and styled with Tailwind.
2.  **API Development & Integration**: Custom GraphQL/REST APIs, webhooks, databases, and secure authentication flows.
3.  **Performance Optimization**: Analyzing slow web services, cleaning up assets/packages, resolving JS bottlenecks, and maximizing Lighthouse/Core Web Vitals scores.
4.  **UI/UX Prototyping & Glassmorphism Design**: Crafting premium, interactive wireframes and turning existing mockups into dynamic frontend code.

---

## ─── Section 8: Testimonials (Hypothetical) ───
*Display these as a sliding marquee or clickable client-review cards.*

*   👉 **Sarah Jenkins, CEO of TechVantage**:
    > "Krish is an exceptional developer who combines top-tier technical skills with a keen eye for user experience. His implementation of our dashboard redesign changed how our team works."
*   👉 **Marcus Aurelius, Product Manager**:
    > "Working with Krish was a flawless process. He delivered ahead of schedule, structured the codebase beautifully, and went above and beyond to ensure our SEO was completely optimized."

---

## ─── Section 9: Landing Page Layout Wireframe ───
*A suggested section-by-section roadmap for the builder agent to lay out the HTML/JSX.*

1.  **Header/Navbar**: Minimalist translucent glassmorphic bar. Left side: custom logo (e.g. `K.dev`); Right side: Resume Button.
2.  **Hero Section**:
    *   **Full-Screen Viewport**: Spline 3D canvas spanning 100% width and height of the screen.
    *   No HTML text or button overlays, giving complete layout space to the interactive 3D model scene.
3.  **About & Stats Row**: Brief profile next to cool dynamic dashboard stats:
    *   `4+ Years` Coding, `15+ Projects Completed`, `99% Client Satisfaction`.
4.  **Skills Grid**: Segmented dashboard by Frontend, Backend, Tools. Badges should light up or animate on hover with their matching tech colors.
5.  **Projects Section**: Filter tabs (All, Fullstack, Frontend). Modern card layouts with live previews, GitHub links, and tech badges.
6.  **Timeline Experience**: Alternate-sided interactive timeline or tabbed layout with fade-up animations.
7.  **Contact Form Page**:
    *   Columns: Left (Email, Location, Social Icons); Right (Interactive contact form with fields for `Name`, `Email`, `Subject`, and `Message`, plus a submission button showing clean loading states).
8.  **Footer**: Copyright statement, social links repeating, back-to-top button.

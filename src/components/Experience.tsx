import { AnimatedTestimonials } from "./ui/animated-testimonials";

const experiences = [
  {
    name: "Senior Full-Stack Engineer",
    designation: "TechVantage Solutions · Jan 2024 – Present",
    quote:
      "Led frontend redesign of CRM dashboard in Next.js/React — Lighthouse score reached 98. Architected microservices with Redis caching, cutting DB query times by 25%. Mentored 4 junior engineers through design reviews and Git-flow best practices.",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
  },
  {
    name: "Software Developer",
    designation: "CloudSprint Agency · Jun 2022 – Dec 2023",
    quote:
      "Built full-stack SaaS integrations with Salesforce, Stripe, and SendGrid via Node.js. Created an internal reusable component library, accelerating production cycles by 35%. Migrated data storage from MongoDB to PostgreSQL with strict schema enforcement.",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80",
  },
  {
    name: "Frontend Developer",
    designation: "Freelance · 2020 – Jun 2022",
    quote:
      "Delivered 12+ responsive websites and web apps for clients across e-commerce, healthcare, and education sectors. Implemented CI/CD pipelines using GitHub Actions and Vercel. Specialised in performance optimisation and accessibility compliance.",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
  },
];

export default function Experience() {
  return (
    <section className="section exp-section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle">
            My professional timeline — guiding teams and designing scalable web infrastructures.
          </p>
        </div>

        <div className="reveal reveal-delay-1 flex justify-center">
          <AnimatedTestimonials testimonials={experiences} />
        </div>
      </div>
    </section>
  );
}

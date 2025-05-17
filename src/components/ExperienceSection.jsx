import {
  Briefcase,
  Code,
  MonitorSmartphone,
} from "lucide-react"; // Import your Lucide icons

const experienceData = [
  {
    company: "TechNova Inc.",
    role: "Frontend Developer",
    duration: "Jan 2022 – Present",
    icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
    description: [
      "Led development of a modular design system using React and Tailwind.",
      "Implemented dynamic dashboards with real-time data sync.",
      "Optimized performance and accessibility across browsers.",
    ],
  },
  {
    company: "CodeVerse Solutions",
    role: "Software Engineer Intern",
    duration: "Jun 2021 – Dec 2021",
    icon: <Code className="w-6 h-6 text-primary" />,
    description: [
      "Contributed to full-stack feature builds using Node.js and React.",
      "Integrated third-party APIs and wrote unit tests.",
      "Collaborated with designers to refine UI/UX.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="container my-16 animate-fade-in py-24 px-4 relative bg-secondary/30" id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Where I've <span className="text-primary"> Worked</span>
        </h2>
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="gradient-border card-hover bg-card p-6 rounded-xl shadow transition-all animate-fade-in w-full md:w-[80%] lg:w-[60%] mx-auto"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: "forwards",
            }}
          >
            <div className="text-left space-y-2">
              <div className="flex items-center gap-3">
                {exp.icon}
                <h3 className="text-xl font-bold">{exp.role}</h3>
              </div>
              <div className="text-sm text-primary">{exp.company}</div>
              <div className="text-sm text-foreground opacity-70">
                {exp.duration}
              </div>
              <ul className="mt-3 list-disc list-inside text-sm opacity-90 space-y-1">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

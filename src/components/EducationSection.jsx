import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    institution: "University of Technology",
    degree: "B.Sc. in Computer Science",
    duration: "2018 – 2022",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    details: [
      "Graduated with First-Class Honors.",
      "Relevant coursework: Algorithms, Data Structures, Web Development, AI.",
      "Final year project: Real-time collaboration platform using WebSockets.",
    ],
  },
  {
    institution: "Central High School",
    degree: "High School Diploma",
    duration: "2014 – 2018",
    icon: <School className="w-6 h-6 text-primary" />,
    details: [
      "Top 5% of graduating class.",
      "Computer Science Club President.",
      "Completed AP Computer Science with distinction.",
    ],
  },
];

export const EducationSection = () => {
  return (
    <section
      className="container my-16 animate-fade-in py-24 px-4 relative bg-secondary/30"
      id="education"
      aria-label="Education"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        My <span className="text-primary">Education</span>
      </h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
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
                {edu.icon}
                <h3 className="text-xl font-bold">{edu.degree}</h3>
              </div>
              <div className="text-sm text-primary">{edu.institution}</div>
              <div className="text-sm text-foreground opacity-70">
                {edu.duration}
              </div>
              <ul className="mt-3 list-disc list-inside text-sm opacity-90 space-y-1">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

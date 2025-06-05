import {
  Briefcase,
  Code,
  MonitorSmartphone,
} from "lucide-react"; // Import your Lucide icons

const experienceData = [
  {
    company: "Hokenso Sdn. Bhd. (A subsidiary of Hitachi eBworx)",
    role: "Full Stack Engineer",
    duration: "Oct 2023 – Present",
    icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
    description: [
      "Developed and maintained microservices-based backend solutions using Spring Boot, ensuring scalable and maintainable architecture.",
      "Built responsive and interactive user interfaces using Vue.js, integrating with backend APIs.",
      "Contributed to CI/CD pipelines using tools like Jenkins and Bamboo.", // , automating build, test, and deployment processes.
      "Utilized GitLab and Bitbucket for version control and merge request workflows.",
      // "Deployed applications on Cloud Foundry with a focus on TAS (Tanzu Application Service), ensuring efficient cloud-native deployments.",
      "Collaborated with cross-functional teams to deliver high-quality software in Agile/Scrum environments.",

    ],
  },
  {
    company: "Fusionex Corp, Petaling Jaya",
    role: "Software Engineer Intern",
    duration: "Mar 2023 - Aug 2023",
    icon: <Code className="w-6 h-6 text-primary" />,
    description: [
      "Build responsive web applications using MEVN (MongoDB, Express.js, Vue.js, Node.js).",
      "Create RESTful API for the backend service and conduct thorough API testing with Postman to validate functionality.",
      "Engage in Scrum methodology which includes daily and weekly task progress reporting, and regular sprint planning sessions.",
      "Conduct testing with Mocha and Chai to uphold high code quality.",
    ],
  },
  {
    company: "InsightzClub, Kuala Lumpur",
    role: "Customer Success Intern",
    duration: "Aug 2021 - Sep 2021",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    description: [
      "A semester break job during MCO.",
      "Contributed to the backend operations in conducting consumer insights, namely translation overlays and survey scripting.",
      "Set up dashboards featuring survey insights for clients.",
      "Assisted in sending out cost requests to vendors for gathering survey respondents.",
    ],
  },
  {
    company: "AIA Insurance, Ipoh",
    role: "Administrative Clerk",
    duration: "Jan 2019 - Aug 2019",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    description: [
      "Managed, compiled, and maintained client and company records.",
      "Processed clients' policy applications and claims daily.",
      "Followed up on policy renewals and prepared monthly renewal lists for tracking policy premiums due.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="container my-16 animate-fade-in py-24 px-4 relative bg-secondary/30" id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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
              <ul className="mt-3 list-disc text-sm opacity-90 space-y-1">
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

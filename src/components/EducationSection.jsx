import { GraduationCap, School } from "lucide-react";

const educationImage = "/pictures/education/ump.jpg";
const educationData = [
  {
    institution: "Universiti Malaysia Pahang (UMP)",
    degree: "Bachelor of Computer Science (Software Engineering) with Honours",
    duration: "2019 - 2023   •   3.86 / 4.0",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    // details: [
    //   "Graduated with First-Class Honors.",
    //   "Relevant coursework: Algorithms, Data Structures, Web Development, AI.",
    //   "Final year project: Real-time collaboration platform using WebSockets.",
    // ],
  },
  {
    institution: "SMK Methodist (ACS), Ipoh",
    degree: "Malaysian Higher School Certificate (STPM), Science Stream",
    duration: "2017 - 2018",
    icon: <School className="w-6 h-6 text-primary" />,
    // details: [
    //   "Top 5% of graduating class.",
    //   "Computer Science Club President.",
    //   "Completed AP Computer Science with distinction.",
    // ],
  },
  {
    institution: "Methodist Girls' School (MGS), Ipoh",
    degree: "Malaysian Certificate of Education (SPM), Science Stream",
    duration: "2015 - 2016",
    icon: <School className="w-6 h-6 text-primary" />,
    // details: [
    //   "Top 5% of graduating class.",
    //   "Computer Science Club President.",
    //   "Completed AP Computer Science with distinction.",
    // ],
  },
];

export const EducationSection = () => {
  return (
    <section
      className="container my-16 animate-fade-in py-24 px-4 relative bg-secondary/30"
      id="education"
      aria-label="Education"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Education</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image on the left */}
        <div className="relative w-full max-w-xs">
          {/* Image with hover effect */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 gradient-border card-hover transition-all duration-300">
            <img
              src={educationImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* <img
          src={educationImage}
          alt="Education Illustration"
          className="w-72 h-72 object-cover rounded-full shadow-lg mr-0 lg:mr-2 mb-8 lg:mb-0"
        /> */}

        {/* Education cards on the right */}
        <div className="space-y-8 flex-1 w-full">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="gradient-border card-hover bg-card p-6 rounded-xl shadow transition-all animate-fade-in w-full md:w-[80%] lg:w-[70%] mx-auto"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              
            <div className="text-left space-y-2">
              <div className="flex items-center gap-3">
                {edu.icon}
                <h3 className="text-l font-bold">{edu.degree}</h3>
              </div>
              <div className="text-sm text-primary">{edu.institution}</div>
              <div className="text-sm text-foreground opacity-70">
                {edu.duration}
              </div>
              {/* <ul className="mt-3 list-disc list-inside text-sm opacity-90 space-y-1">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

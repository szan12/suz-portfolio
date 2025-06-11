import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ConSite APP",
    description: "A construction site helmet detection mobile application prototype. Main features: detect helmet on workers and send notification to users.",
    image: "/pictures/projects/fyp.png",
    tags: ["TensorFlow", "Android Studio", "Firebase"],
    demoUrl: "/pictures/projects/CB19103_THESIS.pdf",
  },
  {
    id: 2,
    title: "PSM Management System",
    description: "A system for managing and evaluating FYP, target users are students and lecturers.",
    image: "/pictures/projects/psm.png",
    tags: ["PHP", "Laravel", "MySQL"],
    githubUrl: "https://github.com/hoshuxian/fyp_psm",
  },
  {
    id: 3,
    title: "VR Showhouse",
    description:
      "User-interative virtual reality showhouse. Built on Vizard, a VR software development platform.",
    image: "/pictures/projects/vr.png",
    tags: ["Vizard", "Google SketchUp"],
    demoUrl: "https://youtu.be/a79Xy5GxN6g",
    githubUrl: "https://github.com/szan12/VR-showhouse",
  },
  {
    id: 4,
    title: "Stationery Inventory System",
    description:
      "A platform for handling inventory, make quotations, and allowing buyers to book inventory from the store.",
    image: "/pictures/projects/sis.png",
    tags: ["Java", "Swing GUI", "MySQL"],
    demoUrl: "https://youtu.be/tbpcUlUxgnM",
    githubUrl: "https://github.com/szan12/stationery-inventory-system",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects developed during my university years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (<a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>)}
                    {project.githubUrl && (<a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/szan12"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
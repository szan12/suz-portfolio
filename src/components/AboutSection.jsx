import { Briefcase, Code, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer
            </h3>

            <p className="text-muted-foreground">
              Born and raised in Ipoh, Perak, Malaysia. 
              {/* I'm a developer passionate about building the backend logic that makes everything work. */}
              I enjoy learning new technologies and constantly challenging myself to grow in this ever-evolving field.
              I'm currently a Full Stack Developer at Hokenso, where I build responsive and high-performance web applications, 
              contributing to both the frontend and backend.
              I'm now looking for new opportunities that allow me to dive deeper into the backend development,
              where I can apply the knowledge and experience I've gained over the past two years in the industry.
            </p>
            <p>
              Outside of work, I love being in nature, sipping on a good latte, and watching movies to unwind.
            </p>

            <p className="text-muted-foreground mt-4">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-y-2 mt-2 text-muted-foreground text-sm list-disc list-inside text-left">
              <li>Spring Boot</li>
              <li>Vue.js</li>
              <li>Jenkins</li>
              <li>Bamboo</li>
              <li>Microservice</li>
              <li>mySQL</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* single picture */}
          <div className="relative w-full max-w-xs">
            <div className="relative w-64 h-80 md:w-72 md:h-80 group">
              {/* Outer outline box */}
              <div
                className="absolute -right-3 -bottom-3 w-full h-full rounded-2xl border-2 border-primary opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 z-0"
              />

              {/* Image with hover effect */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 gradient-border card-hover transition-all duration-300">
                <img
                  src="/pictures/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
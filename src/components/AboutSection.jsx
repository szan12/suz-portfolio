import { Briefcase, Code, User } from "lucide-react";
import React, { useEffect, useRef  } from "react";

export const AboutSection = () => {
  const scrollRef = useRef(null);

 useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30; // smaller = faster scroll

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop = scrollAmount;
        }
      }
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "/pictures/profile.jpeg",
    "/pictures/profile2.jpeg",
    "/pictures/profile3.jpeg",
  ];

  // Duplicate images to create seamless loop
  const allImages = [...images, ...images];

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
              Hello! I'm Suzanne, born and raised in Ipoh, Perak, Malaysia. 
              I enjoy learning new things and challenging myself to grow as a developer. 
              I'm currently working as a Full Stack Developer at Hokenso, where I build responsive, 
              accessible, and performant web applications — focusing on both frontend and backend development.
            </p>

            <p className="text-muted-foreground mt-4">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-y-2 mt-2 text-muted-foreground text-sm list-disc list-inside text-left">
              <li>Vue.js</li>
              <li>Jenkins</li>
              <li>Spring Boot</li>
              <li>Bamboo</li>
              <li>Microservice</li>
              <li>Vue.js</li>
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


          {/* Right: vertical auto-scrolling profile images */}
          {/* <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-primary shadow-lg mx-auto">
            <div
              ref={scrollRef}
              className="h-full w-full overflow-hidden"
              style={{ scrollBehavior: "smooth", overflowY: "hidden" }}
            >
              <div className="flex flex-col">
                {allImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Profile ${i}`}
                    className="w-full h-64 object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
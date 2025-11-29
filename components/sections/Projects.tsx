"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "@/constants/projects";
import Image from "next/image";

interface ProjectsProps {
  isVisible: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isVisible }) => {
  const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});
  const [touchStart, setTouchStart] = useState<Record<number, number>>({});
  const [touchEnd, setTouchEnd] = useState<Record<number, number>>({});

  const nextSlide = (projectId: number) => {
    setActiveSlides((prev) => {
      const current = prev[projectId] ?? 0;
      const project = projects.find((p) => p.id === projectId);
      if (!project) return prev;
      return { ...prev, [projectId]: (current + 1) % project.images.length };
    });
  };

  const prevSlide = (projectId: number) => {
    setActiveSlides((prev) => {
      const current = prev[projectId] ?? 0;
      const project = projects.find((p) => p.id === projectId);
      if (!project) return prev;
      return {
        ...prev,
        [projectId]: current === 0 ? project.images.length - 1 : current - 1,
      };
    });
  };

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const handleTouchStart = (projectId: number, e: React.TouchEvent) => {
    setTouchEnd({ ...touchEnd, [projectId]: 0 });
    setTouchStart({ ...touchStart, [projectId]: e.targetTouches[0].clientX });
  };

  const handleTouchMove = (projectId: number, e: React.TouchEvent) => {
    setTouchEnd({ ...touchEnd, [projectId]: e.targetTouches[0].clientX });
  };

  const handleTouchEnd = (projectId: number) => {
    if (!touchStart[projectId] || !touchEnd[projectId]) return;

    const distance = touchStart[projectId] - touchEnd[projectId];
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide(projectId);
    } else if (isRightSwipe) {
      prevSlide(projectId);
    }
  };

  // Mouse drag support for desktop
  const handleMouseDown = (projectId: number, e: React.MouseEvent) => {
    setTouchEnd({ ...touchEnd, [projectId]: 0 });
    setTouchStart({ ...touchStart, [projectId]: e.clientX });
  };

  const handleMouseMove = (projectId: number, e: React.MouseEvent) => {
    if (touchStart[projectId]) {
      setTouchEnd({ ...touchEnd, [projectId]: e.clientX });
    }
  };

  const handleMouseUp = (projectId: number) => {
    if (!touchStart[projectId] || !touchEnd[projectId]) return;

    const distance = touchStart[projectId] - touchEnd[projectId];
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide(projectId);
    } else if (isRightSwipe) {
      prevSlide(projectId);
    }

    setTouchStart({ ...touchStart, [projectId]: 0 });
    setTouchEnd({ ...touchEnd, [projectId]: 0 });
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-4 sm:mb-6 shadow-lg shadow-indigo-500/50" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            A collection of projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`w-full max-w-lg group bg-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-[1.02] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="relative h-41 sm:h-64 md:h-58 overflow-hidden bg-[linear-gradient(to_bottom_right,rgb(99_102_241/0.1),rgb(139_92_246/0.1))] cursor-grab active:cursor-grabbing"
                onTouchStart={(e) => handleTouchStart(project.id, e)}
                onTouchMove={(e) => handleTouchMove(project.id, e)}
                onTouchEnd={() => handleTouchEnd(project.id)}
                onMouseDown={(e) => handleMouseDown(project.id, e)}
                onMouseMove={(e) => handleMouseMove(project.id, e)}
                onMouseUp={() => handleMouseUp(project.id)}
                onMouseLeave={() => handleMouseUp(project.id)}
              >
                {project.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${
                      project.title
                    } screenshot showing ${project.tech.join(", ")}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 select-none pointer-events-none ${
                      (activeSlides[project.id] ?? 0) === imgIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                    draggable={false}
                  />
                ))}

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevSlide(project.id)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-indigo-600 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10 backdrop-blur-sm shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => nextSlide(project.id)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-indigo-600 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10 backdrop-blur-sm shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {project.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() =>
                            setActiveSlides((prev) => ({
                              ...prev,
                              [project.id]: imgIndex,
                            }))
                          }
                          className={`h-2 rounded-full transition-all duration-300 ${
                            (activeSlides[project.id] ?? 0) === imgIndex
                              ? "bg-white w-8"
                              : "bg-white/50 hover:bg-white/75 w-2"
                          }`}
                          aria-label={`Go to image ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 rounded-xl text-sm border border-indigo-500/20 hover:bg-indigo-500/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[linear-gradient(to_right,rgb(79_70_229),rgb(37_99_235))] hover:bg-[linear-gradient(to_right,rgb(67_56_202),rgb(29_78_216))] rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/50 flex-1 text-sm sm:text-base font-medium"
                  >
                    <ExternalLink size={18} />
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import { skillCategories } from "@/constants/skills";

interface SkillsProps {
  isVisible: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isVisible }) => {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-600 mb-4">
            02 — Skills
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-zinc-900">
            Skills & Expertise
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group bg-white rounded-2xl p-6 sm:p-8 border-2 border-zinc-900 shadow-[6px_6px_0_#18181b] hover:shadow-[8px_8px_0_#ea580c] hover:-translate-y-1 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 px-4 py-2.5 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-orange-600/50 hover:bg-orange-50 transition-all duration-300"
                    >
                      <div
                        className={`p-1.5 rounded-lg bg-gradient-to-br ${category.color}`}
                      >
                        <Icon className="text-white" size={16} />
                      </div>
                      <span className="font-medium text-sm sm:text-base text-zinc-700">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

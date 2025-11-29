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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-6 shadow-lg shadow-indigo-500/50" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:scale-[1.02] shadow-xl hover:shadow-indigo-500/10 ${
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
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group/skill"
                      style={{
                        transitionDelay: `${
                          catIndex * 100 + skillIndex * 50
                        }ms`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}
                        >
                          <Icon className="text-white" size={20} />
                        </div>
                        <span className="font-semibold text-base sm:text-lg text-white">
                          {skill.name}
                        </span>
                      </div>
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

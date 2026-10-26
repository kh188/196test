import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Sweet Planner App 🌸",
      desc: "Планировщик задач в пастельных тонах с милыми стикерами, трекером полезных привычек и мотивирующими цитатами на каждый день.",
      tags: ["#React", "#TailwindCSS", "#CuteDesign"],
      gradient: "from-pink-300 via-rose-200 to-amber-200",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "CozyShop E-Commerce 🛍️",
      desc: "Минималистичный интернет-магазин товаров для уюта, свечей и декора с невероятно мягким интерфейсом и интерактивной корзиной.",
      tags: ["#E-Commerce", "#Glassmorphism", "#ReactRouter"],
      gradient: "from-purple-300 via-pink-200 to-rose-200",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Pastel Palette Finder 🎨",
      desc: "Удобный инструмент для веб-дизайнеров и разработчиков, помогающий находить, тестировать и экспортировать нежнейшие пастельные палитры.",
      tags: ["#JavaScript", "#DesignTools", "#Esthetics"],
      gradient: "from-teal-200 via-pink-100 to-peach-200",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "KittyChat Web App 📱",
      desc: "Интерактивный веб-чат для общения с кастомными кошачьими эмодзи, приятной анимацией сообщений и звуковыми эффектами мяуканья.",
      tags: ["#React", "#WebSockets", "#Tailwind"],
      gradient: "from-sky-200 via-lavender-200 to-pink-200",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] px-4 sm:px-12 md:px-[110px] py-12 md:py-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 relative space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-zinc-800 mb-4 inline-flex items-center gap-3">
            Мои проекты <span className="animate-float">🎨</span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-base">
            Здесь представлены мои избранные работы, где я сочетаю изящную эстетику интерфейса с чистым кодом и современными технологиями.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-purple-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {projectList.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full text-left group"
            >
              {/* Visual Cover Header */}
              <div className={`h-48 bg-gradient-to-tr ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
                {/* Decorative floating dots/icons */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-xs shadow-sm font-semibold text-pink-600">
                  ✨ Interactive
                </div>
                {/* Simulated window frame inside the cover */}
                <div className="w-4/5 h-2/3 bg-white/45 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg transform translate-y-6 group-hover:translate-y-4 transition-all duration-500 flex flex-col p-3 space-y-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <div className="h-2 bg-white/60 rounded-full w-2/3"></div>
                  <div className="h-2 bg-white/60 rounded-full w-1/2"></div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] text-pink-700 font-bold font-comfortaa">{project.title.split(" ")[0]}</span>
                    <span className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-[10px] text-white">🌸</span>
                  </div>
                </div>
              </div>

              {/* Text content area */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-comfortaa text-zinc-800 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-pink-50">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] font-semibold text-pink-600 bg-pink-50/70 border border-pink-100/40 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex gap-4 pt-1">
                    <a 
                      href={project.demoLink} 
                      className="flex-1 py-2 text-center text-xs md:text-sm font-medium text-white bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                    >
                      Посмотреть демо 🔗
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="flex-1 py-2 text-center text-xs md:text-sm font-medium text-zinc-600 hover:text-pink-500 bg-zinc-50 hover:bg-pink-50/30 rounded-full border border-zinc-200/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      Исходный код 💻
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};  

export default Projects;
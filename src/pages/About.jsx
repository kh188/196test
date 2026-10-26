import React from "react";

const About = () => {
    const skills = [
        { name: "React & React Router", level: "95%", color: "bg-pink-400" },
        { name: "JavaScript (ES6+)", level: "90%", color: "bg-purple-400" },
        { name: "Tailwind CSS", level: "100%", color: "bg-rose-400" },
        { name: "HTML5 & CSS3", level: "100%", color: "bg-amber-400" },
        { name: "UI/UX Design & Figma", level: "85%", color: "bg-violet-400" },
    ];

    const hobbys = [
        { icon: "🎵", text: "Слушать милый lo-fi и кодить по вечерам" },
        { icon: "🍰", text: "Пробовать новые десерты и печь макаруны" },
        { icon: "🌿", text: "Коллекционировать комнатные растения" },
        { icon: "💫", text: "Создавать анимации, которые оживляют интерфейсы" },
    ];

    return (
        <div className="relative min-h-[calc(100vh-80px)] px-4 sm:px-12 md:px-[110px] py-12 md:py-16 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto z-10 relative space-y-16">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-zinc-800 mb-4 inline-flex items-center gap-3">
                        Обо мне <span className="animate-float">🎀</span>
                    </h1>
                    <p className="text-zinc-500 text-sm md:text-base">
                        Познакомьтесь со мной поближе, узнайте о моих увлечениях и технологиях, которые я использую для воплощения идей в реальность.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-purple-300 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Story & Hobbies */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="glass-card p-6 md:p-8 rounded-3xl space-y-5 text-left">
                            <h2 className="text-xl md:text-2xl font-bold font-comfortaa text-pink-600 flex items-center gap-2">
                                <span>Привет, я Хушнара!</span>
                                <span className="animate-heartbeat">✨</span>
                            </h2>
                            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                                Мой путь в веб-разработку начался со страсти к прекрасному. Мне всегда хотелось создавать не просто работающий код, а настоящие произведения цифрового искусства. Я верю, что каждый пиксель на экране имеет значение и влияет на эмоции человека, зашедшего на сайт.
                            </p>
                            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                                Сейчас я специализируюсь на создании современных фронтенд-приложений, используя стек React и Tailwind CSS. Я стремлюсь к тому, чтобы интерфейс чувствовался «живым», отзывчивым и уютным.
                            </p>
                        </div>

                        {/* Hobbies Section */}
                        <div className="glass-card p-6 md:p-8 rounded-3xl text-left">
                            <h3 className="text-lg md:text-xl font-bold font-comfortaa text-zinc-800 mb-6 flex items-center gap-2">
                                <span>Что я люблю делать</span>
                                <span className="text-xl">🍵</span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {hobbys.map((hobby, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-pink-50/40 rounded-2xl border border-pink-100/30">
                                        <span className="text-2xl bg-white p-1.5 rounded-xl shadow-sm">{hobby.icon}</span>
                                        <p className="text-xs md:text-sm text-zinc-600 leading-snug font-medium pt-1">{hobby.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Skills */}
                    <div className="lg:col-span-5">
                        <div className="glass-card p-6 md:p-8 rounded-3xl h-full flex flex-col justify-between text-left">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold font-comfortaa text-zinc-800 mb-6 flex items-center gap-2">
                                    <span>Мои навыки</span>
                                    <span className="text-xl">⚡</span>
                                </h3>
                                <div className="space-y-6">
                                    {skills.map((skill, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <div className="flex justify-between items-center text-xs md:text-sm">
                                                <span className="font-semibold text-zinc-700">{skill.name}</span>
                                                <span className="font-comfortaa font-bold text-pink-500">{skill.level}</span>
                                            </div>
                                            <div className="w-full h-3 bg-pink-100/50 rounded-full overflow-hidden p-0.5 border border-pink-100/20">
                                                <div 
                                                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: skill.level }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Accent Badge */}
                            <div className="mt-8 p-4 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-2xl border border-pink-200/30 flex items-center gap-3">
                                <span className="text-2xl animate-float">💡</span>
                                <p className="text-xs text-zinc-600 font-medium">
                                    Постоянно изучаю новые инструменты дизайна и последние фичи React, чтобы создавать ещё более совершенные продукты.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold font-comfortaa text-zinc-800">
                            Философия моей работы 🌸
                        </h3>
                        <p className="text-zinc-500 text-xs md:text-sm mt-1">Качества, которые я вкладываю в каждый проект</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card p-6 rounded-3xl text-left flex flex-col space-y-3">
                            <span className="text-3xl bg-pink-100 p-2 rounded-2xl w-fit">🎀</span>
                            <h4 className="font-comfortaa font-bold text-zinc-800 text-lg">Внимание к деталям</h4>
                            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">
                                Идеально выверенные отступы, гармоничные цветовые сочетания и плавные переходы. Каждая мелочь важна для создания целостной картины.
                            </p>
                        </div>
                        <div className="glass-card p-6 rounded-3xl text-left flex flex-col space-y-3">
                            <span className="text-3xl bg-purple-100 p-2 rounded-2xl w-fit">⚙️</span>
                            <h4 className="font-comfortaa font-bold text-zinc-800 text-lg">Качественный код</h4>
                            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">
                                Написание чистого, легко читаемого и масштабируемого кода с использованием лучших практик React и современных инструментов верстки.
                            </p>
                        </div>
                        <div className="glass-card p-6 rounded-3xl text-left flex flex-col space-y-3">
                            <span className="text-3xl bg-rose-100 p-2 rounded-2xl w-fit">💫</span>
                            <h4 className="font-comfortaa font-bold text-zinc-800 text-lg">Ориентация на эмоции</h4>
                            <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">
                                Создание сайтов, с которыми приятно взаимодействовать. Дизайн должен быть гостеприимным, понятным и вызывать приятные эмоции.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
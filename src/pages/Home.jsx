import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-80px)] px-4 sm:px-12 md:px-[110px] py-12 md:py-20 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-float pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl animate-float-reverse pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
                {/* Text Content */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100/60 border border-pink-200/50 rounded-full text-pink-600 font-medium text-xs md:text-sm animate-bounce-slow">
                        <span>✨ Привет, я Хушнара!</span>
                        <span className="animate-heartbeat inline-block">💖</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-comfortaa leading-tight text-zinc-800">
                        Создаю <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 bg-clip-text text-transparent">эстетичные</span> цифровые миры
                    </h1>

                    <p className="text-zinc-600 text-base md:text-lg max-w-xl leading-relaxed">
                        Рада видеть тебя в моём уютном уголке! Я занимаюсь фронтенд-разработкой и UI/UX дизайном. Создаю плавные, нежные и невероятно удобные интерфейсы, продумывая каждую деталь с любовью.
                    </p>

                    {/* Cute Info Badges */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                        <span className="px-3.5 py-1.5 bg-white/75 hover:bg-white border border-pink-100 rounded-full text-zinc-700 text-xs md:text-sm shadow-sm transition-all hover:scale-105 cursor-default">
                            🎨 Дизайн & Эстетика
                        </span>
                        <span className="px-3.5 py-1.5 bg-white/75 hover:bg-white border border-pink-100 rounded-full text-zinc-700 text-xs md:text-sm shadow-sm transition-all hover:scale-105 cursor-default">
                            💻 React & Tailwind CSS
                        </span>
                        <span className="px-3.5 py-1.5 bg-white/75 hover:bg-white border border-pink-100 rounded-full text-zinc-700 text-xs md:text-sm shadow-sm transition-all hover:scale-105 cursor-default">
                            🧁 Код & Чай с ромашкой
                        </span>
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4 pt-4">
                        <Link to="/about">
                            <button className="px-6 py-3 bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium rounded-full shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 transform hover:-translate-y-0.5">
                                Обо мне 🌸
                            </button>
                        </Link>
                        <Link to="/contacts">
                            <button className="px-6 py-3 bg-white hover:bg-pink-50/30 text-zinc-700 hover:text-pink-600 font-medium rounded-full border border-pink-200/50 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5">
                                Связаться 💌
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Side Image Composition */}
                <div className="lg:col-span-5 flex justify-center items-center relative">
                    {/* Circle backdrops */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-pink-300 to-violet-300 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>
                    
                    {/* Decorative Sparkles & Elements */}
                    <span className="absolute top-4 left-6 text-3xl animate-float-reverse">✨</span>
                    <span className="absolute bottom-8 right-4 text-3xl animate-float">🎀</span>
                    <span className="absolute -top-6 right-10 text-2xl animate-bounce-slow">⭐</span>
                    <span className="absolute -bottom-4 left-10 text-2xl animate-float">🧁</span>

                    <div className="relative p-3 bg-white/80 border border-white/50 shadow-xl shadow-pink-100 rounded-[2.5rem] overflow-hidden max-w-[320px] sm:max-w-[360px] transform hover:rotate-2 transition-transform duration-500">
                        <img 
                            src="/src/assets/hero.png" 
                            alt="Khushnura" 
                            className="w-full h-auto object-cover rounded-[2rem] aspect-[4/5] bg-gradient-to-tr from-pink-100 to-purple-100"
                            onError={(e) => {
                                // Fallback if image doesn't exist or fails to load
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML += `
                                    <div class="w-full aspect-[4/5] bg-gradient-to-tr from-pink-200 via-rose-100 to-violet-200 flex flex-col items-center justify-center p-8 text-center rounded-[2rem]">
                                        <div class="text-6xl mb-4 animate-float">👩‍💻</div>
                                        <h3 class="font-comfortaa font-bold text-lg text-rose-700">Khusha's space</h3>
                                        <p class="text-xs text-rose-500/80 mt-2">Эстетичный мир веб-разработки</p>
                                    </div>
                                `;
                            }}
                        />
                        {/* Decorative Badge */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-pink-100">
                            <span className="text-xs font-comfortaa font-bold text-pink-600 whitespace-nowrap">🌸 Мечтать & Создавать</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Quote Footer section */}
            <div className="max-w-3xl mx-auto text-center mt-20 px-4 py-6 border-t border-pink-100/40 z-10">
                <p className="italic text-zinc-500 font-medium text-sm sm:text-base">
                    "Эстетика — это не только то, как интерфейс выглядит, но и то, насколько легко и приятно им пользоваться. Создаю код, который дарит радость."
                </p>
            </div>
        </div>
    );
};

export default Home;
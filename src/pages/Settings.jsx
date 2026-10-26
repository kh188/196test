import React, { useState } from "react";

const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState("sakura");
  const [mood, setMood] = useState("Мечтать и кодить ✨🌸🍰");
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [sparklesEnabled, setSparklesEnabled] = useState(true);

  const themes = [
    {
      id: "sakura",
      name: "Розовая Сакура 🌸",
      desc: "Нежные оттенки цветущей сакуры и сладкой ваты.",
      colors: "bg-gradient-to-r from-pink-300 via-rose-200 to-pink-100",
      accent: "border-pink-300"
    },
    {
      id: "lavender",
      name: "Лавандовый сон 💜",
      desc: "Успокаивающие тона лаванды и вечернего неба.",
      colors: "bg-gradient-to-r from-purple-300 via-violet-200 to-purple-100",
      accent: "border-purple-300"
    },
    {
      id: "peach",
      name: "Нежный Персик 🍑",
      desc: "Теплые фруктовые тона сочных персиков и солнца.",
      colors: "bg-gradient-to-r from-amber-200 via-orange-100 to-peach-100",
      accent: "border-amber-300"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] px-4 sm:px-12 md:px-[110px] py-12 md:py-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 relative space-y-12 text-left">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-zinc-800 mb-4 inline-flex items-center gap-3">
            Настройки <span className="animate-float">⚙️</span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-base">
            Персонализируйте своё пребывание в моём цифровом домике! Попробуйте сменить тему, обновить статус или настроить спецэффекты.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-purple-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Profile Card Mockup with Local Mood State */}
        <div className="glass-card p-6 rounded-[2rem] flex flex-col sm:flex-row items-center gap-6 border-b-4 border-pink-100">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-300 via-rose-200 to-violet-300 flex items-center justify-center text-4xl shadow-md border-2 border-white animate-float">
            👩‍💻
          </div>
          <div className="text-center sm:text-left flex-grow space-y-2">
            <h3 className="text-lg md:text-xl font-bold font-comfortaa text-zinc-800">
              Хушнара (Khusha)
            </h3>
            <div className="inline-block px-3 py-1 bg-pink-50 border border-pink-100 rounded-full text-xs font-semibold text-pink-600">
              Статус: <span className="italic">{mood || "Нет статуса"}</span>
            </div>
            <p className="text-xs text-zinc-400 leading-none">
              Предпросмотр профиля обновляется в реальном времени ✨
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Themes Panel */}
          <div className="md:col-span-7 space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-lg md:text-xl font-bold font-comfortaa text-zinc-800 flex items-center gap-2 border-b border-pink-50 pb-3">
                <span>Выбор цветовой палитры</span>
                <span className="text-xl">🎨</span>
              </h3>

              <div className="space-y-4">
                {themes.map((theme) => {
                  const isSelected = selectedTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                        isSelected
                          ? `border-pink-400 bg-pink-50/40 shadow-sm translate-x-1`
                          : "border-zinc-100 bg-white/40 hover:bg-white/70"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${theme.colors} border border-white shadow-sm flex-shrink-0`}></div>
                        <div>
                          <p className="text-xs md:text-sm font-bold font-comfortaa text-zinc-700">{theme.name}</p>
                          <p className="text-[11px] text-zinc-400 mt-0.5">{theme.desc}</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? "border-pink-500 bg-pink-500 text-white text-xs font-bold" : "border-zinc-200 bg-white"
                      }`}>
                        {isSelected && "✓"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive Widgets Panel */}
          <div className="md:col-span-5 space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-lg md:text-xl font-bold font-comfortaa text-zinc-800 flex items-center gap-2 border-b border-pink-50 pb-3">
                <span>Интерактивные виджеты</span>
                <span className="text-xl">🔮</span>
              </h3>

              {/* Mood input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-600 block">
                  Ваш статус настроения:
                </label>
                <input
                  type="text"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  maxLength="40"
                  placeholder="Напишите, о чем мечтаете..."
                  className="w-full px-4 py-2.5 bg-white/70 border border-pink-100/50 rounded-xl text-xs md:text-sm text-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:border-pink-400 transition-all"
                />
              </div>

              {/* Music Switch */}
              <div className="flex items-center justify-between p-3.5 bg-zinc-50/50 border border-zinc-100 rounded-2xl">
                <div>
                  <p className="text-xs font-bold text-zinc-700">Уютный Lo-Fi плеер 🎵</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">Воспроизведение фоновой музыки</p>
                </div>
                <button
                  onClick={() => setIsMusicOn(!isMusicOn)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    isMusicOn ? "bg-pink-500" : "bg-zinc-200"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      isMusicOn ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>

              {/* Sparkles Switch */}
              <div className="flex items-center justify-between p-3.5 bg-zinc-50/50 border border-zinc-100 rounded-2xl">
                <div>
                  <p className="text-xs font-bold text-zinc-700">Эффект блёсток ✨</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">Мерцающие звездочки на фоне</p>
                </div>
                <button
                  onClick={() => setSparklesEnabled(!sparklesEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    sparklesEnabled ? "bg-pink-500" : "bg-zinc-200"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      sparklesEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>

              {isMusicOn && (
                <div className="p-3 bg-pink-50/70 border border-pink-100/50 rounded-2xl text-center flex items-center justify-center gap-3 animate-pulse-gentle">
                  <span className="text-sm">🎧</span>
                  <p className="text-xs text-pink-600 font-medium">Воспроизведение: lofi_study_vibes_2026.mp3</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
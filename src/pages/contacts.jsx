import React from "react";

const Contact = () => {
  const contactDetails = [
    {
      icon: "✉️",
      title: "Электронная почта",
      value: "khushnura@example.com",
      bg: "bg-rose-50 border-rose-100",
      textColor: "text-rose-600"
    },
    {
      icon: "💬",
      title: "Telegram канал / ЛС",
      value: "@khusha_dev",
      bg: "bg-sky-50 border-sky-100",
      textColor: "text-sky-600"
    },
    {
      icon: "🐱",
      title: "GitHub профиль",
      value: "github.com/khusha-dev",
      bg: "bg-zinc-50 border-zinc-200",
      textColor: "text-zinc-700"
    },
    {
      icon: "📍",
      title: "Моё местоположение",
      value: "Ташкент, Узбекистан",
      bg: "bg-amber-50 border-amber-100",
      textColor: "text-amber-700"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо за ваше сообщение! Оно успешно отправлено на крыльях бабочки! 🦋✨");
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] px-4 sm:px-12 md:px-[110px] py-12 md:py-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-5 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 relative space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-zinc-800 mb-4 inline-flex items-center gap-3">
            Контакты <span className="animate-float">💌</span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-base">
            Буду очень рада пообщаться! Вы можете связаться со мной через социальные сети или отправить теплое сообщение прямо через форму ниже.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-purple-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-[2.5rem] flex-grow flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-comfortaa text-zinc-800">
                  Будем на связи! ✨
                </h3>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
                  Открыта для интересных предложений, стажировок, совместных проектов или просто дружеского общения за чашечкой чая. Не стесняйтесь писать!
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4">
                {contactDetails.map((contact, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-4 p-4 rounded-2xl border ${contact.bg} hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <span className="text-3xl p-1 bg-white rounded-xl shadow-sm">{contact.icon}</span>
                    <div className="text-left">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">
                        {contact.title}
                      </p>
                      <p className={`text-xs md:text-sm font-bold ${contact.textColor} font-comfortaa break-all mt-0.5`}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Greeting */}
              <div className="text-center p-3 bg-pink-50/50 rounded-2xl border border-pink-100/30 text-xs text-pink-600 font-medium">
                Отвечаю обычно в течение нескольких часов 🌸
              </div>
            </div>
          </div>

          {/* Right Column: Cute Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-[2.5rem] text-left h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-comfortaa text-zinc-800 flex items-center gap-2">
                  <span>Отправить открытку</span>
                  <span className="text-2xl animate-float-reverse">💖</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600 flex items-center gap-1">
                      <span>Ваше имя</span>
                      <span className="text-pink-400">✨</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Как мне к вам обращаться?" 
                      className="w-full px-4 py-3 bg-white/70 border border-pink-100/50 rounded-2xl text-xs md:text-sm text-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:border-pink-400 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600 flex items-center gap-1">
                      <span>Электронная почта</span>
                      <span className="text-pink-400">📧</span>
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="example@cozy.com" 
                      className="w-full px-4 py-3 bg-white/70 border border-pink-100/50 rounded-2xl text-xs md:text-sm text-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:border-pink-400 transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-600 flex items-center gap-1">
                      <span>Ваше теплое сообщение</span>
                      <span className="text-pink-400">📝</span>
                    </label>
                    <textarea 
                      rows="4" 
                      required 
                      placeholder="Напишите здесь ваше послание..." 
                      className="w-full px-4 py-3 bg-white/70 border border-pink-100/50 rounded-2xl text-xs md:text-sm text-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:border-pink-400 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white text-xs md:text-sm font-bold font-comfortaa rounded-2xl shadow-md shadow-pink-100 hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Отправить лучи добра ✨
                  </button>
                </form>
              </div>

              {/* Form Footer Message */}
              <div className="mt-6 text-center text-[11px] text-zinc-400 italic">
                Ваше сообщение полетит прямо ко мне на крыльях бабочки! 🦋
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
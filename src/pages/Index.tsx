const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1/4 max-w-[300px] animate-slide-in-left hidden md:block">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/files/89cf1819-0086-4822-9cb6-10fd72b7c84d.jpg" 
              alt="Школа имени Ш.Ф. Маннанова"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1/4 max-w-[300px] animate-slide-in-right hidden md:block">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://cdn.poehali.dev/files/12d75648-2f52-4521-bdc4-8f7a6a1bd77b.jpg" 
              alt="Шакир Фатихович Маннанов"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-primary/20">
            <div className="mb-6 flex justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Муниципальное общеобразовательное бюджетное учреждение
            </h1>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              "Средняя общеобразовательная школа имени полного кавалера ордена Славы Шакира Фатиховича Маннанова села Октябрьское"
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              муниципального района Стерлитамакский район Республики Башкортостан
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/30">
                <span className="text-primary font-semibold text-sm md:text-base">📚 Образование</span>
              </div>
              <div className="px-6 py-3 bg-secondary/10 rounded-full border-2 border-secondary/30">
                <span className="text-secondary font-semibold text-sm md:text-base">🌟 Традиции</span>
              </div>
              <div className="px-6 py-3 bg-accent/10 rounded-full border-2 border-accent/30">
                <span className="text-accent font-semibold text-sm md:text-base">🎓 Будущее</span>
              </div>
            </div>
          </div>

          <div className="mt-8 md:hidden grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/89cf1819-0086-4822-9cb6-10fd72b7c84d.jpg" 
                alt="Школа имени Ш.Ф. Маннанова"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/12d75648-2f52-4521-bdc4-8f7a6a1bd77b.jpg" 
                alt="Шакир Фатихович Маннанов"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Index;

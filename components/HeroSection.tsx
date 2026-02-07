import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PROFILE } from '../constants';

const HeroSection: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Nature Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
      </div>

      {/* Floating Elements for "Tech" feel */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block px-4 py-1.5 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm tracking-widest uppercase animate-[fadeIn_1s_ease-out]">
          Borderless Expert
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
          <span className="block animate-[slideUp_1s_ease-out]">테두리 없는 삶</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 animate-[slideUp_1.2s_ease-out]">
            AI 교육 전문가 김경수
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light animate-[fadeIn_1.5s_ease-out]">
          "어제보다 나은 내일을 만드는 기술, <br className="md:hidden"/>그 길을 함께하겠습니다."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeIn_2s_ease-out]">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          >
            협업 제안하기
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="px-8 py-4 border border-white/50 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer"
          >
            프로필 보기
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
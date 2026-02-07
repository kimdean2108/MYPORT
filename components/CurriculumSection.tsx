import React from 'react';
import { CURRICULUM } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const CurriculumSection: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-16">
          <h2 className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-2">Education Program</h2>
          <h3 className="text-4xl font-bold">실전 활용 중심 커리큘럼</h3>
          <p className="mt-4 text-xl text-gray-400">
            단순한 툴 사용법이 아닌, 비즈니스 아카이브를 디지털 브레인으로 변환하는 실습 위주 교육
          </p>
        </RevealOnScroll>

        <div className="space-y-12">
          {CURRICULUM.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100} direction="left">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-500">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Part */}
                  <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-600/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                      src={item.img} 
                      alt={item.category} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>
                  
                  {/* Content Part */}
                  <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded-full tracking-wider">
                         {item.target}
                       </span>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                      {item.category}
                    </h4>
                    <p className="text-lg text-gray-300 mb-6 border-l-2 border-blue-500 pl-4">
                      {item.topics}
                    </p>
                    <div className="mt-auto">
                      <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">기대 효과</p>
                      <p className="text-base text-white font-medium">
                        {item.effect}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
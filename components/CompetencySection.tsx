import React from 'react';
import { COMPETENCIES } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const CompetencySection: React.FC = () => {
  return (
    <section id="competency" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Core Competencies</h2>
          <h3 className="text-4xl font-bold text-gray-900">핵심 역량 분석</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            경험의 깊이와 기술의 혁신성이 만나는 접점. <br/>단순한 IT 강사가 아닌, 기업의 생리를 이해하는 전략가입니다.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPETENCIES.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 150} direction="up">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100 group">
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetencySection;
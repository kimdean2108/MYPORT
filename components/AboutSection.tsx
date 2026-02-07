import React from 'react';
import { PROFILE } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <RevealOnScroll direction="right" className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src="https://picsum.photos/600/800?random=10" 
                alt="Kim Kyung-su Profile" 
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white text-xl font-bold">"변화를 리딩하는 AI 전파자"</p>
                <p className="text-white/80 text-sm mt-1">{PROFILE.title}</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Text Side */}
          <div className="space-y-8">
            <RevealOnScroll direction="left">
              <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">About Expert</h2>
              <h3 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
                30년 비즈니스 통찰과<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  AI 기술의 완벽한 결합
                </span>
              </h3>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  현대 비즈니스 환경에서 기술은 생존의 문제입니다. 저는 한국자동차보험에서 시작하여 DB손해보험 본부장에 이르기까지, 
                  조직의 성장을 견인해온 리더의 시각에서 AI를 재해석합니다.
                </p>
                <p className="border-l-4 border-purple-500 pl-4 italic text-gray-700 font-medium">
                  “테두리 없는 삶으로 항상 새로운 일을 모색하고 준비한다”
                </p>
                <p>
                  기술적 이해를 넘어, AI가 어떻게 조직의 ROI(투자 대비 효율)를 극대화하고 개인의 생산성을 혁신할 수 있는지에 집중합니다. 
                  시니어에게는 새로운 설계를, 실무자에게는 정교한 업무 혁신을 제공합니다.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200} className="flex gap-4">
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-gray-900">30<span className="text-blue-600">+</span></span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
               </div>
               <div className="w-px bg-gray-300 h-12"></div>
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-gray-900">∞</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Possibilities</span>
               </div>
            </RevealOnScroll>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
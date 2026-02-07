import React from 'react';
import { Phone, Mail, User, ArrowRight } from 'lucide-react';
import { PROFILE } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-blue-900 overflow-hidden text-white scroll-mt-24">
      {/* Abstract Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <h2 className="text-blue-300 font-bold tracking-wide uppercase text-sm mb-4">Contact & Proposal</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              미래의 가치를<br />함께 설계하십시오.
            </h3>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              변화를 두려워하는 이들에게는 확신을, <br/>
              새로운 도약을 준비하는 조직에게는 실질적인 성과를 약속합니다.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                     <User className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-sm text-blue-300">Name</p>
                     <p className="text-lg font-bold">{PROFILE.name} ({PROFILE.engName})</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-sm text-blue-300">Phone</p>
                     <p className="text-lg font-bold">{PROFILE.phone}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-sm text-blue-300">Email</p>
                     <p className="text-lg font-bold">{PROFILE.email}</p>
                  </div>
               </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
             <h4 className="text-2xl font-bold mb-6">협업 제안 분야</h4>
             <ul className="space-y-4">
                {[
                  "기업/기관: DX(디지털 전환) 전략 및 실무 AI 활용 특강",
                  "사회적 기업/지자체: 시니어 디지털 포용 교육",
                  "금융/경제 역량 강화 프로그램",
                  "개인/그룹: 1:1 커리어 전환 컨설팅",
                  "개인 맞춤형 AI 도구 구축"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <ArrowRight className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-100">{item}</span>
                  </li>
                ))}
             </ul>
             <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-center italic text-blue-200">
                  "{PROFILE.slogan}"
                </p>
             </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
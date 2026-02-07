import React from 'react';
import { HISTORY, CERTIFICATIONS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Career Timeline */}
        <div className="mb-24">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Career Path</h2>
            <h3 className="text-4xl font-bold text-gray-900">전문가의 길</h3>
          </RevealOnScroll>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {HISTORY.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md hidden md:block z-10"></div>
                  
                  <RevealOnScroll className="w-full md:w-5/12" direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className={`p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow text-center md:text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-blue-600 font-bold text-lg block mb-2">{item.year}</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.role}</h4>
                      <p className="text-gray-600 text-sm">{item.detail}</p>
                    </div>
                  </RevealOnScroll>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Qualifications</h2>
            <h3 className="text-4xl font-bold text-gray-900">융합적 전문가의 지표</h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <RevealOnScroll key={index} delay={index * 100} direction="up">
                <div className="h-full p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <cert.icon className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg text-gray-900">{cert.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {cert.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HistorySection;
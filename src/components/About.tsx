
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Adobe Illustrator', icon: '✏️' },
    { name: 'Adobe InDesign', icon: '📄' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Canva Pro', icon: '🎪' },
    { name: 'Logo Design', icon: '🏷️' },
    { name: 'Poster Design', icon: '📰' },
    { name: 'Brand Identity', icon: '🎭' },
    { name: 'Print Design', icon: '🖨️' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating visual stories that captivate and inspire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-display font-semibold text-black mb-4">
                My Creative Journey
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6 font-medium">
                As a graphic designer at <strong className="text-black">INO Creators</strong>, I specialize in creating 
                extraordinary visual experiences that blend creativity with strategic thinking. 
                My passion lies in crafting colorful, elegant designs that not only catch the eye 
                but also communicate powerful messages.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed mb-6 font-medium">
                From stunning poster designs to memorable logo creations, I believe every project 
                is an opportunity to push creative boundaries and deliver work that exceeds expectations. 
                My approach combines artistic vision with technical expertise to create designs that truly shine.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                When I'm not designing, you'll find me exploring new creative trends, experimenting 
                with color palettes, or seeking inspiration from the world around me. I'm always 
                excited to take on new challenges and collaborate with clients who share my passion 
                for exceptional design.
              </p>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="animate-slide-in-right">
            <Card className="bg-white shadow-xl border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-display font-semibold text-black mb-6">
                  Skills & Tools
                </h3>
                
                {/* Marquee Container */}
                <div className="overflow-hidden relative bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 border-2 border-yellow-200">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {/* First set of skills */}
                    {skills.map((skill, index) => (
                      <div
                        key={`first-${skill.name}`}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 rounded-full mx-2 font-bold text-black shadow-lg hover:scale-105 transition-transform duration-200"
                      >
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-bold whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {skills.map((skill, index) => (
                      <div
                        key={`second-${skill.name}`}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 rounded-full mx-2 font-bold text-black shadow-lg hover:scale-105 transition-transform duration-200"
                      >
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-bold whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-center animate-pulse-slow">
                  <h4 className="text-xl font-display font-bold text-black mb-2">
                    Currently at INO Creators
                  </h4>
                  <p className="text-black font-semibold">
                    Creating impactful designs that drive results for our clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

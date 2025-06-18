
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe InDesign',
    'Figma',
    'Canva Pro',
    'Logo Design',
    'Poster Design',
    'Brand Identity',
    'Print Design'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating visual stories that captivate and inspire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-display font-semibold text-black mb-4">
                My Creative Journey
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                As a graphic designer at <strong>INO Creators</strong>, I specialize in creating 
                extraordinary visual experiences that blend creativity with strategic thinking. 
                My passion lies in crafting colorful, elegant designs that not only catch the eye 
                but also communicate powerful messages.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From stunning poster designs to memorable logo creations, I believe every project 
                is an opportunity to push creative boundaries and deliver work that exceeds expectations. 
                My approach combines artistic vision with technical expertise to create designs that truly shine.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                When I'm not designing, you'll find me exploring new creative trends, experimenting 
                with color palettes, or seeking inspiration from the world around me. I'm always 
                excited to take on new challenges and collaborate with clients who share my passion 
                for exceptional design.
              </p>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="animate-slide-in-left">
            <Card className="bg-white shadow-xl border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-display font-semibold text-black mb-6">
                  Skills & Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 py-3 rounded-lg text-center font-medium text-gray-800 hover:from-yellow-200 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 cursor-default"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-center">
                  <h4 className="text-xl font-display font-semibold text-black mb-2">
                    Currently at INO Creators
                  </h4>
                  <p className="text-black/80">
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

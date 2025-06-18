
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Posters', 'Logos', 'Branding'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Creative Music Poster',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80',
      description: 'Vibrant poster design for music festival'
    },
    {
      id: 2,
      title: 'Modern Brand Logo',
      category: 'Logos',
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=500&q=80',
      description: 'Clean and minimalist logo design'
    },
    {
      id: 3,
      title: 'Event Poster Design',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c6049d999?auto=format&fit=crop&w=500&q=80',
      description: 'Eye-catching event promotion poster'
    },
    {
      id: 4,
      title: 'Corporate Identity',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=500&q=80',
      description: 'Complete branding package for startup'
    },
    {
      id: 5,
      title: 'Restaurant Logo',
      category: 'Logos',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=500&q=80',
      description: 'Elegant logo for fine dining restaurant'
    },
    {
      id: 6,
      title: 'Concert Poster',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=500&q=80',
      description: 'Dynamic poster for live concert event'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
            Explore a collection of my creative work spanning posters, logos, and branding projects
          </p>

          {/* Filter buttons - Mobile horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            <div className="flex gap-4 px-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 snap-center flex-shrink-0 ${
                    activeFilter === category
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg'
                      : 'border-2 border-gray-400 text-gray-800 hover:border-yellow-400 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio grid - Mobile horizontal scroll */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-80 snap-center animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="inline-block bg-yellow-400 text-black px-3 py-2 rounded-full text-sm font-bold mb-2">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-bold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block bg-yellow-400 text-black px-3 py-2 rounded-full text-sm font-bold mb-2">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Like what you see? Let's create something amazing together!
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

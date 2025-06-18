
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
    },
    {
      id: 7,
      title: 'Tech Startup Branding',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
      description: 'Modern branding for technology company'
    },
    {
      id: 8,
      title: 'Fashion Brand Logo',
      category: 'Logos',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80',
      description: 'Sophisticated logo for fashion brand'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore a collection of my creative work spanning posters, logos, and branding projects
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                    : 'border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-yellow-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Like what you see? Let's create something amazing together!
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

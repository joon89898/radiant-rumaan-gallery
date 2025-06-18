
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Dribbble } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-black mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Drop me a message and let's create something extraordinary!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-display font-semibold text-black mb-6">
                Get In Touch
              </h3>
              
              {/* Phone */}
              <div className="flex items-center space-x-4 mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">📞</span>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Call me directly</p>
                  <a href="tel:+94789663595" className="text-xl font-semibold text-black hover:text-yellow-600 transition-colors">
                    +94 78 966 3595
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-display font-semibold text-black">
                  Connect with me
                </h4>
                
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://www.behance.net/meeranrumaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">Be</span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Portfolio on</p>
                      <p className="font-semibold text-black">Behance</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/meeran-rumaan-49b8b7337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Professional network</p>
                      <p className="font-semibold text-black">LinkedIn</p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                      <Dribbble className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Design inspiration</p>
                      <p className="font-semibold text-black">Dribbble</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Tell me about your project, timeline, and budget..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

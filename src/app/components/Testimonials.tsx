import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
    const testimonials = [
        {
            name: 'John Doe',
            title: 'Tech Global Co.',
            testimonial: 'Clean Office, Happy Team! We\'ve received nothing but compliments from both staff and clients on how clean and organized our office...',
            avatar: 'men.webp',
        },
        {
            name: 'Jane Peterson',
            title: 'Home Owner',
            testimonial: 'Stress-Free and Sparkling Clean! I have never been more impressed with a cleaning service...',
            avatar: 'man1.webp',
        },
        {
            name: 'Carlo Martinez',
            title: 'Innovate Group',
            testimonial: 'Professional and Detailed! Our office has never looked better! The cleaners are punctual...',
            avatar: 'women.webp',
        },
    ];

    return (
        <section className="container mx-auto py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
import React from 'react';

interface TestimonialProps {
    name: string;
    title: string;
    testimonial: string;
    avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
    name,
    title,
    testimonial,
    avatar,
}) => {
    return (
        <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 text-center mb-4">{testimonial}</p>
            <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
            <p className="text-sm text-gray-500 text-center">{title}</p>
        </div>
    );
};

export default TestimonialCard;
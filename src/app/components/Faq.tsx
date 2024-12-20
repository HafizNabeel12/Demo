"use client"
import React, { useState } from 'react';

interface FaqProps {
    question: string;
    answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
                <h3 className="text-lg font-bold">{question}</h3>
                <span className="text-gray-500">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <p className="text-gray-700 mt-2">{answer}</p>
            )}
        </div>
    );
};

export default Faq;
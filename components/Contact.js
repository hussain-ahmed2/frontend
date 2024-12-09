"use client";

import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted', formData);
    };

    return (
        <section id="contact" className="pt-4 bg-neutral-400 min-h-[calc(100vh-3rem)] mb-4 rounded-lg">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
                <p className="text-lg mb-8 text-center">
                    I{"'"}d love to hear from you! Feel free to reach out.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 p-4 mx-4 bg-neutral-500 rounded-md">
                    <div>
                        <label htmlFor="name" className="block font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-neutral-600 text-white font-bold rounded-md hover:bg-neutral-900 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

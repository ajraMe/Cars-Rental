"use client"
import React, {useState} from 'react';
import {saveFeedback} from "@/lib/db-actions";
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await saveFeedback(formData);
            toast.success("Successfully sent");
            // Clear form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: '',
            });
        } catch (error) {
            toast.error('Error submitting contact form');
        }
    };

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    return (
        <div className="flex flex-col items-center justify-center w-full bg-gray-900 px-4 md:px-6" style={{
            height: '100%',
            backgroundImage: "url('/BUGATTI-Passione-Engadina_airport.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="max-w-md w-full space-y-6 bg-gray-900 bg-opacity-80 p-6 rounded-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white">Contact Us</h1>
                    <p className="mt-2 text-gray-400">Reach out to us with any questions or feedback. We're here to
                        help.</p>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-5 text-white">
                    <div className="grid">
                        <label className="text-white" htmlFor="firstName"></label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange} placeholder="First name"
                            className="p-2"/>
                    </div>
                    <div className="grid">
                        <label className="text-white" htmlFor="lastName"></label>
                        <input
                            id="lastName"
                            name="lastName" type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            className="p-2"/>
                    </div>
                    <div className="grid">
                        <label className="text-white" htmlFor="email"></label>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                               placeholder="Enter your email"
                               className="p-2"/>
                    </div>
                    <div className="grid">
                        <label className="text-white" htmlFor="phoneNumber"></label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="p-2"
                        />
                    </div>

                    <div className="grid">
                        <label className="text-white" htmlFor="message"></label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            className="bg-gray-800 bg-opacity-50 text-white p-2 rounded focus:border-[1px] focus:border-white focus:outline-none cursor-pointer duration-50"
                        />
                    </div>
                    <div className="grid">
                        <button type="submit" className='hover:bg-red-600 p-2 rounded-full text-white'
                                style={{width: 90, margin: "0 auto"}}>Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

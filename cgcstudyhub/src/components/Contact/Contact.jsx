import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import {
    FiMail,
    FiUser,
    FiEdit2,
    FiMapPin,
    FiPhone
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import supportanimation from "../../assets/Lottie/support.json";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    // Validation state
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Reset error on typing
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
        else if (formData.message.length < 10)
            newErrors.message = "Message should be at least 10 characters.";
        return newErrors;
    };

    // Function to check if email is deliverable
    const checkRealEmail = async (email) => {
        try {
            const { data } = await axios.get(
                `https://emailvalidation.abstractapi.com/v1/?api_key=5767eb3928734df59614109b3d465c31&email=${email}`
            );

            return data.deliverability === "DELIVERABLE";
        } catch (err) {
            console.error("Email check failed:", err);
            return false; // default to false if API fails
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setStatus("Checking email...");

        const isReal = await checkRealEmail(formData.email);
        if (!isReal) {
            setErrors({ email: "Please enter a real/valid email address." });
            setLoading(false);
            return;
        }

        setStatus("Sending message...");
        emailjs
            .send(
                "service_3zp1ex7",   // Replace with your EmailJS Service ID
                "template_qb7dvw8",  // Replace with your EmailJS Template ID
                formData,
                "SHlm2mC0HUFt6JeXt"        // Replace with your EmailJS Public Key
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                    setLoading(false);
                },
                (err) => {
                    console.error(err);
                    setStatus("Failed to send message. Try again!");
                    setLoading(false);
                }
            );
    };



    return (
        <section
            id="Contacts"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
    py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24"
        >
            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
                >
                    Get in <span className="text-blue-600">Touch</span>
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                    Have questions or feedback? Send us a message!
                </p>
            </div>

            {/* Form + Animation Wrapper */}
            <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row items-center md:items-start gap-10 sm:gap-12">

                {/* Left Side: Animation + Icons */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    {/* Lottie Animation */}
                    <Player
                        autoplay
                        loop
                        src={supportanimation}
                        style={{ height: "300px", width: "400px" }} // smaller on mobile
                        className="sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px]"
                    />

                    {/* Contact Icons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-center">
                        {/* Location */}
                        <div className="flex flex-col items-center text-center w-[100px] sm:w-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-600 text-white rounded-full shadow-md hover:scale-110 transition">
                                <FiMapPin className="w-5 h-5" />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-white mt-2">
                                Cgc, Landran, Mohali, India
                            </p>
                        </div>
                        {/* Phone */}
                        <div className="flex flex-col items-center text-center w-[100px] sm:w-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md hover:scale-110 transition">
                                <FiPhone className="w-5 h-5" />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-white mt-2">
                                +91-7986688031
                            </p>
                        </div>
                        {/* Email */}
                        <div className="flex flex-col items-center text-center w-[100px] sm:w-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-green-600 text-white rounded-full shadow-md hover:scale-110 transition">
                                <FiMail className="w-5 h-5" />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-white mt-2 break-words">
                                cgcstudyhub@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-6 sm:mt-8 text-center md:text-left">
                        <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3">Connect with <span className="text-blue-600">Us</span> </p>
                        <div className="flex justify-center md:justify-start gap-6">
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700  hover:scale-110 transition">
                                <FaGithub size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 hover:bg-blue-200 hover:scale-110 transition">
                                <FaTwitter size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900 text-pink-500 hover:bg-pink-200 hover:scale-110 transition">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 hover:bg-blue-200 hover:scale-110 transition">
                                <FaLinkedin size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg space-y-4"
                >
                    {/* Name */}
                    <div>
                        <label className="block text-left text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                            Name
                        </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                        {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-left text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                            Email
                        </label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                        {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-left text-gray-700 dark:text-gray-300 mb-1 text-sm sm:text-base">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Write your message..."
                            className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-md transition duration-300"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                    {status && <p className="text-center text-xs sm:text-sm mt-2 text-blue-600">{status}</p>}
                </motion.form>
            </div>
        </section>

    );
}
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
    FiMail,
    FiUser,
    FiMapPin,
    FiPhone
} from "react-icons/fi";
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaInstagram
} from "react-icons/fa";
import supportanimation from "../../assets/Lottie/support.json";

// Lazy-load Lottie Player to reduce memory load
const Player = lazy(() =>
    import("@lottiefiles/react-lottie-player").then(mod => ({ default: mod.Player }))
);

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (!formData.message.trim() || formData.message.length < 10) {
            newErrors.message = "Message should be at least 10 characters.";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        setStatus("Sending...");

        try {
            await emailjs.send(
                "service_3zp1ex7",
                "template_qb7dvw8",
                formData,
                "SHlm2mC0HUFt6JeXt"
            );
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("Failed to send. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="Contacts"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24"
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 dark:text-white"
                >
                    Get in <span className="text-blue-600">Touch</span>
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    Have questions or feedback? Send us a message!
                </p>
            </div>

            <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row gap-10">
                {/* Animation */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <Suspense fallback={<div className="w-[300px] h-[300px] bg-gray-200 rounded-lg animate-pulse" />}>
                        <Player
                            autoplay
                            loop
                            src={supportanimation}
                            style={{ height: "300px", width: "300px" }}
                        />
                    </Suspense>

                    {/* Icons */}
                    <div className="grid grid-cols-3 gap-6 mt-6 text-center">
                        {[{
                            icon: <FiMapPin />,
                            label: "Cgc, Landran"
                        }, {
                            icon: <FiPhone />,
                            label: "+91-7986688031"
                        }, {
                            icon: <FiMail />,
                            label: "cgcstudyhub@gmail.com"
                        }].map(({ icon, label }, i) => (
                            <div key={i} className="flex flex-col items-center w-24">
                                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md">
                                    {icon}
                                </div>
                                <p className="text-xs text-gray-700 dark:text-white mt-2 break-words">{label}</p>
                            </div>
                        ))}
                    </div>

                    <span className="text-3xl font-bold py-4">
                        <span className="text-white">Connect </span>
                        <span className="text-blue-500">with us</span>
                    </span>

                    <div className="mt- flex gap-4 justify-center">
                        {[FaGithub, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                            <a key={i} href="#" className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-110 transition">
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {["name", "email", "message"].map((field, i) => (
                        <div key={i}>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 capitalize">{field}</label>
                            {field !== "message" ? (
                                <input
                                    name={field}
                                    type={field === "email" ? "email" : "text"}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                    placeholder={`Enter your ${field}`}
                                />
                            ) : (
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                    placeholder="Write your message..."
                                />
                            )}
                            {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
                        </div>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        className="w-full py-2 px-6 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                    {status && <p className="text-center text-sm text-blue-600 mt-2">{status}</p>}
                </motion.form>
            </div>
        </section>
    );
}

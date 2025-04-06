import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "Live Monument Scan",
    description: "Use AI to scan and learn about monuments in real-time.",
    icon: "📷",
  },
  {
    title: "3D Virtual Tours",
    description: "Experience historical places from your home.",
    icon: "🏛",
  },
  {
    title: "Cultural Insights",
    description: "Learn about the history and significance of each site.",
    icon: "📜",
  },
  {
    title: "AI-Powered Guide",
    description: "An AI-driven guide provides real-time historical insights.",
    icon: "🤖",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl text-white font-bold mb-10">Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-yellow-500 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
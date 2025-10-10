"use client";
import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="lg:py-16 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#181818] rounded-xl p-6 lg:p-10 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Assistant Software QA Engineer
            </h3>
            <span className="text-[#ADB7BE] mt-2 lg:mt-0">
              March 2025 – Present
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-semibold text-primary-400 mb-2">
            Onnorokom Projukti Limited
          </h4>

          <h5 className="text-base sm:text-sm font-semibold text-[#ADB7BE] mb-2">
            Dhaka, Bangladesh
          </h5>

          <ul className="list-disc list-inside text-[#ADB7BE] space-y-2 mt-4">
            <li>Perform manual and automated testing for web and mobile applications.</li>
            <li>Develop and execute test cases using Selenium WebDriver, Postman, and JMeter.</li>
            <li>Conduct API testing using Postman and Apidog, ensuring reliable endpoints.</li>
            <li>Perform performance testing to optimize application speed and scalability.</li>
            <li>Identify, report, and track software defects with detailed bug reports.</li>
            <li>Collaborate with developers to ensure high-quality software releases.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

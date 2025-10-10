"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <table className="w-full border-gray-200">
        <tbody>
  <tr className="border-b">
    <td className="p-1 font-semibold">Automation Testing</td>
    <td className="py-1">Selenium WebDriver, BDD (SpaceFlow), </td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">API Testing</td>
    <td className="py-1">Postman, ApiDog</td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">Performance Testing</td>
    <td className="py-1">JMeter</td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">Penetration Testing</td>
    <td className="py-1">Burp Suite, ZAP</td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">Programming Languages</td>
    <td className="py-1">C#, Java, JavaScript, Python</td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">Methodologies</td>
    <td className="py-1">White Box & Black Box Testing, Agile, V-Model, Functional & Penetration Testing</td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">Platforms / ERP</td>
    <td className="py-1">Large ERP systems, OpenCart, Orange HRM</td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">Tools & Software</td>
    <td className="py-1">Jira, Git, VS, VS Code, Eclipse, Power BI, Kaggle, LaTeX</td>
  </tr>
  <tr className="border-b">
    <td className="p-1 font-semibold">Databases</td>
    <td className="py-1">MongoDB, MySQL</td>
  </tr>
</tbody>

      </table>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <ul className="mb-3">
          <li className="text-lg font-semibold text-white">United International University - 2024</li>
          <li className="text-sm text-gray-400">Bachelor of Science (BSc) in Computer Science and Engineering</li>
        </ul>
        <ul>
          <li className="text-lg font-semibold text-white">Dhaka City College - 2019</li>
          <li className="text-sm text-gray-400">Higher Secondary Certificate (Science)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-2">
        <li className="text-base font-medium text-gray-400">Software Testing for Developers (Coursera): [Link]</li>
        <li className="text-base font-medium text-gray-400">Advanced SQL (Kaggle) [Link]</li>
        <li className="text-base font-medium text-gray-400">Data Analysis with Python (Coursera): [Link]</li>
        <li className="text-base font-medium text-gray-400">Learn Statistics with Python Course by Codecademy: [Link]</li>
        <li className="text-base font-medium text-gray-400">Learn Data Analysis with Pandas Course by Codecademy: [Link]</li>
        <li className="text-base font-medium text-gray-400">Python (Basic) HackerRank: [Link]</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
    const handleResize = () => {
      if (imageRef.current) setImageHeight(imageRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="text-gray-200 bg-[#0F0F0F]" id="about">
      {/* Header */}
      <div className="w-full mx-auto px-4 sm:px-0 py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center">
          About Me
        </h2>
        <p className="text-base lg:text-lg leading-relaxed text-gray-300 text-justify max-w-4xl sm:max-w-5xl mx-auto">
        I’m a Software Quality Assurance (SQA) Engineer with 1+ year of hands-on experience in automation, penetration testing, and functional testing of large ERP and enterprise platforms. I’ve built and maintained test automation suites and executed manual test plans for complex systems, using Selenium WebDriver, BDD frameworks like SpaceFlow, Postman, JMeter, Burp Suite, and Apidog to ensure reliability, performance, and security. I thrive in collaborative, fast-paced teams—analyzing complex challenges and delivering practical, high-quality solutions—and my commitment to learning and problem-solving has been recognized through successful project deliveries, multiple project show wins, and academic scholarships.
        </p>
      </div>

      {/* Flex layout for image + scrollable content */}
      <div className="flex flex-col md:flex-row items-start gap-8 px-4 xl:px-16 sm:pb-16">
        {/* Left Image */}
        <div className="flex-shrink-0" ref={imageRef}>
          <Image
            src="/images/about-image.png"
            alt="About Me Image"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>

        {/* Right Scrollable Content */}
        <div
          className="flex-1 overflow-y-auto pr-2"
          style={{ maxHeight: imageHeight }}
        >
          {/* Skills */}
          <div className="mb-6">
            <h5 className="text-2xl font-bold mb-3 border-b-4 border-blue-300 inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">
              Skills
            </h5>
            {TAB_DATA.find((t) => t.id === "skills").content}
          </div>

          {/* Education */}
          <div className="mb-6">
            <h5 className="text-2xl font-bold mb-3 border-b-4 border-blue-300 inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">
              Education
            </h5>
            {TAB_DATA.find((t) => t.id === "education").content}
          </div>

          {/* Certifications */}
          <div>
            <h5 className="text-2xl font-bold mb-3 border-b-4 border-blue-300 inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">
              Certifications
            </h5>
            {TAB_DATA.find((t) => t.id === "certifications").content}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="h-px my-8 bg-gray-600 border-0 dark:bg-gray-700" />
    </section>
  );
};

export default AboutSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
  <table className="w-full border-gray-200">
    <tbody>
      {/* <tr className="border-b">
        <td className="p-1 font-semibold">Languages:</td>
        <td className="py-1 ">C, Python, JavaScript</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">Database System:</td>
        <td className="py-1">MySQL, MongoDB</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">Libraries:</td>
        <td className="py-1">NumPy, Pandas, OpenCV, Pytorch</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">EDA:</td>
        <td className="py-1">Data cleaning, feature scaling, statistical analysis, and visualization</td>
      </tr>
      <tr className="">
        <td className="p-1 font-semibold">Tools & Software:</td>
        <td className="py-1">Power BI, VS Code, Google Colab, Kaggle, Latex</td>
      </tr> */}
      <tr className="border-b">
        <td className="p-1 font-semibold">Testing Tols:</td>
        <td className="py-1 ">Selenium, Postman, JMeter</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">Programming Languages:</td>
        <td className="py-1">Java, JavaScript, Python, C</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">Methodologies:</td>
        <td className="py-1">White Box & Black Box Testing, Agile, V-Model</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">Frameworks:</td>
        <td className="py-1">React, Next.js, TailwindCSS</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">Tools & Software:</td>
        <td className="py-1">Jira, Git, VS Code, Eclipse, Power BI, Kaggle, Latex</td>
      </tr>
      <tr className="border-b">
        <td className="p-1 font-semibold">Databases:</td>
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
      
      <ul>
          <li className="text-lg font-semibold text-white">United International University-2024 </li>
          <li className="text-sm text-gray-400">Bachelor of Science (BSc) in Computer Science and Engineering </li>
        </ul>
        <ul>
        <li className="text-lg font-semibold text-white">Dhaka City College-2019 </li>
        <li className="text-sm text-gray-400">Higher Secondary Certificate (Science) </li>
      </ul>
      
      </>
        
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <>
      
      <ul>
          <li className="text-base font-medium text-gray-400">Software Testing for Developers (Coursera): [Link]</li>
          <li className="text-base font-medium text-gray-400">Advanced SQL (Kaggle) [Link]</li>
          <li className="text-base font-medium text-gray-400">Data Analysis with Python (Coursera): [Link]</li>
          <li className="text-base font-medium text-gray-400">Learn Statistics with Python Course by by Codecademy: [Link]</li>
          <li className="text-base font-medium text-gray-400">Learn Data Analysis with Pandas Course by Codecademy: [Link]</li>
          <li className="text-base font-medium text-gray-400">Python (Basic) HackerRank: [Link]</li>
      </ul>
      
      </>
        
      
    ),
  },
];

const AboutSection = () => {

  return (
    <section className="text-gray-200" id="about" >
    
    <div className="md:h-screen h-full md:grid md:grid-cols-2 gap-8 items-center  px-4 xl:gap-16 sm:py-16 xl:px-16">
      {/* left */}
      <div>
          <Image src="/images/about-image.png" alt="img" width={500} height={500} />
      </div>
      
      
      {/* right */}
      <div className="overflow-y-scroll  mt-0 md:mt-0 text-left flex flex-col max-h-full md:max-h-screen">
      
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
        Throughout my academic journey at United International University, I cultivated a deep understanding of testing methodologies, including White Box and Black Box testing, while honing my coding skills in Java, Python, and JavaScript.
        I’ve also collaborated on diverse projects, such as test automation for platforms like Orange HRM and OpenCart, where I utilized tools like Selenium WebDriver and frameworks like TestNG to optimize testing processes.
        Beyond technical skills, I thrive in collaborative and dynamic environments, where I can analyze complex challenges and provide innovative solutions. My commitment to learning and problem-solving has been recognized through achievements like winning multiple project shows and securing academic scholarships.
        </p>
        <div className="mt-8">
          <h5 className="inline-block text-2xl font-bold mt-4  border-b-4 border-blue-300  text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">Skills</h5>
          {TAB_DATA.find((t) => t.id === "skills").content}
          <h5 className="inline-block text-2xl font-bold mt-4  border-b-4 border-blue-300 text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">Education</h5>
          {TAB_DATA.find((t) => t.id === "education").content}
          <h5 className="inline-block text-2xl font-bold mt-4  border-b-4 border-blue-300 text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600">Certifications</h5>
          {TAB_DATA.find((t) => t.id === "certifications").content}
         
        
        </div>
      </div>
      
      
    </div>
    
   <hr className="h-px my-4 mt-4 bg-gray-600 border-0 dark:bg-gray-700"></hr>
  </section>



  );
};

export default AboutSection;

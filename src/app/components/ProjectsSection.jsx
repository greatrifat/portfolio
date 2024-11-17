"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Patient Waiting Time analysis",
    description: "PowerBI Dashboard project",
    image: "/images/projects/1.png",
    tag: ["All", "EDA"],
    gitUrl: "https://github.com/greatrifat/EDA/tree/main/Paitent%20Waiting%20Time%20Power%20BI%20Dashbord",
    previewUrl: "https://github.com/greatrifat/EDA/tree/main/Paitent%20Waiting%20Time%20Power%20BI%20Dashbord",
  },
  {
    id: 2,
    title: "E-Com Website",
    description: "Next.js page routing",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/greatrifat/ecommerce_nextjs",
    previewUrl: "https://greatrifatecom.vercel.app",
  },
  {
    id: 3,
    title: "Foundation Management System",
    description: "Alokito Foundation",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/greatrifat/alokitofoundation",
    previewUrl: "https://alokitofoundation.vercel.app",
  },
  {
    id: 4,
    title: "EDA on Telco Customer Churn",
    description: "The Telco Customers dataset contains information about customers of a telecom company, including demographics, services used, and churn status. The EDA reveals patterns related to customer churn, helping identify characteristics of loyal customers versus those likely to leave. This analysis can guide customer retention efforts and enhance service strategies.",
    image: "/images/projects/4.png",
    tag: ["All", "EDA"],
    gitUrl: "https://github.com/greatrifat/EDA/blob/main/EDA_on_Telco_Customer.ipynb",
    previewUrl: "https://github.com/greatrifat/EDA/blob/main/EDA_on_Telco_Customer.pdf",
  },
  {
    id: 5,
    title: "EDA on Bank Loan Defaulters",
    description: "The Bank Loan Defaulters dataset includes records of loan applications and outcomes for a bank's customers. The analysis identifies customer profiles that are more or less likely to default on loans, covering factors such as income level, employment type, family status, and loan characteristics. These insights assist in risk assessment and can inform the bank's lending strategies.",
    image: "/images/projects/5.png",
    tag: ["All", "EDA"],
    gitUrl: "https://github.com/greatrifat/EDA/blob/main/EDA_on_Bank_Loan_Defaulter.ipynb",
    previewUrl: "https://github.com/greatrifat/EDA/blob/main/EDA_on_Bank_Loan_Defaulter.pdf",
  },
  {
    id: 6,
    title: "Url Shortener",
    description: "Next.js app routing",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/greatrifat/url_shortener",
    previewUrl: "https://greaturl.vercel.app",
  },
  
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="EDA"
          isSelected={tag === "EDA"}
        />
      </div>
      <div className=""> 
      <ul ref={ref} className="grid max-h-[calc(2*theme(height.96))] overflow-x-auto  md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </div>
      <hr className="h-px my-8 bg-gray-600 border-0 dark:bg-gray-700"></hr>
    </section>
  );
};

export default ProjectsSection;

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Advance OOP 3rd Runner Up",
    description: "Advance OOP 3rd Runner Up",
    image: "/images/cirtificates/adoop.png",
    tag: ["All", "University"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Microprocessors & Micro-Controllers Champion",
    description: "Microprocessors & Micro-Controllers Champion",
    image: "/images/cirtificates/micro.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Final Year Design Project 2nd Runner Up",
    description: "Final Year Design Project 2nd Runner Up",
    image: "/images/cirtificates/fydp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Software Testing for Developers by Coursera",
    description: "Software Testing for Developers by Coursera",
    image: "/images/cirtificates/sqa.png",
    tag: ["All", "sqa"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Data Analysis with Python",
    description: "Data Analysis with Python",
    image: "/images/cirtificates/da.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Volunteer Work at Project Show",
    description: "Volunteer Work at Project Show",
    image: "/images/cirtificates/vt.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Advanced SQL by kaggle",
    description: "Advanced SQL by kaggle",
    image: "/images/cirtificates/asql.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "SQL(Basic) by HackerRank",
    description: "SQL(Basic) by HackerRank",
    image: "/images/cirtificates/bsql.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Intro to SQL by kaggle",
    description: "Intro to SQL by kaggle",
    image: "/images/cirtificates/isql.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Data Analysis with Python",
    description: "Data Analysis with Python",
    image: "/images/cirtificates/da.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Software Quality for Developers",
    description: "Software Quality for Developers",
    image: "/images/cirtificates/sqa.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const AwardsSection = () => {
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
    <section id="awards">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      Awards and Certifications
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
    </section>
  );
};

export default AwardsSection;

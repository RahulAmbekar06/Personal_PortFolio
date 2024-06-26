import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am Rahul Pradip Ambekar, a highly motivated and adaptable
        individual with a Bachelor's degree in Information Technology(BSC-IT), fueled by
        a relentless passion for the world of IT. My objective is
        to pursue a Master of Computer Application (MCA) to further enrich my
        knowledge and skills in the field of IT. Proficient in a variety of
        programming languages and frameworks, including React,MongoDB,Express
        NodeJS, javascript, and more, I have experience in developing full-stack web
        applications.
        <br className="sm:block hidden" />
        I have a strong academic background, achieving a CGPA of 8.40 in
        Bachelor's of Information Technology from Mumbai University's gogate jogalekar college.
        My leadership skills shine through in my project experiences.
        In addition to my technical skills, I have actively participated in extracurricular
        activities, holding leadership positions in college committees and
        successfully organizing events that drew substantial crowds.
        <br className="sm:block hidden" />
        With a keen interest in Information Technology I am excited to contribute my skills and
        leadership abilities to the field of Information Technology, making meaningful
        advancements in technology and innovation. I like working on:
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-6'>Hi, I'm Ibtehaz (pronounced eeb-tay-haaz). I've always been <span className='underline underline-offset-4'>fascinated by the endless possibilities of programming</span> and the satisfaction of solving complex problems. At the age of 13, I found myself immersed in the world of online communities. I started building forums and community boards for WWE fans, combining my love for wrestling with an early interest in web development. This passion for technology led me to pursue a <strong>Bachelor’s Degree in Computer Science</strong>, which further solidified my foundation in the field.
    Fast forward to today, and I'm still driven by the same enthusiasm for technology, now with a focus on full-stack development and machine learning. My skills have grown, but my curiosity and love for creating engaging online experiences remain at the core of what I do.
    </p>
    <p>
    <strong>I believe in the power of science and technology</strong> to transform and enrich lives. Whether it's discussing the latest tech trends, geeking out over Star Wars theories, or collaborating on innovative projects, I'm always up for connecting with fellow enthusiasts who share a passion for the limitless possibilities of our digital world.
    </p>

    </motion.section>
  );
}

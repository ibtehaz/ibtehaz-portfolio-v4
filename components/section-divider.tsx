"use client";

import React from 'react'
import { motion } from "framer-motion"

export default function SectionDivider() {
    return (
        <motion.div>
            {[...Array(5)].map((_, index) => (
                <motion.span
                    key={index}
                    className="bg-gray-500 my-24 h-2 w-2 rounded-full hidden sm:inline-block mx-2"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.125 * index,
                    }}
                />
            ))}
        </motion.div>
    );
}

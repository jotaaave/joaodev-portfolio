'use client'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'

export default function HabillitieAppear({ children }: { children: ReactElement }) {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -50 }} 
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className=""
        >
            {children}
        </motion.h1>
    )
}
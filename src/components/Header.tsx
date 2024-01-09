'use client'

import Link from "next/link";
import { motion } from "framer-motion"

export function Header() {
    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 pt-3 mx-auto">
                <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
                    
                    <div className="flex items-center justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="list-none"
                        >
                            <Link href="/" className="list-none mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0">
                                Logo Here
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex flex-row">
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="list-none"
                        >
                            <Link href="/" className="list-none mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0">
                                Home
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="list-none"
                        >
                            <Link href="/about" className="list-none mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0">
                                About
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="list-none"
                        >
                            <Link href="/contact" className="list-none mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0">
                                Contact
                            </Link>
                        </motion.li>

                    </div>



                </div>
            </div>
        </nav>
    )
}
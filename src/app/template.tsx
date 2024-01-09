'use client'
import { motion } from "framer-motion"
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode; }) {

  useEffect(
    () => {
      console.log(" log here. ")
    }, []
  )

  return (
    <>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 pt-3 mx-auto">
          <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
            <nav className="container flex items-center justify-left px-6 mx-auto ">

              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="list-none mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0">
                <Link href="/javascript" >JavaScript</Link>
              </motion.li>

              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="list-none mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0">
                <Link href="/typescript" >TypeScrip</Link>
              </motion.li>

              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="list-none border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                <Link href="/reactjs" >Reactjs</Link>
              </motion.li>

              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="list-none border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                <Link href="/nextjs" >Nextjs</Link>
              </motion.li>

            </nav>
          </div>
        </div>
      </nav>

      <main className="py-12 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        {children}
      </main>
    </>
  )

}
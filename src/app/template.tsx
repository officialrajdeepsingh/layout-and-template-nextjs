'use client'

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Template({ children }: { children: React.ReactNode }) {

  const router = useRouter()
  const searchParams = useSearchParams()

  // https://nextjs.org/docs/app/api-reference/functions/use-search-params#examples
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <>
      <nav className="h-24 mt-10 py-2 container flex items-center justify-left px-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

        <button onClick={() => {
          router.push("/" + '?' + createQueryString('q', ''))

        }} className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
          All Posts
        </button>

        <button onClick={() => {
          router.push("/" + '?' + createQueryString('q', 'expert'))
        }} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Expert</button>

        <button onClick={() => {
          router.push("/" + '?' + createQueryString('q', 'dave'))
        }} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Dave</button>

        <button onClick={() => {
          router.push("/" + '?' + createQueryString('q', 'exactly'))
        }} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Exactly</button>

      </nav>

      <main className="py-12 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="lg:w-3/4 xl:w-2/4 mx-auto"> {children} </div>
      </main>
    </>
  )

}
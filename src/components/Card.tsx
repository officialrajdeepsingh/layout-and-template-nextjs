export function Card({ post }: { post: { id: number; title: string; body: string; userId: number; tags: string[]; reactions: number; } }) {

    return (
        <div key={post.id} className="flex flex-row justify-center -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">

            <div className="sm:p-2 sm:pl-0 w-10/12 mx-auto">

                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">Jul 27 2022</span>
                <h3 className=" my-3 text-2xl font-semibold text-gray-800 dark:text-white">
                    {post.title}
                </h3>
                <div className="flex gap-4">
                    {
                        post.tags.map((tag: string) => {
                            return (
                                <h2 key={tag} className="block px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300">
                                    {tag}
                                </h2>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}
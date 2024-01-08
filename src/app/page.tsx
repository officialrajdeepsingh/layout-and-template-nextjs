import { Card } from "@/components/Card"

async function getPosts(searchParams: { q: string | string[] | undefined }) {

  let getURL = searchParams.q !== undefined ? `http://localhost:3000/api/posts?q=${searchParams.q}` : `http://localhost:3000/api/posts`

  const res = await fetch(getURL, { cache: 'no-store' })

  return res.json()
}

export default async function Home({ searchParams }: { searchParams: { q: string | string[] | undefined } }) {

  let { posts } = await getPosts(searchParams)

  return posts.map((post: { id: number; title: string; body: string; userId: number; tags: string[]; reactions: number; }) => {
    return <Card key={post.id} post={post} />
  })

}
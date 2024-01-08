import { posts } from "@/damo-data"
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { searchParams }: { searchParams: { q: string | string[] | undefined }; }) {

    let getURL = await request.nextUrl

    let getsearchParams = getURL.searchParams.get("q")

    if (getURL.searchParams.has("q") && typeof getsearchParams === "string") {

        let getLowerCase = getsearchParams.toLowerCase()

        let getSearch = posts.filter(post => post.title.toLowerCase().includes(getLowerCase) || post.body.includes(getLowerCase))

        return Response.json({ posts: getSearch, error: undefined, status: "201" })

    }

    return Response.json({ posts, error: undefined, status: "201" })
}


import React from 'react'
import { useRouter } from 'next/router'

function blogPost() {
    const router = useRouter();

    console.log(router.query)
    return (
        <div>
            <h1>The blog post with slug: {router.query.slug}</h1 >
        </div>
    )
}

export default blogPost

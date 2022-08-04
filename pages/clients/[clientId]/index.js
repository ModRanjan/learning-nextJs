import React from 'react'
import { useRouter } from 'next/router'

function clientProjects() {
    const router = useRouter();

    console.log(router.pathname)
    console.log(router.query)
    return (
        <div>
            <h1>the projects of specific client with clientId: {router.query.clientId} </h1>
        </div>
    )
}

export default clientProjects

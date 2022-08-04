import React from 'react'
import { useRouter } from 'next/router'
function project() {
    const router = useRouter();

    console.log(router.pathname)
    console.log(router.query)
    return (
        <div>
            <h1>client's specific project with projectId: {router.query.projectId} and clientId: {router.query.clientId}</h1>
        </div>
    )
}

export default project
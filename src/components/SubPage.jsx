import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const SubPage = () => {

    const data = useLoaderData();

  return (
    <>
        <Link to={`/`}>SubPage</Link>
        <p>{data.a}</p>
    </>

  )
}

export default SubPage
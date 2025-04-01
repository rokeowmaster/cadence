'use client'
import React from 'react'
import { useParams, notFound } from "next/navigation";

const BlogDetails = () => {
    const params = useParams(); 
  return (
    <div>Blog {params.id}</div>
  )
}

export default BlogDetails
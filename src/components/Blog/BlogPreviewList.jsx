import React from 'react'
import {nanoid} from 'nanoid'
import {Box, Heading} from '@chakra-ui/react'

import BlogPreviewCard from './BlogPreviewCard'

const BlogPreviewList = ({header, blogs}) => {
  const Blogs = blogs
  return (
    <>
        <Box mt="2rem" mb="4rem">
            <Heading
      sx={{
    textTransform: 'uppercase',
    mb: 8, fontSize: '5xl'
}}
            >{header}</Heading>
        {Blogs.map((blog) => (
                <BlogPreviewCard {...blog} key={nanoid()}/> 
        ))}
        </Box>
    </>
  )
}

export default BlogPreviewList
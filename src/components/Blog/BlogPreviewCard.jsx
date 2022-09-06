import React from 'react'
import NextLink from 'next/link'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import {
    Flex, Box, HStack, VStack,
    Text, Heading, LinkBox, LinkOverlay, Button
} from '@chakra-ui/react'

/* import { ChakraButtonLink } from '../ChakraLink' */

import useGetViews from 'hooks/useGetViews'


const BlogPreviewCard = ({
  banner, title, description,slug, altText,
  createAt, readingTime, totalViews, customID
}) => {
  const link = `/blog/${slug}`
 const {data: views} =  useGetViews(customID, totalViews)

  return (
<VStack as={LinkBox} align="start" spacing="1rem" mb="2rem">
    <Box w="100%">
<Image src={banner} alt={altText} width={16} height={9} 
objectFit="cover" layout="responsive" />
    </Box>
    <NextLink href={link} passHref>
    <Heading>
    <LinkOverlay>
    {title}
    </LinkOverlay> </Heading>
    </NextLink>
    <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
        <Text>{createAt}</Text>
        <Text>{views} views</Text>
        <Text>{readingTime}</Text>
    </HStack>
    <Text noOfLines={2}>{description}</Text>
     <NextLink href={link} passHref>
     <Button textTransform="uppercase">Read more</Button>
</NextLink>
     
     {/* <ChakraButtonLink href="/blog">Read more</ChakraButtonLink> */}
</VStack>
  )
}

export default BlogPreviewCard
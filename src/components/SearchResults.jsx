import React from 'react'
import NextLink from 'next/link'
import { Box, Modal, Text, ModalBody, ModalOverlay, ModalContent,
    chakra, Flex, Center, useColorMode, HStack
} from '@chakra-ui/react'
import { nanoid } from 'nanoid'

import {ArrowForwardIcon} from '@chakra-ui/icons'

const SearchResults = ({searchResults}) => {
  return searchResults.map(
    ({title, slug, createdAt, totalViews, readingTime, description}) =>
     (
        <NextLink href={`/blog/${slug}`} key={nanoid()}passHref>
<Box chakraLinkProps={{
    _focus: {
        boxShadow: 'none'
    }
}}>
<Flex 
_hover={{
    color: 'white',
    bg: '#038C5A'
}}
sx={{
    minH: 16,
    mt: 2, px: 4, py: 2,
    alignItems: 'center',
    rounded: 'lg', w: '100%'
}}
>
    <Flex flexGrow='1' flexDirection='column'>
        <Text fontWeight="semibold" fontSize="lg" noOfLines={2}>{title}</Text>
        <Text opacity='0.7' noOfLines={1} mt='.5rem'>{description}</Text>
    <HStack spacing='1rem' wrap='wrap'
    textTransform='uppercase' flexbasis='100%' fontSize='xs' mt='1rem'>
        <Text>{new Date(createdAt).toDateString()}</Text>
        <Text>{totalViews} views</Text>
        <Text>{readingTime}</Text>
    </HStack>
    </Flex>
    <Box>
       <ArrowForwardIcon/>
    </Box>
</Flex>
</Box>
        </NextLink>
     )
  )
}

export default SearchResults
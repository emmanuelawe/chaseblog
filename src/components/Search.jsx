import React, {useState, useEffect} from 'react'
import {
    Box, Modal, ModalBody, ModalOverlay, ModalContent,
    chakra, Flex, Center, useColorMode
} from '@chakra-ui/react'
import axios from 'axios'

import { SearchIcon } from '@chakra-ui/icons'
import SearchResults from './SearchResults'

const Search = ({onCLose, isOpen, onClose}) => {
    const [queryText, setQueryText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const {colorMode} = useColorMode()

    const handleChange = (e) => setQueryText(e.target.value)

    const bgColor = {
        light: 'white',
        dark: 'gray.700'
    }

        useEffect(() => {

        ;(async () => {
            if (!queryText) {
                setSearchResults([])
                return false
             }

          const {data} = await axios.get('api/search', {
                params: {
                    query: queryText
                },
            })

            setSearchResults(data)
        })()
        }, [queryText])


    return (
        <Modal onClose={onCLose} isOpen={isOpen} scrollBehavior='inside'>
            <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
            <ModalContent rounded='lg' overflow='hidden' top='4vh' 
            bg='transparent' shadow='lg' maxW='600px' w='90%'>
            <Flex pos='relative' align='stretch'>
                <chakra.input
                    autoComplete='off'
                    autoCorrect='off'
                    spellCheck='false'
                    maxLength={64}
                    sx={{
                        w: '100%',
                        h: '68px',
                        pl: '68px',
                        fontWeight: 'medium',
                        outline:  0,
                        background: bgColor[colorMode]
                    }}
                    placeholder='Search Blogs'
                    value={queryText}
                    onChange={handleChange}
                />
        <Center pos='absolute' left={7} h='68px'>
            <SearchIcon color='#038C5A' boxSize='20px' />
        </Center>
            </Flex>
{searchResults.length > 0 && (
    <ModalBody maxH='70vh' p='0'>
                <Box px={4} bg={bgColor[colorMode]}>
                    <Box borderTopWidth='1px' pt={2} pb={4}>
                        <SearchResults onCLose={onClose} searchResults={searchResults} />
                    </Box>
                </Box>
            </ModalBody>)}
            
            </ModalContent>
        </Modal>
    )
}

export default Search
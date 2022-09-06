import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import {
    Flex, Spacer, Box, IconButton, useDisclosure
} from '@chakra-ui/react'
import {
    HamburgerIcon, SearchIcon
} from '@chakra-ui/icons'

import AppDrawer from './AppDrawer'
import Search from 'components/Search'

const CustomIconButton = ({Icon, ...props}) => {
return <IconButton icon={<Icon/>} {...props} size="lg" ml="1rem" 

/>
}

const SearchButton = () => {
const { onOpen, ...others} = useDisclosure();

return <>
<CustomIconButton onClick={onOpen} Icon={SearchIcon}/>
<Search {...others}/>
</>


}

const HamburgerNav = () => {
const {isOpen, onClose, onOpen} = useDisclosure();
return (
    <>
        <CustomIconButton Icon={HamburgerIcon} onClick={onOpen}/>
        {isOpen && <AppDrawer isOpen={isOpen} onClose={onClose}/>}
    </>
)
}

const Logo = () =>{
    const dimension = 70
    return ( 
        <NextLink href='/' passHref>
<Image src="/logo.png" alt="Chase Blog Logo" 
height={dimension} width={dimension}/>
</NextLink>
)
}

const AppHeader = () => {
  return (
    <Box
    px="2rem" pt="4rem">
        <Flex alignItems="center">
         <Logo/>
            <Spacer />
            <SearchButton/>
            <HamburgerNav />
        <AppDrawer/>
        </Flex>
    </Box>
  )
}

export default AppHeader
import React from 'react'
import NextLink from 'next/link'
import{nanoid} from 'nanoid'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    ListItem,
    Link,
    Input,
    List,
    Heading
} from '@chakra-ui/react'

const DrawerList = ({onClose}) => {
  const listItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Categories',
      link: '/categories'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]
  return (
    <List>
      {listItems.map((item) => (
        <NextLink href="/" passHref key={nanoid()}>
        <ListItem 
        sx={{
          display: 'block', mt: 5, fontSize: 'lg', cursor: 'pointer'
        }}
        onClick={onClose}
    >
        {item.name}
        </ListItem>
        </NextLink>
      ) )}
    </List>
  )
}

const AppDrawer = ({isOpen, onClose}) => {
  return (
    <>
 <Drawer size="md" placement="left" bg="gray"
    isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader py="2rem">
                <Heading>Chase Blog</Heading>
            </DrawerHeader>
            <DrawerBody>
              <DrawerList onClose={onClose} />
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
   
    )
}

export default AppDrawer
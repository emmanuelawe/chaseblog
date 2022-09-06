import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import PageLayout from '../components/PageLayout'

const _app = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
    <PageLayout>
    <Component {...pageProps} />

    </PageLayout>
  
      </ChakraProvider>
  )
}

export default _app

import NextLink from 'next/link'
import {Text, Heading, Link} from '@chakra-ui/react'
import components from './MdxComponents'

const texts = {
}
const headings = ['h1', 'h2', 'h3', 'h4', 'h5' , 'h6']

let length = headings.length

headings.forEach(tag => {
    const fontSize = {
        base: `${length -1 || ''}xl`,
        md: `${length}xl`
    }

    texts[tag] = (props) => (
        <Heading as={tag} fontSize={fontSize} mt={12} mb={6} {...props}/>
    )

    length--
})

export const BlogText = (props) => (
    <Text fontStyle={['md', 'lg', 'xl']}
        mt={8} mb={8} lineHeight="taller" letterSpacing="wide" {...props}
    />
)

texts.p = BlogText

texts.a = (props) => 
    <NextLink href={props.href} passHref>
    <Link {...props} display="inline" color="#038C5A"/>
    </NextLink>



export default texts
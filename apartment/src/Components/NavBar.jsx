import React from 'react'
import { Link, Box, Flex } from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Box bg='teal' w='100%' p={4} color='white'>
      <Flex gap="100px">
        <Link href='/'>Home</Link>
        <Link href='/login'>Login</Link>  
      </Flex>
    </Box>
  )
}

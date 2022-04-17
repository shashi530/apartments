import React from 'react'
import { Link, Box } from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Box bg='tomato' w='100%' p={4} color='white'>
        <Link href='/'>Home</Link>
    </Box>
  )
}

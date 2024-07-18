import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => (
  <Container my={14}>
    <Heading as="h1">Not found</Heading>
    <Text mt={4}>The page you&apos;re looking for was not found.</Text>
    <Divider my={8} />
    <Box my={6} align="center">
      <Button as={NextLink} href="/" colorScheme="teal">
        Return to home
      </Button>
    </Box>
  </Container>
)

export default NotFound

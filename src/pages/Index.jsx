import { Box, Container, Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding={4} justifyContent="center">
        <Link as={RouterLink} to="/" marginX={4} fontWeight="bold">
          Home
        </Link>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">Hello World</Heading>
          <Text fontSize="lg">Welcome to your new React application!</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Basic Plan",
    description: "A basic subscription with access to standard features.",
    price: "$5/month",
  },
  {
    id: 2,
    name: "Premium Plan",
    description: "Includes everything in the Basic Plan plus premium features.",
    price: "$15/month",
  },
  {
    id: 3,
    name: "Enterprise Plan",
    description: "All features from Premium Plan with additional support and customization options.",
    price: "$30/month",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Subscription Plans
        </Heading>
        <Text>Select the best plan that suits your needs.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="lg">
                {product.name}
              </Heading>
              <Text mt={4}>{product.description}</Text>
              <Text mt={1} fontWeight="bold">
                {product.price}
              </Text>
              <Button rightIcon={<FaShoppingCart />} colorScheme="teal" mt={4}>
                Subscribe
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;

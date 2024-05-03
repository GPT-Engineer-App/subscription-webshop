import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "Room A",
    description: "Small room, suitable for up to 4 people. Includes whiteboard and projector.",
    price: "200 NOK/hour",
    size: "15m²",
    image: "url-to-room-a.jpg",
  },
  {
    id: 2,
    name: "Room B",
    description: "Medium room, suitable for up to 8 people. Includes whiteboard, projector, and video conferencing facilities.",
    price: "300 NOK/hour",
    size: "25m²",
    image: "url-to-room-b.jpg",
  },
  {
    id: 3,
    name: "Room C",
    description: "Large room, suitable for up to 15 people. Includes whiteboard, projector, video conferencing, and catering services.",
    price: "450 NOK/hour",
    size: "40m²",
    image: "url-to-room-c.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Meeting Room Booking
        </Heading>
        <Text>Select a room and book it for your desired time slot.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {rooms.map((room) => (
            <Box key={room.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="lg">
                {room.name}
              </Heading>
              <Text mt={4}>{room.description}</Text>
              <Image src={room.image} alt={`Image of ${room.name}`} mt={4} borderRadius="md" />
              <Text mt={1} fontWeight="bold">
                {room.price}
              </Text>
              <Button rightIcon={<FaShoppingCart />} colorScheme="teal" mt={4} onClick={() => alert("Booking confirmed for " + room.name)}>
                Book Now
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;

import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image, HStack, Tooltip } from "@chakra-ui/react";
import { FaShoppingCart, FaChalkboard, FaVideo, FaCamera, FaUtensils } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "Room A",
    whiteboard: true,
    projector: true,
    videoConferencing: false,
    catering: false,
    price: "200 NOK/hour",
    size: "15m²",
    image: "url-to-room-a.jpg",
  },
  {
    id: 2,
    name: "Room B",
    whiteboard: true,
    projector: true,
    videoConferencing: true,
    catering: false,
    price: "300 NOK/hour",
    size: "25m²",
    image: "url-to-room-b.jpg",
  },
  {
    id: 3,
    name: "Room C",
    whiteboard: true,
    projector: true,
    videoConferencing: true,
    catering: true,
    price: "450 NOK/hour",
    size: "40m²",
    image: "url-to-room-c.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" mb={4}>
          Meeting Room Booking
        </Heading>
        <Text>Select a room and book it for your desired time slot.</Text>
        <Button colorScheme="blue" onClick={() => navigate("/login")}>
          Login
        </Button>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {rooms.map((room) => (
            <Box key={room.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="lg">
                {room.name}
              </Heading>
              <HStack mt={4} spacing={2}>
                {room.whiteboard && (
                  <Tooltip label="Whiteboard available" hasArrow>
                    <FaChalkboard size="20px" />
                  </Tooltip>
                )}
                {room.projector && (
                  <Tooltip label="Projector available" hasArrow>
                    <FaVideo size="20px" />
                  </Tooltip>
                )}
                {room.videoConferencing && (
                  <Tooltip label="Video conferencing available" hasArrow>
                    <FaCamera size="20px" />
                  </Tooltip>
                )}
                {room.catering && (
                  <Tooltip label="Catering available" hasArrow>
                    <FaUtensils size="20px" />
                  </Tooltip>
                )}
              </HStack>
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

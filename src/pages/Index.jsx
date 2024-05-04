import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image, HStack, Tooltip, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaShoppingCart, FaChalkboard, FaVideo, FaCamera, FaUtensils } from "react-icons/fa";

const rooms = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Room ${String.fromCharCode(65 + i)} - ${["Odin", "Thor", "Loki", "Freyja", "Heimdall", "Balder", "Frigg", "Tyr", "Njord", "Skadi", "Idunn", "Bragi", "Forseti", "Gefjon", "Hodr", "Sif", "Sigyn", "Ullr", "Vidar", "Vali"][i % 20]}`,
  availableDates: ["2024-05-10", "2024-05-11", "2024-05-12"],
  whiteboard: true,
  projector: true,
  videoConferencing: i % 2 === 0,
  catering: i % 4 === 0,
  price: `${200 + i * 10} NOK/hour`,
  size: `${15 + i * 2}m²`,
  image: `url-to-room-${String.fromCharCode(65 + i).toLowerCase()}.jpg`,
}));

const Index = () => {
  const [date, setDate] = useState("");
  const [minSize, setMinSize] = useState(0);

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" mb={4}>
          Meeting Room Booking
        </Heading>
        <Text>Select a room and book it for your desired time slot.</Text>
        <Input placeholder="Select Date" type="date" my={4} onChange={(e) => setDate(e.target.value)} />
        <Input placeholder="Minimum Size (m²)" type="number" my={4} onChange={(e) => setMinSize(e.target.value)} />
        <Button colorScheme="blue" onClick={() => navigate("/login")}>
          Login
        </Button>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {rooms
            .filter((room) => room.size >= minSize && (!date || room.availableDates.includes(date)))
            .map((room) => (
              <Box key={room.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" backgroundColor="white" color="black">
                <Heading as="h3" size="lg">
                  {room.name}
                </Heading>
                <HStack mt={4} spacing={2}>
                  {room.whiteboard && (
                    <Tooltip label="Whiteboard available" hasArrow placement="auto-start">
                      <FaChalkboard size="20px" />
                    </Tooltip>
                  )}
                  {room.projector && (
                    <Tooltip label="Projector available" hasArrow placement="auto-start">
                      <FaVideo size="20px" />
                    </Tooltip>
                  )}
                  {room.videoConferencing && (
                    <Tooltip label="Video conferencing available" hasArrow placement="auto-start">
                      <FaCamera size="20px" />
                    </Tooltip>
                  )}
                  {room.catering && (
                    <Tooltip label="Catering available" hasArrow placement="auto-start">
                      <FaUtensils size="20px" />
                    </Tooltip>
                  )}
                </HStack>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0iW92eT9dpVerSP3KzoHHHfYL9aeoqmcwIr_r3oduA&s" alt={`Image of ${room.name}`} mt={4} borderRadius="md" />
                <Text mt={1} fontWeight="bold">
                  {room.price}
                </Text>
                <Button rightIcon={<FaShoppingCart />} colorScheme="black" mt={4} onClick={() => alert("Booking confirmed for " + room.name)}>
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

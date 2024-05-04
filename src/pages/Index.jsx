import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image, HStack, Tooltip, Checkbox, CheckboxGroup, Stack, Input, useDisclosure } from "@chakra-ui/react";
import { FaShoppingCart, FaChalkboard, FaVideo, FaCamera, FaUtensils, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

const rooms = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Room ${String.fromCharCode(65 + i)} - ${["Odin", "Thor", "Loki", "Freyja", "Heimdall", "Balder", "Frigg", "Tyr", "Njord", "Skadi", "Idunn", "Bragi", "Forseti", "Gefjon", "Hodr", "Sif", "Sigyn", "Ullr", "Vidar", "Vali"][i % 20]}`,
  whiteboard: true,
  projector: true,
  videoConferencing: i % 2 === 0,
  catering: i % 4 === 0,
  price: `${200 + i * 10} NOK/hour`,
  size: `${15 + i * 2}m²`,
  chairs: 10 + i * 2,
  image: `url-to-room-${String.fromCharCode(65 + i).toLowerCase()}.jpg`,
}));

const Index = () => {
  const [filters, setFilters] = useState({
    whiteboard: false,
    projector: false,
    videoConferencing: false,
    catering: false,
    chairs: "",
    date: "",
  });

  const handleFilterChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const filteredRooms = rooms.filter((room) => {
    return (!filters.whiteboard || room.whiteboard === filters.whiteboard) && (!filters.projector || room.projector === filters.projector) && (!filters.videoConferencing || room.videoConferencing === filters.videoConferencing) && (!filters.catering || room.catering === filters.catering) && (!filters.chairs || room.chairs >= parseInt(filters.chairs));
  });
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
        <CheckboxGroup colorScheme="green">
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox name="whiteboard" onChange={handleFilterChange}>
              Whiteboard
            </Checkbox>
            <Checkbox name="projector" onChange={handleFilterChange}>
              Projector
            </Checkbox>
            <Checkbox name="videoConferencing" onChange={handleFilterChange}>
              Video Conferencing
            </Checkbox>
            <Checkbox name="catering" onChange={handleFilterChange}>
              Catering
            </Checkbox>
          </Stack>
        </CheckboxGroup>
        <Input placeholder="Minimum chairs" name="chairs" onChange={handleFilterChange} mb={4} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredRooms.map((room) => (
            <Box key={room.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" backgroundColor="black" color="white">
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

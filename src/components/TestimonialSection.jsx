import {
    Box,
    Heading,
    Text,
    Avatar,
    HStack,
    VStack,
    SimpleGrid,
    Container,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=3",
        review: "Amazing products and super fast delivery. Highly recommend!",
        rating: 5,
    },
    {
        name: "Jane Smith",
        avatar: "https://i.pravatar.cc/150?img=5",
        review: "Stylish and affordable. I love shopping here!",
        rating: 4,
    },
    {
        name: "Michael Ray",
        avatar: "https://i.pravatar.cc/150?img=7",
        review: "Great customer support and top-notch quality items.",
        rating: 5,
    },
];

export default function TestimonialSection() {
    return (
        <Box py={12} bg="gray.50">
            <Container maxW="7xl">
                <Heading as="h2" size="lg" mb={8} textAlign="center">
                    What Our Customers Are Saying
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    {testimonials.map((t, index) => (
                        <Box
                            key={index}
                            bg="white"
                            p={6}
                            borderRadius="lg"
                            boxShadow="md"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            textAlign="center"
                        >
                            <Avatar name={t.name} src={t.avatar} size="xl" mb={4} />
                            <Text fontSize="md" mb={3}>
                                “{t.review}”
                            </Text>
                            <HStack spacing={1} mb={2}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar
                                        key={i}
                                        color={i < t.rating ? "#ECC94B" : "#E2E8F0"} // Gold or Gray
                                        size={16}
                                    />
                                ))}
                            </HStack>
                            <Text fontWeight="bold" fontSize="sm" mt={2}>
                                {t.name}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

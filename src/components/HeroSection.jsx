import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    Text,
    VStack,
    Image,
} from '@chakra-ui/react';
import people from '../assets/people.png';

export default function HeroSection() {
    return (
        <Box bg="#F2F0F1" pt={8} pb={16}>
            <Container maxW="7xl">
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                    alignItems="center"
                    gap={10}
                >
                    {/* LEFT SIDE - TEXT */}
                    <VStack align="start" spacing={6}>
                        <Heading
                            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                            fontWeight="extrabold"
                            lineHeight="1.2"
                            textTransform="uppercase"
                        >
                            Find Clothes<br />
                            That Matches<br />
                            Your Style
                        </Heading>

                        <Text fontSize="md" color="gray.600" maxW="lg">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </Text>

                        <Button
                            bg="black"
                            color="white"
                            size="lg"
                            px={8}
                            py={6}
                            _hover={{ bg: 'gray.800' }}
                            borderRadius="full"
                        >
                            Shop Now
                        </Button>

                        <Grid templateColumns="repeat(3, 1fr)" gap={6} pt={4}>
                            <Box>
                                <Text fontSize="2xl" fontWeight="bold">200+</Text>
                                <Text fontSize="sm" color="gray.500">International Brands</Text>
                            </Box>
                            <Box>
                                <Text fontSize="2xl" fontWeight="bold">2,000+</Text>
                                <Text fontSize="sm" color="gray.500">High-Quality Products</Text>
                            </Box>
                            <Box>
                                <Text fontSize="2xl" fontWeight="bold">30,000+</Text>
                                <Text fontSize="sm" color="gray.500">Happy Customers</Text>
                            </Box>
                        </Grid>
                    </VStack>

                    {/* RIGHT SIDE - IMAGE */}
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image
                            src={people}
                            alt="Models in clothes"
                            maxW="150%"
                            maxH="400px"
                            objectFit="cover"
                        />
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

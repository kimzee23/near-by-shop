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
import headerImage from '../assets/headerImage.png';

export default function HeroSection() {
    return (
        <Box bg="white" py={16}>
            <Container maxW="7xl">
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                    gap={10}
                    alignItems="center"
                >
                    {/* Text Side */}
                    <VStack align="start" spacing={6}>
                        <Heading
                            fontSize={{ base: '2xl', md: '4xl' }}
                            fontWeight="extrabold"
                            lineHeight="short"
                        >
                            FIND CLOTHES <br /> THAT MATCHES YOUR STYLE
                        </Heading>
                        <Text color="gray.600" maxW="lg">
                            Browse through our diverse range of meticulously crafted garments...
                        </Text>
                        <Button colorScheme="blackAlpha" size="lg">
                            Shop Now
                        </Button>
                        <Grid templateColumns="repeat(3, 1fr)" gap={6} pt={4}>
                            <Box>
                                <Text fontSize="xl" fontWeight="bold">
                                    200+
                                </Text>
                                <Text fontSize="sm">International Brands</Text>
                            </Box>
                            <Box>
                                <Text fontSize="xl" fontWeight="bold">
                                    2,000+
                                </Text>
                                <Text fontSize="sm">High-Quality Products</Text>
                            </Box>
                            <Box>
                                <Text fontSize="xl" fontWeight="bold">
                                    30,000+
                                </Text>
                                <Text fontSize="sm">Happy Customers</Text>
                            </Box>
                        </Grid>
                    </VStack>

                    {/* Image Side */}
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image
                            src={headerImage}
                            alt="Hero"
                            borderRadius="lg"
                            boxShadow="lg"
                            maxW="100%"
                            objectFit="contain"
                        />
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

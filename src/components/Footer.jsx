import {
    Box,
    Flex,
    Grid,
    GridItem,
    Text,
    VStack,
    HStack,
    Link as ChakraLink,
    Divider,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Box bg="black" color="white" px={{ base: 4, md: 10 }} py={12}>
            <Grid
                maxW="6xl"
                mx="auto"
                templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
                gap={8}
            >
                <GridItem colSpan={{ base: 2, md: 2 }}>
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>
                        SHOP.CO
                    </Text>
                    <Text color="gray.400" fontSize="sm" mb={6}>
                        Find clothes that match your style. Unbeatable quality.
                    </Text>
                    <HStack spacing={4}>
                        <ChakraLink href="#" isExternal>
                            <FaFacebookF />
                        </ChakraLink>
                        <ChakraLink href="#" isExternal>
                            <FaInstagram />
                        </ChakraLink>
                        <ChakraLink href="#" isExternal>
                            <FaTwitter />
                        </ChakraLink>
                    </HStack>
                </GridItem>

                {/* Links Section */}
                <VStack align="start" spacing={2}>
                    <Text fontWeight="semibold" mb={2}>
                        Company
                    </Text>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        About
                    </ChakraLink>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Careers
                    </ChakraLink>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Press
                    </ChakraLink>
                </VStack>

                <VStack align="start" spacing={2}>
                    <Text fontWeight="semibold" mb={2}>
                        Support
                    </Text>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Contact Us
                    </ChakraLink>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Help Center
                    </ChakraLink>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Returns
                    </ChakraLink>
                </VStack>

                <VStack align="start" spacing={2}>
                    <Text fontWeight="semibold" mb={2}>
                        Resources
                    </Text>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Blog
                    </ChakraLink>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Developers
                    </ChakraLink>
                    <ChakraLink as={Link} to="/" color="gray.400" fontSize="sm">
                        Support Docs
                    </ChakraLink>
                </VStack>
            </Grid>

            <Divider borderColor="gray.700" my={12} />

            <Text fontSize="sm" color="gray.500" textAlign="center">
                © {year} SHOP.CO. All Rights Reserved.
            </Text>
        </Box>
    );
}

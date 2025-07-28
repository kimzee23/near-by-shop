import { Box, Container, Grid,  GridItem,Text, VStack, Link, HStack } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Box bg="black" color="white" py={12}>
            <Container maxW="7xl">
                <Grid templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }} gap={8}>
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                        <Text fontSize="2xl" fontWeight="bold" mb={4}>SHOP.CO</Text>
                        <Text color="gray.400" fontSize="sm" mb={6}>
                            Find clothes that match your style. Unbeatable quality.
                        </Text>
                        <HStack spacing={4}>
                            <Link href="#"><FaFacebookF /></Link>
                            <Link href="#"><FaInstagram /></Link>
                            <Link href="#"><FaTwitter /></Link>
                        </HStack>
                    </GridItem>

                    <VStack align="start" spacing={2}>
                        <Text fontWeight="semibold">Company</Text>
                        <Link href="/">About</Link>
                        <Link href="/">Careers</Link>
                        <Link href="/">Press</Link>
                    </VStack>
                    <VStack align="start" spacing={2}>
                        <Text fontWeight="semibold">Support</Text>
                        <Link href="/">Contact Us</Link>
                        <Link href="/">Help Center</Link>
                        <Link href="/">Returns</Link>
                    </VStack>
                    <VStack align="start" spacing={2}>
                        <Text fontWeight="semibold">Resources</Text>
                        <Link href="/">Blog</Link>
                        <Link href="/">Developers</Link>
                        <Link href="/">Support Docs</Link>
                    </VStack>
                </Grid>

                <Text
                    mt={10}
                    pt={6}
                    borderTop="1px solid"
                    borderColor="gray.700"
                    textAlign="center"
                    color="gray.500"
                    fontSize="sm"
                >
                    © {year} SHOP.CO. All Rights Reserved.
                </Text>
            </Container>
        </Box>
    );
}

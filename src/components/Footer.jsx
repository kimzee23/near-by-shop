import {
    Box,
    Container,
    Grid,
    GridItem,
    Text,
    VStack,
    Link,
    HStack,
    Image,
    Flex,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import visa from '../assets/payments/visa.png';
import mastercard from '../assets/payments/mastercard.png';
import paypal from '../assets/payments/paypal.png';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Box
            bg="#F0F0F0"
            color="black"
            pt={40} // Add top padding to make space for the floating newsletter
            pb={8}
            position="relative"
        >
            <Container maxW="7xl">
                {/* Top Grid Section */}
                <Grid templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }} gap={8}>
                    {/* Left Branding */}
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                        <Text fontSize="2xl" fontWeight="bold" mb={4}>
                            NearbyShop.CO
                        </Text>
                        <Text color="gray.500" fontSize="sm" mb={6}>
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

                {/* Bottom Bar */}
                <Flex
                    mt={10}
                    pt={6}
                    borderTop="1px solid"
                    borderColor="gray.300"
                    justify="space-between"
                    align="center"
                    direction={{ base: 'column', md: 'row' }}
                    gap={4}
                >
                    <Text color="gray.600" fontSize="sm" textAlign={{ base: 'center', md: 'left' }}>
                        © {year} NearBy.CO. All Rights Reserved.
                    </Text>

                    <HStack spacing={4}>
                        <Image src={visa} alt="Visa" h="24px" />
                        <Image src={mastercard} alt="Mastercard" h="24px" />
                        <Image src={paypal} alt="PayPal" h="24px" />
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}

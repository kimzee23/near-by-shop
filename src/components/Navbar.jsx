import {
    Box,
    Flex,
    HStack,
    IconButton,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Button,
    useDisclosure,
    VStack,
    Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';

export default function Navbar() {
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            {/* Promo Bar */}
            <Flex
                bg="black"
                color="white"
                px={4}
                py={2}
                fontSize="sm"
                justify="space-between"
                align="center"
            >
                <Text>
                    Sign up and get 20% off your first order.{' '}
                    <Box as="span" textDecoration="underline" cursor="pointer">
                        Sign Up Now
                    </Box>
                </Text>
                <IconButton
                    icon={<FaTimes />}
                    size="sm"
                    variant="unstyled"
                    color="white"
                    aria-label="Close promo"
                />
            </Flex>

            {/* Navbar */}
            <Box borderBottom="1px" borderColor="gray.200" bg="white" px={4} py={3}>
                <Flex maxW="7xl" mx="auto" align="center" gap={6}>
                    {/* Logo */}
                    <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                        <Link to="/">SHOP.CO</Link>
                    </Text>

                    {/* Desktop Nav */}
                    <HStack
                        spacing={6}
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.600"
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link to="/">Shop</Link>
                        <Link to="/">On Sale</Link>
                        <Link to="/">New Arrivals</Link>
                        <Link to="/">Brands</Link>
                    </HStack>

                    {/* Search Bar */}
                    <Box flex={1} display={{ base: 'none', lg: 'flex' }} justifyContent="center">
                        <InputGroup maxW="md">
                            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.400" />} />
                            <Input
                                type="text"
                                placeholder="Search for products..."
                                bg="gray.100"
                                rounded="full"
                                _focus={{ borderColor: 'black', boxShadow: '0 0 0 1px black' }}
                            />
                        </InputGroup>
                    </Box>

                    {/* Icons */}
                    <HStack spacing={4}>
                        <Box position="relative">
                            <Link to="/cart">
                                <FaShoppingCart size="20" />
                            </Link>
                            {totalItems > 0 && (
                                <Box
                                    position="absolute"
                                    top="-6px"
                                    right="-6px"
                                    bg="red.500"
                                    color="white"
                                    fontSize="xs"
                                    px={1}
                                    rounded="full"
                                >
                                    {totalItems}
                                </Box>
                            )}
                        </Box>
                        <Link to="/profile">
                            <FaUser size="20" />
                        </Link>
                        <IconButton
                            icon={isOpen ? <FaTimes /> : <FaBars />}
                            display={{ base: 'inline-flex', md: 'none' }}
                            onClick={onToggle}
                            variant="ghost"
                            aria-label="Toggle menu"
                        />
                    </HStack>
                </Flex>

                {/* Mobile Menu */}
                {isOpen && (
                    <VStack align="start" spacing={4} mt={4} px={4} display={{ md: 'none' }}>
                        <Link to="/" onClick={onToggle}>
                            Shop
                        </Link>
                        <Link to="/" onClick={onToggle}>
                            On Sale
                        </Link>
                        <Link to="/" onClick={onToggle}>
                            New Arrivals
                        </Link>
                        <Link to="/" onClick={onToggle}>
                            Brands
                        </Link>
                        <Button colorScheme="blackAlpha" onClick={onToggle} w="full">
                            Sign In
                        </Button>
                    </VStack>
                )}
            </Box>
        </>
    );
}

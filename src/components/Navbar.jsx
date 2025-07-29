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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    FaShoppingCart,
    FaBars,
    FaTimes,
    FaSearch,
    FaUser,
    FaChevronDown,
} from 'react-icons/fa';

import { useState } from 'react';

export default function Navbar() {
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const { isOpen, onToggle } = useDisclosure();
    const {
        isOpen: isAuthOpen,
        onOpen: onAuthOpen,
        onClose: onAuthClose,
    } = useDisclosure();

    const [isLogin, setIsLogin] = useState(true);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = 'Enter a valid email';
        }

        if (!isLogin && !form.phone.match(/^(\+234|0)[789][01]\d{8}$/)) {
            newErrors.phone = 'Enter a valid Nigerian phone number';
        }

        if (form.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!isLogin && form.password !== form.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!isLogin && form.name.trim() === '') {
            newErrors.name = 'Name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log('Valid Form', form);
            onAuthClose();
        }
    };

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
            <Box w="full" borderBottom="1px" borderColor="gray.200" bg="white" px={4} py={3}>
                <Flex maxW="7xl" mx="auto" align="center" gap={6}>
                    {/* Logo */}
                    <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                        <Link to="/">NearBy.co</Link>
                    </Text>

                    {/* Desktop Nav */}
                    <HStack
                        spacing={6}
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.600"
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Menu>
                            <MenuButton as={Text} cursor="pointer" display="flex" alignItems="center">
                                Shop <FaChevronDown style={{ marginLeft: '4px' }} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Men</MenuItem>
                                <MenuItem>Women</MenuItem>
                                <MenuItem>Accessories</MenuItem>
                            </MenuList>
                        </Menu>

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
                        <Box cursor="pointer" onClick={onAuthOpen}>
                            <FaUser size="20" />
                        </Box>
                        <IconButton
                            icon={isOpen ? <FaTimes /> : <FaBars />}
                            display={{ base: 'inline-flex', md: 'none' }}
                            onClick={onToggle}
                            variant="ghost"
                            aria-label="Toggle menu"
                        />
                    </HStack>
                </Flex>


                {isOpen && (
                    <VStack align="start" spacing={4} mt={4} px={4} display={{ md: 'none' }}>
                        <Link to="/" onClick={onToggle}>Shop</Link>
                        <Link to="/" onClick={onToggle}>On Sale</Link>
                        <Link to="/" onClick={onToggle}>New Arrivals</Link>
                        <Link to="/" onClick={onToggle}>Brands</Link>
                        <Button colorScheme="blackAlpha" onClick={onAuthOpen} w="full">
                            Sign In
                        </Button>
                    </VStack>
                )}
            </Box>

            {/* Auth Modal */}
            <Modal isOpen={isAuthOpen} onClose={onAuthClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        {isLogin ? 'Welcome Back' : 'Create an Account'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Stack spacing={4}>
                            {!isLogin && (
                                <FormControl isInvalid={errors.name}>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input
                                        placeholder="Enter your name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                </FormControl>
                            )}

                            <FormControl isInvalid={errors.email}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                                <FormErrorMessage>{errors.email}</FormErrorMessage>
                            </FormControl>

                            {!isLogin && (
                                <FormControl isInvalid={errors.phone}>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    />
                                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                                </FormControl>
                            )}

                            <FormControl isInvalid={errors.password}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />
                                <FormErrorMessage>{errors.password}</FormErrorMessage>
                            </FormControl>

                            {!isLogin && (
                                <FormControl isInvalid={errors.confirmPassword}>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="Confirm your password"
                                        value={form.confirmPassword}
                                        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                    />
                                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                                </FormControl>
                            )}

                            <Button colorScheme="blackAlpha" w="full" onClick={handleSubmit}>
                                {isLogin ? 'Login' : 'Register'}
                            </Button>

                            <Text textAlign="center" fontSize="sm">
                                {isLogin ? (
                                    <>
                                        Don’t have an account?{' '}
                                        <Box
                                            as="span"
                                            color="blue.500"
                                            cursor="pointer"
                                            onClick={() => setIsLogin(false)}
                                        >
                                            Register
                                        </Box>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{' '}
                                        <Box
                                            as="span"
                                            color="blue.500"
                                            cursor="pointer"
                                            onClick={() => setIsLogin(true)}
                                        >
                                            Login
                                        </Box>
                                    </>
                                )}
                            </Text>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

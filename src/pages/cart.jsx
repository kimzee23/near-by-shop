import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    increaseQty,
    decreaseQty,
} from '../features/cart/cartSlice';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Container maxW="7xl" py={10}>
            <Heading fontSize="2xl" mb={6}>
                Your Cart
            </Heading>

            {cart.length === 0 ? (
                <Text>Your cart is empty.</Text>
            ) : (
                <VStack spacing={6} align="stretch">
                    {cart.map((item) => (
                        <Flex
                            key={item.id}
                            p={4}
                            borderWidth={1}
                            borderRadius="md"
                            justify="space-between"
                            align="center"
                            bg="white"
                            boxShadow="sm"
                        >
                            <Flex gap={4} align="center">
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    boxSize="60px"
                                    objectFit="cover"
                                    borderRadius="md"
                                />
                                <Box>
                                    <Text fontWeight="semibold">{item.title}</Text>
                                    <Text fontSize="sm" color="gray.600">
                                        ${item.price} × {item.quantity}
                                    </Text>
                                    <HStack mt={2} spacing={2}>
                                        <Button size="sm" onClick={() => dispatch(decreaseQty(item.id))}>
                                            -
                                        </Button>
                                        <Text>{item.quantity}</Text>
                                        <Button size="sm" onClick={() => dispatch(increaseQty(item.id))}>
                                            +
                                        </Button>
                                        <IconButton
                                            size="sm"
                                            icon={<DeleteIcon />}
                                            colorScheme="red"
                                            aria-label="Remove"
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        />
                                    </HStack>
                                </Box>
                            </Flex>
                        </Flex>
                    ))}

                    <Divider />

                    <Flex justify="space-between" align="center">
                        <Text fontSize="xl" fontWeight="bold">
                            Subtotal:
                        </Text>
                        <Text fontSize="xl" fontWeight="bold">
                            ${subtotal.toFixed(2)}
                        </Text>
                    </Flex>

                    <Button
                        onClick={() => navigate('/checkout')}
                        colorScheme="blackAlpha"
                        size="lg"
                        alignSelf="flex-end"
                    >
                        Proceed to Checkout
                    </Button>
                </VStack>
            )}
        </Container>
    );
}

import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const cart = useSelector((state) => state.cart);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();

    return (
        <Container maxW="4xl" py={10}>
            <Heading fontSize="3xl" mb={6}>
                Checkout
            </Heading>

            <Box bg="white" p={6} rounded="md" shadow="md">
                <Heading size="md" mb={4}>
                    Order Summary
                </Heading>

                <VStack spacing={3} align="stretch">
                    {cart.map((item) => (
                        <Flex
                            key={item.id}
                            justify="space-between"
                            borderBottom="1px solid"
                            borderColor="gray.200"
                            py={2}
                        >
                            <Text>{item.title} × {item.quantity}</Text>
                            <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                        </Flex>
                    ))}
                </VStack>

                <Divider my={4} />

                <Flex justify="space-between" fontWeight="bold" fontSize="lg">
                    <Text>Total:</Text>
                    <Text>${subtotal.toFixed(2)}</Text>
                </Flex>

               
                <Flex gap={6} mt={6} justify="center" color="gray.600" fontSize="3xl">
                    <Icon as={SiVisa} />
                    <Icon as={SiMastercard} />
                    <Icon as={SiPaypal} />
                </Flex>

                <Button
                    mt={6}
                    w="full"
                    colorScheme="blackAlpha"
                    size="lg"
                    onClick={() => navigate('/payment')}
                >
                    Place Order
                </Button>
            </Box>
        </Container>
    );
}

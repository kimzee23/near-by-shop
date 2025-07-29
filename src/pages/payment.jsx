import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Text,
    VStack,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { PaystackButton } from 'react-paystack';

export default function PaymentPage() {
    const cart = useSelector((state) => state.cart);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 5 : 0;
    const total = subtotal + shipping;
    const dispatch = useDispatch();
    const toast = useToast();

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [billing, setBilling] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    });

    const handleInputChange = (field, value) => {
        setBilling((prev) => ({ ...prev, [field]: value }));
    };

    const isFormValid = () => {
        return Object.values(billing).every(val => val.trim() !== '');
    };

    const publicKey = 'pk_test_e52e3ef4d4b89e64ffb5fd7fcda321827b2d34b5';

    const paystackConfig = {
        email: billing.email,
        amount: total * 100, // Paystack uses kobo
        publicKey,
        metadata: {
            fullName: billing.fullName,
            address: billing.address,
            city: billing.city,
            zip: billing.zip,
        },
        text: "Pay Now",
        onSuccess: () => {
            toast({
                title: 'Payment Successful',
                description: `Thank you for your order, ${billing.fullName}.`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            dispatch(clearCart());
        },
        onClose: () => {
            toast({
                title: 'Payment Cancelled',
                description: 'You cancelled the payment.',
                status: 'warning',
                duration: 4000,
                isClosable: true,
            });
        },
    };

    return (
        <Container maxW="7xl" py={10}>
            <Heading mb={6}>Checkout</Heading>
            <Flex direction={{ base: 'column', md: 'row' }} gap={10}>
                {/* Billing Info */}
                <Box flex={2}>
                    <Heading size="md" mb={4}>
                        Billing Information
                    </Heading>
                    <Stack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input
                                placeholder="Enter your full name"
                                value={billing.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                type="email"
                                placeholder="you@example.com"
                                value={billing.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Address</FormLabel>
                            <Input
                                placeholder="123 Street Name"
                                value={billing.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>City</FormLabel>
                            <Input
                                placeholder="City"
                                value={billing.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>ZIP/Postal Code</FormLabel>
                            <Input
                                placeholder="ZIP Code"
                                value={billing.zip}
                                onChange={(e) => handleInputChange('zip', e.target.value)}
                            />
                        </FormControl>
                    </Stack>

                    <Box mt={8}>
                        <Heading size="md" mb={4}>
                            Payment Method
                        </Heading>
                        <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                            <Stack direction="column" spacing={2}>
                                <Radio value="card">Paystack (Card/Bank)</Radio>
                                <Radio value="paypal" isDisabled>PayPal (Coming Soon)</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>

                {/* Order Summary */}
                <Box flex={1} bg="gray.50" p={6} rounded="md" shadow="md">
                    <Heading size="md" mb={4}>
                        Order Summary
                    </Heading>
                    <VStack spacing={2} align="stretch">
                        <Flex justify="space-between">
                            <Text>Subtotal</Text>
                            <Text>${subtotal.toFixed(2)}</Text>
                        </Flex>
                        <Flex justify="space-between">
                            <Text>Shipping</Text>
                            <Text>${shipping.toFixed(2)}</Text>
                        </Flex>
                        <Flex justify="space-between" fontWeight="bold" pt={2} borderTop="1px solid #ccc">
                            <Text>Total</Text>
                            <Text>${total.toFixed(2)}</Text>
                        </Flex>
                    </VStack>

                    {isFormValid() ? (
                        <PaystackButton {...paystackConfig} className="paystack-button" style={{
                            width: '100%',
                            marginTop: '1rem',
                            padding: '1rem',
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: '0.5rem',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }} />
                    ) : (
                        <Button w="full" mt={6} size="lg" colorScheme="gray" isDisabled>
                            Fill all billing fields to pay
                        </Button>
                    )}
                </Box>
            </Flex>
        </Container>
    );
}

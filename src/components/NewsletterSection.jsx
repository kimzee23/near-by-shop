import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Text,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function NewsletterSection() {
    return (
        <Box bg="black"
             color="white" py={12}
             px={6} mt={20}
             borderRadius="20px"

             mx="auto"
            bottom="-80px"
        >

            <Flex
                maxW="7xl"
                mx="auto"
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="center"
                gap={10}
            >
                {/* Left Text Section */}
                <Heading
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="bold"
                    textAlign={{ base: 'center', md: 'left' }}
                    maxW="md"
                >
                    Stay up to date about <br />
                    our latest offers
                </Heading>

                {/* Right Form Section */}
                <Stack spacing={3} w="full" maxW="sm">
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <EmailIcon color="gray.400" />
                        </InputLeftElement>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            bg="gray.100"
                            color="black"
                            borderRadius="md"
                            _placeholder={{ color: 'gray.500' }}
                            required
                        />
                    </InputGroup>

                    <Button
                        bg="white"
                        color="black"
                        borderRadius="md"
                        fontWeight="medium"
                        _hover={{ bg: 'gray.200' }}
                    >
                        Subscribe to Newsletter
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
}

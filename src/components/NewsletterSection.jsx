import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function NewsletterSection() {
    return (
        <Box bg="black" color="white" py={12} px={6}>
            <Flex maxW="7xl" mx="auto" direction={['column', 'row']} align="center" justify="space-between" gap={8}>
                <Heading fontSize={['2xl', '3xl']} fontWeight="extrabold" textAlign={['center', 'left']} textTransform="uppercase">
                    Stay up to date about <br /> our latest offers
                </Heading>

                <Flex as="form" direction={['column', 'row']} gap={4} w="full" maxW="xl">
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.400" />} />
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            bg="gray.100"
                            color="black"
                            _placeholder={{ color: 'gray.500' }}
                            required
                        />
                    </InputGroup>
                    <Button colorScheme="whiteAlpha" color="black" bg="white" _hover={{ bg: 'gray.200' }}>
                        Subscribe to Newsletter
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

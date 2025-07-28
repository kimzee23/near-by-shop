import { Box, Image, Text, Button, Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const { id, thumbnail, title, price, discountPercentage, rating } = product;

    const oldPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

    return (
        <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="xl"
            p={4}
            bg="white"
            shadow="sm"
            _hover={{ shadow: "md" }}
            display="flex"
            flexDirection="column"
        >
            <Link to={`/product/${id}`}>
                <Image
                    src={thumbnail}
                    alt={title}
                    borderRadius="lg"
                    objectFit="cover"
                    w="100%"
                    h="240px"
                    mb={3}
                />
                <Text fontSize="lg" fontWeight="semibold" isTruncated mb={2}>
                    {title}
                </Text>
            </Link>

            {/* ⭐ Horizontal Star Rating */}
            <HStack spacing={1} mb={2}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        color={i < Math.round(rating) ? "#ECC94B" : "#E2E8F0"} // gold or gray
                        size={14}
                    />
                ))}
                <Text fontSize="xs" color="gray.500" ml={1}>
                    {rating}
                </Text>
            </HStack>

            {/* 💰 Price Section */}
            <Flex align="center" gap={2} mb={4}>
                <Text fontWeight="bold" fontSize="md">
                    ${price}
                </Text>
                {discountPercentage > 0 && (
                    <>
                        <Text
                            fontSize="sm"
                            color="gray.500"
                            textDecoration="line-through"
                        >
                            ${oldPrice}
                        </Text>
                        <Text fontSize="sm" color="red.500">
                            -{Math.round(discountPercentage)}%
                        </Text>
                    </>
                )}
            </Flex>

            {/* 🛒 Add to Cart Button */}
            <Button
                onClick={() => dispatch(addToCart(product))}
                colorScheme="blackAlpha"
                borderRadius="full"
                mt="auto"
            >
                Add to Cart
            </Button>
        </Box>
    );
}

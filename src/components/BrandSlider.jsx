import { keyframes } from '@emotion/react';
import { Box, Image, Flex } from '@chakra-ui/react';

import calvin from '../assets/brands/calvin.png';
import gucci from '../assets/brands/gucci.png';
import prada from '../assets/brands/prada.png';
import versace from '../assets/brands/versace.png';
import zara from '../assets/brands/zara.png';

const brandLogos = [versace, zara, gucci, prada, calvin];

const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

export default function BrandSlider() {
    return (
        <Box bg="black" py={10} overflow="hidden" width="100%">
            <Box
                display="flex"
                gap="80px"
                animation={`${scroll} 40s linear infinite`}
                width="fit-content"
                px={8}
            >
                {[...brandLogos, ...brandLogos].map((logo, index) => (
                    <Flex key={index} align="center" justify="center">
                        <Image
                            src={logo}
                            alt={`Brand ${index}`}
                            maxH={{ base: '80px', lg: '80px' }}
                            maxW={{base: '80px', lg: '80px' }}
                            objectFit="contain"
                            filter="brightness(0) invert(1)"
                        />
                    </Flex>
                ))}
            </Box>
        </Box>
    );
}

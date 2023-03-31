import { Box,Flex, SimpleGrid } from "@chakra-ui/react";



export default function Product(){

    return (
        <Box>
            Products
            <Flex ><Box>add</Box><Box><SimpleGrid>
                {/* {map products} */}
                </SimpleGrid></Box></Flex>
        </Box>
    )
}
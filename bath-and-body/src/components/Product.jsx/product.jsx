import { Box,Flex, SimpleGrid } from "@chakra-ui/react";
import Nav from "../nav";


export default function Product(){

    return (
        <Box>    <Nav/>
            Products
            <Flex ><Box>add</Box><Box><SimpleGrid>
                {/* {map products} */}
                </SimpleGrid></Box></Flex>
        </Box>
    )
}
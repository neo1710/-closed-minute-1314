import { Box ,Image,Center,Flex} from "@chakra-ui/react";
import Nav from "./nav";

export default function Body(){

   return (
    <Box>
        <Nav/>
        <Box marginTop={'30px'} w={'100%'}>
            <Center><Image m={'center'} w={'80%'}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw456b9c80/images/Spring2023/sp_wavesofwellness_sp3_hm.jpg?yocs=s_"
             alt="not found"/></Center>
        </Box>
<Box>
        <Flex width={'100%'}>
        
        </Flex>
        </Box>
    </Box>
   ) 
}
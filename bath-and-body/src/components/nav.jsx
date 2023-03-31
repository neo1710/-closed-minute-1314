import {Flex,Center,Image,Box,Button,Input} from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons'


export default function Nav(){

return (
    <Flex justifyContent={'space-around'} alignItems={'center'}>

<Box w={'200px'}>
  <Image src='https://i.postimg.cc/bJdMYxP4/Bath-Hygiene2.png' alt='Not Found' /> 
</Box>
<Flex  ><Input w={"200px"} type='text'/><Button><Search2Icon>
    </Search2Icon></Button></Flex >
</Flex>
)

}
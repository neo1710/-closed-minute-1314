import {Flex,Center,Image,Box,Button,Input,Switch, useBoolean} from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons'



export default function Nav(){

let [flag,setFlag]=useBoolean();


return (

  <Box>
<Box>Dark mode
  <Switch onChange={setFlag.toggle}></Switch>

</Box>

    <Flex bg={flag?'black':'white'} justifyContent={'space-around'} alignItems={'center'}>
<Box>{flag? <Image w={'200px'} src='https://i.postimg.cc/5yXV4VtJ/Bath-Hygiene-dark.png' alt='not Found' />:
  <Image w={'240px'}  src='https://i.postimg.cc/bJdMYxP4/Bath-Hygiene2.png' alt='Not Found' /> 
}
</Box>

<Flex><Input bg={'white'} w={"200px"} type='text'/><Button bg={flag?'darkgray':'lightgray'}><Search2Icon color={flag?'white':'black'}>
    </Search2Icon></Button></Flex >
</Flex>
</Box>
)

}
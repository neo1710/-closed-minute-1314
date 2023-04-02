import {Flex,Center,Image,Box,Button,Input,Switch,useBoolean} from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';



export default function Nav(){

let [flag,setFlag]=useBoolean();
let nav=useNavigate();


return (

  <Box>
<Box>Dark mode
  <Switch onChange={setFlag.toggle}></Switch>

</Box>

    <Flex  boxShadow='xs' bg={flag?'black':'white'} justifyContent={'space-around'} alignItems={'center'}>
<Box>{flag? <Image w={'200px'} src='https://i.postimg.cc/5yXV4VtJ/Bath-Hygiene-dark.png' alt='not Found' />:
  <Image w={'240px'}  src='https://i.postimg.cc/bJdMYxP4/Bath-Hygiene2.png' alt='Not Found' /> 
}
</Box>

<Flex><Input placeholder='Search by fregrance' bg={'white'} w={"200px"} type='text'/><Button bg={flag?'darkgray':'lightgray'}><Search2Icon color={flag?'white':'black'}>
    </Search2Icon></Button>
    <Button marginLeft={"20px"} onClick={()=>{nav('/login')}}
     style={{backgroundColor:"lightgrey"}}>
      <img width={'30px'} src="https://th.bing.com/th/id/R.87268fedb2e00fe4f1f86c13b85173c9?rik=iD71tTbmdyB5gw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_243887.png&ehk=%2bnbZwHeUR367MhgZ3EBB3OC1izT81pse1uNe%2bvi01EA%3d&risl=&pid=ImgRaw&r=0" alt='not found'/></Button>
   <Button marginLeft={"20px"} onClick={()=>{nav('/cart')}}
     style={{backgroundColor:"lightgrey"}}>
    <img
      width={'30px'} src="https://cdn2.iconfinder.com/data/icons/shopping-316/100/Shopping_7-512.png" alt="not found" />
   </Button>
    </Flex >
</Flex>
<Box>
  <Flex bg={flag?'black':'white'} color={flag?'white':'black'} boxShadow='xs' justifyContent={'space-around'}><a href="">Top Offer</a> <a href="">Body Care</a> <a href="">Candles</a> 
  <a href="">Wallflowers&Air Fresheners</a> <a>Men's Shop</a></Flex>
</Box>
</Box>
)

}
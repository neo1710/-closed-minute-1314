import { Box,FormControl,Input,FormLabel,Center,Heading, Button,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";



export default function Login(){

return (
    <Box>
   <Center><Box w={'400px'}>
    <Heading as={'h2'}>Login</Heading>
     <FormControl>
        <FormLabel textAlign={'center'}>Email Adress</FormLabel> <Input w={'300px'} placeholder="Enter your email here" type={'text'}/>
        <FormLabel textAlign={'center'}>Password</FormLabel>  <Input w={'300px'} placeholder="Enter Password" type={'text'}/>
     </FormControl>
     <Text>if you dont have an acount </Text> <Link to={'/signIn'}><Button variant={'link'}>Sign in</Button></Link>
        </Box>
      
        </Center> 
        </Box>
)

}
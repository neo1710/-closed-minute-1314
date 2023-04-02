import { Box,FormControl,Input,FormLabel,Center,Heading, Button,Text} from "@chakra-ui/react";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../nav";


let initState={
   email:"",
   password:""
}

function reducer(state,action){

   switch (action.type) {
      case "EMAIL":{
        return {
         ...state,
         email: action.payload
        }
      }
      case "PASSWORD":{
         return {
          ...state,
          password: action.payload
         }
       }  
   }
}
export default function Login(){
 let [state,dispatch] = useReducer(reducer,initState);
let nav=useNavigate();

 async function logged(e){
e.preventDefault();
   try {
   let data= await fetch( 'http://localhost:8080/users',{
      method:'GET'
   })
   data= await data.json();
   console.log(data);
   data.map((ele)=>{
      if(ele.email===state.email && ele.password===state.password){
       setTimeout(() => {
         nav('/')
       }, 2000);
       console.log('hey')
      }
   })
} catch (error) {
   console.log(error)
}
 }
return (
    <Box>
          <Nav/>
   <Center><Box w={'400px'}>
    <Heading as={'h2'}>Login</Heading>
     <FormControl marginTop={'20px'}>
        <FormLabel textAlign={'center'}>Email Adress</FormLabel>
         <Input w={'300px'} value={state.email}
         onChange={(e)=>{dispatch({type:"EMAIL",payload:e.target.value})}}
         placeholder="Enter your email here" type={'text'}/>
        <FormLabel textAlign={'center'}>Password</FormLabel>  
        <Input w={'300px'}  value={state.password}
         onChange={(e)=>{dispatch({type:"PASSWORD",payload:e.target.value})}}
        placeholder="Enter Password" type={'password'}/><br/>
        <Button type="submit" onClick={logged}>Login</Button>
     </FormControl>
     <Text>if you dont have an acount </Text> <Link to={'/signIn'}><Button variant={'link'}>Sign in</Button></Link>
        </Box>
      
        </Center> 
        </Box>
)

}
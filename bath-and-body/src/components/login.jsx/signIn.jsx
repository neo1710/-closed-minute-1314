import { Box,FormControl,Input,FormLabel,Center,Heading, Button,Text,Radio,RadioGroup,Stack,Alert,AlertIcon,AlertDescription,AlertTitle} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../nav";

let initState={
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    gender:"",
    phone:""
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
        case "FIRST":{
            return {
                ...state,
                first_name: action.payload
               }
        }
        case "LAST":{
            return {
                ...state,
                last_name: action.payload
               }
        }
        case "GENDER":{
            return {
                ...state,
                gender: action.payload
               }
        }
        case "PHONE":{
            return {
                ...state,
                phone: action.payload
               }
        }
    }
 }

export default function SignIn(){
    let [state,dispatch] = useReducer(reducer,initState);
    let [tr,setTr]=useState(false);
    let nav=useNavigate();
    console.log(state);


    async function logged(e){
        e.preventDefault();
           try {
           let data= await fetch( 'http://localhost:8080/users',{
              method:'POST',
              headers:{
                "content-type": "application/json"
              },
              body:JSON.stringify(state)
           })
           
        setTr(true);


           
        } catch (error) {
           console.log(error)
        }
         }

         if(tr===true){
            setTimeout(() => {
                nav('/login');
            }, 4000); 
         }

    return (
       tr ? <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Sign in Successful!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Now login and enjoy our services
  </AlertDescription>
</Alert> :
        <Box >
                <Nav/>
            <Box marginLeft={'400px'} width='600px' boxShadow={'md'}>
                <Heading as={'h2'}>Sign In</Heading>
                <Center><Box w={'400px'}>
                    <FormControl>
                   <Input  value={state.first_name}
         onChange={(e)=>{dispatch({type:"FIRST",payload:e.target.value})}}
                    marginTop={'20px'} placeholder="First Name" type={'text'}/>

                   <Input  value={state.last_name}
         onChange={(e)=>{dispatch({type:"LAST",payload:e.target.value})}}
                    marginTop={'20px'} placeholder="Last Name" type={'text'}/>

                   <Input marginTop={'20px'} value={state.email}
         onChange={(e)=>{dispatch({type:"EMAIL",payload:e.target.value})}}
                    placeholder="Email" type={'email'}/>

                   <Input marginTop={'20px'} value={state.password}
         onChange={(e)=>{dispatch({type:"PASSWORD",payload:e.target.value})}}
                    placeholder='Password' type={'password'}/>

                    <Input  value={state.number}
         onChange={(e)=>{dispatch({type:"PHONE",payload:e.target.value})}}
                     marginTop={'20px'} type="number" placeholder="Phone no."/>

                 <FormLabel marginTop={'20px'}  >Select Gender</FormLabel>
                  <RadioGroup>
                  <Stack direction='row'>
                   <Radio value='Male'>Male</Radio>
                  <Radio value='Female'>Female</Radio>
                    <Radio value='Others'>Others</Radio>
                   </Stack>
                  </RadioGroup>

                  <Button onClick={logged}
                  marginTop={'20px'} type="submit">Sign in</Button>

              </FormControl>
                </Box>
                </Center>
            </Box>
        </Box>
    )
}
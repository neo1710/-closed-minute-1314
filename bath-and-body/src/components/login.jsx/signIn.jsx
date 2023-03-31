import { Box,FormControl,Input,FormLabel,Center,Heading, Button,Text,Radio,RadioGroup,Stack,} from "@chakra-ui/react";

export default function SignIn(){
    
    return (
        <Box >
            <Box marginLeft={'400px'} width='600px' boxShadow={'md'}>
                <Heading as={'h2'}>Sign In</Heading>
                <Center><Box w={'400px'}>
                    <FormControl>
                   <Input marginTop={'20px'} placeholder="First Name" type={'text'}/>

                   <Input marginTop={'20px'} placeholder="Last Name" type={'text'}/>

                   <Input marginTop={'20px'} placeholder="Email" type={'email'}/>

                   <Input marginTop={'20px'} placeholder='Password' type={'password'}/>

                 <FormLabel marginTop={'20px'}  >Select Gender</FormLabel>
                  <RadioGroup>
                  <Stack direction='row'>
                   <Radio value='Male'>Male</Radio>
                  <Radio value='Female'>Female</Radio>
                    <Radio value='Others'>Others</Radio>
                   </Stack>
                  </RadioGroup>

                  <Button type="submit">Sign in</Button>
              </FormControl>
                </Box>
                </Center>
            </Box>
        </Box>
    )
}
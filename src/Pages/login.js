import { Center,Heading,Input,Link,Button,Text,HStack,Flex,Checkbox,Spacer,
    FormControl,FormLabel,FormErrorMessage} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { useAuth } from '../Utils/AuthContext';

function Login(){
    const [user,setUser] = useState({Email:"netams2000@gmail.com",Pass:"Temp@2000"});
    const [evalid,setEvalid] = useState(false);
    const [remember, setRemember] = useState(false);
    const Navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
          ...prevUser,
          [name]: value
        }));
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
          );
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
  
        let valid = true;
  
        if (!validateEmail(user.Email)) {
          setEvalid(true);
          valid=false;
        } else {
            setEvalid(false);
        }
  
        if(valid){
          if(remember) localStorage.setItem("User",JSON.stringify(user));
          console.log(user);
          setUser({Name:"",Email:"",Pass:"",Cpass:""});
          login();
          Navigate("/");
        }
    }
  return (
    <>
      <Center bg='lightblue' h='100vh'>
          <HStack spacing='20px' flexDirection='column' bg='white' w='450px' p={4} borderWidth='1px' borderRadius='lg'>
            <Heading>Login</Heading>
            <FormControl isInvalid={evalid}>
              <FormLabel>Email address<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='email' name='Email' value={user.Email} onChange={handleChange}/>
              {evalid && <FormErrorMessage>Please enter valid email!!</FormErrorMessage>}
            </FormControl>
            <FormControl>
              <FormLabel>Password<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='password'name='Pass' value={user.Pass} onChange={handleChange}/>
            </FormControl>
            <Flex w='100%'>
                <Checkbox isChecked={remember} onChange={(e) => setRemember(e.target.checked)}>Remember Me</Checkbox>
                <Spacer />
                <Link color='teal.500' onClick={()=>Navigate("/forget")}>Forgot Password?</Link>
            </Flex>
            <Button colorScheme='teal' size='lg' w='100%' onClick={handleSubmit}>Login</Button>
            <Text>Don't have an account?{' '}
              <Link color='teal.500' onClick={()=>Navigate("/signup")}>
                Signup
              </Link>
            </Text>
          </HStack>
      </Center>
    </>
  );
}

export default Login;

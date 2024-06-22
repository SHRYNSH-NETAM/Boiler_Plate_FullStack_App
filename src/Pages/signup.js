import { Center,Heading,Input,Link,Button,Text,HStack,Checkbox,Flex,
  FormControl,FormLabel,FormErrorMessage} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate  } from "react-router-dom";

function Signup() {
  const [user,setUser] = useState({Name:"Shreyansh Netam",Email:"netams2000@gmail.com",Pass:"Temp@2000",Cpass:"Temp@2000"});
  const [error,setError] = useState({email:"",pass:"",checkpass:""});
  const [acceptTerms, setAcceptTerms] = useState(false);
  const Navigate = useNavigate();

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

  const validatePass = (pass, cpass) => {

    if (pass !== cpass) {
      setError(prevError => ({ ...prevError, checkpass: "yes"}));
      return false;
    } else{
      setError(prevError => ({ ...prevError, checkpass: ""}));
    }

    return String(pass).match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      let valid = true;

      if (!validateEmail(user.Email)) {
        setError(prevError => ({ ...prevError, email: "yes" }));
        valid=false;
      } else {
        setError(prevError => ({ ...prevError, email: "" }));
      }

      if(!validatePass(user.Pass,user.Cpass)){
        setError(prevError => ({ ...prevError, pass: "yes" }));
        valid=false;
      } else {
        setError(prevError => ({ ...prevError, pass: "" }));
      }

      if (!acceptTerms) {
        valid = false;
        alert("Please accept the terms and conditions");
      }

      if(valid){
        console.log(user);
        setUser({Name:"",Email:"",Pass:"",Cpass:""});
        setAcceptTerms(false);
        Navigate("/login");
      }
  }
  return (
    <>
      <Center bg='lightblue' h='100vh'>
          <HStack spacing='15px' flexDirection='column' bg='white' w='450px' p={4} borderWidth='1px' borderRadius='lg'>
            <Heading>SignUp</Heading>
            <FormControl >
              <FormLabel>Username</FormLabel>
              <Input type='username' name='Name' value={user.Name} onChange={handleChange}/>
            </FormControl>
            <FormControl isInvalid={error.email}>
              <FormLabel>Email<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='email' name='Email' value={user.Email} onChange={handleChange}/>
              {error.email && <FormErrorMessage>Please enter valid email!!</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={error.pass}>
              <FormLabel>Password<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='password'name='Pass' value={user.Pass} onChange={handleChange}/>
              {error.pass && <FormErrorMessage>Please enter valid Password!!</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={error.pass}>
              <FormLabel>Confirm Password<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='password' name='Cpass' value={user.Cpass} onChange={handleChange}/>
              {error.checkpass && <FormErrorMessage>Please confirm your Password!!</FormErrorMessage>}
            </FormControl>
            <Flex w='100%' justify='flex-start'>
              <Checkbox isChecked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)}>I Accept all Terms & Conditions.</Checkbox>
            </Flex>
            <Button colorScheme='teal' size='lg' w='100%' onClick={handleSubmit}>Signup</Button>
            <Text>Already have an account?{' '}
              <Link color='teal.500' onClick={()=>Navigate("/login")}>
                Login
              </Link>
            </Text>
          </HStack>
      </Center>
    </>
  );
}

export default Signup;

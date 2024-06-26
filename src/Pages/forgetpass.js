import { Center,Heading,Input,Link,Button,Text,HStack,Flex, Spacer,
    FormControl,FormLabel,FormErrorMessage} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Forgetpass() {
  const [email,setEmail] = useState("netams2000@gmail.com");
  const [evalid,setEvalid] = useState(false);
  const Navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
      );
  };

  async function getData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    const result = await response.json();
    return {status: response.status, body: result};
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEvalid(true);
      valid=false;
    } else {
      setEvalid(false);
    }

    try{
      const retrievedvalue = await getData("http://127.0.0.1:8000/forget", {Email: email});

      if(retrievedvalue.status===404){
        alert("User does not Exist for this Credentials!")
        return
      }
      alert(`Password for this Email is ${retrievedvalue.body.pass}`)

    }catch(err){
      console.error('Error:', err);
      valid = false;
    }

    if(valid){
      setEmail("");
      Navigate("/login")
    }
}

  return (
    <>
      <Center bg='lightblue' h='100vh'>
          <HStack spacing='20px' flexDirection='column' bg='white' w='600px' p={4} borderWidth='1px' borderRadius='lg'>
            <Heading size='lg'>Forgot your password?</Heading>
            <FormControl isInvalid={evalid}>
              <FormLabel>Your Email<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='email' name='Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              {evalid && <FormErrorMessage>Please enter valid email!!</FormErrorMessage>}
            </FormControl>
            <Flex w='100%' alignItems='center'>
                <ArrowBackIcon  boxSize={4} color="teal.500"/>
                <Link color='teal.500' onClick={()=>Navigate("/login")}>Back to the Login Page</Link>
                <Spacer />
                <Button colorScheme='teal' size='lg' onClick={handleSubmit} >Reset</Button>
            </Flex>
          </HStack>
      </Center>
    </>
  );
}

export default Forgetpass;

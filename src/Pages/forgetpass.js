import { Center,Heading,Input,Link,Button,Text,HStack,Flex, Spacer,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

function Forgetpass() {
  return (
    <>
      <Center bg='lightblue' h='100vh'>
          <HStack spacing='20px' flexDirection='column' bg='white' w='600px' p={4} borderWidth='1px' borderRadius='lg'>
            <Heading size='lg'>Forgot your password?</Heading>
            <FormControl>
              <FormLabel>Your Email<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='email' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Flex w='100%' alignItems='center'>
                <ArrowBackIcon  boxSize={4} color="teal.500"/>
                <Link color='teal.500' href='/login'>Back to the Login Page</Link>
                <Spacer />
                <Button colorScheme='teal' size='lg' >Reset</Button>
            </Flex>
          </HStack>
      </Center>
    </>
  );
}

export default Forgetpass;

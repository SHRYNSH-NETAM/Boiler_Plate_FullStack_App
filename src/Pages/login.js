import { Center,Heading,Input,Link,Button,Text,HStack,Flex,Checkbox, Spacer } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function Login() {
  return (
    <>
      <Center bg='lightblue' h='100vh'>
          <HStack spacing='20px' flexDirection='column' bg='white' w='450px' p={4} borderWidth='1px' borderRadius='lg'>
            <Heading>Login</Heading>
            <FormControl>
              <FormLabel>Email address<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='email' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              <FormLabel>Password<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='password' />
              {/* <FormHelperText>We'll never share your Username.</FormHelperText> */}
            </FormControl>
            <Flex w='100%'>
                <Checkbox>Remember Me</Checkbox>
                <Spacer />
                <Link color='teal.500' href='/forget'>Forgot Password?</Link>
            </Flex>
            <Button colorScheme='teal' size='lg' w='100%'>Login</Button>
            <Center>
            <Text>Don't have an account?{' '}
              <Link color='teal.500' href='/signup'>
                Signup
              </Link>
            </Text>
            </Center>
          </HStack>
      </Center>
    </>
  );
}

export default Login;

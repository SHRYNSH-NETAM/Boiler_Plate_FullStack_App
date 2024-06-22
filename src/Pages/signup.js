import { Center,Heading,Input,Link,Button,Text,HStack,Checkbox,Flex } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function Signup() {
  return (
    <>
      <Center bg='lightblue' h='100vh'>
          <HStack spacing='20px' flexDirection='column' bg='white' w='450px' p={4} borderWidth='1px' borderRadius='lg'>
            <Heading>SignUp</Heading>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type='username' />
              {/* <FormHelperText>We'll never share your Username.</FormHelperText> */}
              <FormLabel>Email<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='email' />
              {/* <FormHelperText>We'll never share your Username.</FormHelperText> */}
              <FormLabel>Password<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='password' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              <FormLabel>Confirm Password<Text as='span' color='red'> *</Text></FormLabel>
              <Input type='password' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Flex w='100%' justify='flex-start'><Checkbox>I Accept all Terms & Conditions.</Checkbox></Flex>
            <Button colorScheme='teal' size='lg' w='100%'>Signup</Button>
            <Text>Already have an account?{' '}
              <Link color='teal.500' href='/login'>
                Login
              </Link>
            </Text>
          </HStack>
      </Center>
    </>
  );
}

export default Signup;

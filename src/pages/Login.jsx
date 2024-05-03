import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function Login() {
  return (
    <Box p={4}>
      <Text mb={4}>Login with:</Text>
      <Button leftIcon={<FaGoogle />} colorScheme="red" mb={2}>
        Google
      </Button>
      <Button leftIcon={<FaFacebook />} colorScheme="blue">
        Facebook
      </Button>
    </Box>
  );
}

export default Login;
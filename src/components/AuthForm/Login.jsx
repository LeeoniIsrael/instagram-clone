import { AlertIcon, Button, Input, Alert } from '@chakra-ui/react'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {loading, error, login} = useLogin();
    return (
    <>
        <Input 
           bg={"black.800"} 
           borderColor={"black"}
           placeholder='Email'
           fontSize={14}
           type='email'
           value={inputs.email}
           onChange={(e) => setInputs({...inputs, email:e.target.value})}
        />
        <Input 
           bg={"black.800"} 
           borderColor={"black"}
           placeholder='Password'
           fontSize={14}
           type='password'
           value={inputs.password}
           onChange={(e) => setInputs({...inputs, password:e.target.value})}
        />
        
        {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
        </Alert>
       )}
        <Button w={"full"} colorScheme='blue' size={'sm'} fontSize={14} 
        isLoading={loading}
        onClick={() => login(inputs)}> 
        Log in 
        </Button>
        </>
        );
    }

export default Login
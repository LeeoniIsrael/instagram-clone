import { Container, Flex, Image, Box, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding = {0}>
        <Flex justifyContent={'center'} alignItems={'center'} px={4}>
          {/* Left hand-side */}
          <Box display={{base: "none", md: "block"}}>
          <Image src="/auth.png" h={650} alt='Phone img' />
          </Box>

        {/* Right hand-side */}
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
              <Flex gap={5} justifyContent={"center"}> 
                
                <Image src='/microsoft.png' h={"10"} alt='Microsoft logo'/>
              </Flex>
        </VStack>
        </Flex>
     

      </Container>
    </Flex>
  )
}

export default AuthPage
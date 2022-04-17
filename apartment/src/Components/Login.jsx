import React from "react"
import { useDispatch , useSelector } from "react-redux";
import { loginFailure , loginSuccess , loginLoading } from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";
import { Input, Button, Flex } from '@chakra-ui/react';
export const Login = ()=>{

const [email , setUsername] = React.useState("");
const [password , setPassword] = React.useState("");
const dispatch = useDispatch();

const navigate = useNavigate() ; 
const handleSubmit = () => {
    const userDetail = {
        email,
        password
    };
     
   dispatch(loginLoading());
    fetch("https://reqres.in/api/login" , {
        method: "POST",
        body: JSON.stringify(userDetail),
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((res) => res.json())
    .then((res) =>{
        dispatch(loginSuccess(res.token));
        navigate("/")
    }) // set token and auth status
    .catch((err)=> dispatch(loginFailure( )))
};

    return(
        <>
        <Flex direction="column" gap="1" padding="10px" w="300px">
        <Input size='lg' type="text" 
        placeholder="enter user Id"
        value={email} 
        onChange={(e)=> setUsername(e.target.value)}
        />
        <br></br>
        <Input size='lg' type="text"
         placeholder="enter password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
         <br></br>
         <Button onClick={handleSubmit}>Submit</Button>
         </Flex>
</>

        
   )
}
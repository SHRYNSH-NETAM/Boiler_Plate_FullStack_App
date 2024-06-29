import { Button, Center,Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';

function Home() {
  const { userAuth,logout } = useAuth();
  const [userName,setUserName] = useState("");
  const Navigate = useNavigate();

  async function getData(url = "", data = {}, token) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    const result = await response.json();
    return {status: response.status, body: result};
  }

  useEffect(() => {
    async function fetchUserData() {
      if (userAuth.userMail && userAuth.isAuth) {
        try {
          const retrievedValue = await getData("http://127.0.0.1:8000/", { email: userAuth.userMail }, userAuth.usertoken);
          if (retrievedValue.status !== 200) {
            alert("User does not exist for these credentials!");
            return;
          }
          setUserName(retrievedValue.body.username);
        } catch (err) {
          console.error('Error:', err);
        }
      }
    }
    fetchUserData();
  }, [userAuth]);

  const handleLogout = () => {
    logout();
    Navigate("/login");
  }
  
  return (
    <>
      <Center bg='lightblue' h='100vh'>
          <Heading>Welcome {userName} to the HomePage!!</Heading>
          <Button onClick={handleLogout}>Log out</Button>
      </Center>
    </>
  );
}

export default Home;

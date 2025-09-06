import React, { useEffect, useState } from 'react'
import { Stack, Button } from '@mantine/core';
import {Avatar} from '@mantine/core'
import Service from '../utils/http'
const service = new Service();
const Profile = () => {
   const [user, setUser] =useState(null)
   const getProfileData = async () => {
       try {
           const res = await service.get("user/me");
           setUser(res);
           console.log(res);
       }catch(error){
           console.log("Error in fetching profile data", error);
       }
   }
   useEffect(()=>{
       getProfileData();
   },[])
 return (
   <div>
      <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="lg"
    >
      <Avatar src={user?.avatar} alt="it's me" />
      <p variant="default">{user?.name}</p>
      <p variant="default">{user?.email}</p>
      <p variant="default">User Id:{user?._id}</p>
    </Stack>

    </div>

 )
}


export default Profile

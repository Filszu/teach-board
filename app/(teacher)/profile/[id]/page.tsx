import { UserCard } from "@/components";
import { getUser } from "@/lib/getUser";
import { Teacher } from "@/types/types";
import axios from "axios";
import { Metadata } from "next"
import { notFound } from "next/navigation";

interface Props {
    params:{
        id: string;
    }
}


const UserProfile = async({params}:Props) => {

    const id = params.id;
    // const res = await axios.get(`http://localhost:3000/api/users/${id}`,{
    //     responseType: "json",
    //   })

    
    const jUser:Teacher = await getUser({
        condition: {
          key: "uuAccountID",
          value: `${id}`
        }
      });
    // const user:Teacher = jUser.
    console.log('jUser',jUser);
    if(!jUser) return (notFound())

    return(
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
        }}>
            {/* <p>user id {id}</p>
            <h1>{jUser.name}</h1>
                
            <img 
                width={300}
                src={jUser.image??'/mememan.webp'} 
                alt={`${jUser.name}'s profile`} 
            />

            <h3>About</h3>
            <p>{jUser.description}</p> */}

            {/* <h3>teacher since</h3>
            <p>{jUser.joinedDate??""}</p> */}

            {/* <h3>email</h3>
            <p>{jUser.email}</p> */}


            <UserCard user={jUser} />
         
    
      
        </section>
    )

}


export default UserProfile;
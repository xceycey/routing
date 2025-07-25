import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function UserDetail() {
    
    const location = useLocation();
    const { id } = useParams()
    const [user,setUser]=useState(location.state);
    console.log(location);
    useEffect(()=>{
        if(!user?.id){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(data=> setUser(data))
        }
        
    },[id,user])
    return (
        <div>
            <h2>Kullanıcı Detayları</h2>
            {
                user && <pre>
                    {
                        JSON.stringify(user, null, 2)
                    }
                </pre>
            }
            {/* {
                location.state && <pre>
                    {
                        JSON.stringify(location.state, null, 2)
                    }
                </pre>
            } */}



            {id != 10 && <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>}

        </div>
    )
}

export default UserDetail
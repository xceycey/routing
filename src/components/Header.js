import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Header() {
    const navigate=useNavigate();
  return (
    <div>
        <ul className='menu'>
            
            {/* <li onClick={()=> navigate(-1)}>Geri</li> */}
            <li>
                <a href='#/' onClick={()=> navigate(-1)}>Geri</a>
            </li>
            {/* <li><a href='/'>Anasayfa(Test)</a></li> sayfayı yeniliyor*/} 
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="users">Kullanıcılar</Link></li>
            <li><Link to="contact">İletişim</Link></li>
        </ul>
    </div>
  )
}

export default Header
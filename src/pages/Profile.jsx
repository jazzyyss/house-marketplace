import { getAuth, updateProfile } from 'firebase/auth'
import { useState, useEffect } from 'react'

const Profile = () => {
  const auth = getAuth()

  const [user, setUser] = useState(null)

  useEffect(()=>{
    setUser(auth.currentUser)
  }, [])
  
  return (
    user ? user.displayName : 'Not logged In'
  )
}

export default Profile
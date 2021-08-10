import { useState } from "react"

function Login() {

    const [email, setEmail] = useState('')

    return(
        <>
            <h2>Login</h2>
            <input 
                type='email' 
                name='email' 
                placeholder='Your email here'  
            />
            <button type="submit">Sign in</button>
        </>
    )
}

export default Login
import { SignIn } from '@clerk/clerk-react'
import './signIn.css'

const SignIn = () => {
    return (
        <div className='signIn'>
            <SignIn path="/sign-in" />
        </div>
    )
}

export default SignIn
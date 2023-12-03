import Image from "next/image";
// import { signIn } from 'next-auth/react'

function Login() {
    return(
        <div className="mt-20 grid place-items-center">
            <Image alt="fb" src='https://links.papareact.com/5me'
                width={250}
                height={250}
                objectFit='contain'
            />
            <h1 className="mt-7 p-4 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with facebook</h1>
            {/* <h1 onClick={signIn} className="mt-7 p-4 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with facebook</h1> */}
        </div>
    )
}

export default Login;
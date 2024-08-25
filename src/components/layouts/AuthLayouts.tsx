import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    children: ReactNode,
    authTitle: string,
    type: string
}

const AuthLayout = (props: Props) : JSX.Element => {
    const {children, authTitle, type} = props;
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-6 mx-auto">
                <h1 className="mb-2 text-3xl font-bold text-blue-700">{authTitle}</h1>
                <p className="mb-8 font-medium text-neutral-800">Welcome to Toko Merah Marketplace, please enter your details. For get full access to your account</p>
                { children }
                { type === 'signin' 
                    ? <p className="mt-2 text-sm text-center">Don't have an account ? <Link to="/signup" className="font-bold text-blue-700">Sign Up</Link></p> 
                    : <p className="mt-2 text-sm text-center">Already have an account ? <Link to="/signin" className="font-bold text-blue-700">Sign In</Link></p> }
            </div>
        </div>
    )
}

export default AuthLayout;

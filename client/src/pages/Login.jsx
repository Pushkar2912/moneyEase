import { useContext, useState } from 'react'
import expense from '../asset/calculator2.jpeg'
import { AuthContext } from '../context/AuthContextProvider'
import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../utils/constants';

const Login = () => {

    const { handleSignIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            email,
            password
        }
        handleSignIn(values);
    }
    return (
        <div className="login-container flex h-screen">
            <div className="login-container-left flex max-w-[500px] w-full flex-col gap-10 h-full px-10 justify-center md:mx-auto">
                <div onClick={() => { navigate(PATHS.HOME) }} className="login-left-projectTitle text-2xl font-bold text-blue-500">
                    MoneyEase
                </div>
                <div className="login-left-pageContent">
                    <div className="login-left-title font-semibold text-lg">
                        Sign in with your account
                    </div>
                    <div className="login-left-login-link text-8 text-sm">
                        Don't have account <Link className='text-blue-500' to={PATHS.SIGNUP}>Sign Up</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="login-left-login-frm flex flex-col gap-2">
                    <label className="login-frm-input text-sm">E-mail</label>
                    <input value={email} onChange={handleEmailChange} className="login-frm-input  border border-gray-300 p-2 rounded-md" type="email" placeholder="Eg: example@gmail.com" />
                    <label className="login-frm-input text-sm">Password</label>
                    <input value={password} onChange={handlePasswordChange} className="login-frm-input  border border-gray-300 p-2 rounded-md" type="password" placeholder="********" />
                    <button className="login-frm-btn bg-blue-500 text-white rounded-md p-2" type="submit">Submit</button>
                </form>
            </div>
            <div className="login-container-right flex-1 h-full hidden lg:flex">
                <img className='object-cover w-full h-full' src={expense} />
            </div>

        </div>
    )
}
export default Login
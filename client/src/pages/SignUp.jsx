import { useContext, useState } from 'react'
import expense from '../asset/calculator2.jpeg'
import { AuthContext } from '../context/AuthContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../utils/constants';



const SignUp = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { handleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = { 
            email,
            name,
            password
        }
        handleSignUp(values);
    }
    return (
        <div className="signUp-container flex h-screen">
            <div className="signUp-container-left flex max-w-[500px] w-full flex-col gap-10 h-full px-10 justify-center md:mx-auto">
                    <div onClick={() => {navigate(PATHS.HOME)}} className="signUp-left-projectTitle text-2xl font-bold text-blue-500">
                            MoneyEase
                    </div>
                    <div className="signUp-left-pageContent">
                        <div className="signUp-left-title font-semibold text-lg">
                            Create an account
                        </div>
                        <div className="signUp-left-logIn-link text-8 text-sm">
                            Already have an account? <Link className='text-blue-500' to={PATHS.LOGIN}>log in</Link>
                        </div>
                    </div>
                    <form  onSubmit={handleSubmit} className="signUp-left-signUp-frm flex flex-col gap-2">
                        <label className="signUp-frm-input text-sm">E-mail</label>
                        <input value={email} onChange={handleEmailChange} className="signUp-frm-input  border border-gray-300 p-2 rounded-md" type="email" placeholder="Eg: example@gmail.com" />
                        <label className="signUp-frm-input text-sm">Name</label>
                        <input  value={name} onChange={handleNameChange} className="signUp-frm-input  border border-gray-300 p-2 rounded-md" type="text" placeholder="Eg: John Doe" />
                        <label className="signUp-frm-input text-sm">Password</label>
                        <input value={password} onChange={handlePasswordChange} className="signUp-frm-input  border border-gray-300 p-2 rounded-md" type="password" placeholder="********" />
                        <button className="signUp-frm-btn bg-blue-500 text-white rounded-md p-2" type="submit">Submit</button>
                    </form>
            </div>
            <div className="signUp-container-right flex-1 h-full hidden lg:flex">
                    <img className='object-cover w-full h-full' src={expense}/>
            </div>

        </div>
    )
}
export default SignUp
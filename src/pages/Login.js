
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/Context';


const Login = () => {
    const { register, formState: { errors }, handleSubmit, handleChange } = useForm()
   const {user, loginUser, googleSignIn} = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation()


    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'


    const handleLogin = data => {
        console.log(data)
        setLoginError('')


        loginUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                // toast.success(`Welcome back to Astor ${user.displayName}.`)
            })
            .catch((error) => {
                console.log(error.message)
                setLoginError(error.message)
            });




    }


    const handleGoogle = data => {
        setLoginError('')
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user)
                // toast.success(`Welcome back to Astor ${user.displayName}.`)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error)
                setLoginError(error)
            })

    }

    return (
        <div className='my-10 flex justify-center items-center '>
            <div className='w-96 p-7 shadow-lg bg-gray-100'>
                <h2 className='text-4xl text-black font-bold uppercase mb-4'>Log In</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">Email</span>
                        </label>
                        <input type='email' className='input input-bordered' {...register("email", { required: "Email address is required" })} />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">Password</span>
                        </label>
                        <input type='password' className='input input-bordered ' {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })} />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text text-neutral">Forget Password ?</span>
                        </label>
                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn btn-primary text-white w-full' value='Log In' type="submit" />
                    {loginError && <p className='text-errors'>{loginError}</p>}
                    <p>New to Leadzen.ai  ?<Link className=' font-bold text-black mt-4' to='/register'> Create new account. </Link></p>
                    <div className='divider'>OR</div>
                    <input onClick={handleGoogle} className='btn btn-primary w-full text-white' value='Continue with Goggle' />
                </form>

            </div>


        </div>
    );
};

export default Login;
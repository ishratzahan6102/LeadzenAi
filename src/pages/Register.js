import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/Context';

const Register = () => {




    const { user, createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()


    const [signUpError, setSignUpError] = useState('')



    const handleSignup = data => {
        console.log(data)
        setSignUpError('')

        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                // toast.success('User created successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                console.log(error)
                setSignUpError(error)
            });

    }

    const handleGoogle = data => {
        setSignUpError('')
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user)
                // toast.success(`Welcome back to Astor ${user.displayName}.`)
            })
            .catch((error) => {
                console.log(error)
                setSignUpError(error)
            })

    }
    return (
        <div className='my-6 flex justify-center '>
            <div className='w-96 p-7 shadow-lg bg-gray-100'>
                <h2 className='text-4xl font-bold uppercase'>Register</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">Name</span>
                        </label>
                        <input type='text' className='input input-bordered ' {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>

                    {/* <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-neutral">Choose account type</span>
                        </label>
                        <select className='w-full p-4 bg-black text-white' {...register("account")}>
                            <option defaultValue="buyer ">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>

                    </div> */}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">Email</span>
                        </label>
                        <input type='text' className='input input-bordered ' {...register("email", { required: "Email address is required" })} />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">Password</span>
                        </label>
                        <input type='password' className='input input-bordered ' {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/, message: "Password must be uppercase number & special characters" }
                        })} />

                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text text-neutral">Forget Password ?</span>
                        </label>
                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn btn-primary text-white w-full' value='Sign up' type="submit" />
                    {signUpError && <p className='text-error'>{signUpError}</p>}
                  
                    <p>Already have an account ?<Link className='text-black font-bold' to='/login'> Login here.</Link></p>
                    <div className='divider'>OR</div>
                    <input onClick={handleGoogle} className='btn btn-primary w-full text-white' value='Continue with Goggle' />
                </form>

            </div>


        </div>
    );
};

export default Register;
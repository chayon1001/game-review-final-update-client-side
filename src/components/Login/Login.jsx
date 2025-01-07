import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import loginImg from '../../assets/Login-amico.png';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser, setUser, logInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');
                toast.success('Login successful!');
                e.target.reset();
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.error('Invalid email or password. Please try again.');
            });
    };

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then((res) => {
                setUser(res);
                navigate('/');
                toast.success('Login successful!');
            })
            .catch((error) => {
                console.log('ERROR', error.message);
            });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 mb-10 rounded-lg bg-base-100 w-full max-w-7xl mx-auto shadow-2xl">
            {/* Left Section: Image */}
            <div className="md:w-1/2 p-4 flex justify-center">
                <img src={loginImg} alt="Login Illustration" className="w-full max-w-sm md:max-w-md" />
            </div>

            {/* Right Section: Form */}
            <div className="md:w-1/2 p-8">
                <h2 className="text-4xl font-semibold text-center mb-4">Login to your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {error.login && (
                        <label className="label text-sm text-red-600">{error.login}</label>
                    )}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn bg-yellow-500 text-black text-xl">Login</button>
                    </div>
                </form>
                <p className="text-lg text-center">
                    Don't have an account?{' '}
                    <Link className="text-red-500" to="/auth/register">
                        Register
                    </Link>
                </p>
                <button
                    onClick={handleGoogleLogin}
                    className="btn bg-gray-400 w-full font-bold text-2xl mt-4 flex items-center justify-center"
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;

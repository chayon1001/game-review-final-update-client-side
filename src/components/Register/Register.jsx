import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';
import registerImg from '../../assets/Queue-rafiki.png';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // Password validation
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }

        setPasswordError("");

        // Register user
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('Successfully registered!');
                navigate('/');
            })
            .catch((error) => {
                toast.error('Registration failed. Please try again!');
            });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 mb-10 rounded-lg bg-base-100 w-full max-w-7xl mx-auto shadow-2xl">
            {/* Left Section: Image */}
            <div className="md:w-1/2 p-4 flex justify-center">
                <img src={registerImg} alt="Register Illustration" className="w-full max-w-sm md:max-w-md" />
            </div>

            {/* Right Section: Form */}
            <div className="md:w-1/2 p-8">
                <h2 className="text-4xl font-semibold text-center mb-4">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required
                        />
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-emerald-900 text-white text-xl">Register</button>
                    </div>
                </form>
                <p className="text-lg text-center">
                    Already have an account?{' '}
                    <Link className="text-red-500" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

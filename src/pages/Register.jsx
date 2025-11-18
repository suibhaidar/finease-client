import React, { useState, use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();

    // Google Login
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                const currentUser = auth.currentUser;
                setUser(currentUser);
                toast.success("Google login successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => toast.error(error.message));
    };

    // Email/Password Register
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // 🔹 Password validation
        if (!/[A-Z]/.test(password)) return setError("Password must contain at least one uppercase letter.");
        if (!/[a-z]/.test(password)) return setError("Password must contain at least one lowercase letter.");
        if (password.length < 6) return setError("Password must be at least 6 characters long.");
        setError("");

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success("Registration successful!");
                        navigate(from, { replace: true });
                    })
                    .catch((error) => {
                        toast.error(error.message);
                        setUser(user);
                    });
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <div className='card-body'>
                    <form onSubmit={handleRegister}>
                        <fieldset>
                            {/* Name */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" required />

                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                            {/* Email */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />

                            {/* Password */}
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" required />

                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                            <button type='submit' className="btn btn-neutral bg-gradient-to-r from-[#1C352D] to-[#6AA97B] mt-4 w-full">Register</button>
                        </fieldset>
                    </form>

                    <div className="divider">OR</div>

                    {/* Google Login */}
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full flex justify-center items-center gap-2">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>
                        Login with Google
                    </button>

                    <p className='text-center font-semibold pt-2'>
                        Already Have An Account? <Link className='text-secondary' to="/auth/login">Login</Link>
                    </p>
                    <p className='text-center font-semibold text-xs mt-1'>
                        By creating an account, I agree to Pngtree's Terms of Service, Privacy Policy, and Intellectual Property Rights
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

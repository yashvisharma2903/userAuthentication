import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, password } = formData;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/user/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response:', response.data);
            setSuccessMessage("Login Successful!");

            setFormData({
                name: '',
                email: '',
                password: ''
            });
            setErrorMessage('');
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to sign up. Please try again.');
            setSuccessMessage('');
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-black p-6 rounded-lg">
            <h1 className='text-gray-100 text-5xl p-[100px] text-center'>Signup - Form!</h1>
            <div className="bg-gray-200 mx-auto shadow-md rounded-lg px-8 py-6 w-full max-w-md">
                {successMessage && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                        <p className="font-bold">Success!</p>
                        <p>{successMessage}</p>
                    </div>
                )}
                {errorMessage && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                        <p className="font-bold">Error</p>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <input
                        className="w-72 mx-auto justify-center border-2 border-gray-600 rounded-md"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Please Enter Your Username"
                        required
                    />
                    <input
                        className="mx-auto w-72 justify-center h-full border-2 border-gray-600 rounded-md"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Please Enter Your Email ID"
                        required
                    />
                    <input
                        className="mx-auto w-72 justify-center h-full border-2 border-gray-600 rounded-md"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Please Enter Your password"
                        required
                    />
                    <button className="mx-auto w-52 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-1 rounded" type="submit">Signup</button>
                </form>
                <h5 className="text-center">Already have an account? <a href="signIn" className="-my-0">SignIn</a></h5>
            </div>
        </div>
    );
};

export default SignUpForm;

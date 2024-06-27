import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
    const [formData, setformData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/user/login`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response:', response.data);
            //alert(response.data.message);
            setSuccessMessage('Signin successful!');

            setformData({
                email: '',
                password: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to sign up. Please try again.');
        }
    };

    const handleChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        
        <>
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-black p-6 rounded-lg">
        <h1 className='text-gray-100 text-5xl p-[100px] text-center'>Signup - Form!</h1>
        <div className= "bg-gray-200 mx-auto shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        {successMessage && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                        <p className="font-bold">Success!</p>
                        <p>{successMessage}</p>
                    </div>
                )}
            <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
                <input
                className="mx-auto w-72 justify-center h-full border-2 border-gray-600 
                 rounded-md" 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please Enter Your Email ID"
                    required
                />
                <input
                className="mx-auto w-72 justify-center h-full border-2 border-gray-600
                 rounded-md"
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Please Enter Your password"
                    required
                />
                <button className="mx-auto w-52 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-1 rounded" type="submit">Signup</button>
            </form>
            </div>
            </div>
        </>
    );
};

export default SignInForm;

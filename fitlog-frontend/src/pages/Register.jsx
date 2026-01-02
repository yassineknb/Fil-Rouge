import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import RegisterForm from '../components/forms/RegisterForm';

const Register = () => {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
};

export default Register;

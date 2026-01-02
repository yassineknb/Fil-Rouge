import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg flex items-center mb-4">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{message}</span>
        </div>
    );
};

export default ErrorMessage;

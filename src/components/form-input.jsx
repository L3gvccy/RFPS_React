import React from 'react';

export default function FormInput({ label, type, name, required = true }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className="form-control"
                required={required}
            />
        </div>
    );
}

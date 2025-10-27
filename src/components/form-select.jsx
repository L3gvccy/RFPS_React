import React from 'react';

export default function FormSelect({ label, name, options, required = true }) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                name={name}
                id={name}
                className="form-select"
                required={required}
            >
                <option value="">Оберіть</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormGenerator = ({ data = [] }) => {
    const initialValues = {};
    const validationSchema = {};

    data.forEach((field) => {
        initialValues[field.name] = field.value || '';
        if (field.required) {
            validationSchema[field.name] = Yup.string().required(`${field.label} is required`);
        }
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form  onSubmit={formik.handleSubmit}>
            {data.map(({ id, ...field }) => {
                const inputId = id || uuidv4();
                return (
                    <div key={inputId}>
                        <label className="m-8 my-10 p-3 rounded-none bg-slate-400" htmlFor={inputId}>{field.label}</label>
                        <input className='m-2 p-3 bg-blue-400'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field.name]}
                            id={inputId}
                            {...field}
                        />
                        {formik.touched[field.name] && formik.errors[field.name] ? (
                            <div>{formik.errors[field.name]}</div>
                        ) : null}
                    </div>
                );
            })}
            <button className="m-8 p-4 py-2 rounded-full bg-slate-300" type="submit">Submit</button>
        </form>
    );
};

FormGenerator.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.object
    )
};

export default FormGenerator;

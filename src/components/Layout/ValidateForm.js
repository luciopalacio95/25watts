import {useState, useEffect} from 'react';

const ValidateForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
    });

    const [errors,setErrors] = useState({});
    const[isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    });
    return {handleChange, values, handleSubmit, errors }
}

export default ValidateForm


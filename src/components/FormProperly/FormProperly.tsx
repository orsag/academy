import React from 'react'
import './FormProperly.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// type FormFiels = {
//     email: string;
//     password: string;
// }

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type FormFiels = z.infer<typeof schema>;

const DEFAULT_VALUES = {
    email: 'tefanus@gmail.com',
}

// https://react-hook-form.com/get-started#Applyvalidation
const emailValidation = {
    required: "Email is required",
    minLength: {value: 6, message: "Email must be at leat 6 chars" },
    pattern: /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/

    // https://www.npmjs.com/package/@hookform/resolvers
    // https://www.npmjs.com/package/zod
}

const FormProperly = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFiels>({
        defaultValues: DEFAULT_VALUES,
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFiels> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
            throw new Error();
        } catch (e) {
            setError('email', { // email, password, root - cely form
                message: 'This email is already taken.'
            });
        }
    }

    return (
        <div className="form-wrapper">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('email', emailValidation)}
                    type="text"
                    placeholder="Email"
                />
                {errors.email && <div className="text-red">{errors.email.message}</div>}
                <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                />
                {errors.password && <div className="text-red">{errors.password.message}</div>}
                <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Loading' : 'Submit'}</button>
                {errors.root && <div className="text-red">{errors.root.message}</div>}
            </form>
        </div>
    )
}

export default FormProperly
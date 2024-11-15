import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
    
    const [state, handleSubmit] = useForm("xeoqklzo")

    if (state.succeeded) {
        return <p>Thanks, we'll be in touch soon!</p>
    }

    return (
        <>
            <h5 className="font-bold text-lg">Wanna Talk?</h5>
            <p className="mb-3">Submit your email to get in touch</p>
            <form onSubmit={handleSubmit} className='flex gap-2'>
                <input className='px-4 py-1 rounded' placeholder='example@example.com' required type="email" name='email' />
                <ValidationError prefix='Email' field='email' errors={state.errors} />
                <button type='submit' disabled={state.submitting} className='bg-[#FD621F] px-4 py-1 rounded transition-all hover:scale-105' >Submit</button>
            </form>
        </>
    )
}
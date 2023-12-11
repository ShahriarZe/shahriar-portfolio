import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_h3xhcvr',
            'template_w605jzk',
            form.current, '5A-_TfRQzWigu7iXu')
            .then((result) => {
                console.log(result.text)
                toast('Email Sent Successfully');
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="hero min-h-[80vh] max-w-7xl mx-auto md:mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-bold"><span className='text-primary'>G</span>et in Touch</h2>
                    <progress className="progress progress-primary"></progress>
                    <p className="mb-6 mt-6 text-2xl">
                         Let us collaborate and bring your ideas to life! Feel free to explore my portfolio and get in touch to discuss how we can work together.
                    </p>
                    <div className='flex gap-8 justify-center lg:justify-start'>
                        <a className='text-4xl text-primary' href="https://github.com/ShahriarZe" target="_blank" rel='noopener noreferrer' ><FaGithub /></a>
                        <a className='text-4xl text-primary' href="https://www.linkedin.com/in/shahriar-ahmmed-25102b270/" target="_blank" rel='noopener noreferrer'><FaLinkedin /></a>
                        <a className='text-4xl text-primary' href="https://www.facebook.com/zealous.zemam" target="_blank" rel='noopener noreferrer'><FaSquareFacebook /></a>
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl  border border-primary">
                    <form ref={form} onSubmit={sendEmail} className="p-6">
                        <label className="block text-primary-500 text-sm font-bold mb-2">Name</label>
                        <input
                            required
                            type="text"
                            name="from_name"
                            className="shadow bg-transparent appearance-none border border-primary rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-primary"
                        />
                        <label className="block text-primary-500 text-sm font-bold mt-4 mb-2">Email</label>
                        <input
                            required
                            type="email"
                            name="user_email"
                            className="shadow bg-transparent appearance-none border border-primary rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-primary"
                        />
                        <label className="block text-primary-500 text-sm font-bold mt-4 mb-2">Message</label>
                        <textarea
                            required
                            name="message"
                            className="shadow bg-transparent appearance-none border border-primary rounded w-full py-6 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-primary"
                        ></textarea>
                        <input

                            type="submit"
                            value="SEND"
                            className="my-6 btn-primary btn-outline w-full border bg-primary-500 font-bold py-2 px-4 rounded "
                        />
                        <Toaster />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;












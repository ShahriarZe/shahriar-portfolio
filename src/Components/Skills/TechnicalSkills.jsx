import { motion } from "framer-motion";

const TechnicalSkills = () => {
    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center"><span className="text-primary">T</span>echnical <span className="text-primary">S</span>kills</h2>
            <div className="min-h-[60vh] max-w-7xl mx-auto mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left ">
                    <div className="mb-6">
                        <h3 className="underline text-2xl mb-2">Frontend Development</h3>
                        <p className="text-xl">Strong command of React.js for building modern and dynamic user interfaces</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="underline text-2xl mb-2">Backend Development</h3>
                        <p className="text-xl">Competent in Node.js, utilizing it to create server-side logic and manage database connections.</p>
                    </div>
                    <div>
                        <h3 className="underline text-2xl mb-2">Full Stack Development</h3>
                        <p className="text-xl">Well-versed in both frontend and backend development, enabling end-to-end application development.</p>
                    </div>

                </div>
                <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        >
                            <div >

                                <div className='mt-4 w-full flex flex-col gap-6 '>
                                    <div className="overflow-x-hidden">
                                        <p className="text-sm uppercase font-medium">HTML</p>
                                        <span className="w-full h-2  rounded-md inline-flex mt-2">
                                            <motion.span
                                                initial={{ x: "-100%", opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="w-[95%] h-full bg-gradient-to-r from-primary to-pink-500 rounded-md relative"
                                            >
                                                <span className="absolute -top-7 right-0">95%</span>
                                            </motion.span>
                                        </span>
                                    </div>
                                    <div className="overflow-x-hidden">
                                        <p className="text-sm uppercase font-medium">CSS</p>
                                        <span className="w-full h-2  rounded-md inline-flex mt-2">
                                            <motion.span
                                                initial={{ x: "-100%", opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="w-[95%] h-full bg-gradient-to-r from-primary to-pink-500 rounded-md relative"
                                            >
                                                <span className="absolute -top-7 right-0">95%</span>
                                            </motion.span>
                                        </span>
                                    </div>
                                    <div className="overflow-x-hidden">
                                        <p className="text-sm uppercase font-medium">Javascript</p>
                                        <span className="w-full h-2  rounded-md inline-flex mt-2">
                                            <motion.span
                                                initial={{ x: "-100%", opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="w-[90%] h-full bg-gradient-to-r from-primary to-pink-500 rounded-md relative"
                                            >
                                                <span className="absolute -top-7 right-0">90%</span>
                                            </motion.span>
                                        </span>
                                    </div>
                                    <div className="overflow-x-hidden">
                                        <p className="text-sm uppercase font-medium">React</p>
                                        <span className="w-full h-2  rounded-md inline-flex mt-2">
                                            <motion.span
                                                initial={{ x: "-100%", opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="w-[85%] h-full bg-gradient-to-r from-primary to-pink-500 rounded-md relative"
                                            >
                                                <span className="absolute -top-7 right-0">85%</span>
                                            </motion.span>
                                        </span>
                                    </div>
                                    <div className="overflow-x-hidden">
                                        <p className="text-sm uppercase font-medium">MongoDB</p>
                                        <span className="w-full h-2  rounded-md inline-flex mt-2">
                                            <motion.span
                                                initial={{ x: "-100%", opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="w-[80%] h-full bg-gradient-to-r from-primary to-pink-500 rounded-md relative"
                                            >
                                                <span className="absolute -top-7 right-0">80%</span>
                                            </motion.span>
                                        </span>
                                    </div>
                                    <div className="overflow-x-hidden">
                                        <p className="text-sm uppercase font-medium">NodeJS</p>
                                        <span className="w-full h-2 rounded-md inline-flex mt-2">
                                            <motion.span
                                                initial={{ x: "-100%", opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="w-[80%] h-full bg-gradient-to-r from-primary to-pink-500 rounded-md relative"
                                            >
                                                <span className="absolute -top-7 right-0">80%</span>
                                            </motion.span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default TechnicalSkills;
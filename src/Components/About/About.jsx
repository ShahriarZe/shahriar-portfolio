

const About = () => {

    return (
        <div className='max-w-7xl mx-auto mt-10 mb-20 min-h-[60vh]'>
            <h2 className="text-5xl font-bold text-center mb-6"><span className='text-primary'>A</span>bout Me</h2>
            <div className="hero  ">
                <div className="hero-content flex-col ">
                    <div>
                        <div className="collapse bg-base-200 border-primary border-2 mb-5">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-2xl font-medium">
                                My Previous Experience
                            </div>
                            <div className="collapse-content">
                                <p>Front End 2022-2023</p>
                                <p>Full Stack 2023-Present</p>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 border-primary border-2 mb-5">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-2xl font-medium">
                                Bachelor of Science
                            </div>
                            <div className="collapse-content">
                                <p>Institute :  Bangladesh University of Business & Technology(BUBT)</p>
                                <p>Department: Computer Science and Engineering</p>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 border-primary border-2 mb-5">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-2xl font-medium">
                            Higher Secondary Certificate
                            </div>
                            <div className="collapse-content">
                                <p>Institute : Govt. Ashek Mahmud College,Jamalpur</p>
                                <p>Department: Science</p>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 border-primary border-2 ">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-2xl font-medium">
                            Secondary School Certificate
                            </div>
                            <div className="collapse-content">
                                <p>Institute : Jamalpur Zilla School,Jamalpur </p>
                                <p>Department: Science</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
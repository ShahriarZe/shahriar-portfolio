import img from '../../assets/high.png'
import resume from '../../assets/Resume .pdf'
const Banner = () => {
    return (
        <div className="hero min-h-[90vh]">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="md:max-w-sm ">
                    <img src={img} className="rounded-full pt-2 shadow-2xl border-primary border" />
                </div>
                <div className='text-center'>
                    <h1 className="text-5xl font-extrabold mb-4">Hi I am <span className='text-primary'>S</span>hahria<span className='text-primary'>r</span>...</h1>
                    <p className='text-2xl mb-4'>Enthusiastic entry-level Web Developer with a strong skill set, innovative mindset, and proficiency in web
                        development languages and frameworks.</p>
                    <a href={resume} download><button className="btn btn-primary btn-outline rounded-badge uppercase">Get Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
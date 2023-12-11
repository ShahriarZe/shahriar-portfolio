import logo from '../../assets/logo-s.png'
const NavBar = () => {
    const links = <>
        <a className='hover:border-b-2 border-primary mr-6 text-xl'>About</a>
        <a className='hover:border-b-2 border-primary mr-6 text-xl'>Projects</a>
        <a className='hover:border-b-2 border-primary mr-6 text-xl'>Skills</a>
        <a className='hover:border-b-2 border-primary text-xl'>Contact</a>
    </>
    return (
        <div className="navbar bg-base-100 shadow-xl p-4 border-b border-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <img className='invisible lg:visible w-1/4' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn uppercase btn-outline btn-primary rounded-badge">Hire Me</a>
            </div>
        </div>
    );
};

export default NavBar;
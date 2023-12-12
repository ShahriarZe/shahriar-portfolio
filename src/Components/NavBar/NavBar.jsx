import logo from '../../assets/logo-s.png'
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl p-4 border-b border-primary">
            <div className="navbar-start">
                <div className="dropdown">   
                </div>
                <img className=' lg:w-1/4' src={logo} alt="" />
            </div>
            
            <div className="navbar-end">
                <a className="btn uppercase btn-outline btn-primary rounded-badge">Hire Me</a>
            </div>
        </div>
    );
};

export default NavBar;
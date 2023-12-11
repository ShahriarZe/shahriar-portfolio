/* eslint-disable react/prop-types */
import gulshan from '../../assets/gulshanC.png'
import proplay from '../../assets/proplay.png'
import studdy from '../../assets/studdy.png'
import fashion from '../../assets/fashion.png'
const Projects = () => {
    const projects = [
        {
            image: gulshan,
            title: 'Gulshan Pride LTD',
            description: 'MERN Stack Project',
            githubLink: 'https://github.com/your-project1-repo',
            liveLink: 'https://gulshan-pride.web.app/',
        },
        {
            image: proplay,
            title: 'ProPlay Events',
            description: 'Online Group Study Platform',
            githubLink: 'https://github.com/your-project2-repo',
            liveLink: 'https://your-project2-live-link.com',
        },
        {
            image: studdy,
            title: 'StudyBuddy',
            description: 'Event Management Platform',
            githubLink: 'https://github.com/your-project3-repo',
            liveLink: 'https://your-project3-live-link.com',
        },
        {
            image: fashion,
            title: 'FashionFlare',
            description: 'Fashion & Apparel Platorm ',
            githubLink: 'https://github.com/your-project4-repo',
            liveLink: 'https://your-project4-live-link.com',
        },
    ];

    const ProjectCard = ({ project }) => (
        <div className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg group">
          <img
            className="w-full h-72 object-cover object-center transition-transform transform scale-100 group-hover:scale-110"
            src={project.image}
            alt={project.title}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline mx-2"
                  >
                    <button className='btn btn-outline btn-primary text-xl'>GITHUB</button>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline mx-2"
                  >
                   <button className='btn btn-outline btn-primary text-xl'>LIVE</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    return (
        <div className="container mx-auto my-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
                <span className="text-primary">P</span>roject <span className="text-primary">S</span>howcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;





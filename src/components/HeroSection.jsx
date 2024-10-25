import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text whitespace-nowrap">
          Smarter Universities, Seamless Workflows
        </span>
      </h1>  
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Revolutionizing university operations by leveraging AI-powered agents to automate and streamline essential workflows, from exams to grant management. 
      </p> 
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          Get started Today!
        </a>
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          autoPlay
          loop
          muted
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          autoPlay
          loop
          muted
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  ); 
};

export default HeroSection;

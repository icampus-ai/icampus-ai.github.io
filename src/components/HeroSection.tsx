import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Video = ({ src }: { src: string }) => (
  <video
    className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
    autoPlay
    loop
    muted
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

const Button = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
    {children}
  </a>
);

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
        <Button href="#">Get started Today!</Button>
        <Button href="#">Documentation</Button>
      </div>
      <div className="flex mt-10 justify-center">
        <Video src={video1} />
        <Video src={video2} />
      </div>
    </div>
  ); 
};

export default HeroSection;
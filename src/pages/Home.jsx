
import { Typewriter } from "react-simple-typewriter";

function Home() {
   
  return (
    <>
    
      <section className="home w-full h-screen overflow-x-hidden text-white bg-[#1B1D27] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-24">
        {/* Left Side - Content */}
        <div className="home-content text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            HI, I'M <span className="text-[#F87817]"> <br />
                <span>Harsh Dewangan</span>
                </span>
          </h1>
          <h3 className="typing-text text-2xl md:text-4xl font-bold my-4">
            I'm a <span className="text-[#F87817]">
            <div className="App">
            <Typewriter
          words={["Web Developer", "Software Engineer", "Freelancer"]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </div>
        
            </span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, exercitationem!
          </p>
          
          {/* Social Icons */}
          <div className="social-icons flex justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="text-[#F87817] hover:scale-110 transition transform">
              <i className="fa-brands fa-linkedin text-3xl"></i>
            </a>
            <a href="#" className="text-[#F87817] hover:scale-110 transition transform">
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
            <a href="#" className="text-[#F87817] hover:scale-110 transition transform">
              <i className="fa-brands fa-x-twitter text-3xl"></i>
            </a>
            <a href="#" className="text-[#F87817] hover:scale-110 transition transform">
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>
          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-black text-[#F87817] border-2 border-[#F87817] rounded-full text-lg font-semibold tracking-wide transition transform hover:scale-105 hover:bg-[#F87817] hover:text-black shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="home-img max-h-[80vh]">
          <img
            src="/main.jpg"
            alt="Profile"
            className="w-48 md:w-64 lg:w-80 rounded-full shadow-lg transition transform hover:scale-105"
          />
        </div>
      </section>
    </>
  );
}

export default Home;

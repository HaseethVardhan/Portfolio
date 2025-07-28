const Home = () => {
  return (
    <div className="min-h-screen w-full relative bg-black flex flex-col items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />

      <div className="fixed max-w-[500px] w-[80%] h-14 top-6 flex flex-row text-[#ffffffd7] justify-around items-center font-poppins backdrop-blur-sm z-1 bg-[#ffffff16] rounded-3xl font-[200]">
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>

      <div className="relative h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col justify-start text-center">
          <div className="text-white font-poppins font-extralight pl-1">
            Hello, I'm Haseeth. An Aspiring Engineer.
          </div>
          <div className="font-montserrat text-6xl font-bold bg-gradient-to-tr from-[#8E8E8E] via-[#A7A7A7] via-[#BFBFBF] via-[#D7D7D7] to-[#F5F5F5] bg-clip-text text-transparent ">
            FULLSTACK DEVELOPER
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;

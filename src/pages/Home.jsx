const Home = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />
      <div className="relative h-screen flex flex-col items-center justify-center">
        <div
          className="font-montserrat text-5xl font-bold bg-gradient-to-tr from-[#8E8E8E] via-[#A7A7A7] via-[#BFBFBF] via-[#D7D7D7] to-[#F5F5F5] bg-clip-text text-transparent"
        >
          Choose a Mode
        </div>
      </div>
    </div>
  );
};

export default Home;

const Skills = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center h-screen w-6/12 text-center ">
        <p className=" text-3xl uppercase pb-5">
          SOME TECHNOLOGIES I'VE WORKED WITH:
        </p>
        <p className="pb-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
            <div className="border-white border p-5 rounded-full">HTML</div>
            <div className="border-white border p-5 rounded-full">CSS</div>
            <div className="border-white border  p-5 rounded-full">JAVASCRIPT</div>
            <div className="border-white border  p-5 rounded-full">REACT JS</div>
            <div className="border-white border  p-5 rounded-full">REDUX</div>
            <div className="border-white border  p-5 rounded-full">TAILWIND</div>
            <div className="border-white border  p-5 rounded-full">GIT + GITHUB</div>
            <div className="border-white border  p-5 rounded-full">BOOTSTRAP</div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Skills;

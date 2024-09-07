import Link from "next/link";
export default function create() {
  return (
    <section className="text-center p-9">
      <h1 className="text-center text-xl sm:text-2xl  md:text-3xl   lg:text-4xl font-extrabold text-white p-3  ">
        Milestone 01
      </h1>

      <p className="text-1xl my-px text-center mt-3 p-3">
        
        WelCome To My Next Js App
      </p>

      <div>
        <h1 className=" bg-pink-400 hover:bg-green-700 font-bold text-3xl  p-12 animate-bounce mt-6 ">Hello WOrld</h1>

        <p className="text-center m-9">
        If you want to learn Next.js, click the button below.
        </p>

        <Link
          href="https://nextjs.org/docs"
          className="text-xl  m-9 bg-pink-500 hover:bg-green-700 rounded-md p-1"
        >
          Click Me
        </Link>

        <p className="text-center m-9">
          Created by: GIAIC Student Ayesha Iqbal
        </p>
      </div>
    </section>
  );
}

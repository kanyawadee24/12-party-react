import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="text-center py-5">
        <h1 className="text-[48px] font-bold pb-5 text-[#34282C]">Generation Thailand</h1>
        <h1 className="text-[48px] font-bold text-[#34282C]">React - Assessment</h1>
      </div>
      <div className="flex gap-5 justify-around mt-10">
        <Link
          to="/User"
          className="bg-[#52464A] text-white px-8 py-2 rounded-md hover:bg-[#837E70] hover:ring hover:ring-gray-300"
        >
          User Home Sector
        </Link>
        <Link
          to="/Admin"
          className="bg-[#52464A] text-white px-8 py-2 rounded-md hover:bg-[#837E70] hover:ring hover:ring-gray-300"
        >
          Admin Home Sector
        </Link>
      </div>
    </div>
  );
}

export default Home;

// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-white dark:bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-black dark:text-white">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/omkardhanave/" className="bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text font-bold">Omkar Dhanave</Link>
          </p>
          <div className="flex items-center gap-5">
            {/* <Link
              target="_blank"
              href="https://github.com/said7388/developer-portfolio"
              className="flex items-center gap-2 uppercase hover:bg-gradient-to-r from-pink-500 to-violet-600  bg-clip-text text-black dark:text-white "
            >
              <IoStar />
              <span>Star</span>
            </Link> */}
            {/* <Link
              target="_blank"
              href="https://github.com/said7388/developer-portfolio/fork"
              className="flex items-center gap-2 uppercase hover:bg-gradient-to-r from-pink-500 to-violet-600  bg-clip-text text-black dark:text-white"
            >
              <CgGitFork />
              <span>Fork</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
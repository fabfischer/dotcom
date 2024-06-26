import Icon from "@/components/Icon";
import { getMetadata } from "@/utils/metadata";

const SPONSORS = [
  {
    title: "yourselfhosted",
    logo: "/sponsor/yourselfhosted.png",
    url: "https://yourselfhosted.com",
  },
];

const Page = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start sm:px-12">
        <h3 className="text-4xl sm:text-6xl leading-relaxed font-bold w-full">Thanks! 💗</h3>
        <p className="text-xl mt-2">Thank you to our sponsors for supporting Memos. You makes it all possible!</p>
        <div className="w-full flex flex-col mt-12">
          <p className="text-2xl sm:text-3xl font-medium">🦄 Sponsors</p>
          <div className="mt-4 sm:mt-6 flex flex-row flex-wrap gap-3 sm:gap-4">
            {SPONSORS.map((sponsor) => (
              <div key={sponsor.title} className="w-auto p-4 border rounded-2xl hover:shadow">
                <a className="w-full h-full flex flex-row justify-start items-center gap-2" href={sponsor.url} target="_blank">
                  <img className="w-12 sm:w-16" src={sponsor.logo} alt="" />
                  <span className="text-2xl sm:text-3xl">{sponsor.title}</span>
                </a>
              </div>
            ))}

            <div className="w-auto p-4 border border-dashed rounded-2xl hover:shadow">
              <a
                className="w-full h-full flex flex-row justify-start items-center gap-2 opacity-40"
                href="https://github.com/sponsors/usememos"
                target="_blank"
              >
                <Icon.HeartHandshake className="w-10 sm:w-14 h-auto" strokeWidth={1} />
                <div className="h-auto flex flex-col justify-center items-start">
                  <span className="text-2xl !leading-none">Your logo</span>
                  <p className="opacity-70">Become a sponsor</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const generateMetadata = () => {
  return getMetadata({
    title: "Suppoters - Memos",
    description: "A simple note-taking app that helps you to organize your thoughts.",
    pathname: `/supporters`,
  });
};

export default Page;

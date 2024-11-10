import Image from "next/image";
import Link from "next/link";

function Project({ thumbnail, title, description, repo, live }) {
  return (
    <div className="flex flex-col bg-neutral-400 rounded-xl overflow-hidden hover:shadow-lg  transition-all duration-200 border-r-4 border-neutral-500 border-b-4 hover:border-neutral-700">
      <div>
        <Image src={thumbnail} alt={`${title}-image`} width={1000} height={500} />
      </div>
      <div className="px-3 flex flex-col gap-2 pt-3 justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="flex gap-5 text-blue-950 justify-end pe-5 pb-3 *:border-2 *:px-3 *:py-1 *:rounded-md *:border-black *:transition-all *:duration-150">
          <Link className="hover:bg-black hover:text-blue-500 hover:border-blue-500" target="_blank" href={live}>View Live</Link>
          <Link className="hover:bg-black hover:text-blue-500 hover:border-blue-500" target="_blank" href={repo}>Source code</Link>
        </div>
      </div>
    </div>
  )
}
export default Project
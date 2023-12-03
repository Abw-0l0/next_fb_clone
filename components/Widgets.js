import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    { src: "https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4", name: "aqib khan"},
    { src: "https://avatars.githubusercontent.com/u/42507791?v=4", name: "maxher khan"},
    { src: "https://avatars.githubusercontent.com/u/56201993?v=4", name: "sohail khan"},
    { src: "https://avatars.githubusercontent.com/u/60979323?v=4", name: "aqib khan"},
    { src: "https://avatars.githubusercontent.com/u/42507791?v=4", name: "maxher khan"},
    { src: "https://avatars.githubusercontent.com/u/56201993?v=4", name: "sohail khan"},
]

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
        <div className="flex justify-between items-center text-gray-500 mb-5">
            <h2 className="text-xl">Contacts</h2>
            <div className="flex space-x-2">
                <VideoCameraIcon className="h-6"/>
                <SearchIcon className="h-6"/>
                <DotsHorizontalIcon className="h-6"/>
            </div>
        </div>

        {contacts.map((contact,i) => (
            <Contact key={i} src={contact.src} name={contact.name} />
        ))}
    </div>
  )
}

export default Widgets

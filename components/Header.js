import Image from "next/image";
import { BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'

import { FlagIcon,
        PlayIcon,
        SearchIcon,
        ShoppingCartIcon,
} from '@heroicons/react/outline';

import HeaderIcon from "./HeaderIcon";


function Header() {
    return(
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center">
                <Image alt="fb" src='https://links.papareact.com/5me'
                    width={40}
                    height={40}
                    layout='fixed'
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search fb"/>
                </div>
            </div>

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            <div className="flex items-center sm:space-x-2 justify-end">
                <div className="flex rounded-full">
                    <Image alt="fb" src='https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4'
                    />
                </div>
                <p className="whitespace-nowrap font-semibold pr-3">Abdul Basit Iqbal</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    );
}

export default Header;
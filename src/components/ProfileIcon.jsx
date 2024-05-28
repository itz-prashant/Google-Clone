import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return <div className="flex gap-2">
        <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
            <TbGridDots size={20} color="#5f6368"/>
        </span>
        <span className="h-10 w-10 relative flex justify-center items-center">
            <img className="absolute" src={ProfileRing} alt="" />
            <span className="h-8 w-8 rounded-full absolute overflow-hidden">
                <img className="h-full w-full" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1716874354~exp=1716874954~hmac=fac9060f486144a9cd0550f665ebc45725a84cf09169a88ab2b90315d9df9882" alt="" />
            </span>
        </span>
    </div>;
};

export default ProfileIcon;

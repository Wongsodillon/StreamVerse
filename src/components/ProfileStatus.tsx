import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Wifi, WifiOff } from "react-feather";

type ProfileStatusProps = {
  username?: string;
  avatar?: string;
  online?: boolean;
};

const ProfileStatus = ({
  username = "wongsodillon",
  avatar = "https://github.com/shadcn.png",
  online = false,
}: ProfileStatusProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src={avatar} alt="@shadcn" />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-md overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
          {username}
        </p>
      </div>
      {online ? (
        <div className="w-3 h-3 rounded-full bg-[#6BC355]"></div>
      ) : (
        <WifiOff size={20} />
      )}
    </div>
  );
};

export default ProfileStatus;

import { Wifi } from "react-feather";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import  {Stream} from "@/types/StreamsType";
import { useNavigate } from "react-router-dom";

type LiveVideoCardProps = {
  stream: Stream;
};

const LiveVideoCard = ({ stream }: LiveVideoCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      key={stream.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={stream.thumbnail}
        alt={stream.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{stream.title}</h2>
        <div className="flex items-center mt-2">
          <Avatar>
            <AvatarImage
              src={stream.user.profile.profile_picture}
            />
            <AvatarFallback>{stream.user.profile.profile_picture}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="text-gray-600">{stream.user.profile.full_name}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button
            className="rounded-full gap-2 text-sm items-center"
            onClick={() => navigate("/streaming/" + stream.user_id)}
          >
            <Wifi size={20} />
            WATCH
          </Button>
          <div className="flex gap-3 items-center">
            <div className="w-3 h-3 rounded-full bg-[#6BC355]"></div>
            <p className="text-gray-500 text-sm">{stream.views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideoCard;

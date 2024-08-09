import MainLayout from "@/layouts/MainLayout";
import SampleVideo from "../assets/videoplayback.mp4";
import { X } from "react-feather";
import { Download, Video, Send } from "react-feather";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import HbarLogo from "../assets/hedera-hbar-logo.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import GiftSelectionCard from "@/components/GiftSelectionCard";

const Streaming = () => {
  const [showChat, setShowChat] = useState(true);
  const [selectedGift, setSelectedGift] = useState<number | null>(null);
  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const handleGiftChange = (amount: number) => {
    if (amount >= 1000000) {
      return;
    }
    setSelectedGift((prev) => (prev === amount ? null : amount));
  };
  return (
    <MainLayout scrollable={false}>
      <div className="h-screen flex relative w-full overflow-y-hidden">
        <div className="flex flex-col w-full overflow-y-auto no-scrollbar">
          <video
            src={SampleVideo}
            autoPlay
            loop
            muted
            className="w-full object-cover"
          ></video>

          <div className="min-h-full flex flex-col p-6 gap-4">
            <div className="flex flex-col gap-4 justify-between md:flex-row">
              <div className="flex gap-4">
                <Avatar className="w-14 h-14">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-xl font-bold">propanemethanol</p>
                  <p className="font-semibold">12000 Followers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="px-8 text-lg" variant={"secondary"}>
                  Follow
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="px-12 text-lg" variant={"outline"}>
                      Gift
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[22rem] p-0">
                    <div className="flex flex-col gap-4 h-96">
                      <div className="flex gap-4 items-center px-6 pt-6">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="text-xl font-bold">propanemethanol</p>
                          <p className="font-semibold">12000 Followers</p>
                        </div>
                      </div>
                      <ScrollArea className="px-6 pb-6">
                        <div className="flex flex-col">
                          <p className="font-bold text-lg">Select gift</p>
                          <p>Your balance: 20000 HBar</p>
                        </div>
                        <div className="grid grid-cols-2 mt-2">
                          {[10, 25, 50, 100, 200, 500].map((amount) => (
                            <GiftSelectionCard
                              key={amount}
                              amount={amount}
                              isSelected={selectedGift === amount}
                              onSelect={() => handleGiftChange(amount)}
                            />
                          ))}
                        </div>
                        <div className="flex flex-col items-end gap-2 mt-4">
                          <p className="font-bold w-full">Send custom amount</p>
                          <Input
                            placeholder="Enter HBar amount"
                            type="number"
                            className="border border-input"
                            onChange={(e) => handleGiftChange(+e.target.value)}
                          />
                          <Button
                            className="px-4 text-lg gap-4 max-w-60 text-md"
                            variant={"secondary"}
                          >
                            Send {selectedGift} HBars <Send size={18} />
                          </Button>
                        </div>
                      </ScrollArea>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">
                (ENG) Nigma Galaxy v Team Spirit | Bo3 | CDL S1: Snow Ruyi |
                Playoffs |
              </p>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center text-darkPurple">
                  <Video size={24} />
                  <p className="text-lg font-bold">10.2 K watching now</p>
                </div>
                <p>Time elapsed: 4:06:20</p>
              </div>
            </div>
          </div>
          {!showChat && (
            <div className="absolute right-1 top-2 p-4">
              <button onClick={toggleChat}>
                <Download size={32} className="rotate-90 text-white" />
              </button>
            </div>
          )}
        </div>
        <div
          className={
            "flex flex-col min-w-72 h-screen relative duration-200 ease-linear border-l  " +
            (showChat ? "" : "hidden")
          }
        >
          <div className="flex items-center w-full justify-between px-6 py-4 border-b bg-white drop-shadow-md">
            <p className="text-lg font-semibold">Live Chat</p>
            <X
              size={24}
              className="cursor-pointer"
              onClick={() => setShowChat(false)}
            />
          </div>
          <div className="bg-white overflow-y-auto">
            <ScrollArea className="px-4 py-2 overflow-y-auto">
              <p>Goooooo</p>
              <p>Goooooo</p>
              <p>Vamoss</p>
              <p>Vamoss</p>
              <p>Goooooo</p>
              <p>Goooooo</p>
              <p>Vamoss</p>
              <p>Vamoss</p>
              <p>Goooooo</p>
              <p>Goooooo</p>
              <p>Vamoss</p>
              <p>Vamoss</p>
              <p>Goooooo</p>
              <p>Goooooo</p>
              <p>Vamoss</p>
              <p>Vamoss</p>
              <p>Goooooo</p>
              <p>Goooooo</p>
              <p>Vamoss</p>
              <p>Vamoss</p>
              <p>Goooooo</p>
              <p>Goooooo</p>
              <p>Vamoss</p>
              <p>Vamoss</p>
            </ScrollArea>
          </div>
          <div className="p-3 min-h-[9rem] border-t bg-white ">
            <form action="">
              <Input
                placeholder="Type your message"
                className="border-[2px] focus:ring-4 focus:ring-purple-500 focus:border-purple-500 focus:border-[3px]"
              />
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Streaming;

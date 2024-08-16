import MainLayout from "../../layouts/MainLayout";
import { useUser } from "@/context/UserContext";
import ProfilePictureUploader from "./ProfilePictureUploader";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/ui/datepicker";
import { Button } from "@/components/ui/button";

const Account = () => {
  const [user, fetchUser] = useUser();

  if (!user) {
    return null;
  }

  const [fullName, setFullName] = useState<string>(user.profile.full_name);
  const [email, setEmail] = useState<string>(user.email);

  const handleUploadSuccess = () => {
    fetchUser();
  };

  return (
    <MainLayout>
      <div className="px-4 md:px-8 py-8">
        <p className="text-3xl text-black font-bold">Your Account</p>
        <br />
        <div className="flex flex-col gap-4">
          <p className="text-xl text-black font-semibold">Profile Picture</p>
          <ProfilePictureUploader
            user={user}
            onUploadSuccess={handleUploadSuccess}
          />
        </div>
        <br />
        <br />
        <div className="flex flex-col gap-4">
          <p className="text-xl text-black font-semibold">Profile Settings</p>
          <div className="border flex flex-col gap-6 p-4 md:p-8 rounded-md bg-white border-purple-500 w-full max-w-full md:max-w-[75%]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-lg text-black font-semibold min-w-48">
                Full Name
              </p>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-lg text-black font-semibold min-w-48">Email</p>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <p className="text-lg text-black font-semibold min-w-48">Bio</p>
              <Textarea className="w-full" />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <p className="text-lg text-black font-semibold min-w-48">
                Gender
              </p>
              <RadioGroup className="flex flex-row gap-4">
                <label className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="male"
                    id="male"
                    className="border-purple-500 text-purple-500 focus-visible:ring-purple-500"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="female"
                    id="female"
                    className="border-purple-500 text-purple-500 focus-visible:ring-purple-500"
                  />
                  <span>Female</span>
                </label>
              </RadioGroup>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <p className="text-lg text-black font-semibold min-w-48">
                Date of Birth
              </p>
              <DatePicker />
            </div>
            <div className="w-full flex justify-end">
              <Button className="bg-purple-500 hover:bg-purple-600 px-6">
                <span>Save Changes</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Account;

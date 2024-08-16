import MainLayout from "../layouts/MainLayout";
import { useUser } from "@/context/UserContext";

const Account = () => {
  const [user, fetchUser] = useUser();

  return <MainLayout></MainLayout>;
};

export default Account;

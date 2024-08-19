import MainLayout from "../layouts/MainLayout";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/config/constants";
import { SearchStreamType } from "@/types/StreamTypes";
import ProfilePicture from "@/components/ProfilePicture";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const [streams, setStreams] = useState<SearchStreamType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchStreams = async () => {
      setLoading(true);
      try {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(`${BASE_URL}/stream/search/${search}`);
        setStreams(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (search !== searchTerm) {
      setStreams(null);
      setSearchTerm(search || "");
      fetchStreams();
    }
  }, [search, searchTerm]);

  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-2xl font-semibold">
          Search results for "{search}"
        </h1>
        <br />
        {loading ? (
          <div className="flex flex-col gap-4 w-full md:max-w-[60%]">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg"
              >
                <Skeleton className="w-64 h-40" />
                <div className="flex flex-col gap-2.5 w-full">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-9 h-9 rounded-full" />
                    <Skeleton className="h-6 w-1/2" />
                  </div>
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : streams?.length === 0 ? (
          <p className="text-lg text-gray-500">
            No results found. Try searching for something else
          </p>
        ) : (
          <div className="flex flex-col gap-4 w-full md:max-w-[60%]">
            {streams?.map((stream) => (
              <div
                key={stream.id}
                className="flex items-start gap-4 p-4 bg-white shadow-md rounded-lg"
              >
                {stream.thumbnail ? (
                  <img
                    src={stream.thumbnail}
                    alt={stream.title}
                    className="w-64 h-40 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-64 flex items-center justify-center h-40 bg-gray-300 rounded-lg">
                    <ProfilePicture
                      src={stream.profile_picture}
                      full_name={stream.full_name}
                      className="w-12 h-12"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-xl font-semibold">{stream.title}</h2>
                  <p className="text-sm text-gray-500">{stream.topic_id}</p>
                  <div className="flex items-center gap-2">
                    <ProfilePicture
                      src={stream.profile_picture}
                      full_name={stream.full_name}
                      className="w-9 h-9"
                    />
                    <Link to={`/stream/${stream.topic_id}`}>
                      <p className="text-md font-semibold">
                        {stream.full_name}
                      </p>
                    </Link>
                  </div>
                  {stream.is_live ? (
                    <div className="flex gap-2 items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-md">Live</p>
                    </div>
                  ) : (
                    <p className="text-md text-gray-500">Offline</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SearchPage;

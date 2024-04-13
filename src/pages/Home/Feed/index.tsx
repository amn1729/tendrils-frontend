import { FC } from "react";

// other imports
import { useQuery } from "@tanstack/react-query";

// local imports
import { Loading } from "@/components";
import { Some } from "@/helpers";
import { usePlant } from "@/hooks";
import { TendrilService } from "@/services";
import { toFeedTendril } from "../helpers";
import FeedItem from "./FeedItem";

const Feed: FC = () => {
  const token = usePlant().unwrap().token;

  async function getFeed() {
    const resp = await TendrilService.getFeed({ token });
    return Some.Array(resp?.data?.data?.data).map(toFeedTendril);
  }

  const { data: tendrils, isLoading } = useQuery({
    queryKey: ["getFeed", token],
    queryFn: getFeed,
    refetchOnWindowFocus: false,
    enabled: !!token,
    initialData: [],
  });

  return (
    <div className="col-span-9 lg:col-span-7 h-full min-h-0 overflow-y-auto">
      <p className="text-md mb-4">Feed</p>
      <Loading
        div
        on={isLoading}
        className="flex flex-col gap-4 min-h-0 h-full md:pr-4"
      >
        {tendrils.map((tendril) => (
          <FeedItem tendril={tendril} key={tendril.id} />
        ))}
        {tendrils.length === 0 && (
          <div className="center h-1/2">
            <p className="text-5xl text-40 text-center font-medium">
              Tendrils from people you follow will appear here
            </p>
          </div>
        )}
      </Loading>
    </div>
  );
};

export default Feed;
import { graphqlClient } from "@/clients/api";
import { getCurrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["curent-user"],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};

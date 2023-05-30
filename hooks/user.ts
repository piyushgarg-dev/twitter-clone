import { graphqlClient } from "@/clients/api";
import { getCurrentUserQuery, getUserByIdQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["curent-user"],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};

export const useUserInfo = (id?: string) => {
  const query = useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      id ? graphqlClient.request(getUserByIdQuery, { id }) : null,
  });

  return { ...query, user: query.data?.getUserById };
};

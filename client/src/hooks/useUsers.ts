import { useQuery } from 'react-query';
import axios from "axios";

type UsersRes = {
  status: string,
  message: string,
  data: [],
}

const useUsers = (params: any) => {
  const { data, ...rest } = useQuery(['users'], async () => {
    const res = await axios.get<UsersRes>(`http://localhost:12341/users/index`);
    return {
      data: res.data.data
    };
  });

  return {
    data: data?.data,
    ...rest,
  };
};

export default useUsers;

import { useQuery } from 'react-query';
import axios from "axios";
import { axiosClient } from '../utils/tools';


type UsersRes = {
  status: string,
  message: string,
  data: [],
}

const useUsers = (params: any) => {
  const { data, ...rest } = useQuery(['users'], async () => {
    const res = await axiosClient().get<UsersRes>(`/users/index`);
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

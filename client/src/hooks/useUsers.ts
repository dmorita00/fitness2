import { useQuery } from 'react-query';
import { axiosClient } from '../utils/tools';


// type UsersRes = {
//   status: string,
//   message: string,
//   data: [],
// }

const useUsers = (params: any) => {
  const { data, ...rest } = useQuery(['users'], async () => {
    const params = new URLSearchParams();
    params.append('email', 'a@aaaaa.com');
    params.append('password', '1111111111');
    const res = await axiosClient().post<any>(`/auth`, params);
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

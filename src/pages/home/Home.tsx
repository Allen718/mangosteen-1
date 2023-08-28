import axios from 'axios';
import * as React from 'react';
import useSWR from 'swr';
export const Home: React.FC = () => {
  const fetchData = (path: string) => {
    return axios.get(path)
  }
  const { data, error, isValidating, mutate } = useSWR('/xx', fetchData);
  const isloading = !data && !error
  const handleClickRefresh = () => {
    const data = axios.get('/xxx');
    mutate(data)
  }
  if (error) {
    return <div>failed to load</div>
  }
  if (isloading) {
    return <div>loading...</div>
  }
  if (isValidating) {
    return <div>正在努力获取数据</div>
  }


  return (
    <div>
      <div text-6xl>{data?.data.message}</div>
      <button onClick={handleClickRefresh}>刷新数据</button>
    </div>
  )
}
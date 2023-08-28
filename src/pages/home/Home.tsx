import axios from 'axios';
import * as React from 'react';
import p from '../../assets/images/welcome1.svg'
import add from '../../assets/icons/add.svg'
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
  // if (error) {
  //   return <div>failed to load</div>
  // }
  // if (isloading) {
  //   return <div>loading...</div>
  // }
  // if (isValidating) {
  //   return <div>正在努力获取数据</div>
  // }


  return (
    <div>
      <div flex justify-center items-center>
        <img mt-20vh mb-20vh width='128' height="130" src={p} />
      </div>
      <div px-16px><button h-48px w="100%" bg="#5f34bf" rounded-8px text-white >开始记账</button></div>
      <button w-56px h-56px bg="#5C33BE" rounded="50%" b-none text-white
        text-6xl fixed bottom-16px right-16px>
        <img src={add} max-w="100%" max-h="100%" />
      </button>
    </div>
  )
}
'use client';
import TestSSR from '@/components/Pages/Home/TestSSR/TestSSR';
import { setUserDetail } from '@/store/reducer/UserStore';
import { Card } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const { Meta } = Card;

export default function Home() {
  const dispatch = useDispatch();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const getToDos = async () => {
    const result = await fetch(`${baseUrl}/todos`)
    const finalResult = await result.json();
    console.log(finalResult);
  }

  useEffect(() => {
    getToDos();
  }, [])

  useEffect(() => {
    dispatch(setUserDetail({
      userDetail: {
        name: 'Duy Thành'
      }
    }))
  }, [dispatch])


  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <span>
        {baseUrl}
      </span>
      <TestSSR /> 
    </div>
  )
}

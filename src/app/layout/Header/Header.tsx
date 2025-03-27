"use client"
import Link from 'next/link'
import './header.css'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import MyButton from '@/components/myComp/myButton/MyButton';

const items: MenuProps['items'] = [
  {
    label: (
      <a href="#" rel="noopener noreferrer">
        EN
      </a>
    ),
    key: '0',
  },
];

export default function Header() {
  return (

    <header className='mx-auto  py-3'>
      <Link href={"/"}> <Image height={55.40999984741211} width={134} src={"/img/FOSO_Logo.png"} alt='foso' /> </Link>
      <div >
        <ul className='flex justify-center items-center gap-3'>
          <li><Link href={"/"}>Về Chúng tôi</Link></li>
          <li><Link href={"/"}>Giải pháp</Link></li>
          <li><Link href={"/"}>Tài nguyên</Link></li>
          <li><Link href={"/"}>Liên hệ</Link></li>
        </ul>
      </div>

      <div className='flex flex-wrap gap-2 items-center'>
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MyButton
                content={<div className='flex flex-wrap gap-3 items-center'>
                  <div className='bg_start relative'>
                    <i className="fa-solid fa-star-sharp start_i"></i>
                  </div>
                  <p>VI</p>

                  <DownOutlined />


                </div>}
                color='black'
                bgColor='#dbdbdb'
                borderW='0px'
              />
            </Space>
          </a>
        </Dropdown>



        <MyButton
          content={<div className='flex flex-wrap gap-3'>
            <p>Trở Thành Khách Hàng</p>
            <div className='bg_arrow relative'>
              <i className="fa-light fa-arrow-right arrow_i absolute "></i>
            </div>


          </div>}
          color='black'
          bgColor='#1AD598'
          borderW='0px'
        />
      </div>
    </header>



  )
}

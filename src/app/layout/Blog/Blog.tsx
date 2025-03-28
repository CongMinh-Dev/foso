"use client";
import './blog.css'


import { useState } from 'react';
import MyButton from '@/components/myComp/myButton/MyButton';
import Image from 'next/image';
import Link from 'next/link';


export default function Blog() {
  // set render data
  const rowsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  const data = [
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2023/03/5s.png",
      loai: "quản lý sản xuất",
      tittle: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    },
    {
      url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
      loai: "quản lý sản xuất",
      tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
      date: "17/11/2022",
      time: "10 phút đọc"

    }

  ]


  const [isNone, setIsNone] = useState(false)


  const pageArray: number[] = []
  const handleGetArrayPage = () => {
    for (let i = 1; i <= (Math.ceil(data.length / 6)); i++) {
      pageArray.push(i)
    }
  }
  handleGetArrayPage()

  const twoFistOfPage = pageArray.slice(0, 2)

  const threeLastOfPage = pageArray.slice(-3)



  const handleGetRange = (numberPage: number) => {
    setIsNone(false)
    if (numberPage == 1) {
      setStartIndex(0)
    } else { setStartIndex((numberPage - 1) * 6) }
    setEndIndex(numberPage * 6)
  }
  // ok
  const handleGetMidPage = () => {
    if (3 < (Math.floor(startIndex / 6) + 2) && (Math.floor(startIndex / 6) + 2) < pageArray.length - 2) {

      return <div >
        <button className={`bg-[#D1F7EA] rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
          handleGetRange(Math.floor(startIndex / 6) + 1)
        }
        }>{Math.floor(startIndex / 6) + 1}</button>

        <button className={` rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
          handleGetRange(Math.floor(startIndex / 6) + 2)
        }
        }>{Math.floor(startIndex / 6) + 2}</button>

      </div>

    } else if (2 < (Math.floor(startIndex / 6) + 1)) {
      return <div>
        <button className={` rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
          handleGetRange(pageArray.length - 4)
        }
        }>{pageArray.length - 4}</button>

        <button className={` rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
          handleGetRange(pageArray.length - 3)
        }
        }>{pageArray.length - 3}</button>

      </div>

    }
  }


  const handleBackPage = () => {
    if (startIndex == 0) {

    } else {
      setStartIndex(startIndex - rowsPerPage);
      setEndIndex(endIndex - rowsPerPage);
    }
  }


  const handleNextPage = () => {
    if ((Math.floor(startIndex / 6)) == pageArray.length - 1) {

    } else {
      setStartIndex(startIndex + rowsPerPage);
      setEndIndex(endIndex + rowsPerPage);
    }
  }



  return (
    <div className='blog mx-auto'>
      {/* blog left */}
      <div className='blog_left'>
        <h2 className='text-[36px] font-extrabold'>Tất Cả Bài Viết</h2>

        <div className="meeting">
          <img src='./img/meeting.png' alt='meeting' />
          <div className="meeting_content">
            <MyButton content={<div className='flex flex-wrap justify-between items-center'  >
              <span >Tham Gia Ngay </span>
              <i className="fa-light fa-arrow-right my_arrow"></i>
            </div>}
              color='white' py='15px' px='20px' borderW='1px' />
          </div>
        </div>


        <div className='my_table'>
          {data.slice(startIndex, endIndex).map((item, index) => {
            return <div className='my_table_item' key={index}>
              <Link href={"/blog-details"}>
                <Image className='my_table_img' src={item.url} alt='5s' width={500} height={475} />
                <MyButton borderW='0px' color='#0F4F9E' content={item.loai} bgColor='#E2F0FE' my='17px' />
                <h1 className='text-[24px] font-extrabold leading-[150%]'>{item.tittle} </h1>

                <div className='flex flex-wrap my-[10px]'>
                  <div >
                    <i className="fa-thin fa-calendar mr-[8px]"></i>
                    <span className='text-[16px] text-[#667F93] mr-[24px]'>17/11/2022 </span>
                  </div>
                  <div>
                    <i className="fa-thin fa-clock-three mr-[8px]"></i>
                    <span className='text-[16px] text-[#667F93]  '>{item.time} </span>

                  </div>
                </div>
                <div className='mb-[75px]'>
                  <MyButton borderW='0px' color='#667F93' content={
                    <div className='flex flex-wrap justify-between items-center'>
                      <span>Khám Phá thêm</span>
                      <i className="fa-thin fa-arrow-right"></i>

                    </div>} />
                </div>
              </Link>




            </div>


          })}
        </div>

        {/* phân trang */}


      </div>

      {/* blog right */}
      <div className='blog_right'>
        <h3 className='text-[24px] font-extrabold'>Tìm Kiếm</h3>
        <div className='bg_input'>
          <input type="text" placeholder='Tìm kiếm bài viết' />
          <div className='bg_icon_search'>
            <i className="fa-regular fa-magnifying-glass"></i>
          </div>
        </div>
        {/* danh mục */}
        <div className='danh_muc'>
          <h3 className='text-[24px] font-extrabold'>Danh mục</h3>
          <div className='flex flex-wrap justify-between text-[#33404A] border-b-2 border-#F1F5F7-500 py-[20px] '><span>Tất cả</span>                <span>108</span></div>
          <div className='flex flex-wrap justify-between text-[#33404A] border-b-2 border-#F1F5F7-500 py-[20px]'><span>Thiết Kế Website</span>      <span>36</span></div>
          <div className='flex flex-wrap justify-between text-[#33404A] border-b-2 border-#F1F5F7-500 py-[20px]'><span>Thiết Kế App Mobile</span>    <span>13</span></div>
          <div className='flex flex-wrap justify-between text-[#33404A] border-b-2 border-#F1F5F7-500 py-[20px]'><span>Quản Lý Sản Xuất</span>       <span>25</span></div>
          <div className='flex flex-wrap justify-between text-[#33404A] border-b-2 border-#F1F5F7-500 py-[20px]'><span>Quản Lý Bán Hàng</span>       <span>22</span></div>
          <div className='flex flex-wrap justify-between text-[#33404A] border-b-2 border-#F1F5F7-500 py-[20px]'><span>Báo Chí Nói Về FOSO</span>    <span>7</span></div>
          <div className='flex flex-wrap justify-between text-[#33404A] border-b-2 border-#F1F5F7-500 py-[20px]'><span>Tin Tức FOSO</span>           <span>5</span></div>

          <div className='img_right_content' >
            <img className='rounded-[24px] mt-[30px]' src="./img/mrpBeta.png" alt="mrp" />
            <MyButton content={<div className='flex flex-wrap justify-between items-center'  >
              <span >Trải Nghiệm Ngay </span>
              <i className="fa-light fa-arrow-right my_arrow"></i>
            </div>}
              color='white' py='5px' px='4%' borderW='1px' />
          </div>

          <div className='img_right_content' >
            <img className='rounded-[24px] mt-[30px]' src="./img/fmrp.png" alt="mrp" />
            <MyButton content={<div className='flex flex-wrap justify-between items-center'  >
              <span >Tham Gia Ngay </span>
              <i className="fa-light fa-arrow-right my_arrow"></i>
            </div>}
              color='white' py='5px' px='4%' borderW='1px' />
          </div>


        </div>




      </div>

      {/* pagination */}
      <div className='flex flex-wrap justify-between items-center w-[100%] pagination'>
        <div className={`my_back_button p-2 rounded-sm flex flex-wrap w-[110%] justify-between items-center ${startIndex === 0 ? " text-[#B3C5D4] " : "cursor-pointer hover:bg-gray-200"} `}
          onClick={() => {

            handleBackPage()
          }}>
          <i className="fa-light fa-arrow-right -rotate-180"></i>         <span >Trang Trước</span>
        </div>


        {/* page number */}
        <div className='flex flex-wrap w-[30%] page_number'>
          {/* 2 of page */}
          {twoFistOfPage.map((item, index) => {
            return <button key={index} className={`${(Math.floor(startIndex / 6) + 1) == item && "bg-[#D1F7EA]"}    rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
              handleGetRange(item)
            }
            }>{item}</button>

          }
          )}

          {/* page 3 */}
          <button className={`${(Math.floor(startIndex / 6) + 1) == 3 && "bg-[#D1F7EA]"} ${isNone && "hidden"}   rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
            handleGetRange(3)
            setIsNone(true)
          }
          }>{3}</button>

          {/* mid page */}
          {handleGetMidPage()}
          ...

          {/* 3 of page */}
          {threeLastOfPage.map((item, index) => {
            return <button key={index} className={`${(Math.floor(startIndex / 6) + 1) == item && "bg-[#D1F7EA]"} rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
              handleGetRange(item)
            }
            }>{item}</button>

          }
          )}
        </div>





        <div className={`my_next_button p-2 rounded-sm flex flex-wrap w-[110%] justify-between items-center ${endIndex > data.length ? " text-[#B3C5D4] " : "cursor-pointer hover:bg-gray-200"} `}
          onClick={() => {

            handleNextPage()
          }}>
          <span >Trang Kế Tiếp</span> <i className="fa-light fa-arrow-right"></i>
        </div>
      </div>



    </div>
  )
}



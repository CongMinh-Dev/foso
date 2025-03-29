"use client";
import './blog.css'


import { useState } from 'react';
import MyButton from '@/components/myComp/myButton/MyButton';
import Image from 'next/image';
import Link from 'next/link';


export default function Blog() {
  // set render data

  const [data, setData] = useState([
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

  ])


  // search
  const dataMain = [
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
  const handleSearch = (text: string | number) => {
    let textString = text.toString()
    textString = textString.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const dataClone = []
    for (let i = 0; i < dataMain.length; i++) {
      let name = dataMain[i].tittle.toLowerCase()
      name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      if (name.indexOf(textString) != -1) {
        dataClone.push(dataMain[i])
      }
    }
    setData(dataClone)
  }


  // pagination
  const rowsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  const [isNone, setIsNone] = useState(false)
  const [isNoneLast, setIsNoneLast] = useState(false)
  const amountOfFirst=3
  const amountOfLast=3


  const pageArray: number[] = []
  const handleGetArrayPage = () => {
    for (let i = 1; i <= (Math.ceil(data.length / 6)); i++) {
      pageArray.push(i)
    }
  }
  handleGetArrayPage()
  const twoFistOfPage = pageArray.slice(0, 2)
  const twoLastOfPage = pageArray.slice(-2)



  const handleGetRange = (numberPage: number) => {
    setIsNone(false)
    setIsNoneLast(false)
    if (numberPage == 1) {
      setStartIndex(0)
    } else { setStartIndex((numberPage - 1) * 6) }
    setEndIndex(numberPage * 6)
  }
  // xét màu của nút thứ 2 của nhóm trang ở giữa
  const handleSetBg = (numberOfPage: number) => {
    if (numberOfPage == pageArray.length - 3) {
      document.getElementById("numberPageMid2th")?.classList.add("bg-[#D1F7EA]")
      console.log("gan mau")
    } else {
      document.getElementById("numberPageMid2th")?.classList.remove("bg-[#D1F7EA]")
      console.log("xoa mau")
    }
  }

  const handleGetMidPage = () => {
    const numberPageOfMid = Math.floor(startIndex / 6)
    if (3 < (numberPageOfMid + 2) && (numberPageOfMid + 2) < pageArray.length) {
        
      return <div >


        <button className={`bg-[#D1F7EA] rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
          handleGetRange(numberPageOfMid + 1)
          handleSetBg(numberPageOfMid + 1)
          handleBackPage()
        }
        }>{numberPageOfMid + 1}</button>

        <button className={` rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
          handleBackPage()

        }
        }><i className="fa-solid fa-chevrons-left"></i></button>

        <button className={`rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
          handleNextPage()
        }
        }><i className="fa-solid fa-chevrons-right"></i></button>

      </div>

    }
  }


  const handleBackPage = () => {
    if (startIndex == 0) {

    } else {
      if(startIndex==(amountOfFirst-1)*rowsPerPage){
        setIsNone(false)
      }
      if(startIndex==48  ){
        setIsNoneLast(true)
      }
      console.log(startIndex)
      setStartIndex(startIndex - rowsPerPage);
      setEndIndex(endIndex - rowsPerPage);
      
    }
  }


  const handleNextPage = () => {
    if ((Math.floor(startIndex / rowsPerPage)) == pageArray.length - 1) {

    } else {
      if(startIndex== (amountOfFirst-2)*rowsPerPage ){
        setIsNone(true)
      }
      if(startIndex== (pageArray.length-4)*rowsPerPage ){
        setIsNoneLast(true)
      }
      if(startIndex== (pageArray.length-3)*rowsPerPage){
        setIsNoneLast(false)
      }
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
          <input onChange={(e) => {
            handleSearch(e.target.value)
          }
          } type="text" placeholder='Tìm kiếm bài viết' />
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
          {/* 2 fist of page */}
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
          ...
          {/* mid page */}
          {handleGetMidPage()}
          ...

          {/* page -3 */}
          <button className={`${(Math.floor(startIndex / 6) + 1) == pageArray.length - 2 && "bg-[#D1F7EA]"} ${isNoneLast && "hidden"}   rounded-[8px] py-[8px] px-[16px] hover:bg-slate-300  `} onClick={() => {
            handleGetRange(pageArray.length - 2)
            setIsNoneLast(true)
          }
          }>{pageArray.length - 2}</button>

          {/* 2 last of page */}
          {twoLastOfPage.map((item, index) => {
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



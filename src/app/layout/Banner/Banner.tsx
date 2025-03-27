import Image from 'next/image'
import './banner.css'

export default function Banner() {
    return (
        <div className="banner">
            <div className='pl-12'>
                <Image src={"/img/note.png"} width={195} height={188.18727111816406} alt='note' />
            </div>
            <div className='text-center banner__content'>
                <p className='py-12'>Trang chủ <i className="fa-light fa-chevron-right text-[10px]"></i> Tài nguyên <i className="fa-light fa-chevron-right text-[10px]"></i> <b> Blog</b></p>
                <p className='text-[64px] font-light'>Blog <b className='font-extrabold gardian_text'>FOSO</b> –</p>
                <div className='text-[64px] font-light relative pr-[23%]'> Cập Nhật Tin Tức
                    <div className='my_bar absolute'>
                        <b className='font-extrabold relative  my_text'>
                            Mới Nhất
                        </b>
                    </div>

                </div>
                <p className='text-[18px] py-4'>Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</p>
            </div>
            <div className='pr-12'>

                <Image src={"/img/hand.png"} width={195} height={158.91} alt='hand' className='hand_img' />

            </div>

        </div>
    )
}

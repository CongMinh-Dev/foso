import './banner.css'

export default function Banner() {
    return (
        <div className="banner">
            <div className='text-center banner__content mx-auto'>
                <p className='py-12'>Trang chủ <i className="fa-light fa-chevron-right text-[10px]"></i> Tài nguyên <i className="fa-light fa-chevron-right text-[10px]"></i> <b> Blog</b></p>
            </div>

            <div className='banner__flex'>
                <div className='pl-12'>
                    <img src={"/img/note.png"} alt='note' className='note_img' />
                </div>
                <div className='mid_img'>
                    <img src="./img/banner.png" alt="blog foso cập nhật tin tức mới" />

                </div>

                <div className='pr-12'>

                    <img src={"/img/hand.png"} alt='hand' className='hand_img' />

                </div>
            </div>


        </div>
    )
}

import MyButton from '@/components/myComp/myButton/MyButton';
import './blogDetails.css'
import Header from "@/app/layout/Header/Header";
import Image from 'next/image';

export default function page() {
  const data = [{
    url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
    loai: "quản lý sản xuất",
    tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
    date: "17/11/2022",
    time: "10 phút đọc"

  }, {
    url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
    loai: "quản lý sản xuất",
    tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
    date: "17/11/2022",
    time: "10 phút đọc"

  }, {
    url: "https://fososoft.vn/wp-content/uploads/2022/11/quan-ly-san-xuat-3.png",
    loai: "quản lý sản xuất",
    tittle: "Tại sao Bom quan trọng trong quản lý sản xuất",
    date: "17/11/2022",
    time: "10 phút đọc"

  },
  ]
  return (
    <main >
      <Header />
      <p className='py-12 w-[90%] mx-auto mt-[74px]'>Trang chủ <i className="fa-light fa-chevron-right text-[10px]"></i> Tài nguyên <i className="fa-light fa-chevron-right text-[10px]"></i> Blog
        <i className="fa-light fa-chevron-right text-[10px]"></i> <b>Quản Lý Sản Xuất</b>
      </p>
      <div className="blog_details mx-auto">
        {/* left */}
        <div className='blog_details_left'>
          <MyButton borderW='0px' color='#0F4F9E' bgColor='#E2F0FE' content={"Quản Lý Sản Xuất"} />
          <h1 className='text-[36px] font-extrabold leading-[120%] py-[16px]'>Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết</h1>

          {/* logo */}
          <div className='flex flex-wrap items-center justify-between w-[100%]'>
            {/* logo */}
            <div className='flex flex-wrap items-center justify-between w-[20%]'>
              <img src="./img/logo2.png" alt="logo_foso" className='w-[64px] h-[64px] rounded-[50%]' />
              <div >
                <p className='font-[14px] text-[#667F93]'>Tác giả</p>
                <p className='font-[16px] text-[#33404A] font-bold'>FOSO Creator</p>
              </div>
            </div>
            {/* trạng thái  */}
            <div className='flex flex-wrap items-center justify-end w-[49%]'>
              <div className='flex flex-wrap justify-between items-center w-[55%]'>
                <i className="fa-thin fa-calendar "></i>    <span className="text-[16px] text-[#667F93] mr-[24px]">Cập nhật vào: 17/11/2022 </span>
              </div>
              <div className='flex flex-wrap justify-between items-center w-[25%]'>
                <i className="fa-thin fa-clock-three "></i> <span className="text-[16px] text-[#667F93]  ">10 phút đọc</span>
              </div>
            </div>
          </div>

          <div>
            <img className='mt-[24px] my_img' src="./img/QT5s1.png" alt="QT5s1" />
            <h4 className='text-[#667F93] text-center py-[8px]'>Quy trình 5s là gì?</h4>

            <div className='relative'>
              <p className='text-[#33404A] text-center w-[91%] mx-auto text-[20px]'>Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu  tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này  cũng như yếu tố tạo nên thành công của quy trình bạn nhé.</p>
              <img className='absolute icon1 ' src="./img/icon1.png" alt="icon1" />
            </div>
          </div>

          <div className='content'>
            <h1>1. Quy trình 5S là gì?</h1>
            <p>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.</p>
            <p>Quy trình <a href="https://vi.wikipedia.org/wiki/5S_(ph%C6%B0%C6%A1ng_ph%C3%A1p)" target='_blank' className='underline'>5S</a> hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</p>

            <div>
              <p><span className='text-[#15AA7A]'>. Seiri </span> (Ngăn nắp)</p>
              <p><span className='text-[#15AA7A]'>. Seiso</span> (Sạch sẽ)</p>
              <p><span className='text-[#15AA7A]'>. Seiton</span> (Trật tự)</p>
              <p><span className='text-[#15AA7A]'>. Shitsuke</span> (Kỷ luật)</p>
              <p><span className='text-[#15AA7A]'>. Seiketsu </span>(Tiêu chuẩn hóa)</p>
            </div>

            <h1>2. Lợi ích quy trình 5S đem lại</h1>

            <p>Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.</p>
            <p>Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.</p>
            <p>Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.</p>

            <div>
              <img src="./img/QT5s2.png" alt="QT5s2 " className='my_img' />
              <h4 className='text-[#667F93] text-center py-[8px]'>Tại sao doanh nghiệp cần quy trình 5S?</h4>
            </div>
            <h1>3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
            </h1>

            <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:</p>
            <div>
              <h2>3.1 Cải thiện rõ nét môi trường làm việc</h2>
              <p>Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.</p>
            </div>

            <div>
              <h2>3.2 Tiết kiệm thời gian đáng kể</h2>
              <p>Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. </p>
            </div>
            <div>
              <h2>3.3 Tăng năng suất làm việc</h2>
              <p>Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.</p>
            </div>
            <div>
              <h2>3.4 Tiết kiệm chi phí</h2>
              <p>Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.</p>
            </div>
            <div>
              <h2>3.5 Tăng chất lượng sản phẩm</h2>
              <p>5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.</p>
            </div>
            <div>
              <img src="./img/QT5s3.png" alt="QT5s3 " className='my_img' />
              <h4 className='text-[#667F93] text-center py-[8px]'>Quy trình 5s gồm các bước</h4>
            </div>
            <h1>4. Quy trình 5S gồm các bước</h1>
            <p>5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:</p>
            <div>
              <h2>4.1 Seiri (Ngăn nắp)</h2>
              <p>Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian</p>
            </div>
            <div>
              <h2>4.2 Seiton (Sắp xếp)</h2>
              <p>Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.</p>
            </div>
            <div>
              <h2>4.3 Seiso (Vệ sinh)</h2>
              <p>Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.</p>
            </div>
            <div>
              <h2>4.4 Seiketsu (Tiêu chuẩn hóa)</h2>
              <p>Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu. </p>
            </div>
            <div>
              <h2>4.5 Shitsuke (Kỷ luật)</h2>
              <p>Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.</p>
            </div>
            <div>
              <img src="./img/QT5s4.png" alt="QT5s4 " className='my_img' />
              <h4 className='text-[#667F93] text-center py-[8px]'>Các bước thực hiện quy trình 5s</h4>
            </div>
            <h1>5. Quy trình được thực hiện như sau:</h1>
            <p>Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:</p>
            <div>
              <h2>5.1 Giai đoạn chuẩn bị</h2>
              <p>Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.</p>
            </div>
            <div>
              <h2>5.2 Triển khai rộng rãi</h2>
              <p>Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.</p>
            </div>
            <div>
              <h2>5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h2>
              <p>Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.</p>
            </div>
            <div>
              <h2>5.4 Sàng lọc, sắp xếp và đánh giá</h2>
              <p>Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này.</p>
            </div>
            <div>
              <h2>5.5 Đánh giá</h2>
              <p>Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.</p>
            </div>
            <h1>6. Quy trình 5S có giống với Kaizen?</h1>
            <p>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</p>
            <div className='border-l-[4px] border-[#15AA7A]'>
              <h3>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững. </h3>
            </div>
            <div className='border-l-[4px] border-[#15AA7A]'>
              <h3>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. </h3>
            </div>
            <p>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</p>
            <h1>7. Đối tượng nào nên áp dụng 5S?</h1>
            <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
            <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.</p>
            <div>
              <img src="./img/QT5s5.png " alt="QT5s5 " className='my_img' />
              <h4 className='text-[#667F93] text-center py-[8px]'>Các yếu tố tạo nên thành công cho quy trình 5S</h4>
            </div>
            <h1>8. Các yếu tố tạo nên thành công cho quy trình 5S</h1>
            <p>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:</p>
            <div>
              <div>
                <ol >
                  <li>Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.</li>
                </ol>
                <ol>
                  <li>Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.</li>
                </ol>
                <ol>
                  <li>Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.</li>
                </ol>
              </div>
            </div>
            <p>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</p>

          </div>

          <img src="./img/cmt.png" alt="cmt" className='my_img py-[72px]' />

        </div>

        {/* right */}
        <div className='blog_details_right '>
          <div className='flex flex-wrap justify-between items-center'>
            <h1>Nội dung bài viết</h1>
            <i className="fa-regular fa-chevron-up  text-[#15AA7A] text-[17px] cursor-pointer hover:bg-gray-200 hover:text-[20px] rounded-[40px]"></i>

          </div>

          <div>
            <h2>1. Quy trình 5S là gì?</h2>
            <h3>2. Lợi ích quy trình 5S đem lại </h3>
            <h3>3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h3>
            <h4> 3.1 Cải thiện rõ nét môi trường làm việc</h4>
            <h4>3.2 Tiết kiệm thời gian đáng kể</h4>
            <h4>3.3 Tăng năng suất làm việc</h4>
            <h4>3.4 Tiết kiệm chi phí</h4>
            <h4>3.5 Tăng chất lượng sản phẩm</h4>
            <h3>4. Quy trình 5S gồm các bước:</h3>
            <h4>4.1 Seiri (Ngăn nắp)</h4>
            <h4>4.2 Seiton (Sắp xếp)</h4>
            <h4>4.3 Seiso (Vệ sinh)</h4>
            <h4>4.4 Seiketsu (Tiêu chuẩn hóa)</h4>
            <h4>4.5 Shitsuke (Kỷ luật)</h4>
            <h3>5. Quy trình được thực hiện như sau:</h3>
            <h4>5.1 Giai đoạn chuẩn bị</h4>
            <h4>5.2 Triển khai rộng rãi</h4>
            <h4>5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h4>
            <h4>5.4 Sàng lọc, sắp xếp và đánh giá</h4>
            <h4>5.5 Đánh giá</h4>
            <h3>6. Quy trình 5S có giống với Kaizen?</h3>
            <h3>7. Đối tượng nào nên áp dụng 5S?</h3>
            <h3>8. Các yếu tố tạo nên thành công cho quy trình 5S</h3>
          </div>

          <div className='img_right_content' >
            <img className='rounded-[24px] mt-[30px]' src="./img/mrpBeta.png" alt="mrp" />
            <MyButton content={<div className='flex flex-wrap justify-between items-center'  >
              <span >Trải Nghiệm Ngay </span>
              <i className="fa-light fa-arrow-right my_arrow"></i>
            </div>}
              color='white' py='15px' px='4%' borderW='1px' />
          </div>

          <div className='img_right_content' >
            <img className='rounded-[24px] mt-[30px]' src="./img/fmrp.png" alt="mrp" />
            <MyButton content={<div className='flex flex-wrap justify-between items-center'  >
              <span >Tham Gia Ngay </span>
              <i className="fa-light fa-arrow-right my_arrow"></i>
            </div>}
              color='white' py='15px' px='4%' borderW='1px' />
          </div>

        </div>

        {/* lien quan */}
        <div className='my_relative '>
          {data.map((item, index) => {
            return <div className='my_item' key={index}>
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
                <MyButton width='40%' borderW='0px' color='#667F93' content={
                  <div className='flex flex-wrap justify-between items-center'>
                    <span>Khám Phá thêm</span>
                    <i className="fa-thin fa-arrow-right"></i>

                  </div>} />
              </div>

            </div>
          })}
        </div>
      </div>





    </main>
  )
}

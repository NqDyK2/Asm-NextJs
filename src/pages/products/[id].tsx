

import React from 'react'
import Header from '../../components/Header'
import List10Film from '../../components/list10film'

import styles from './deltail.module.css'
type Props = {}

const ProductPage = (props: Props) => {



  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

        <div className={styles.content} >
          <div className={styles.item}>
            <img src="http://res.cloudinary.com/dm6frgae8/image/upload/v1658850079/k1k35cwtokjakjzaex2c.jpg" alt="" width="100%" />
            <div className={styles.content_item}>
              <h2>IRON MAN</h2>
              <div className={styles.deltal}>
                <span><i className="fa-solid fa-calendar-days"> </i> 2019</span>
                <span className={styles.age}>16+</span>
                <span><i className="fa-solid fa-clock" /> 1g30p</span>
              </div>
              <div className={styles.content_deltai}>
                <p>Nội dung của Người Sắt xoay quanh Tony Stark, một kỹ nghệ gia kiêm kỹ sư thiên tài, sau khi trải
                  qua một tai nạn nguy hiểm đến tính mạng đã chế tạo nên một bộ giáp siêu năng lực và trở thành
                  Người Sắt, một siêu anh hùng với trang bị tân tiến.</p>
              </div>
              <div className={styles.deltail_play}>
                <div className={styles.play}>
                  <a href=""><i className="fa-solid fa-play" />Phát </a>
                </div>
                <div className={styles.deltai_film}>
                  <a href=""> Chi tiết phim </a>
                </div>
              </div>
              <div className={styles.story}>
                <i className="fa-solid fa-store" />
                <p>Anthony Edward  Stark, con trai của một nhà công nghiệp và người đứng đầu của Stark
                  Industries, Ned Stark, và Maria Stark, được sinh ra ở Long Island. </p>
              </div>
              <div className={styles.cast_movie}>
                <div className={styles.cast}>
                  <p>Diễn viên chính : Robert Downey Jr, Darkly, Gothika, Downey, Zodiac</p>
                </div>
                <div className={styles.movie}>
                  <p>Thể loại : Phim siêu anh hùng, hành động phưu lưu, phim của Mỹ</p>
                </div>
              </div>
            </div>


          </div>
          <List10Film/>
        </div>

      </div>

    </div>
  )
}

export default ProductPage
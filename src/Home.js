import "./App.css";
import "./Home.css";
import banner from './image/banner_bg01.jpg'

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img className="banner_img" src={banner} alt="bannerimg"/>
      </div>

      <section id="imageType" class="section">
        <h2>포트폴리오가 실력이다.</h2>
        <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.</p>
          <div class="image__inner container">
              <article class="image img1">
                  <h3 class="image__title">다양한 견종을<br/>알아보고 싶으신가요?</h3>
                  <a class="image__btn" href="/">자세히 보기</a>
              </article>
              <article class="image img2">
                  <h3 class="image__title">주변에 병원이 있는지<br/>알아보고 싶으신가요?</h3>
                  <a class="image__btn yellow" href="/">자세히 보기</a>
              </article>
          </div>
      </section>

    </div>
  );
}

export default Home;

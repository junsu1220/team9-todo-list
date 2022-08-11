import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeImage = () => {
  const settings = {
    infinite: true,
    speed: 400,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: "0px",
  };

  return (
    <Container>
      <StyledSlide {...settings}>
        <div>
          <ImageBox
            id="0"
            url={
              "https://play-lh.googleusercontent.com/proxy/aXndAN8QnONK6_OAABlZWsY0DNEkNjBTg2GBbcQtiu0cag-0yeFfQP95w3luvbw9adJdKGYVMW2dId1-r_nRtHjnr14tKaAI_7iDfIAMMTFkZGpghkEG=s1920-w1920-h1080"
            }
          />
        </div>
        <div>
          <ImageBox
            id="1"
            url={
              "http://openimage.interpark.com/goods_image_big/9/1/3/6/8108939136_l.jpg"
            }
          />
        </div>
        <div>
          {" "}
          <ImageBox
            id="2"
            url={
              "https://i.pinimg.com/736x/69/ef/b1/69efb141548e90140e330aa870b61605.jpg"
            }
          />
        </div>
        <div>
          {" "}
          <ImageBox
            id="3"
            url={
              "https://www.animaxtv.co.kr/sites/animaxtv.co.kr/files/ct_series_f_primary_image/140925_naruto_peurogeuraem_baeneo.jpg"
            }
          />
        </div>
        <div>
          <ImageBox
            id="4"
            url={
              "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F07%2FOne-Pieces-Creator-Talks-The-Ending-of-The-Series-ft.jpg?fit=max&cbr=1&q=90&w=750&h=500"
            }
          />
        </div>
        <div>
          <ImageBox
            id="5"
            url={
              "https://post-phinf.pstatic.net/MjAxNzA3MTBfMTMg/MDAxNDk5Njk4MjI4ODg3.lh3Z-GoUS9nXLvMimyq9FAiGDpH7lzC2nB6VCSsQvEog.IVhD2WMVc7zjReVBXGsIpbjDfBQrjdei1uqk2h7S4lQg.PNG/IuaU3dvsyWwwjDgjgzD5HvLb35Pw.png?type=w1200"
            }
          />
        </div>
      </StyledSlide>
    </Container>
  );
};

const Container = styled.div`
  width: 890px;
  height: 550px;
  margin: 0px auto 0px auto;
  text-align: center;
  padding: 20px;
  font-size: 30px;
`;

const ImageBox = styled.div`
  width: 890px;
  height: 450px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 60px;
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    position: absolute;
    width: 890px;
    height: 450px;
    margin: 0 auto;
    overflow: hidden;
    top: -30px;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-arrow {
    padding: 4px 6px;
    transform: translate(30px, 150px);
    background-color: transparent;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }

  .slick-prev {
    position: absolute;
    top: -20px;
    right: -800px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-next {
    position: absolute;
    top: -20px;
    left: 810px;
    cursor: pointer;
  }
`;

export default HomeImage;

import { CaretRight } from "@phosphor-icons/react";
import heroImage from "../assets/img/hero.png";
import { faq, kelasTerbaru } from "../data";
import Rating from "../utils/rating";
import { Link } from "react-router";
import MySwiper from "../components/swiper/Swiper";
import FaqComponent from "../components/FaqComponent";
import FooterComponent from "../components/FooterComponent";
import "animate.css";
import TitleComponent from "../components/TitleComponent";
import Container from "../components/ContainerComponent";
import Section from "../components/SectionComponent";

const HomePage = () => {
  return (
    <div className="text-color-text bg-[#F6F8FD]">
      <header className="w-full min-h-screen">
        <div className="header-box flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-2 mx-8 pt-5">
          <div className="flex flex-col gap-3 text-center lg:text-left ">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl md:text-start font-bold md:leading-17 mb-4 "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1050"
            >
              Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami !
            </h1>
            <p
              className="mb-4 max-w-xl break-words md:text-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fugit aperiam iste repellendus ducimus nam!
            </p>
            <div
              className="flex md:justify-start  justify-center gap-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1150"
            >
              <Link
                to={"/kelas"}
                className="cursor-pointer bg-red-500 hover:bg-red-600  text-white px-5 py-3 rounded-md border border-transparent text-xl transition-all"
              >
                Lihat Kelas
              </Link>
              <button className="cursor-pointer bg-transparent hover:bg-red-600 hover:text-white border hover:border-red-500 text-red-500 px-5 py-3 rounded-md text-xl transition-all">
                Lihat Promo
              </button>
            </div>
          </div>
          <div
            className="pt-lg-0 pt-5 col-lg-6 callout-subtitle animate__animated animate__fadeInUp"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            <img src={heroImage} alt="hero-img" className="w-150 " />
          </div>
        </div>
      </header>

      <Section className=" min-h-screen pt-[100px] pb-[50px] ">
        <Container>
          {/* title */}

          <TitleComponent
            pt={150}
            pb={100}
            withSub={true}
            title={"Kelas Terbaru"}
            subTitle={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            }
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {kelasTerbaru.map((kelas) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <div
                    key={kelas.id}
                    id={kelas.id.toString()}
                    className="shadow-2xl aos-init aos-animate rounded-xl group"
                  >
                    <img
                      src={kelas.image}
                      alt="unsplash.com"
                      className="w-full h-[250px] object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300 group-hover:rounded-xl "
                    />
                    <div className="px-5 py-5 flex flex-col gap-2">
                      <Rating rating={kelas.rating} />
                      <h5 className="font-bold text-xl">{kelas.title}</h5>
                      <div className="items-center flex justify-between align-items-center">
                        <p className=" font-bold text-[#0D6EFD]">
                          {kelas.price}
                        </p>
                        <button className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md transition-all font-bold hover:text-red-500 hover:bg-red-200 border border-transparent hover:border-red-500">
                          Beli Kelas
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="flex justify-center mt-[100px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link
              to="/kelas"
              className="flex items-center gap-2 bg-[#198754] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#386d54] transition-all "
            >
              Lihat Semua Kelas
              <CaretRight weight="bold" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="pt-[80px] pb-[100px] ">
        <Container>
          {/* title */}
          <TitleComponent pt={150} pb={60} title={"Testimonial"} />

          <MySwiper></MySwiper>
        </Container>
      </Section>

      <Section className="w-full  pb-[100px] ">
        <Container>
          {/* title */}

          <TitleComponent
            pt={150}
            pb={60}
            title={"Pertanyaan yang sering ditanyakan"}
          />

          <div className="grid  px-5 md:px-0 grid-cols-2 gap-4">
            {faq.map((faq, index) => {
              return (
                <FaqComponent
                  id={faq.id}
                  title={faq.title}
                  desc={faq.desc}
                  index={index}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      <FooterComponent />
    </div>
  );
};

export default HomePage;

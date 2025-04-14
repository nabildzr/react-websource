import { faq, semuaKelas } from "../data";
import Rating from "../utils/rating";
import FooterComponent from "../components/FooterComponent";
import FaqComponent from "../components/FaqComponent";
import TitleComponent from "../components/TitleComponent";
import Section from "../components/SectionComponent";
import Container from "../components/ContainerComponent";

const KelasPage = () => {
  return (
    <div className="bg-[#F6F8FD] text-color-text" >
      <Section className="min-h-screen  pb-[50px] ">
        <Container>
          {/* title */}
          <TitleComponent
            pt={100}
            pb={100}
            withSub={true}
            title={"Kelas Terbaru"}
            subTitle={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            }
          />

          <div className="grid grid-cols-1 px-5 md:px-0 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {semuaKelas.map((kelas) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <div
                    key={kelas.id}
                    id={kelas.id.toString()}
                    className="shadow-2xl aos-animate rounded-xl group"
                  >
                    <img
                      src={kelas.image}
                      alt="Unsplash.com"
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
        </Container>
      </Section>

      <Section className=" pt-[80px] pb-[100px] ">
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

export default KelasPage;

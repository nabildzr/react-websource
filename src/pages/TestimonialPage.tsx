import { faq, testimonial } from "../data";
import FaqComponent from "../components/FaqComponent";
import FooterComponent from "../components/FooterComponent";
import TitleComponent from "../components/TitleComponent";
import Section from "../components/SectionComponent";
import Container from "../components/ContainerComponent";

const TestimonialPage = () => {
  return (
    <div className="bg-[#F6F8FD] text-color-text">
      <Section>
        <Container>
          {/* title */}
          <TitleComponent pt={100} pb={100} title={"Testimonial"} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonial.map((testimonial) => {
              return (
                <div
                  key={testimonial.id}
                  className="shadow-md p-5 text-color-text bg-white rounded-xl group hover:bg-gray-200 duration-300"
                  // style={{ width: "406.667px", marginRight: "50px" }}
                >
                  <div className="flex flex-col gap-5">
                    <p className="leading-8 group-hover:bg-white p-2 rounded-xl duration-300">
                      {testimonial.desc}
                    </p>
                    <div className="flex justify-start items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt=""
                        className="rounded-full w-16 h-16 object-cover"
                      />
                      <div>
                        <h5 className="mb-1 font-bold text-xl">
                          {testimonial.name}
                        </h5>
                        <p className="font-bold text-gray-500">
                          {testimonial.skill}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="pb-[100px] ">
        <Container>
          {/* title */}
          <div className="flex justify-center pt-[100px] pb-[60px]">
            <div className="flex flex-col gap-3">
              <h1
                className="text-center font-bold text-4xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Pertanyaan yang sering ditanyakan
              </h1>
            </div>
          </div>

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

export default TestimonialPage;

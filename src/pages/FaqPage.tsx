import Container from "../components/ContainerComponent";
import FaqComponent from "../components/FaqComponent";
import FooterComponent from "../components/FooterComponent";
import Section from "../components/SectionComponent";
import TitleComponent from "../components/TitleComponent";
import { faq } from "../data";

const FaqPage = () => {
  return (
   <>
    <Section className="text-color-text bg-[#F6F8FD] pb-[100px] ">
      <Container >
        {/* title */}
        <TitleComponent
            pt={100}
            pb={100}
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

    

    <FooterComponent/>
   </>
  );
};

export default FaqPage;


interface TitleComponentProps {
  pt: number;
  pb: number;
  title: string;
  subTitle?: string;
  withSub?: boolean;
}

const TitleComponent = ({ pt, pb, title, withSub, subTitle}: TitleComponentProps) => {
  return (
    <div className={`flex justify-center pt-[${pt}px] pb-[${pb}px]`}>
      <div className="flex flex-col gap-3">
        <h1
          className="text-center font-bold text-4xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h1>
        {withSub && (
          <p
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default TitleComponent;

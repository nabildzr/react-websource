import { useState } from "react";

interface FaqProps {
  id: number;
  title: String;
  desc: String;
  index: number;
}

const FaqComponent = ({ id, title, desc, index }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col text-color-text">
      <div
        key={id}
        className="collapse collapse-arrow bg-base-100 border border-base-300"
      >
        <input
          type="checkbox"
          checked={activeIndex === index}
          onChange={() => setActiveIndex(activeIndex === index ? null : index)}
        />
        <div className="collapse-title font-semibold cursor-pointer">
          {title}
        </div>
        <div className="collapse-content text-sm">{desc}</div>
      </div>
    </div>
  );
};

export default FaqComponent;

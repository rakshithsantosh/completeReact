import { useState } from "react";

const Accordian = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        className="header"
        onClick={() => setIsActive((isActive) => !isActive)}
      >
        <span>this is an accordian</span>
        <p>{isActive ? "-" : "+"}</p>
      </div>

      <div>
        {isActive && (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis provident nihil deleniti. Unde itaque neque quo, dolore
            voluptatem, iste nihil, maiores optio nobis praesentium ea! Ab quam
            ad hic laboriosam nulla dicta.
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordian;

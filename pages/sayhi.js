import React from "react";

const sayhi = () => {
  return (
    <div>
      <div className={`flex-1 flex md:my-0 my-10 absolute w-full h-full z-[0]`}>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </div>
  );
};

export default sayhi;

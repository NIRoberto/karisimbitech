import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className="h-screen p-16  bg-white">
      <div className="show">
        <span>Testimonials</span>
      </div>
      <div className="desc">
        <span>What cleint say about Us</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-4 mt-16 cursor-pointer font-bold">
          <AiOutlineLeft />
        </div>
        <div className=" grid mt-16 grid-cols-2 py-8 gap-4 ">
          <div className="cleint">
            <div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                nulla cupiditate velit laboriosam reiciendis ipsam veniam
                doloremque facilis! Corrupti corporis perferendis natus non
                suscipit sequi nam laboriosam optio quia maxime.
              </p>
            </div>
            <div className="font-bold flex  items-center  py-4">
              <span>
                <img
                  className="h-12 w-12 object-cover rounded-full "
                  src="https://cdn.pixabay.com/photo/2017/10/10/00/49/female-2835524_960_720.jpg"
                  alt="client profile"
                />
              </span>
              <span className="ml-2">Angel Angel</span>
            </div>
          </div>

          <div className="cleint">
            <div>
              <div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  nulla cupiditate velit laboriosam reiciendis ipsam veniam
                  doloremque facilis! Corrupti corporis perferendis natus non
                  suscipit sequi nam laboriosam optio quia maxime.
                </p>
              </div>
              <div className="font-bold flex  items-center  py-4">
                <span>
                  <img
                    className="h-12 w-12 object-cover rounded-full "
                    src="https://cdn.pixabay.com/photo/2017/10/10/00/49/female-2835524_960_720.jpg"
                    alt="client profile"
                  />
                </span>
                <span className="ml-2">Angel Angel</span>
              </div>
            </div>
            <div></div>
          </div>
          {/* <div className="cleint">
        <div></div>
        <div></div>
      </div>
      <div className="cleint">
        <div></div>
        <div></div>
      </div> */}
        </div>
        <div className="mx-4 mt-16 cursor-pointer font-bold">
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

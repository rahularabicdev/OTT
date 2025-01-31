import Image from "next/image";

import {
  Feature01,
  Feature02,
  Feature03,
  Feature04,
} from "@/static/images/icons";

const FeaturesSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-4 gap-5">
          <div className="flex items-center justify-start gap-5">
            <Image
              src={Feature01}
              width="70"
              height="70"
              alt="Exclusive Spectra Originals"
            />
            <h6 className="text-light text-lg font-medium">
              Exclusive Spectra Originals
            </h6>
          </div>
          <div className="flex items-center justify-start gap-5">
            <Image
              src={Feature02}
              width="70"
              height="70"
              alt="Global & Regional Content"
            />
            <h6 className="text-light text-lg font-medium">
              Global & Regional Content
            </h6>
          </div>
          <div className="flex items-center justify-start gap-5">
            <Image
              src={Feature03}
              width="70"
              height="70"
              alt="High-Quality Streaming"
            />
            <h6 className="text-light text-lg font-medium">
              High-Quality Streaming
            </h6>
          </div>
          <div className="flex items-center justify-start gap-5">
            <Image
              src={Feature04}
              width="70"
              height="70"
              alt="For phone, tablet, laptop and TV"
            />
            <h6 className="text-light text-lg font-medium">
              For phone, tablet, laptop and TV
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import Data from "@data/sections/vision.json";
import Link from "next/link";

const VisionSection = () => {
  return (
    <>
      {/* vision */}
      <section>
        <div className="container mil-p-90-60">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-center mil-mb-120">
            <span
              className="mil-suptitle mil-upper mil-up mil-mb-30"
              dangerouslySetInnerHTML={{ __html: Data.subtitle }}
            />
            <h2
              className="mil-upper mil-up"
              dangerouslySetInnerHTML={{ __html: Data.title }}
            />
          </div>

          <div className="row mil-mb-30">
            {Data.items.map((item, key) => (
              <div className="col-lg-4 mil-up" key={`vision-item-${key}`}>
                <div className="mil-icon-box mil-center mil-mb-60">
                  <div className="mil-icon mil-icon-xl mil-icon-border mil-mb-30">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h4 className="mil-upper mil-mb-30">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ;{/* vision end */}
    </>
  );
};

export default VisionSection;

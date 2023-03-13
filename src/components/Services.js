import Title from "./Title";
import { services } from "../Data";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className={title}>saving money</h4>
                <p className={text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;

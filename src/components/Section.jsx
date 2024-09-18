import Card from "./Card";

const Section = ({ title, items, id }) => {
  console.log(title, items);

  return (
    <section className="section" id={id}>
      <h2 className="section-title">{title}</h2>
      <ul className="section-list">
        {items.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </ul>
    </section>
  );
};

export default Section;


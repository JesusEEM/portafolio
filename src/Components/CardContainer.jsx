import { CardProjects } from "./CardProjects";
import { DATA_INFO } from "../Utils/data-info";


export const CardContainer = ({ categori }) => {
  const data = DATA_INFO;

  const newFilter = data.filter((element) => element.categori === categori);

  return (
    <section className="secction-proyectos">
      {newFilter.map((element) => (
        <CardProjects
          key={element.name}
          name={element.name}
          link={element.link}
          alt={element.alt}
          description={element.description}
          image={element.image}
          page={element.page}
        />
      ))}
    </section>
  );
};

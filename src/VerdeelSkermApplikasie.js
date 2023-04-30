import LinkerKantKomponent from "./LinkerKantKomponent";
import RegterKantKomponent from "./RegterKantKomponent";
import MiddelKomponent from "./MiddelKomponent";
import VerdeelSkerm from "./VerdeelSkerm";

const description =
  "Provident sequi tempore doloribus, sed voluptas dolorem veritatis magni, illum quidem fugit, officia illo in suscipit sint reiciendis sapiente cum possimus ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores fugit sapiente autem eius cum saepe aliquid perspiciatis, minus quam quidem non nostrum molestiae nihil ab natus fuga maxime veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quisquam voluptatibus recusandae similique repellat.";

const VerdeelSkermApplikasie = () => {
  return (
    <VerdeelSkerm linkerFlex={1} middelFlex={1.5} regterFlex={2}>
      <LinkerKantKomponent
        linkerBeskrywing="Linker Komponent"
        description={description}
      />
      <MiddelKomponent
        middelBeskrywing="Middel Komponent"
        description={description}
      />
      <RegterKantKomponent
        regterBeskrywing="Regter Komponent"
        description={description}
      />
    </VerdeelSkerm>
  );
};

export default VerdeelSkermApplikasie;

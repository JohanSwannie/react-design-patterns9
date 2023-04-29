import styled from "styled-components";
import VerdeelSkerm from "./VerdeelSkerm";

const LinkerPaneelHouer = styled.div`
  background-color: navy;
  height: 100vh;
`;

const MiddelPaneelHouer = styled.div`
  background-color: lightgreen;
  height: 100vh;
`;

const RegterPaneelHouer = styled.div`
  background-color: lightyellow;
  height: 100vh;
`;

const PaneelBeskrywing1 = styled.p`
  color: papayawhip;
  text-align: center;
`;

const PaneelBeskrywing2 = styled.p`
  color: #000;
  text-align: center;
`;

const LinkerOpskrif = styled.h1`
  color: #fff;
  font-weight: bold;
  text-align: center;
  border: 3px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const MiddelOpskrif = styled.h1`
  text-align: center;
  border: 3px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const RegterOpskrif = styled.h1`
  text-align: center;
  border: 3px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const description =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi voluptas molestias. Ipsam delectus exercitationem impedit labore doloribus. Voluptates, suscipit inventore! Laborum incidunt debitis nesciunt, delectus saepe accusantium molestiae ipsam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, sapiente voluptatum ullam ad temporibus dicta nam! Eos illo laboriosam, quam odit cumque accusamus error aperiam dolor voluptates amet doloribus. Asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi tempore doloribus, sed voluptas dolorem veritatis magni, illum quidem fugit, officia illo in suscipit sint reiciendis sapiente cum possimus ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores fugit sapiente autem eius cum saepe aliquid perspiciatis, minus quam quidem non nostrum molestiae nihil ab natus fuga maxime veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quisquam voluptatibus recusandae similique repellat. Sit repellendus, delectus odio nemo dolores ipsam voluptas qui, nulla hic sunt nostrum totam provident! Nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate pariatur dolores eius.";

const LinkerKantKomponent = ({ linkerBeskrywing }) => {
  return (
    <LinkerPaneelHouer>
      <LinkerOpskrif>{linkerBeskrywing} </LinkerOpskrif>
      <PaneelBeskrywing1>{description}</PaneelBeskrywing1>
    </LinkerPaneelHouer>
  );
};

const MiddelKomponent = ({ middelBeskrywing }) => {
  return (
    <MiddelPaneelHouer>
      <MiddelOpskrif>{middelBeskrywing} </MiddelOpskrif>
      <PaneelBeskrywing2>{description}</PaneelBeskrywing2>
    </MiddelPaneelHouer>
  );
};

const RegterKantKomponent = ({ regterBeskrywing }) => {
  return (
    <RegterPaneelHouer>
      <RegterOpskrif>{regterBeskrywing} </RegterOpskrif>
      <PaneelBeskrywing2>{description}</PaneelBeskrywing2>
    </RegterPaneelHouer>
  );
};

const VerdeelSkermApplikasie = () => {
  return (
    <VerdeelSkerm linkerFlex={1} middelFlex={1.5} regterFlex={2}>
      <LinkerKantKomponent linkerBeskrywing="Linker Komponent" />
      <MiddelKomponent middelBeskrywing="Middel Komponent" />
      <RegterKantKomponent regterBeskrywing="Regter Komponent" />
    </VerdeelSkerm>
  );
};

export default VerdeelSkermApplikasie;

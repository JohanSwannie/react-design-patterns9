import styled from "styled-components";
import VerdeelSkerm from "./VerdeelSkerm";

const LinkerPaneelHouer = styled.div`
  font-family: "Cormorant Infant", serif;
  background-color: navy;
  border: 1px solid #000;
  height: 100vh;
`;

const MiddelPaneelHouer = styled.div`
  font-family: "Cormorant Infant", serif;
  background-color: lightgreen;
  border: 1px solid #000;
  height: 100vh;
`;

const RegterPaneelHouer = styled.div`
  font-family: "Cormorant Infant", serif;
  background-color: lightyellow;
  border: 1px solid #000;
  height: 100vh;
`;

const PaneelBeskrywing1 = styled.p`
  color: papayawhip;
  text-align: center;
`;

const PaneelBeskrywing2 = styled.p`
  color: #000;
  font-weight: bold;
  text-align: center;
`;

const LinkerOpskrif = styled.h1`
  color: #fff;
  font-weight: bold;
  text-align: center;
  border: 1px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const MiddelOpskrif = styled.h1`
  text-align: center;
  border: 1px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const RegterOpskrif = styled.h1`
  color: rebeccapurple;
  font-weight: bold;
  text-align: center;
  border: 1px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Prent = styled.img`
  width: 50%;
  border-radius: 55%;
  margin: 1rem 25%;
`;

const description =
  "Provident sequi tempore doloribus, sed voluptas dolorem veritatis magni, illum quidem fugit, officia illo in suscipit sint reiciendis sapiente cum possimus ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores fugit sapiente autem eius cum saepe aliquid perspiciatis, minus quam quidem non nostrum molestiae nihil ab natus fuga maxime veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quisquam voluptatibus recusandae similique repellat.";

const LinkerKantKomponent = ({ linkerBeskrywing }) => {
  return (
    <LinkerPaneelHouer>
      <LinkerOpskrif>{linkerBeskrywing} </LinkerOpskrif>
      <PaneelBeskrywing1>{description}</PaneelBeskrywing1>
      <Prent
        src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/bird-morphology/bird-morphology-full-width.jpg"
        alt="Voeltjies"
      />
    </LinkerPaneelHouer>
  );
};

const MiddelKomponent = ({ middelBeskrywing }) => {
  return (
    <MiddelPaneelHouer>
      <MiddelOpskrif>{middelBeskrywing} </MiddelOpskrif>
      <PaneelBeskrywing2>{description}</PaneelBeskrywing2>
      <Prent
        src="https://cdn.sci.news/images/enlarge9/image_10688e-Rainbow-Lorikeet.jpg"
        alt="Voeltjies"
      />
    </MiddelPaneelHouer>
  );
};

const RegterKantKomponent = ({ regterBeskrywing }) => {
  return (
    <RegterPaneelHouer>
      <RegterOpskrif>{regterBeskrywing} </RegterOpskrif>
      <PaneelBeskrywing2>{description}</PaneelBeskrywing2>
      <Prent
        src="https://img.theweek.in/content/dam/week/news/sci-tech/images/2022/4/5/macaw-bird.jpg"
        alt="Voeltjies"
      />
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

import styled from "styled-components";

const LinkerPaneelHouer = styled.div`
  font-family: "Cormorant Infant", serif;
  background-color: navy;
  border: 1px solid #000;
  height: 100vh;
`;

const LinkerOpskrif = styled.h1`
  color: #fff;
  font-weight: bold;
  text-align: center;
  border: 1px solid #000;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const PaneelBeskrywing1 = styled.p`
  color: papayawhip;
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.5px;
  word-spacing: 4px;
`;

const Prent = styled.img`
  width: 50%;
  border-radius: 55%;
  margin: 1rem 25%;
`;

const LinkerKantKomponent = ({ linkerBeskrywing, description }) => {
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

export default LinkerKantKomponent;

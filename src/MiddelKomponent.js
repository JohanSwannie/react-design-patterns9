import styled from "styled-components";

const MiddelPaneelHouer = styled.div`
  font-family: "Cormorant Infant", serif;
  background-color: lightgreen;
  border: 1px solid #000;
  height: 100vh;
`;

const PaneelBeskrywing2 = styled.p`
  color: #000;
  font-weight: bold;
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.5px;
  word-spacing: 4px;
`;

const MiddelOpskrif = styled.h1`
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

const MiddelKomponent = ({ middelBeskrywing, description }) => {
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

export default MiddelKomponent;

import styled from "styled-components";

const RegterPaneelHouer = styled.div`
  font-family: "Cormorant Infant", serif;
  background-color: lightyellow;
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

const RegterKantKomponent = ({ regterBeskrywing, description }) => {
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

export default RegterKantKomponent;

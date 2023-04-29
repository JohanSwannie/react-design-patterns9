import styled from "styled-components";

const Houer = styled.div`
  display: flex;
`;

const Paneel = styled.div`
  flex: ${(props) => props.gewig};
`;

const VerdeelSkerm = ({
  children,
  linkerFlex = 1,
  middelFlex = 1,
  regterFlex = 1,
}) => {
  const [linker, middel, regter] = children;
  return (
    <Houer>
      <Paneel gewig={linkerFlex}>{linker}</Paneel>
      <Paneel gewig={middelFlex}>{middel}</Paneel>
      <Paneel gewig={regterFlex}>{regter}</Paneel>
    </Houer>
  );
};

export default VerdeelSkerm;

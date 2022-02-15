import InfoLabel from "../../../InfoLabel";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  z-index: 99;
`;

function BoxOptions({ icon, label, children, ...rest }) {
  return (
    <Container>
      <InfoLabel {...rest} icon={icon} label={label} />
      <div>{children}</div>
    </Container>
  );
}

export default BoxOptions;

import InfoLabel from "../../../InfoLabel";
import styled from "styled-components";

function BoxOptions({ icon, label, children, ...rest }) {
  const Container = styled.div`
    margin-bottom: 20px;
  `;
  return (
    <Container>
      <InfoLabel {...rest} icon={icon} label={label} />
      <div>{children}</div>
    </Container>
  );
}

export default BoxOptions;

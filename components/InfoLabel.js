import styled from "styled-components";
import { Icon } from "./Icon";
import { Label } from "./Label";
import { Tooltip } from "./Tooltip";

export const ContainerInfoLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  ${Label} {
    margin-bottom: 0px;
  }
`;

export const IconTooltip = styled(Icon)`
  &:hover + ${Tooltip} {
    display: block;
  }
`;

export default function InfoLabel({ label, icon, message, ...rest }) {
  return (
    <ContainerInfoLabel>
      <Label>{label}</Label>
      <IconTooltip {...rest}>{icon}</IconTooltip>
      <Tooltip>{message}</Tooltip>
    </ContainerInfoLabel>
  );
}

import { OptionStyled } from "./OptionsStyled";
import { AiOutlineCheck } from "react-icons/ai";

export function ChangeSelectedOption({
  state,
  valueOption,
  label,
  setState,
  ...rest
}) {
  return (
    <>
      <OptionStyled
        color={state === valueOption && "white"}
        background={state === valueOption && "#f08c54"}
        value={valueOption}
        onClick={() => state !== valueOption && setState(valueOption)}
        {...rest}
      >
        {state == valueOption && <AiOutlineCheck />}
        {label}
      </OptionStyled>
    </>
  );
}

import { ChangeSelectedOption } from "./ChangeSelectedOption";

export function OptionsEarning({ earning, setEarning }) {
  return (
    <div style={{ display: "flex" }}>
      <ChangeSelectedOption
        state={earning}
        setState={setEarning}
        valueOption="bruto"
        label="Bruto"
        borderRight="none"
        borderRadius="10px 0px 0px 10px"
      />
      <ChangeSelectedOption
        state={earning}
        setState={setEarning}
        valueOption="liquido"
        label="Líquido"
        borderRadius="0px 10px 10px 0px"
      />
    </div>
  );
}

import { ChangeSelectedOption } from "./ChangeSelectedOption";

export function OptionsIndexing({ indexing, setIndexing }) {
  return (
    <div style={{ display: "flex" }}>
      <ChangeSelectedOption
        state={indexing}
        setState={setIndexing}
        valueOption="pre"
        label="PRÉ"
        width="80px"
        borderRight="none"
        borderRadius="10px 0px 0px 10px"
      />
      <ChangeSelectedOption
        state={indexing}
        setState={setIndexing}
        valueOption="pos"
        label="POS"
        width="60px"
        borderRight="none"
      />
      <ChangeSelectedOption
        state={indexing}
        setState={setIndexing}
        valueOption="ipca"
        label="FIXADO"
        borderRadius="0px 10px 10px 0px"
        width="100px"
      />
    </div>
  );
}

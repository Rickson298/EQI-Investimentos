import { ChangeSelectedOption } from "./ChangeSelectedOption";

export function OptionsIndexing({ indexing, setIndexing }) {
  return (
    <div style={{ display: "flex", zIndex: "0" }}>
      <ChangeSelectedOption
        state={indexing}
        setState={setIndexing}
        valueOption="pre"
        data-cy="button-pre"
        label="PRÉ"
        width="80px"
        borderRight="none"
        borderRadius="10px 0px 0px 10px"
      />
      <ChangeSelectedOption
        state={indexing}
        setState={setIndexing}
        valueOption="pos"
        data-cy="button-pos"
        label="POS"
        width="60px"
        borderRight="none"
      />
      <ChangeSelectedOption
        state={indexing}
        setState={setIndexing}
        data-cy="button-ipca"
        valueOption="ipca"
        label="FIXADO"
        borderRadius="0px 10px 10px 0px"
        width="100px"
      />
    </div>
  );
}

import Head from "next/head";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { Button } from "../components/Button";
import { SectionContainer } from "../components/investingSimulatorPage/containers/SectionContainer";
import { SimulatorInvesting } from "../components/investingSimulatorPage/containers/SimulatorInvesting";
import { CardResultSimulation } from "../components/investingSimulatorPage/resultSimulation/cardResultSimulation/CardResultSimulation";
import { Cards } from "../components/investingSimulatorPage/resultSimulation/cardResultSimulation/Cards";
import { Chart } from "../components/investingSimulatorPage/resultSimulation/chart/Chart";
import { ResultSimulation } from "../components/investingSimulatorPage/resultSimulation/ResultSimulation";
import BoxOptions from "../components/investingSimulatorPage/simulator/boxOptions/BoxOptions";
import { OptionsEarning } from "../components/investingSimulatorPage/simulator/boxOptions/options/OptionsEarning";
import { OptionsIndexing } from "../components/investingSimulatorPage/simulator/boxOptions/options/OptionsIndexing";
import { ContainerButtonsSimulator } from "../components/investingSimulatorPage/simulator/ContainerButtonsSimulator";
import { Simulator } from "../components/investingSimulatorPage/simulator/ContainerSimulator";
import { Inputs } from "../components/investingSimulatorPage/simulator/Inputs";
import { InputSimulation } from "../components/investingSimulatorPage/simulator/InputSimulation";
import { PageTitle } from "../components/PageTitle";
import { SectionTitle } from "../components/SectionTitle";
import { formatPercentValue } from "../utils/formatValue";
import { useGetApi } from "./api/httpClient";

export const ContainerTooltip = styled.div`
  position: relative;
`;
export const ContainerPage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: #f0ecec;
`;
export default function Home() {
  const [fetchIndicadores, indicadores, loading] = useGetApi();
  const [fetchDataByQuery, simulacoes, loadingSimulacoes] = useGetApi();
  const [earning, setEarning] = useState("bruto");
  const [indexing, setIndexing] = useState("pre");
  let query = `?tipoIndexacao=${indexing}&tipoRendimento=${earning}`;
  let initialValue = {
    inicial: "",
    mensal: "",
  };
  const [aportes, setAportes] = useState(initialValue);

  let isValid = !Object.values(aportes).some((item) => !item || isNaN(item));

  function getResultSimulationValue(key) {
    return simulacoes.length ? `R$ ${simulacoes[0][key].toFixed(2)}` : "";
  }

  useEffect(() => {
    fetchIndicadores("/indicadores");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let graficoComAporte =
    simulacoes.length && Object.values(simulacoes[0].graficoValores.comAporte);
  let graficoSemAporte =
    simulacoes.length && Object.values(simulacoes[0].graficoValores.semAporte);

  return (
    <ContainerPage>
      <Head>
        <title>EQI Investimentos</title>
        <meta name="description" content="Simulador EQI Investimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimulatorInvesting>
        <PageTitle>Simulador de Investimentos</PageTitle>
        <SectionContainer>
          <Simulator>
            <SectionTitle>Simulador</SectionTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <BoxOptions
                icon={<AiOutlineInfoCircle />}
                label="Rendimento"
                message=" O rendimento bruto de um investimento é o resultado de uma
                aplicação financeira sem nenhum tipo de desconto, nem de
                taxas, nem de impostos. Já o rendimento líquido é esse mesmo
                resultado, descontando taxas ou impostos."
              >
                <OptionsEarning earning={earning} setEarning={setEarning} />
              </BoxOptions>
              <ContainerTooltip>
                <BoxOptions
                  message="Investimentos com rentabilidade indexada à algum índice tem sua rentabilidade dividida em duas partes: uma parte é pré-fixada, e outra é pós-fixada. Ou seja, uma parte é dada pela variação de algum índice, e outra é algum valor já fixo no dia da aplicação."
                  icon={<AiOutlineInfoCircle />}
                  label="Tipo de Indexação"
                >
                  <OptionsIndexing
                    indexing={indexing}
                    setIndexing={setIndexing}
                  />
                </BoxOptions>
              </ContainerTooltip>
            </div>

            <Inputs>
              <InputSimulation
                label="Aporte Inicial"
                message={"Aporte deve ser um número"}
                value={aportes.inicial}
                onChange={(value) =>
                  setAportes({
                    ...aportes,
                    inicial: value,
                  })
                }
              />
              <InputSimulation
                value={aportes.mensal}
                onChange={(value) =>
                  setAportes({
                    ...aportes,
                    mensal: value,
                  })
                }
                message="Aporte deve ser um número"
                label="Aporte Mensal"
              />
              <InputSimulation readOnly label="Prazo (em meses)" value="12" />
              <InputSimulation readOnly label="Rentabilidade" value="20%" />
              <InputSimulation
                label="IPCA (ao ano)"
                readOnly
                value={`${formatPercentValue(indicadores[1]?.valor) || 0}%`}
              />
              <InputSimulation
                readOnly
                label="CDI (ao ano)"
                value={`${formatPercentValue(indicadores[0]?.valor) || 0}%`}
              />
            </Inputs>
            <ContainerButtonsSimulator>
              <Button
                onClick={() => setAportes(initialValue)}
                border="1px solid black"
              >
                Limpar Campos
              </Button>
              <Button
                onClick={() =>
                  isValid && fetchDataByQuery(`/simulacoes${query}`)
                }
                border="none"
                background={isValid ? "#f08c54" : "darkGray"}
              >
                Simular
              </Button>
            </ContainerButtonsSimulator>
          </Simulator>
          <ResultSimulation>
            <SectionTitle color={simulacoes.length ? "black" : "lightGray"}>
              Resultado Simulado
            </SectionTitle>
            <Cards theresData={simulacoes.length}>
              <CardResultSimulation
                label="Valor Final Bruto"
                valueCard={getResultSimulationValue("valorFinalBruto")}
              />
              <CardResultSimulation
                label="Alíquota di IR"
                valueCard={getResultSimulationValue("aliquotaIR")}
              />
              <CardResultSimulation
                label="Valor Pago em IR"
                valueCard={getResultSimulationValue("valorPagoIR")}
              />
              <CardResultSimulation
                label="Valor Final Líquido"
                profit
                valueCard={getResultSimulationValue("valorFinalLiquido")}
              />
              <CardResultSimulation
                label="Valor Total Investido"
                valueCard={getResultSimulationValue("valorTotalInvestido")}
              />
              <CardResultSimulation
                label="Ganho Líquido"
                profit
                valueCard={getResultSimulationValue("ganhoLiquido")}
              />
            </Cards>
            <Chart
              noInvestimentData={graficoSemAporte}
              investimentData={graficoComAporte}
              sideLegend="LUCRO %"
              initialValue={1000}
              legend="Tempo (meses)"
              investingFooterInformation="Com aporte"
              noInvestingFooterInformation="Sem aporte"
            />
          </ResultSimulation>
        </SectionContainer>
      </SimulatorInvesting>
    </ContainerPage>
  );
}

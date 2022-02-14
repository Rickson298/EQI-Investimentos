import Head from "next/head";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { SectionContainer } from "../components/investingSimulatorPage/containers/SectionContainer";
import { SimulatorInvesting } from "../components/investingSimulatorPage/containers/SimulatorInvesting";
import { ResultSimulation } from "../components/investingSimulatorPage/resultSimulation/ResultSimulation";
import BoxOptions from "../components/investingSimulatorPage/simulator/boxOptions/BoxOptions";
import { OptionsEarning } from "../components/investingSimulatorPage/simulator/boxOptions/options/OptionsEarning";
import { ContainerButtonsSimulator } from "../components/investingSimulatorPage/simulator/ContainerButtonsSimulator";
import { Simulator } from "../components/investingSimulatorPage/simulator/ContainerSimulator";
import { Inputs } from "../components/investingSimulatorPage/simulator/Inputs";
import { InputSimulation } from "../components/investingSimulatorPage/simulator/InputSimulation";
import { PageTitle } from "../components/PageTitle";
import { SectionTitle } from "../components/SectionTitle";
import styles from "../styles/Home.module.css";
import { formatValue } from "../utils/formatValue";
import { useGetApi } from "./api/httpClient";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { OptionsIndexing } from "../components/investingSimulatorPage/simulator/boxOptions/options/OptionsIndexing";
import styled from "styled-components";
import { Cards } from "../components/investingSimulatorPage/resultSimulation/cardResultSimulation/Cards";
import { CardResultSimulation } from "../components/investingSimulatorPage/resultSimulation/cardResultSimulation/CardResultSimulation";

export default function Home() {
  const [fetchData, indicadores, loading] = useGetApi();

  useEffect(() => {
    fetchData("/indicadores");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [earning, setEarning] = useState("bruto");
  const [indexing, setIndexing] = useState("pre");

  let query = `?tipoIndexacao=${indexing}&tipoRendimento=${earning}`;

  const ContainerTooltip = styled.div`
    position: relative;
  `;
  const ContainerPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: #f0ecec;
  `;

  console.log(query);

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
              <InputSimulation label="Aporte Inicial" />
              <InputSimulation label="Aporte Mensal" />
              <InputSimulation readOnly label="Prazo (em meses)" value="12" />
              <InputSimulation readOnly label="Rentabilidade" value="20%" />
              <InputSimulation
                label="IPCA (ao ano)"
                readOnly
                value={`${formatValue(indicadores[1]?.valor) || 0}%`}
              />
              <InputSimulation
                readOnly
                label="CDI (ao ano)"
                value={`${formatValue(indicadores[0]?.valor) || 0}%`}
              />
            </Inputs>

            <ContainerButtonsSimulator>
              <Button border="1px solid black">Limpar Campos</Button>
              <Button border="none" background="darkGray">
                Simular
              </Button>
            </ContainerButtonsSimulator>
          </Simulator>
          <ResultSimulation>
            <SectionTitle>Resultado Simulado</SectionTitle>
            <Cards>
              <CardResultSimulation
                label="Valor Final Bruto"
                valueCard="R$ 120"
              />
              <CardResultSimulation label="Alíquota di IR" valueCard="R$ 120" />
              <CardResultSimulation
                label="Valor Pago em IR"
                valueCard="R$ 120"
              />
              <CardResultSimulation
                label="Valor Final Líquido"
                profit
                valueCard="R$ 120"
              />
              <CardResultSimulation
                label="Valor Total Investido"
                valueCard="R$ 120"
              />
              <CardResultSimulation
                label="Ganho Líquido"
                profit
                valueCard="R$ 120"
              />
            </Cards>
          </ResultSimulation>
        </SectionContainer>
      </SimulatorInvesting>
    </ContainerPage>
  );
}

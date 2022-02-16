import { GiPlainCircle } from "react-icons/gi";
import styled from "styled-components";
import { getProfitPercent } from "../../../../utils/getProfitPercent";
import { heightByProfit } from "../../../../utils/heightByProfit";

export const ChartStyled = styled.div`
  box-sizing: border-box;
  height: 200px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: ${({ color }) => (color ? "black" : "lightGray")};
  span {
    font-weight: bold;
  }

  .chartSection {
    display: flex;
    justify-content: start;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    .bars {
      display: flex;
      gap: 10px;
      transition: all ease 0.2s;

      &:hover small {
        opacity: 1;
      }

      .bar {
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: end;
        flex-direction: column;
      }
    }

    .sideLegend {
      display: block;
      transform: rotate(-90deg);
      height: max-content;
      margin: auto;
    }
    .chartData {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;

      small {
        display: block;
      }
    }
  }
`;

export const Legend = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 50px;
  color: ${({ color }) => (color ? "black" : "lightGray")};
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const NoInvestingBar = styled.div`
  height: ${({ height }) => height || "40px"};
  width: 40px;
  background: ${({ background }) => (background ? "black" : "lightGray")};
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
  cursor: default;

  small {
    color: lightGray;
    opacity: 0;
    transition: all ease 0.2s;
  }
`;
export const InvestingBar = styled.div`
  height: ${({ height }) => height || "40px"};
  width: 40px;
  background: ${({ background }) => (background ? "#f08c54" : "#ddd")};
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  small {
    position: absolute;
    top: -15px;
    opacity: 0;
    transition: all ease 0.2s;
    color: gray;
    font-size: 12px;
  }
`;

export const ContainerChart = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;

export function Chart({
  investimentData = [],
  noInvestimentData,
  sideLegend,
  legend,
  initialValue,
  investingFooterInformation,
  noInvestingFooterInformation,
}) {
  let array = Array.from({ length: 11 });

  return (
    <ContainerChart>
      <ChartStyled color={investimentData.length}>
        <span>Projeção de Valores</span>
        <div className="chartSection">
          <small className="sideLegend">{sideLegend}</small>
          <div className="chartData">
            <div className="bars">
              {(investimentData || array).map((item, index) => (
                <div key={index} className="bar">
                  <InvestingBar
                    background={investimentData.length}
                    height={
                      investimentData && heightByProfit(40, initialValue, item)
                    }
                  >
                    <small>{getProfitPercent(initialValue, item)}</small>
                  </InvestingBar>
                  <NoInvestingBar
                    background={investimentData.length}
                    height={
                      investimentData &&
                      heightByProfit(40, initialValue, noInvestimentData[index])
                    }
                  >
                    <small>
                      {getProfitPercent(initialValue, noInvestimentData[index])}
                    </small>
                  </NoInvestingBar>
                  {index}
                </div>
              ))}
            </div>
            <small>{legend}</small>
          </div>
        </div>
      </ChartStyled>
      <Legend color={investimentData.length}>
        <span>
          <GiPlainCircle
            color={investimentData.length ? "#f08c54" : "lightGray"}
          />
          {investingFooterInformation}
        </span>
        <span>
          <GiPlainCircle /> {noInvestingFooterInformation}
        </span>
      </Legend>
    </ContainerChart>
  );
}

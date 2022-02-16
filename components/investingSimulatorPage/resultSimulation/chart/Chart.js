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
  @media (max-width: 760px) {
    justify-content: start;
  }

  span {
    font-weight: bold;
  }

  .chartSection {
    display: flex;
    justify-content: start;
    align-items: flex-end;
    height: 100%;
    width: 100%;

    @media (max-width: 760px) {
      justify-content: center;
    }

    .bars {
      display: flex;
      gap: 10px;
      transition: all ease 0.2s;

      &:hover small {
        opacity: 1;
      }

      small {
        @media (max-width: 760px) {
          display: none;
        }
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

      @media (max-width: 760px) {
        font-size: 12px;
      }
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

  @media (max-width: 760px) {
    font-size: 12px;
  }

  @media (max-width: 760px) {
    gap: 10px;
  }

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

  @media (max-width: 760px) {
    width: 15px;
  }

  @media (max-width: 500px) {
    width: 10px;
  }

  small {
    color: lightGray;
    opacity: 0;
    transition: all ease 0.2s;

    @media (max-width: 760px) {
      visibility: hidden;
    }
  }
`;
export const InvestingBar = styled.div`
  height: ${({ height }) => height || "40px"};
  width: 40px;
  background: ${({ background }) => (background ? "#f08c54" : "#ddd")};
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  @media (max-width: 760px) {
    width: 15px;
  }

  @media (max-width: 500px) {
    width: 10px;
  }

  small {
    position: absolute;
    top: -15px;
    opacity: 0;
    transition: all ease 0.2s;
    color: gray;
    font-size: 12px;

    @media (max-width: 760px) {
      visibility: hidden;
    }
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

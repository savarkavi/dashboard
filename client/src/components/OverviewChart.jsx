/* eslint-disable react/prop-types */
import { ResponsiveLine } from "@nivo/line";
import { useFetchSalesQuery } from "../store/api";
import { useMemo } from "react";

const OverviewChart = ({ isDashboard = false, view }) => {
  const { data, isLoading } = useFetchSalesQuery();

  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [];

    const { monthlyData } = data;

    const totalSalesLine = {
      id: "totalSales",
      color: "red",
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "red",
      data: [],
    };

    monthlyData.reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const currSales = acc.sales + totalSales;
        const currUnits = acc.units + totalUnits;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: currSales },
        ];

        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: currUnits },
        ];

        return { sales: currSales, units: currUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          className={`${
            isDashboard
              ? "mt-0 h-[308px] lg:w-[400px] mx-auto 2xl:w-auto"
              : "h-[500px]"
          }  mt-8`}
        >
          <ResponsiveLine
            data={view === "sales" ? totalSalesLine : totalUnitsLine}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: "#fff",
                  },
                },
                legend: {
                  text: {
                    fill: "#fff",
                  },
                },
                ticks: {
                  line: {
                    stroke: "#fff",
                    strokeWidth: 1,
                  },
                  text: {
                    fill: "#fff",
                  },
                },
              },
              legends: {
                text: {
                  fill: "#fff",
                },
              },
            }}
            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              format: (v) => {
                return v.slice(0, 3);
              },
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: isDashboard ? "" : "Month",
              legendOffset: 40,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 0,
              tickPadding: 0,
              tickRotation: 0,
              legend: isDashboard
                ? ""
                : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
              legendOffset: -50,
              legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            enablePointLabel={false}
            pointLabelYOffset={-12}
            enableArea={true}
            useMesh={true}
            legends={
              !isDashboard
                ? [
                    {
                      anchor: "bottom-right",
                      direction: "column",
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: "left-to-right",
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: "circle",
                      symbolBorderColor: "rgba(0, 0, 0, .5)",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]
                : undefined
            }
          />
        </div>
      )}
    </div>
  );
};

export default OverviewChart;

/* eslint-disable react/prop-types */
import { useMemo } from "react";
import Header from "../components/Header";
import { useFetchSalesQuery } from "../store/api";

import { ResponsiveLine } from "@nivo/line";

const Monthly = ({ isSidebarOpen, screenSize }) => {
  const { data } = useFetchSalesQuery();

  const [formattedData] = useMemo(() => {
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

    monthlyData.forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data = [
        ...totalSalesLine.data,
        { x: month, y: totalSales },
      ];
      totalUnitsLine.data = [
        ...totalUnitsLine.data,
        { x: month, y: totalUnits },
      ];
    });

    const formattedData = [totalSalesLine, totalUnitsLine];

    return [formattedData];
  }, [data]);

  return (
    <div className="">
      {(!isSidebarOpen || screenSize > 640) && (
        <div className="p-8 h-[calc(100vh-104px)] overflow-y-scroll">
          <Header title={"Monthly data"} subtitle={"Chart of monthly sales"} />
          <div className="h-[600px]">
            <ResponsiveLine
              data={formattedData}
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
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendOffset: 40,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 0,
                tickPadding: 0,
                tickRotation: 0,
                legend: "Total sales",
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
              legends={[
                {
                  anchor: "top-right",
                  direction: "column",
                  justify: false,
                  translateX: 50,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "#fff",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "#fff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Monthly;

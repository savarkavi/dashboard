/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import Header from "../components/Header";
import { useFetchSalesQuery } from "../store/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ResponsiveLine } from "@nivo/line";

const Daily = ({ isSidebarOpen, screenSize }) => {
  const [startDate, setStartDate] = useState(new Date("2021-01-01"));
  const [endDate, setEndDate] = useState(new Date("2021-02-01"));

  const { data } = useFetchSalesQuery();

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { dailyData } = data;

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

    dailyData.forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);
        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: splitDate, y: totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: splitDate, y: totalUnits },
        ];
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];

    return [formattedData];
  }, [data, startDate, endDate]);

  return (
    <div className="">
      {(!isSidebarOpen || screenSize > 640) && (
        <div className="p-8 h-[calc(100vh-104px)] overflow-y-scroll">
          <Header title={"Daily data"} subtitle={"Chart of daily sales"} />
          <div className="h-[600px]">
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="cursor-pointer p-2 rounded-lg"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="cursor-pointer p-2 rounded-lg"
              />
            </div>
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
                legend: "Day",
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

export default Daily;

/* eslint-disable react/prop-types */
import { ResponsivePie } from "@nivo/pie";
import { useFetchSalesQuery } from "../store/api";

const BreakdownChart = ({ isDashboard = false }) => {
  const { data } = useFetchSalesQuery();
  if (!data) return [];

  const colors = ["#EBEF95", "#EFD595", "#EFB495", "#EF9595"];

  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => {
      return {
        id: category,
        label: category,
        value: sales,
        color: colors[i],
      };
    }
  );

  return (
    <div
      className={`${
        isDashboard ? "w-full max-w-[600px] h-[500px]" : "h-[700px]"
      } `}
    >
      <ResponsivePie
        data={formattedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#fff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#fff",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BreakdownChart;

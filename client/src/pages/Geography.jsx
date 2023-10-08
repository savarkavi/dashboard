import Header from "../components/Header";
import { useFetchGeographyQuery } from "../store/api";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../utils/geoData";

const Geography = () => {
  const { data, isLoading } = useFetchGeographyQuery();

  console.log(JSON.stringify(data));

  return (
    <div className="">
      <div className="p-8 h-[calc(100vh-104px)] overflow-y-scroll">
        <Header title={"Geograpgy"} subtitle={"Find your users are located"} />
        <div className="w-full flex justify-center">
          {isLoading ? (
            <div className="text-white text-xl mt-6">Loading...</div>
          ) : (
            <div className=" h-[700px] mt-6  w-[800px] border-2 border-white">
              <ResponsiveChoropleth
                data={data}
                features={geoData?.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 60]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                projectionScale={120}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                  {
                    id: "gradient",
                    type: "linearGradient",
                    colors: [
                      {
                        offset: 0,
                        color: "#fff",
                      },
                      {
                        offset: 100,
                        color: "inherit",
                      },
                    ],
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "CAN",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "CHN",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "ATA",
                    },
                    id: "gradient",
                  },
                ]}
                legends={[
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: "#444444",
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#fff",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Geography;

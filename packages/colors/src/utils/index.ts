import hex from "ral-to-hex";
import ncsColor from "ncs-color";

export const getColor = (color: string) =>
  color.match(/RAL/)
    ? ((m) => {
        const ral = m ? m[1] : "";
        return {
          ral,
          rgb: hex(ral),
        };
      })(color.match(/RAL (\d+)/))
    : ((m) => {
        const ncs = m ? `${m[1]}-${m[2]}` : "";
        return {
          ral: ncs,
          rgb: ncsColor.hex(ncs),
        };
      })(color.match(/(NCS S \d+)\s*-\s*(\S+)/));

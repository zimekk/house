import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  G,
  Path,
  Polygon,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 1,
  },
});

const color = "black";

export default () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Svg style={{ width: 400, height: 400 }}>
          <G transform="scale(20) translate(5,5)">
            <Path
              fill="#f2cc99"
              stroke={color}
              strokeWidth={0.01}
              d={`M 0 0 l 1 1 l -1 0 l 0 -1`}
            />
            <Text style={styles.text} x={1} y={2} textAnchor="end">
              text
            </Text>
            <Text style={styles.text} x={1} y={3} textAnchor="middle">
              long text
            </Text>
            <Text style={styles.text} x={1} y={4}>
              very long text
            </Text>
          </G>
        </Svg>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

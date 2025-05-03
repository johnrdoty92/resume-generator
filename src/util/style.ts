import { StyleSheet } from "@react-pdf/renderer";

export const spacing = (step = 1) => `${step * 0.125}in`;

export const styles = StyleSheet.create({
  page: {
    fontSize: "11px",
    padding: "0.5in",
    display: "flex",
    flexDirection: "column",
    gap: spacing(0.5),
  },
  header: { fontSize: "16px", textAlign: "center", marginBottom: spacing(), fontWeight: "bold" },
  heading: {
    fontWeight: "bold",
    paddingBottom: spacing(0.5),
    marginBottom: spacing(0.5),
    fontSize: "13px",
    borderBottom: "1px solid black",
  },
});

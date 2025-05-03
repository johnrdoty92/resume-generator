import { View, Text } from "@react-pdf/renderer";
import { styles } from "../util/style";

export const Heading = ({ label }: { label: string }) => (
  <View style={styles.heading}>
    <Text>{label}</Text>
  </View>
);

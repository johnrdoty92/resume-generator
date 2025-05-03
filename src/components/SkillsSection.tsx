import { View, Text } from "@react-pdf/renderer";
import { styles } from "../util/style";

export const SkillsSection = ({ skills }: { skills: string[] }) => {
  return (
    <View style={styles.heading}>
      <Text>
        Skills: <Text style={{ fontWeight: "light", fontSize: "10.5px" }}>{skills.join(", ")}</Text>
      </Text>
    </View>
  );
};

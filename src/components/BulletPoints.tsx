import { Circle, Svg, Text } from "@react-pdf/renderer";
import { Flex } from "./Flex";
import { spacing } from "../util/style";
import { ComponentProps } from "react";

const Bullet = ({ size = 3, fontSize = 11 }) => {
  return (
    <Svg fill="black" width={size} height={fontSize}>
      <Circle r={size / 2} cx={size / 2} cy={fontSize / 2} />
    </Svg>
  );
};

export const BulletPoints = ({
  items,
  ...props
}: { items: string[] } & ComponentProps<typeof Flex>) => {
  return (
    <Flex direction="column" style={{ marginVertical: spacing() }} {...props}>
      {items.map((item, i) => (
        <Flex key={i} gap={spacing(0.25)}>
          <Bullet />
          <Text>{item}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

import { View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/stylesheet";
import { ComponentProps } from "react";

type FlexProps = Partial<{
  align: Style["alignItems"];
  justify: Style["justifyContent"];
  gap: Style["gap"];
  direction: Style["flexDirection"];
  flexWrap: Style["flexWrap"];
}>;

export const Flex = ({
  align = "stretch",
  justify = "flex-start",
  gap,
  direction = "row",
  flexWrap = "nowrap",
  style = {},
  ...props
}: ComponentProps<typeof View> & FlexProps) => {
  return (
    <View
      {...props}
      style={[
        { alignItems: align, justifyContent: justify, gap, flexDirection: direction, flexWrap },
        ...(Array.isArray(style) ? style : [style]),
      ]}
    />
  );
};

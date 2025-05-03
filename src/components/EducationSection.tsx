import { Education } from "../types";
import { spacing } from "../util/style";
import { Flex } from "./Flex";
import { Heading } from "./Heading";
import { Text } from "@react-pdf/renderer";

export const EducationSection = ({ education }: { education: Education[] }) => {
  return (
    <Flex direction="column">
      <Heading label="Education" />
      {education.map(({ year, degreeOrProgram, description, school, gpa }, i) => {
        return (
          <Flex key={i} direction="column" style={{ marginBottom: spacing(0.75) }}>
            <Flex gap={spacing(0.25)}>
              <Text style={{ fontWeight: "bold" }}>{degreeOrProgram}</Text>
              <Text>|</Text>
              <Text>{school}</Text>
              {gpa ? (
                <>
                  <Text>|</Text>
                  <Text>{gpa} GPA</Text>
                </>
              ) : null}
              <Text style={{ marginLeft: "auto" }}>{year}</Text>
            </Flex>
            <Text>{description}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

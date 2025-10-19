import { type WorkExperience } from "../types";
import { BulletPoints } from "./BulletPoints";
import { Flex } from "./Flex";
import { Heading } from "./Heading";
import { Text } from "@react-pdf/renderer";

export const WorkExperienceSection = ({ workExperience }: { workExperience: WorkExperience[] }) => {
  const dateOptions: Intl.DateTimeFormatOptions = { month: "2-digit", year: "numeric" };
  return (
    <Flex direction="column">
      <Heading label="Work Experience" />
      {workExperience.map(({ achievements, company, end, location, start, title }, i) => {
        return (
          <Flex key={i} direction="column">
            <Flex justify="space-between">
              <Text>
                <Text style={{ fontWeight: "bold" }}>{title}</Text> | {company} | {location}
              </Text>
              <Text>
                {start.toLocaleString("en-US", dateOptions)}-
                {typeof end === "string" ? end : end.toLocaleString("en-US", dateOptions)}
              </Text>
            </Flex>
            <BulletPoints items={achievements} />
          </Flex>
        );
      })}
    </Flex>
  );
};

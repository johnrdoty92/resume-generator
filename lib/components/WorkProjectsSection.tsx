import { WorkProject } from "../types";
import { spacing } from "../util/style";
import { BulletPoints } from "./BulletPoints";
import { Flex } from "./Flex";
import { Heading } from "./Heading";
import { Link, Text } from "@react-pdf/renderer";

export const WorkProjectsSection = ({ workProjects }: { workProjects: WorkProject[] }) => {
  return (
    <Flex direction="column">
      <Heading label="Work Projects" />
      {workProjects.map(({ achievements, projectName, url }, i) => {
        return (
          <Flex key={i} direction="column">
            <Flex gap={spacing(0.25)}>
              <Text style={{ fontWeight: "bold" }}>{projectName}</Text>
              <Text>|</Text>
              <Link src={url}>{url}</Link>
            </Flex>
            <BulletPoints items={achievements} />
          </Flex>
        );
      })}
    </Flex>
  );
};

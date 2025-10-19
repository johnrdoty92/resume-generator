import { Text, Link } from "@react-pdf/renderer";
import { ContactInfo } from "../types";
import { Flex } from "./Flex";
import { spacing, styles } from "../util/style";

const trimUrl = (url: string) => url.replace(/http[s]?:\/\//g, "");

export const Header = ({
  email,
  name,
  phone,
  socials: { githubUrl, linkedInUrl },
}: ContactInfo) => {
  return (
    <Flex direction="column" style={{ marginBottom: spacing() }}>
      <Text style={styles.header}>{name}</Text>
      <Flex gap={spacing(0.5)} justify="center">
        <Text>{email}</Text>
        <Text>|</Text>
        <Text>{phone}</Text>
        <Text>|</Text>
        <Link src={githubUrl}>{trimUrl(githubUrl)}</Link>
        <Text>|</Text>
        <Link src={githubUrl}>{trimUrl(linkedInUrl)}</Link>
      </Flex>
    </Flex>
  );
};

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15 ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default CameCardContainer;

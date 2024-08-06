import { Text } from "components/Text";
import { getChainInfo } from "utils";

type Props = {
  symbol: string;
  fromChain: number;
  toChain: number;
};

export const RouteNotSupportedTooltipText = ({
  symbol,
  fromChain,
  toChain,
}: Props) => {
  return (
    <Text color="white-70" size="sm">
      <Text color="white-100" size="sm" as="a">
        {symbol}
      </Text>{" "}
      is not supported on route{" "}
      <Text color="white-100" size="sm" as="a">
        {getChainInfo(fromChain).name}
      </Text>{" "}
      {"->"}{" "}
      <Text color="white-100" size="sm" as="a">
        {getChainInfo(toChain).name}
      </Text>
      . Pick a different asset or change the route.
    </Text>
  );
};

export default RouteNotSupportedTooltipText;

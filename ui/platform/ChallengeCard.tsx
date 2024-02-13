import * as React from "react";

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  shorthands,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    maxWidth: "100%",
  },
});

interface ChallengeCardProps {
  title: string;
  url: string;
  img: string;
}

const ChallengeCard = ({ title, img }: ChallengeCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardPreview>
        <img
          src={`https://mir-s3-cdn-cf.behance.net/projects${img}`}
          alt={title}
        />
      </CardPreview>

      <CardFooter>
        <Body1>
          <b>{title}</b>
        </Body1>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
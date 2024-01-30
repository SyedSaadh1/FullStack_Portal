import * as React from "react";
import {
	makeStyles,
	shorthands,
	Button,
	Caption1,
	tokens,
	Text,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import {
	Card,
	CardHeader,
	CardPreview,
	CardProps,
} from "@fluentui/react-components";
import { courses } from '../data/courses'
import Link from "next/link";

const resolveAsset = (asset: string) => {
	const ASSET_URL =
		"https://img.lovepik.com/free-png/20210918/lovepik-people-in-business-office-png-image_400207670_wh1200.png";
	return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
	main: {
		...shorthands.gap("16px"),
		display: "flex",
		flexWrap: "wrap",
	},

	card: {
		marginTop: "32px",
		width: "380px",
		maxWidth: "100%",
	},

	caption: {
		color: tokens.colorNeutralForeground3,
	},

	smallRadius: {
		...shorthands.borderRadius(tokens.borderRadiusSmall),
	},

	grayBackground: {
		backgroundColor: tokens.colorNeutralBackground3,
	},

	logoBadge: {
		...shorthands.padding("5px"),
		...shorthands.borderRadius(tokens.borderRadiusSmall),
		backgroundColor: "#FFF",
		boxShadow:
			"0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
	},
});


export const CardExample = (props: CardProps) => {
	const styles = useStyles();

	return (
		<div className={styles.main}>
			{courses.map((course) => (
				<Card className={styles.card} {...props}>
					<CardPreview
						className={styles.grayBackground}
					>
						<img
							className={styles.smallRadius}
							src={resolveAsset("office1.png")}
							alt="Presentation Preview"
						/>
					</CardPreview>

					<CardHeader
						header={<Link href={`/courses/${course.name}`}>{course.name}</Link>}
						description={
							<Caption1 className={styles.caption}>{course.description}</Caption1>
						}
						action={
							<Button
								appearance="transparent"
								icon={<MoreHorizontal20Regular />}
								aria-label="More actions"
							/>
						}
					/>
				</Card>
			))}
		</div>
	);
};

// export const Selectable = () => {
//     const styles = useStyles();

//     const [selected1, setSelected1] = React.useState(false);
//     const [selected2, setSelected2] = React.useState(false);

//     return (
//         <div className={styles.main}>
//             <CardExample
//                 selected={selected1}
//                 onSelectionChange={(_, { selected }) => setSelected1(selected1)}
//             />
//             <CardExample
//                 selected={selected2}
//                 onSelectionChange={(_, { selected }) => setSelected2(selected)}
//             />
//         </div>
//     );
// };
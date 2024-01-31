'use client'
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
import { Course } from "@/types/course.types";

const resolveAsset = (asset: string) => {
	const ASSET_URL =
		"https://img.lovepik.com/free-png/20210918/lovepik-people-in-business-office-png-image_400207670_wh1200.png";
	return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
	card: {
		maxWidth: "100%",
		...shorthands.margin(tokens.spacingVerticalXL, 0),
		'&:hover': {
			boxShadow: tokens.shadow16
		}
	},

	caption: {
		color: tokens.colorNeutralForeground3,
	},

	image: {
		...shorthands.borderRadius(tokens.borderRadiusSmall),
		maxHeight: '220px',
		objectFit: 'cover'
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


const CourseCard = ({ course }: { course: Course }) => {
	const styles = useStyles();

	return (
		<Card className={styles.card}>
			<CardPreview
				className={styles.grayBackground}
			>
				<img
					className={styles.image}
					src={course.thumbnail?.url}
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
	);
};

export default CourseCard;

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
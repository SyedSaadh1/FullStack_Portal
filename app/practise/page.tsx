import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import PractiseContainer from "@/ui/practise/PractiseContainer";

interface Props {

}

export default function Page() {

	return (
		<>
			<PageHeader>
				<PageHeaderHeading>JavaScript Practice</PageHeaderHeading>
				<PageHeaderDescription>Dive into the JavaScript exercises and discover more as you progress. They offer excellent practice and are enjoyable to work on!</PageHeaderDescription>
			</PageHeader>
			<PractiseContainer />
		</>
	);
}

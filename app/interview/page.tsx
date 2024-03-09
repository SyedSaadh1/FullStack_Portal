// import Title from '@/components/ui/text/Title';
// import Container from '@/ui/layout/container';
import Welcome from './components/Welcome';

export default function Page() {
	return (
		<div className="min-h-[50vh]">
			{/* <Container className="py-6">
				<Title>Interview Page</Title>
				
				<p>Page content</p>
			</Container> */}
			<Welcome />
		</div>
	);
}

import ResumeBuilder from "@/ui/resume/builder/ResumeBuilder";
import Summery from "@/ui/resume/builder/Summary";
import Link from "next/link";

export default function Page() {

	return (
		<div className="bg-slate-100 p-12">
			<ResumeBuilder />
			
		</div>
	);
}

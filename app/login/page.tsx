import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import FullstackHeader from '~/FullstackHeader';

export default function Page() {
	return (
		<div>
			<FullstackHeader />
			<div className="flex justify-center items-center">
				<Card className="w-[420px]">
					<CardHeader>
						<CardTitle>Enter your email to start learning</CardTitle>
					</CardHeader>
					<CardContent>
						<form>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									{/* <Label htmlFor="name">Name</Label> */}
									<Input id="name" placeholder="Email" />
								</div>
								{/* <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Select>
                            <SelectTrigger id="framework">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="next">Next.js</SelectItem>
                                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                <SelectItem value="astro">Astro</SelectItem>
                                <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                    </div> */}
							</div>
						</form>
					</CardContent>
					<CardFooter>
						<Button className="w-full">CONTINUE</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

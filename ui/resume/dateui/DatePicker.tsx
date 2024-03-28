'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@nextui-org/react';
import { Calendar } from '@/components/ui/calendar';

export function DatePicker(props: any) {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					color={'default'}
					className={cn(
						'w-full justify-start text-left font-normal',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, 'PPP') : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
					{...props}
				/>
			</PopoverContent>
		</Popover>
	);
}

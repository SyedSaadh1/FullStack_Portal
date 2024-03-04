'use client';

import Prism from 'prismjs';
import { useState } from 'react';
import EditorView from 'react-simple-code-editor';
import 'prismjs/themes/prism-coy.css'; //Example style, you can use another

const { highlight, languages } = Prism;
interface CodeViewProps {
  code: object | string;
  language: 'js' | 'html' | 'css' | 'json';
}

export default function CodeViewer({
	code = '',
	language = 'js'
}: CodeViewProps) {
	const [value, setValue] = useState(
		typeof code === 'string' ? code : JSON.stringify(code, null, 2)
	);

	return (
		<div className="p-6 my-4 rounded shadow shadow-blue-gray-300 bg-blue-gray-50 ">
			{
				<EditorView
					className="font-mono font-semibold"
					value={value}
					onValueChange={(code: any) => setValue(code)}
					disabled
					highlight={(code: any) =>
						highlight(code, languages[language], language)
					}
				/>
			}
		</div>
	);
}

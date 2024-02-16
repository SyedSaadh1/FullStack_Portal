
import { Sandpack, SandpackCodeEditor, SandpackConsole, SandpackLayout, SandpackPreview, SandpackProvider, useSandpackConsole } from "@codesandbox/sandpack-react";
import { useEffect } from "react";

type Props = {}

// const snippet = {
//   markup: `<div id=app />`,
//   javascript: `import { h, Component, render } from 'preact';
// import htm from 'htm';

// const html = htm.bind(h);

// const app = html\`<div>Hello World from Playground!</div>\`

// render(app, document.getElementById('app'));`,
// };

function JSEditor({ }: Props) {

  if (!true) {
    return <Sandpack
      files={{
        '/index.html': {
          code: `<body>
            <h1>Hello JS</h1>
            <div id="app"></div>
            <script src="index.js"></script>
          </body>`
        },

        '/index.js': {
          code: `console.log('Hello JS')`
        }
      }}
      theme="light"
      template="vanilla"
    />
  }

  return (
    <SandpackProvider
      style={{flex: 1}}
      files={{}}
      template="vanilla"
    >
      <SandpackLayout className="bg-red-200 h-full">
        <SandpackCodeEditor showTabs initMode="user-visible" className="bg-red-200 !h-full" showRunButton={true} showLineNumbers wrapContent />
      </SandpackLayout>

    </SandpackProvider>
  )
}



export default JSEditor;
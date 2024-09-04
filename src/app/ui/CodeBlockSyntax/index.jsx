import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlockSyntax({ children }) {
  return (
    <div className="codeblocksyntaxt" contenteditable="true">
      <SyntaxHighlighter language="jsx" style={docco}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

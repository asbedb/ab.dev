import React from "react";

export default function CodeBlock(){
    return(
        <>
    <div className="bg-gray-900 text-white rounded-lg overflow-auto p-4">
        <pre className="whitespace-pre-wrap">
            <code className="text-sm font-mono">
                <span className="text-purple-400">import</span>
                <span className="text-blue-400"> AsbedB</span>
                <span className="text-purple-400"> from</span>
                <span className="text-amber-600"> &quot;./melbourne&quot;</span>;<br/>
                <span className="text-purple-400">import</span>
                <span className="text-blue-400"> Experience</span>
                <span className="text-purple-400"> from</span>
                <span className="text-amber-600"> &quot;./life&quot;</span>;<br/><br/>

                <span className="text-purple-400">export default</span>
                <span className="text-blue-500"> function</span>
                <span className="text-yellow-300"> Portfolio{"()"}</span><br/>

                <span className="text-yellow-300">{"{"}</span><br/>

                <span className="ml-4 text-purple-400">return{"("}</span><br/>
                <span className="ml-8 text-gray-500">&lt; &gt;</span><br/>
                <span className="ml-10 text-green-500">&lt;AsbedB.dev/&gt;</span><br/>
                <span className="ml-8 text-gray-500">&lt;/&gt;</span><br/>

                <span className="ml-4 text-purple-400">{")"}</span><br/>

                <span className="text-yellow-300">{"}"}</span><br/>

            </code>
        </pre>
    </div>
        </>
    )
}
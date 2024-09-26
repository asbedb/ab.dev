import React from "react";
import CodeColor from "./CodeColor";

export default function CodeBlock(){
    return(
        <>
    <div className="flex leading-3 bg-gray-900 text-white rounded-lg overflow-auto p-4">
        <pre className="whitespace-pre-wrap">
            <code className="text-sm font-mono">
                <CodeColor color="commentgreen">{'// '}Experienced in React/Next, Node, JavaScript, HTML/CSS, and more!</CodeColor><br/><br/>
                <CodeColor color="purple">import</CodeColor>{' '}
                <CodeColor color="blue">AsbedB</CodeColor>{' '}
                <CodeColor color="purple">from</CodeColor>{' '}
                <CodeColor color="amber">&quot;./melbourne&quot;</CodeColor>;
                <br />
                <CodeColor color="purple">import</CodeColor>{' '}
                <CodeColor color="blue">Experience</CodeColor>{' '}
                <CodeColor color="purple">from</CodeColor>{' '}
                <CodeColor color="amber">&quot;./life&quot;</CodeColor>;
                <br />
                <CodeColor color="purple">export default</CodeColor>{' '}
                <CodeColor color="blue">function</CodeColor>{' '}
                <CodeColor color="yellow">skillsAndExperience()</CodeColor>
                <br />
                <CodeColor color="yellow">{'{'}</CodeColor>
                <br />
                    <span className="ml-4"><CodeColor color="commentgreen">{'// '}I really enjoy exploring new frameworks/librarys and concepts!</CodeColor><br/></span>
                    <span className="ml-4">
                        
                        <CodeColor color="blue">const </CodeColor>
                        <CodeColor color="lightblue">currentlyStudying </CodeColor>
                        <CodeColor color="white">= </CodeColor>
                        <CodeColor color="yellow">{`[`}</CodeColor><br/>
                    </span>
                            <span className="ml-8"><CodeColor color="amber">{"'CS50'"}</CodeColor>,</span><br/>
                            <span className="ml-8"><CodeColor color="amber">{"'Odin Project'"}</CodeColor>,</span><br/>
                            <span className="ml-8"><CodeColor color="amber">{"'Various fCC Modules'"}</CodeColor>,</span><br/>
                            <span className="ml-8"><CodeColor color="amber">{"'Advanced React Modules'"}</CodeColor></span><br/>
                    <span className="ml-4">
                        <CodeColor color="yellow">{`]`}</CodeColor>;<br/>
                    </span>

                    <span className="ml-4"><CodeColor color="purple" >return(</CodeColor></span>
                    <br />
                        <span className="ml-8"><CodeColor color="gray">&lt; &gt;</CodeColor></span>
                        <br />
                            <span className="ml-10"><CodeColor color="green">&lt;Skills&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;JavaScript /&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;HTML5 & CSS /&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;Python /&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;React /&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;NodeJS /&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;Microsoft AZ-900 Cert /&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;fCC Responsive Web Design Cert /&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="white">&lt;fCC JS OOP Cert /&gt;</CodeColor></span>
                                <br />
                            <span className="ml-10"><CodeColor color="green">&lt;/Skills&gt;</CodeColor></span>
                            <br />
                        <span className="ml-8"><CodeColor color="gray">&lt;/&gt;</CodeColor></span>
                        <br />
                        <span className="ml-8"><CodeColor color="commentgreen">{'// '}I also make games as a hobby and have made games in Unity, Godot and Unreal!</CodeColor><br/></span>
                    <span className="ml-4"><CodeColor color="purple">)</CodeColor></span>
                    <br />
                <CodeColor color="yellow">{'}'}</CodeColor>
            </code>
        </pre>
    </div>
        </>
    )
}
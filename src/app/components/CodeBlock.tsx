import React from "react";
import CodeColor from "./CodeColor";

export default function CodeBlock(){
    return(
        <>
    <div className="flex leading-3 bg-gray-900 text-white rounded-lg overflow-auto p-4">
        <pre className="whitespace-pre-wrap">
            <code className="text-sm font-mono">
                <CodeColor color="commentgreen">{'// asbedb.dev 2025'}</CodeColor><br/><br/>
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
                    <span className="ml-4">  
                        <CodeColor color="blue">const </CodeColor>
                        <CodeColor color="lightblue">interestsAndHobbies </CodeColor>
                        <CodeColor color="white">= </CodeColor>
                        <CodeColor color="yellow">{`[`}</CodeColor><br/>
                    </span>
                            <span className="ml-8"><CodeColor color="amber">{"'Radio Broadcasting'"}</CodeColor>,</span><br/>
                            <span className="ml-8"><CodeColor color="amber">{"'Community Work'"}</CodeColor>,</span><br/>
                            <span className="ml-8"><CodeColor color="amber">{"'fOSS projects'"}</CodeColor>,</span><br/>
                            <span className="ml-8"><CodeColor color="amber">{"'Science Fiction Media'"}</CodeColor></span><br/>
                    <span className="ml-4">
                        <CodeColor color="yellow">{`]`}</CodeColor>;<br/><br/>
                    </span>
                    <span className="ml-4"><CodeColor color="commentgreen">{'// I really enjoy exploring new frameworks/librarys and concepts!'}</CodeColor><br/></span>
                    <span className="ml-4"><CodeColor color="purple" >return(</CodeColor></span>
                    <br />
                        <span className="ml-8"><CodeColor color="gray">&lt; &gt;</CodeColor></span>
                        <br />
                            <span className="ml-10"><CodeColor color="green">&lt;Experience&gt;</CodeColor></span>
                                <br />
                                <span className="ml-12"><CodeColor color="lightamber">&lt;AsbedB&gt;</CodeColor></span>
                                <br />
                                    <span className="ml-14"><CodeColor color="white">&lt;Consulting /&gt;</CodeColor></span>
                                    <br />
                                    <span className="ml-14"><CodeColor color="white">&lt;LeadershipAndManagement /&gt;</CodeColor></span>
                                    <br />
                                    <span className="ml-14"><CodeColor color="white">&lt;Entrepreneurial /&gt;</CodeColor></span>
                                    <br />
                                    <span className="ml-14"><CodeColor color="white">&lt;CollaborativeInTeams /&gt;</CodeColor></span>
                                    <br />
                                    <span className="ml-14"><CodeColor color="white">&lt;IndustryCertifications /&gt;</CodeColor></span>
                                    <br />
                                    <span className="ml-14"><CodeColor color="white">&lt;GovEnterpriseEdu /&gt;</CodeColor></span>
                                    <br />
                                <span className="ml-12"><CodeColor color="lightamber">&lt;/AsbedB&gt;</CodeColor></span>
                                <br />
                            <span className="ml-10"><CodeColor color="green">&lt;/Experience&gt;</CodeColor></span>
                            <br />
                        <span className="ml-8"><CodeColor color="gray">&lt;/&gt;</CodeColor></span>
                        <br />
                    <span className="ml-4"><CodeColor color="purple">)</CodeColor></span>
                    <br />
                <CodeColor color="yellow">{'}'}</CodeColor>;
            </code>
        </pre>
    </div>
        </>
    )
}
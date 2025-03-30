import React from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import Gradient from './Gradient'
import StackIcon from './StackIcon'
import { BiLogoTypescript, BiLogoJavascript, BiLogoJava, BiLogoReact, BiLogoTailwindCss, BiLogoMicrosoft, BiLogoNodejs   } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiAstro, SiVite, SiHtml5, SiCss3, SiPython, SiGodotengine, SiUnity, SiUnrealengine, SiLinux, SiHeroku, SiGithubactions,SiNginx  } from "react-icons/si";


export default function Technologies() {
    return (
        <Card className="w-full bg-primary-100 text-primary-foreground h-full p-4">
            <CardHeader className="gap-2">
                <h4 className='text-[3.5rem] md:text-[4rem] font-bold leading-tighttracking-tight'><Gradient>Building With</Gradient></h4>
            </CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-4  w-full h-full content-start justify-center">
                <StackIcon content={<BiLogoReact />} text='React'/>
                <StackIcon content={<RiNextjsFill />} text='NextJS'/>
                <StackIcon content={<SiVite />} text='Vite'/>
                <StackIcon content={<SiAstro />} text='Astro'/>
                <StackIcon content={<BiLogoTailwindCss />} text='Tailwind'/>
                <StackIcon content={<BiLogoTypescript />} text='TypeScript'/>
                <StackIcon content={<BiLogoJavascript />} text='JavaScript'/>
                <StackIcon content={<SiPython />} text='Python'/>
                <StackIcon content={<BiLogoJava />} text='Java'/>
                <StackIcon content={<SiHtml5 />} text='HTML'/>
                <StackIcon content={<SiCss3 />} text='CSS'/>
                <StackIcon content={<BiLogoMicrosoft />} text='Microsoft'/>
                <StackIcon content={<SiLinux />} text='Linux'/>
                <StackIcon content={<BiLogoNodejs />} text='NodeJS'/>
                <StackIcon content={<SiHeroku />} text='Heroku'/>
                <StackIcon content={<SiGithubactions />} text='Git'/>
                <StackIcon content={<SiNginx />} text='NGINX'/>
                <StackIcon content={<SiGodotengine />} text='Godot'/>
                <StackIcon content={<SiUnity />} text='Unity'/>
                <StackIcon content={<SiUnrealengine />} text='Unreal'/>
            </CardBody>
        </Card>
    )
}

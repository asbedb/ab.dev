import { NextResponse } from "next/server"
import { parseStringPromise } from 'xml2js'


interface gitHubReposTypes{
    pulledFrom: string;
    name: string;
    html_url: string;
    language: string;
    description: string;
    updated_at: string;
}

interface MediumRSSItem {
    title: string[];
    link: string[];
    category: string[] | undefined;
    'content:encoded': string[];
    'atom:updated': string[];
}

export async function GET() {
    const gitHubURL = `https://api.github.com/users/asbedb/repos`
    const mediumURL = `https://medium.com/feed/@asbedb`
    const stripHTMLTags = (html: string) => {
        return html.replace(/<[^>]*>/g, '')
    }
    const truncateToSentences =(text: string, numSetences: number) => {
        const sentences = text.split(/[.!?]\s/)
        return sentences.slice(0, numSetences).join('. ') + (sentences.length > numSetences? "....": '')
    }
    const formatDate = (dateString : string) => {
        const date = new Date(dateString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()

        return `${day}/${month}/${year}`

    }
    try {
        const [gitHubResponse, mediumResponse] = await Promise.all([
            fetch(gitHubURL),
            fetch(mediumURL)
        ]);
        if (!gitHubResponse.ok) {
            throw new Error(`GitHub response status: ${gitHubResponse.status}`);
        }
        if (!mediumResponse.ok) {
            throw new Error(`Medium response status: ${mediumResponse.status}`);
        }
        const gitHubData = await gitHubResponse.json();
        const mediumData = await mediumResponse.text(); 

        const mediumParsedData = await parseStringPromise(mediumData);
        
        const gitHubRepos = gitHubData.map(
            (repo: gitHubReposTypes) => ({
                pulledFrom:  "GitHub",
                title: repo.name,
                link: repo.html_url,
                category: repo.language,
                description: repo.description || "No Description Available",
                updated_at: formatDate(repo.updated_at),
        }))

        const mediumPosts = mediumParsedData.rss.channel[0].item.map(
            (item: MediumRSSItem) => ({
                pulledFrom: "Medum",
                title: item.title[0] || "Title Not Found",
                link: item.link[0] || "#",
                category: item.category
                ? item.category.join(", ")
                : "None",
                description: truncateToSentences(
                    stripHTMLTags(item["content:encoded"][0] || ""),
                    4
                ),
                updated_at: formatDate(item["atom:updated"][0]) || "",
        }))
        const combinedData = [...gitHubRepos, ...mediumPosts]
        combinedData.sort((a, b) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        })
        return NextResponse.json(combinedData);
    
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        } else {
            return NextResponse.json({error: 'Unknown Error'}, { status: 400 });
        }
    }
}

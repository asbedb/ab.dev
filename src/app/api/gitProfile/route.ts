import { NextResponse } from "next/server";

export async function GET() {
    const gitHubURL = `https://api.github.com/users/asbedb/repos`;
    try {
        const response = await fetch(gitHubURL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }    
        const json = await response.json();
        return NextResponse.json(json); 
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error });
    }
}

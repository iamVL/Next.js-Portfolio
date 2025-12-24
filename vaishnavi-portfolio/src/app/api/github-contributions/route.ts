import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    const username = 'satwikug25'; // Replace with your GitHub username

    try {
        const { data } = await axios.post(
            'https://api.github.com/graphql',
            {
                query: `query {
                    user(login: "${username}") {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                            }
                        }
                    }
                }`
            },
            {
                headers: {
                    Authorization: `bearer ${token}`
                }
            }
        );

        const totalContributions = data.data.user.contributionsCollection.contributionCalendar.totalContributions;
        return NextResponse.json({ totalContributions });
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        return NextResponse.json({ error: 'Error fetching GitHub contributions' }, { status: 500 });
    }
}

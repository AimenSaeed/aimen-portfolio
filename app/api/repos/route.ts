import { NextResponse } from 'next/server';
import { fetchAllProjects } from '@/lib/github';

export async function GET() {
  const data = await fetchAllProjects();
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

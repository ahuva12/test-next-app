import { NextResponse } from 'next/server';
import { Gbooks } from './db';

export async function GET(request: Request) {
    return NextResponse.json(Gbooks, {
        status: 200,
    });
}

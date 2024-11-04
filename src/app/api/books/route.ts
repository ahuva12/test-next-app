import { NextResponse } from 'next/server';
import { Gbooks } from './db';

// export async function GET(request: Request) {
//     return NextResponse.json(Gbooks, {
//         status: 200,
//     });
// }


export async function GET(request: Request) {
    return new Response(JSON.stringify(Gbooks), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}

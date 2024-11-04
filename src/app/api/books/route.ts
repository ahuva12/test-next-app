import { NextResponse } from 'next/server';
import { Gbooks } from './db';

export async function GET(request: Request) {
    const origin = request.headers.get('origin');
    const allowedOrigins = ['https://test-next-app-roan.vercel.app', 'http://localhost:3000'];

    // Create a response with CORS headers
    const response = NextResponse.json(Gbooks, {
        status: 200,
    });

    // Check if the origin is allowed, and set CORS headers if so
    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }

    return response;
}

export async function OPTIONS() {
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return new Response(null, {
        status: 204,
        headers,
    });
}


// import { NextResponse } from 'next/server';
// import { Gbooks } from './db';

// export async function GET(request: Request) {
//     return NextResponse.json(Gbooks, {
//         status: 200,
//     });
// }

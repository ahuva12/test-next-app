import { Gbooks } from "./db";

export async function GET(request: Request): Promise<Response>{
    return new Response(JSON.stringify(Gbooks), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
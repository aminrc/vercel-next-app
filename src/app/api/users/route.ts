export async function GET() {
    const users = [
        { id: 1, name: "Amin" },
        { id: 2, name: "Ali" }
    ];
    return new Response(JSON.stringify(users));
}
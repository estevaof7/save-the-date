import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "URL não fornecida" }, { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return NextResponse.json({ error: "Erro ao buscar imagem" }, { status: response.status });
    }

    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Erro ao fazer proxy da imagem:", error);
    return NextResponse.json({ error: "Erro ao processar imagem" }, { status: 500 });
  }
}

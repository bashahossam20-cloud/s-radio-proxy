export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // الرابط الجديد
  const streamUrl = "https://dc5.serverse.com/proxy/pbmhbvxs/stream";

  try {
    const response = await fetch(streamUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-cache, no-store",
      },
    });
  } catch (error) {
    return new Response("خطأ في جلب البث", { status: 502 });
  }
}

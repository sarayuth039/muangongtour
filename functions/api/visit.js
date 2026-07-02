export async function onRequest(context) {
  // If the KV database is not bound
  if (!context.env.MOT_DB) {
    return new Response(JSON.stringify({ count: 1 }), {
      headers: { "Content-Type": "application/json" }
    });
  }
  
  try {
    // Get current count from KV database
    let currentCount = await context.env.MOT_DB.get("visit_count");
    let count = currentCount ? parseInt(currentCount, 10) : 0;
    
    // Increment count by 1
    count += 1;
    
    // Save the new count back to KV
    await context.env.MOT_DB.put("visit_count", count.toString());
    
    return new Response(JSON.stringify({ count }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

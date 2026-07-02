// Serverless API for Cloudflare Pages Functions
// Handles reading and writing Muang Ong Tour database state in Cloudflare KV

export async function onRequestGet(context) {
  try {
    // If the binding is not set up, notify developer but don't crash
    if (!context.env.MOT_DB) {
      return new Response(JSON.stringify({ 
        error: "KV binding 'MOT_DB' is missing. Please bind it in your Cloudflare dashboard." 
      }), {
        status: 503,
        headers: { "content-type": "application/json;charset=UTF-8" }
      });
    }

    const data = await context.env.MOT_DB.get("app_data");
    
    if (!data) {
      // Return empty database object if no data has been saved yet
      return new Response(JSON.stringify({ empty: true }), {
        headers: { "content-type": "application/json;charset=UTF-8" }
      });
    }

    return new Response(data, {
      headers: { "content-type": "application/json;charset=UTF-8" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.toString() }), {
      status: 500,
      headers: { "content-type": "application/json;charset=UTF-8" }
    });
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env.MOT_DB) {
      return new Response(JSON.stringify({ 
        error: "KV binding 'MOT_DB' is missing." 
      }), {
        status: 503,
        headers: { "content-type": "application/json;charset=UTF-8" }
      });
    }

    // Verify passcode authentication header
    const authHeader = context.request.headers.get("Authorization");
    if (authHeader !== "Bearer 1234") {
      return new Response(JSON.stringify({ error: "Unauthorized passcode access" }), {
        status: 401,
        headers: { "content-type": "application/json;charset=UTF-8" }
      });
    }

    const payload = await context.request.json();
    
    // Save stringified database payload to KV
    await context.env.MOT_DB.put("app_data", JSON.stringify(payload));

    return new Response(JSON.stringify({ success: true }), {
      headers: { "content-type": "application/json;charset=UTF-8" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.toString() }), {
      status: 500,
      headers: { "content-type": "application/json;charset=UTF-8" }
    });
  }
}

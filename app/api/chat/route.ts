import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Enhanced system prompt: includes portfolio sections for richer context
const SYSTEM_PROMPT = `
You are an AI assistant for the portfolio website of a Full-Stack & DevOps Engineer. Use the site's structure to answer visitor questions accurately by referencing the appropriate section.

Portfolio Sections:
- Home: Hero section with name, tagline, and call-to-action
- Skills: Detailed grid of technical skills and tools
- Projects: Showcase with descriptions, live demo links, and GitHub URLs
- Experiences: Timeline of work history with roles, companies, and achievements
- About: Personal background, story, and professional philosophy
- Let's Talk: Contact form for inquiries

Your job is to answer questions about the engineer's skills, experience, projects, and site navigation. Be helpful, concise, and friendly. If you don't know an answer, suggest they use the contact form under "Let's Talk."
`;

export async function POST(request: NextRequest) {
  const { message } = await request.json();
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  try {
    // Only use Cohere
    const cohereKey = process.env.COHERE_API_KEY;
    if (cohereKey) {
      try {
        const cohereRes = await fetch("https://api.cohere.ai/v1/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cohereKey}`,
          },
          body: JSON.stringify({
            model: "command",
            prompt: `${SYSTEM_PROMPT}\n\nUser: ${message}\nAI:`,
            max_tokens: 300,
            temperature: 0.7,
            k: 0,
            stop_sequences: ["User:"],
            return_likelihoods: "NONE",
          }),
        });
        if (cohereRes.ok) {
          const cohereData = await cohereRes.json();
          const reply = cohereData.generations?.[0]?.text?.trim();
          if (reply) {
            return NextResponse.json({ response: reply });
          }
        } else {
          const errBody = await cohereRes.text();
          console.error("Cohere API error:", cohereRes.status, errBody);
        }
      } catch (cohereError) {
        console.error("Cohere API error:", cohereError);
      }
    }

    // Fallback static response
    const fallbackResponse = `Hello! I'm the portfolio assistant. I can help you navigate this website and learn more about the Full-Stack & DevOps Engineer's skills, projects, and experience. \n\nWhat would you like to know? You can ask about:\n- Skills and technologies \n- Featured projects\n- Work experience\n- How to get in touch\n\nIf you have specific questions, feel free to ask and I'll do my best to help!`;
    return NextResponse.json({ response: fallbackResponse });
  } catch (e) {
    console.error("Chat API unexpected error:", e);
    return NextResponse.json({
      response:
        "I'm here to help with any questions about this portfolio. While I'm experiencing some technical difficulties at the moment, please feel free to explore the site or use the contact form in the 'Let's Talk' section to reach out directly.",
    });
  }
}

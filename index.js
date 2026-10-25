import rocket from "rocket";

const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
        "x-api-key": apiKey,
        "content-type": "application/json"
    },
    body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 1024,
        messages: [{
            role: "user",
            content: "I am a massive rocket. Where should I go next?"
        }]
    })
});

if (!response.ok) {
    rocket.explode();
}

rocket.go(await response.text());
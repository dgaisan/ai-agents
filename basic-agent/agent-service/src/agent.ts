import axios from 'axios';

export class Agent {
    private name: string;
    private persona: string;
    private apiUrl: string;

    constructor(name: string, persona: string, apiUrl = 'http://ollama:11435/api/generate') {
        this.name = name;
        this.persona = persona;
        this.apiUrl = apiUrl;
    }

    async respond(message: string): Promise<string> {
        const fullPrompt = `You are ${this.persona}. Respond to: "${message}"`;

        try {
            const response = await axios.post(this.apiUrl, {
                model: "llama3",
                prompt: fullPrompt,
                stream: false
            });

            const reply = response.data.response.trim();
            console.log(`${this.name} says: ${reply}\n`);
            return reply;
        } catch (error: any) {
            console.error(`${this.name} encountered an error: ${error.message}`);
            return "Error occurred";
        }
    }
}


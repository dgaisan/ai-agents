"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
const axios_1 = __importDefault(require("axios"));
class Agent {
    constructor(name, persona, apiUrl = 'http://ollama:11435/api/generate') {
        this.name = name;
        this.persona = persona;
        this.apiUrl = apiUrl;
    }
    async respond(message) {
        const fullPrompt = `You are ${this.persona}. Respond to: "${message}"`;
        try {
            const response = await axios_1.default.post(this.apiUrl, {
                model: "llama3",
                prompt: fullPrompt,
                stream: false
            });
            const reply = response.data.response.trim();
            console.log(`${this.name} says: ${reply}\n`);
            return reply;
        }
        catch (error) {
            console.error(`${this.name} encountered an error: ${error.message}`);
            return "Error occurred";
        }
    }
}
exports.Agent = Agent;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_js_1 = require("./agent.js");
const agent1 = new agent_js_1.Agent("Agent Maia Sandu", "A president of Republic of Moldova that's trying to take the county to European Union");
const agent2 = new agent_js_1.Agent("Agent Dodon", "Ex-president, currently pro-russian politic, in oposition to Maia Sandu. trying to maintain best relationships with Russia");
async function debate() {
    let message = "Should Moldova, as a country, move toward EU or Russian?";
    for (let i = 0; i < 3; i++) {
        console.log(`Round ${i + 1}:`);
        message = await agent1.respond(message);
        message = await agent2.respond(message);
    }
}
debate();

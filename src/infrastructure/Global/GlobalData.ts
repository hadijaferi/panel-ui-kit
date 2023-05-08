type AgentTypes = "mobile" | "desktop";
export default class GlobalData {
  static deviceAgent: AgentTypes = "desktop";

  static setAgent(agent: AgentTypes) {
    GlobalData.deviceAgent = agent;
  }
}

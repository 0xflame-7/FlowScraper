import { AppNode } from "@/types/appNode";
import { Tasktype } from "@/types/task";

export function CreateFlowNode(
  nodeType: Tasktype,
  position?: { x: number; y: number }
): AppNode {
  return {
    id: crypto.randomUUID(),
    type: "Node",
    data: {
      type: nodeType,
      input: {},
    },
    position: position ?? { x: 0, y: 0 },
  };
}

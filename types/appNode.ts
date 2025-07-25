import { Node } from "@xyflow/react";
import { Tasktype } from "./task";

export interface AppNodeData {
  type: Tasktype;
  input: Record<string, string>;
  [key: string]: any;
}

export interface AppNode extends Node {
  data: AppNodeData;
}

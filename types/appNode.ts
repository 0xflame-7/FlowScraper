import { Node } from "@xyflow/react";
import { TaskParam, Tasktype } from "./task";

export interface AppNodeData {
  type: Tasktype;
  inputs: Record<string, string>;
  [key: string]: any;
}

export interface AppNode extends Node {
  data: AppNodeData;
}

export interface paramProps {
  param: TaskParam;
  value: string;
  updateNodeParamValue: (value: string) => void;
}

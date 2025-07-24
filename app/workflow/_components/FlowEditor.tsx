"use client";

import { Workflow } from "@/lib/generated/prisma";
import { ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import React from "react";

function FlowEditor({ workflow }: { workflow: Workflow }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <main className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
      ></ReactFlow>
    </main>
  );
}

export default FlowEditor;

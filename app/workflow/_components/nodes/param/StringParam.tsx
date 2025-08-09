import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { paramProps } from "@/types/appNode";
import React, { useId, useState } from "react";

function StringParam({ param, value, updateNodeParamValue }: paramProps) {
  const id = useId();
  const [intervalValue, setIntervalValue] = useState(value);

  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-1">*</p>}
      </Label>
      <Input
        id={id}
        value={intervalValue}
        placeholder="Enter value here."
        onChange={(e) => setIntervalValue(e.target.value)}
        onBlur={(e) => updateNodeParamValue(e.target.value)}
      />
      {param.helperText && (
        <p className="text-muted-foreground px-2">{param.helperText}</p>
      )}
    </div>
  );
}

export default StringParam;

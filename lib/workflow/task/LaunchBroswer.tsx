import { Tasktype } from "@/types/task";
import { GlobeIcon, LucideProps } from "lucide-react";

export const LaunchBroswerTask = {
  type: Tasktype.LAUNCH_BROSWER,
  label: "Launch broswer",
  icon: (props: LucideProps) => (
    <GlobeIcon className="stroke-pink-400 {...props}" />
  ),
  isEntryPoint: true,
};

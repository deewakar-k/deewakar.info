import {
  DockerPlain,
  GitOriginal,
  JavascriptPlain,
  NodejsPlainWordmark,
  PostgresqlPlain,
  ReactOriginal,
} from "devicons-react";
import { GitIcon, ReactIcon } from "./svg";

export const SkillsIcons = () => {
  return (
    <>
      <div className="flex justify-start gap-4">
        <JavascriptPlain color="#aaa" size={18} />
        <ReactIcon />
        <NodejsPlainWordmark color="#aaa" size={18} />
        <PostgresqlPlain color="#aaa" size={18} />
        <DockerPlain color="#aaa" size={18} />
        <GitIcon />
      </div>
    </>
  );
};

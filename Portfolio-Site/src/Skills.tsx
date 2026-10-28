import type { ReactNode } from "react";
import {
  FaMicrochip,
  FaBrain,
  FaCode,
  FaCube,
  FaLayerGroup,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import Section from "./Components/Section";

interface SkillGroup {
  icon: ReactNode;
  title: string;
  note: string;
  skills: string[];
  accent?: boolean;
}

const groups: SkillGroup[] = [
  {
    icon: <FaMicrochip />,
    title: "GPU & Parallel Computing",
    note: "Where most of my recent work lives",
    accent: true,
    skills: [
      "CUDA C++",
      "GPU Architecture",
      "Parallel Computing",
      "Tensor Cores / WMMA",
      "cuBLAS",
      "Memory Optimisation",
      "Caching Allocators",
      "Kernel Fusion",
      "CUDA Graphs",
      "Nsight",
    ],
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    note: "Applied, and profiled end to end",
    accent: true,
    skills: [
      "LLM Inference",
      "Transformers",
      "KV Cache",
      "Grouped-Query Attention",
      "RoPE",
      "BPE Tokenization",
      "PyTorch",
      "TensorRT",
      "ONNX Runtime",
      "Hugging Face",
      "OpenCV",
      "RAG",
      "Vector Embeddings",
      "Mixed-Precision Inference",
      "YOLO",
      "Segmentation (SAM / FastSAM)",
      "Depth Estimation",
      "Re-Identification",
    ],
  },
  {
    icon: <FaCube />,
    title: "Graphics & Real-Time",
    note: "Rendering, from pipeline to pixel",
    skills: [
      "OpenGL",
      "GLSL",
      "Graphics Pipeline",
      "Deferred Shading",
      "PBR / GGX",
      "Spatial Data Structures",
      "ECS Architecture",
    ],
  },
  {
    icon: <FaCode />,
    title: "Languages",
    note: "Ordered by how much I reach for them",
    skills: [
      "C++20",
      "C",
      "CUDA",
      "Python",
      "TypeScript",
      "JavaScript",
      "C#",
      "Java",
    ],
  },
  {
    icon: <FaLayerGroup />,
    title: "Web & Backend",
    note: "Full-stack when a project needs a face",
    skills: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    icon: <FaScrewdriverWrench />,
    title: "Systems & Tooling",
    note: "Build, measure, debug, ship",
    skills: [
      "Linux ARM",
      "Embedded / ESP",
      "Git & Bitbucket",
      "CMake",
      "vcpkg",
      "Docker",
      "CI/CD",
      "GDB",
      "Valgrind",
      "GoogleTest",
      "FFmpeg",
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04 / Skills"
      title="Skills & expertise"
      intro="The tools I use, weighted toward the low-level and the parallel."
      className="bg-void"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className={`card reveal rounded-xl p-6 ${
              group.accent
                ? "border-cyan/30 shadow-[0_0_40px_-24px_rgba(34,211,238,0.6)]"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg border text-lg ${
                  group.accent
                    ? "border-cyan/40 bg-cyan/10 text-cyan"
                    : "border-line bg-raised text-violet"
                }`}
              >
                {group.icon}
              </span>
              <div>
                <h3 className="font-bold text-ink">{group.title}</h3>
                <p className="font-mono text-[11px] text-faint">{group.note}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-xs text-dim transition-colors duration-300 hover:border-line-strong hover:text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

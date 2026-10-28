import TransformerImg from "../assets/TransformerDashboard.webp";
import RelightingImg from "../assets/RelightingStudio.webp";
import OneShotSegImg from "../assets/OneShotSeg.webp";
import PushUpImg from "../assets/PushUp.webp";
import CaveGenerationImg from "../assets/CaveGeneration.webp";
import GraphicsEngineImg from "../assets/3DEngine.webp";
import GameEngine3DImg from "../assets/3DGameEngine.webp";
import GameEngine2DImg from "../assets/2DGameEngine.webp";
import CameraCullingImg from "../assets/CameraCulling.webp";
import DocumentReaderImg from "../assets/DocumentReader.webp";
import StockWebAppImg from "../assets/StockWebApp.webp";
import InventoryManagerImg from "../assets/InventoryManager.webp";
import InferenceEngineImg from "../assets/InferenceEngine.svg";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  image: string;
  repo: string;
  tech: string[];
}

export interface Metric {
  value: string;
  label: string;
}

/** The flagship — given its own full-width panel above the grid. */
export const spotlight = {
  title: "Distraction",
  subtitle: "A faster GPU kernel for Transformer layers",
  repo: "https://github.com/jazwinn/OptimizedTransformerLayer",
  image: TransformerImg,
  imageAlt:
    "Benchmark dashboard listing per-shape speedups, accuracy checks and token throughput",
  blurb:
    "A drop-in replacement for a PyTorch Transformer layer that produces the same answers and runs an order of magnitude faster. Self-attention is rewritten so the score matrix is built, masked, softmaxed and consumed entirely in on-chip memory — never round-tripping to global memory five times the way the reference does. Three complete kernels ship behind a host-side dispatcher: a tensor-core (WMMA) kernel, a scalar kernel for older cards, and a CUDA tile kernel for comparison.",
  detail:
    "An autonomous optimization loop then proposed, built and timed twenty-five further changes — kernel fusion, hand-written tensor-core GEMMs, skipping masked-out regions, and CUDA-graph capture — keeping only those where every shape still passed the accuracy check and no shape regressed more than 1%.",
  metrics: [
    { value: "10.04\u00d7", label: "geomean speedup" },
    { value: "46.9\u00d7", label: "best case" },
    { value: "1.7\u20135.8\u00d7", label: "vs. PyTorch SDPA" },
    { value: "0 / 14", label: "accuracy failures" },
  ] satisfies Metric[],
  tech: [
    "CUDA C++",
    "Tensor Cores",
    "WMMA",
    "PyTorch",
    "Kernel Fusion",
    "CUDA Graphs",
    "Nsight",
  ],
};

export const featured: Project[] = [
  {
    title: "InferenceEngine",
    tagline: "An LLM inference engine in C++20 and CUDA, with no ML libraries",
    description:
      "Chats with Llama 3.2 1B Instruct end to end from its Hugging Face checkpoint, with every layer written by hand: BPE tokenizer, grouped-query attention with RoPE and a KV cache, and a CUDA backend that runs the whole forward pass on the GPU. 7.3 tokens/s on a 6 GB laptop GPU, checked by 1,385 tests.",
    image: InferenceEngineImg,
    repo: "https://github.com/jazwinn/InferenceEngine",
    tech: ["C++20", "CUDA", "cuBLAS", "Transformers", "KV Cache", "BPE", "GoogleTest"],
  },
  {
    title: "Kos Engine 2.0",
    tagline: "3D game engine built from scratch in C++",
    description:
      "An ECS-architected engine with C++ scripting and custom compile-time reflection. Led as technical lead: defined the system architecture and built the scene manager, asset manager, video player and serialization layer.",
    image: GameEngine3DImg,
    repo: "https://github.com/jazwinn/Kos-Engine-2.0",
    tech: ["C++20", "ECS", "Reflection", "Engine Architecture"],
  },
  {
    title: "Relighting Studio",
    tagline: "Single-image de-lighting and virtual relighting at 100+ FPS",
    description:
      "Estimates metric depth from one photograph with YOLO26, unprojects it to a point cloud, derives normals, and strips the baked illumination into a flat albedo. Lights are then placed in 3D and the scene is deferred-shaded in GLSL with screen-space raymarched shadows — the network runs once, everything after is pure shader work.",
    image: RelightingImg,
    repo: "https://github.com/jazwinn/ImageLighting",
    tech: ["Python", "GLSL", "PyTorch", "Deferred Shading", "GGX", "OpenGL"],
  },
  {
    title: "OneShotSeg",
    tagline: "Segment and track any object from a single drawn box",
    description:
      "No training data, no labels, no fine-tuning. FastSAM proposes masks inside a user-drawn box, OSNet turns the chosen mask into a 512-d re-identification embedding, and every later frame is segmented and cosine-matched against that one reference — running in real time on a single consumer GPU.",
    image: OneShotSegImg,
    repo: "https://github.com/jazwinn/OneShotSeg",
    tech: ["Python", "FastSAM", "OSNet Re-ID", "PyTorch", "PyQt5", "NVDEC"],
  },
  {
    title: "OpenCV Push-up Counter",
    tagline: "Real-time form coaching from pose estimation",
    description:
      "A push-up assistant inspired by Singapore's ELISS machine. YOLO pose estimation feeds custom biomechanics logic that scores joint angles and depth, rejecting bad reps and giving immediate audio feedback on form.",
    image: PushUpImg,
    repo: "https://github.com/jazwinn/OpenCV-ELISS-PushUpCounter",
    tech: ["Python", "YOLO", "OpenCV", "Pose Estimation"],
  },
  {
    title: "Graphics Engine",
    tagline: "Real-time OpenGL renderer",
    description:
      "A custom 3D rendering library supporting point, spot and directional lighting with a hand-written GLSL shader pipeline, material system and scene graph.",
    image: GraphicsEngineImg,
    repo: "https://github.com/jazwinn/Graphics-Engine",
    tech: ["C++", "OpenGL", "GLSL", "Graphics Pipeline"],
  },
  {
    title: "Procedural Cave Generation",
    tagline: "Generating 3D cave systems that look carved, not random",
    description:
      "Binary space partitioning, Perlin noise and cellular automata combined to grow cave structures procedurally, then meshed with marching cubes and greedy meshing to keep the triangle count renderable.",
    image: CaveGenerationImg,
    repo: "https://github.com/jazwinn/Procedural-Cave-Generation",
    tech: ["C++20", "OpenGL", "Marching Cubes", "Perlin Noise"],
  },
];

export const smallerWorks: Project[] = [
  {
    title: "Stock Viewer Web App",
    tagline: "Prices, company news and AI-generated summaries",
    description:
      "A React and Tailwind front end over a Node.js backend that aggregates market APIs and summarises company news.",
    image: StockWebAppImg,
    repo: "https://github.com/jazwinn/React-Web-Stock-Viewer",
    tech: ["React", "Node.js", "Tailwind", "REST APIs"],
  },
  {
    title: "Inventory Manager",
    tagline: "Full-stack CRUD with a Spring Boot REST API",
    description:
      "Java and Spring Boot REST services backed by SQL, with a plain HTML/CSS/JavaScript front end.",
    image: InventoryManagerImg,
    repo: "https://github.com/jazwinn/Inventory-Web-Application",
    tech: ["Java", "Spring Boot", "MySQL", "REST"],
  },
  {
    title: "Kos Engine",
    tagline: "2D game engine with C# scripting",
    description:
      "The original ECS engine — C++ core, C# scripting layer and compile-time reflection, later rebuilt as Kos Engine 2.0.",
    image: GameEngine2DImg,
    repo: "https://github.com/jazwinn/Kos-Engine",
    tech: ["C++", "C#", "ECS"],
  },
  {
    title: "BVH Camera Culling",
    tagline: "Up to 5\u00d7 faster rendering and collision queries",
    description:
      "Bounding volume hierarchies, BSP and k-d trees compared head to head for scene traversal and view-frustum culling.",
    image: CameraCullingImg,
    repo: "https://github.com/jazwinn/Spatial-Data-Structure-using-Bounding-Volume-Hierarchy-BVH-",
    tech: ["C++", "BVH", "Spatial Data Structures"],
  },
  {
    title: "Document Reader",
    tagline: "Perspective-corrected document OCR",
    description:
      "Detects page boundaries, warps the document flat and converts the result to text with OpenCV.",
    image: DocumentReaderImg,
    repo: "https://github.com/jazwinn/OpenCV-Document-Reader",
    tech: ["C++", "OpenCV", "OCR"],
  },
];

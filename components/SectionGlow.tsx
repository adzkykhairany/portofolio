type SectionGlowProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  intensity?: "subtle" | "soft";
};

export default function SectionGlow({
  position = "top-right",
  intensity = "subtle",
}: SectionGlowProps) {
  const positions = {
    "top-left": "-left-40 -top-20",
    "top-right": "-right-40 -top-20",
    "bottom-left": "-left-40 -bottom-20",
    "bottom-right": "-right-40 -bottom-20",
  };

  const opacity =
    intensity === "soft"
      ? "rgba(217,119,6,0.12)"
      : "rgba(217,119,6,0.08)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${positions[position]} h-105 w-105 rounded-full blur-3xl`}
      style={{
        background: `radial-gradient(circle, ${opacity} 0%, rgba(245,158,11,0.03) 35%, transparent 70%)`,
      }}
    />
  );
}
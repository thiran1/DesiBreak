export default function StorySectionVisual({ visual }) {
  return (
    <div data-image-key={visual?.dataImageKey || "story-placeholder"} className="relative overflow-hidden bg-[#F6F1E7]">
      {visual?.image ? (
        <img src={visual.image} alt="" className="h-auto w-full object-contain" />
      ) : (
        <div className="flex h-[360px] items-center justify-center border border-[#1F5C3A]/10 bg-[linear-gradient(135deg,rgba(31,92,58,0.08),rgba(246,241,231,0.94),rgba(166,120,81,0.12))] md:h-[420px] lg:h-[440px]">
          <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#1F5C3A]/60">
            Story Image
          </span>
        </div>
      )}
    </div>
  );
}

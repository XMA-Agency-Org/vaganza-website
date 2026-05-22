import { LeafMark } from "../ui/logo";

/** Slim top bar carrying the brand's key reassurance message. */
export function AnnouncementBar() {
  return (
    <div className="bg-forest text-cream">
      <div className="container-x flex items-center justify-center gap-3 py-2 text-center">
        <LeafMark className="hidden h-3.5 w-3.5 text-sage-soft sm:block" />
        <p className="text-[0.74rem] font-medium tracking-[0.14em] uppercase">
          Complimentary, discreet delivery across the UAE
        </p>
        <LeafMark className="hidden h-3.5 w-3.5 text-sage-soft sm:block" />
      </div>
    </div>
  );
}

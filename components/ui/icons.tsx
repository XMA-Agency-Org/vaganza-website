/**
 * Icon set — thin, rounded line icons drawn to suit the soft, natural
 * Vaganza aesthetic. All inherit `currentColor`.
 */

import type { IconName } from "@/lib/content";

export type IconProps = React.SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const DropletIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.2c0 0-6.5 7-6.5 11.3a6.5 6.5 0 0 0 13 0C18.5 10.2 12 3.2 12 3.2Z" />
    <path d="M9 14.5a3 3 0 0 0 3 3" />
  </Base>
);

export const SparkleIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3c.6 4.4 1.6 5.4 6 6-4.4.6-5.4 1.6-6 6-.6-4.4-1.6-5.4-6-6 4.4-.6 5.4-1.6 6-6Z" />
    <path d="M18.5 14c.3 1.7.8 2.2 2.5 2.5-1.7.3-2.2.8-2.5 2.5-.3-1.7-.8-2.2-2.5-2.5 1.7-.3 2.2-.8 2.5-2.5Z" />
  </Base>
);

export const LeafIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 4C10.5 4 4 9.5 4 19c0 0 0 0 0 0C13.5 19 19.5 13.5 20 4Z" />
    <path d="M5.5 18.5C9 14 13 9 19 5" />
  </Base>
);

export const FeatherIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M19.5 4.5C12 4.5 6.5 9 6 17.5l-2 2M6.2 15h6.6M8.5 11.7h6.2M10.7 8.6h6" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.2 5 6v5.4c0 5 3 8.1 7 9.4 4-1.3 7-4.4 7-9.4V6l-7-2.8Z" />
    <path d="m9 11.6 2.2 2.2L15.4 9" />
  </Base>
);

export const TruckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.5 6.5h11v9.5h-11zM13.5 9.5h3.6l3.4 3.5v3h-7z" />
    <circle cx="6.5" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
  </Base>
);

export const HeartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20S3.8 14.5 3.8 8.9A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8.2 1.9C20.2 14.5 12 20 12 20Z" />
  </Base>
);

export const LockIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="4.8" y="10.5" width="14.4" height="9.7" rx="2" />
    <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
    <path d="M12 14.2v2.3" />
  </Base>
);

export const GiftIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 11.3h15v8.4a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1z" />
    <path d="M3 8.3h18v3H3zM12 8.3v12.4" />
    <path d="M12 8.3C10.5 4 6 4.5 6 7.3c0 1.6 3.6 1.6 6 1M12 8.3c1.5-4.3 6-3.8 6-1 0 1.6-3.6 1.6-6 1" />
  </Base>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.6 14.9 8.5 21.4 9.4 16.7 14 17.8 20.5 12 17.4 6.2 20.5 7.3 14 2.6 9.4 9.1 8.5Z" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const MinusIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15M13 5.5l6.5 6.5L13 18.5" />
  </Base>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </Base>
);

export const BagIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 8h12l1 12.2H5zM9 8V6.4a3 3 0 0 1 6 0V8" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 3.5h3.4l1.7 4.3-2.5 1.8a12.5 12.5 0 0 0 5.8 5.8l1.8-2.5 4.3 1.7V20a1.5 1.5 0 0 1-1.6 1.5A17.5 17.5 0 0 1 4.5 6.1 1.5 1.5 0 0 1 6 3.5Z" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Base>
);

export const WhatsappIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 20.5 5 16.4A8.5 8.5 0 1 1 8.2 19.6Z" />
    <path d="M9 9c0 4 2.5 6 5.5 6.3.7 0 1.2-.6 1.2-1.2v-.7l-2-1-1 1.1A6.4 6.4 0 0 1 10.7 11l1.1-1-1-2h-.7C9.5 8 9 8.4 9 9Z" />
  </Base>
);

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Base>
);

export const TiktokIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M13.5 3.5v10.8a3.4 3.4 0 1 1-3.4-3.4c.4 0 .7 0 1 .1M13.5 7.2A5.2 5.2 0 0 0 18.7 11" />
  </Base>
);

export const FacebookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 21v-7h2.3l.5-3h-2.8V9c0-.9.3-1.5 1.6-1.5h1.4V4.8A20 20 0 0 0 15.6 4.6c-2.4 0-4 1.5-4 4.1V11H9v3h2.6v7" />
  </Base>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M9.5 5.5C6 6.8 3.8 9.8 3.8 13.6c0 2.9 1.7 4.9 4.1 4.9 2.1 0 3.7-1.6 3.7-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.9.1-1 .1.3-1.7 1.9-3.6 3.8-4.5ZM19.5 5.5c-3.5 1.3-5.7 4.3-5.7 8.1 0 2.9 1.7 4.9 4.1 4.9 2.1 0 3.7-1.6 3.7-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.9.1-1 .1.3-1.7 1.9-3.6 3.8-4.5Z" />
  </svg>
);

/** Registry for content-driven icons (see lib/content.ts). */
export const iconRegistry: Record<IconName, (p: IconProps) => React.ReactElement> = {
  droplet: DropletIcon,
  sparkle: SparkleIcon,
  leaf: LeafIcon,
  feather: FeatherIcon,
  shield: ShieldIcon,
  truck: TruckIcon,
  heart: HeartIcon,
  lock: LockIcon,
  gift: GiftIcon,
};

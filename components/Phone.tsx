type Props = {
  /** Screenshot name in /public/screens, without extension */
  light: string;
  /** Optional true-black version shown when the visitor uses dark mode */
  dark?: string;
  alt: string;
  small?: boolean;
  priority?: boolean;
};

export default function Phone({ light, dark, alt, small, priority }: Props) {
  return (
    <div className={`phone${small ? " sm" : ""}`}>
      <picture>
        {dark && <source srcSet={`/screens/${dark}.webp`} media="(prefers-color-scheme: dark)" />}
        <img
          src={`/screens/${light}.webp`}
          alt={alt}
          width={540}
          height={1200}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      </picture>
    </div>
  );
}

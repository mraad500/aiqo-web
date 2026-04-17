"use client";

import type { ScreenAsset, PortraitAsset } from "@/lib/assets";
import { buildSrcSet } from "@/lib/assets";

type CommonProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  style?: React.CSSProperties;
};

/** Responsive <picture> driven by ScreenAsset. Browser picks AVIF → WebP. */
export function PictureScreen({
  asset,
  sizes = "(max-width: 768px) 60vw, 320px",
  priority = false,
  loading,
  fetchPriority,
  className,
  style,
}: CommonProps & { asset: ScreenAsset }) {
  const avifSet = buildSrcSet(asset.sources, "avif");
  const webpSet = buildSrcSet(asset.sources, "webp");
  return (
    <picture>
      <source type="image/avif" srcSet={avifSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSet} sizes={sizes} />
      <img
        src={asset.defaultWebp}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={loading ?? (priority ? "eager" : "lazy")}
        fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
        decoding="async"
        className={className}
        style={style}
        draggable={false}
      />
    </picture>
  );
}

/** Single <picture> for portrait/brand assets (no responsive widths). */
export function PictureBrand({
  asset,
  priority = false,
  loading,
  className,
  style,
  sizes,
}: CommonProps & { asset: PortraitAsset }) {
  return (
    <picture>
      <source type="image/avif" srcSet={asset.avif} sizes={sizes} />
      <source type="image/webp" srcSet={asset.webp} sizes={sizes} />
      <img
        src={asset.webp}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={loading ?? (priority ? "eager" : "lazy")}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={className}
        style={style}
        draggable={false}
      />
    </picture>
  );
}

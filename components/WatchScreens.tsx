"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────── Daily Goal screen ─────────────────────────── */

export function WatchDailyGoal({ percent = 33 }: { percent?: number }) {
  return (
    <div className="relative w-full h-full bg-black text-white" dir="ltr">
      {/* Status bar */}
      <div className="absolute top-2 inset-x-0 flex items-center justify-between px-3">
        <div className="flex items-center gap-1 opacity-70 pt-0.5">
          <span className="block w-1 h-1 rounded-full bg-white" />
        </div>
        <p
          className="font-bold tabular-nums"
          style={{ fontSize: "clamp(15px, 4.2vw, 22px)", color: "#FFFFFF" }}
        >
          6:00
        </p>
      </div>

      {/* Rings visualization */}
      <div className="absolute inset-0 flex items-start justify-center pt-[18%]">
        <div className="relative" style={{ width: "62%", aspectRatio: "1/1" }}>
          <RingsArt />
        </div>
      </div>

      {/* Percent + label */}
      <div className="absolute inset-x-0 bottom-[10%] text-center">
        <p
          className="font-bold tracking-tight text-white tabular-nums"
          style={{ fontSize: "clamp(32px, 10vw, 56px)", lineHeight: 1 }}
        >
          {percent}%
        </p>
        <p
          className="mt-1 font-semibold"
          style={{
            fontSize: "clamp(9px, 2.6vw, 14px)",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Daily Goal
        </p>
      </div>
    </div>
  );
}

function RingsArt() {
  // 3 concentric partial arcs + mint center dot — matches the native AiQo watch graphic.
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="ring1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8A7B4D" />
          <stop offset="1" stopColor="#BFA168" />
        </linearGradient>
        <linearGradient id="ring2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#4A5563" />
          <stop offset="1" stopColor="#6E7A8A" />
        </linearGradient>
      </defs>

      {/* Outer broken ring */}
      {[[96, 210, "url(#ring1)"], [84, 140, "#8A7B4D"]].map(([r, deg, col], i) => (
        <circle
          key={`o-${i}`}
          cx={100}
          cy={100}
          r={r as number}
          fill="none"
          stroke={col as string}
          strokeWidth={12}
          strokeLinecap="round"
          strokeDasharray={`${(deg as number) * 0.6} 1000`}
          transform={`rotate(${-60 + i * 40} 100 100)`}
        />
      ))}

      {/* Mid rings */}
      {[[70, 270, "url(#ring2)"], [64, 110, "#5A6473"]].map(([r, deg, col], i) => (
        <circle
          key={`m-${i}`}
          cx={100}
          cy={100}
          r={r as number}
          fill="none"
          stroke={col as string}
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray={`${(deg as number) * 0.55} 1000`}
          transform={`rotate(${-100 + i * 60} 100 100)`}
        />
      ))}

      {/* Inner mint arc */}
      <circle
        cx={100}
        cy={100}
        r={44}
        fill="none"
        stroke="#B7E5D2"
        strokeWidth={7}
        strokeLinecap="round"
        strokeDasharray="140 1000"
        transform="rotate(-30 100 100)"
      />
      <circle
        cx={100}
        cy={100}
        r={30}
        fill="none"
        stroke="#5ECDB7"
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray="100 1000"
        transform="rotate(20 100 100)"
      />

      {/* Center dot */}
      <circle cx={100} cy={100} r={8} fill="#5ECDB7" />
      <circle cx={100} cy={100} r={14} fill="none" stroke="#2A8B73" strokeWidth={1} />
    </svg>
  );
}

/* ─────────────────────────── Workouts list screen ─────────────────────────── */

const WORKOUTS = [
  { label: "Outdoor Walk", icon: "walk", tint: "#C9A664" },
  { label: "Outdoor Run", icon: "run", tint: "#B7E5D2" },
  { label: "Indoor Walk", icon: "walk", tint: "#C9A664" },
];

export function WatchWorkouts() {
  return (
    <div className="relative w-full h-full bg-black text-white px-[5%] pt-[9%]" dir="ltr">
      {/* Status bar */}
      <div className="absolute top-2 inset-x-0 flex items-center justify-end px-3">
        <p
          className="font-bold tabular-nums"
          style={{ fontSize: "clamp(15px, 4.2vw, 22px)" }}
        >
          6:00
        </p>
      </div>

      <h3
        className="font-bold text-center mt-4 mb-3"
        style={{ fontSize: "clamp(13px, 4vw, 18px)" }}
      >
        Workouts
      </h3>

      <div className="space-y-[6%]">
        {WORKOUTS.map((w, i) => (
          <motion.div
            key={w.label + i}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className="flex items-center gap-[4%] rounded-[18px] px-[4%] py-[3.5%]"
            style={{ background: "#1C1C1E" }}
          >
            <div
              className="shrink-0 flex items-center justify-center rounded-full"
              style={{
                width: "22%",
                aspectRatio: "1/1",
                background: w.tint,
              }}
            >
              <WorkoutIcon kind={w.icon as "walk" | "run"} />
            </div>
            <p
              className="font-semibold flex-1"
              style={{
                fontSize: "clamp(10px, 3vw, 14px)",
                color: "white",
              }}
            >
              {w.label}
            </p>
            <span
              aria-hidden
              className="opacity-60"
              style={{ fontSize: "clamp(10px, 3vw, 14px)" }}
            >
              ›
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkoutIcon({ kind }: { kind: "walk" | "run" }) {
  const common = {
    fill: "#0a0a0a",
    stroke: "#0a0a0a",
    strokeWidth: 0.8,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 32 32" className="w-[62%] h-[62%]">
      {kind === "walk" ? (
        <>
          <circle cx={18} cy={6} r={3} {...common} />
          <path
            d="M12 28 L14 20 L12 14 L16 10 L20 14 L22 20 L26 18"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 18 L13 24"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth={2.8}
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle cx={20} cy={5} r={3} {...common} />
          <path
            d="M8 26 L12 22 L10 16 L15 11 L21 14 L23 20 L28 19"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 18 L13 28"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth={2.8}
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

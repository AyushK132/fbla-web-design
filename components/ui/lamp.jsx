"use client";

import { motion } from "framer-motion";

const leaderboard = [
  { rank: 1, name: "ByteLord", xp: 14200, level: 21 },
  { rank: 2, name: "NeonFox", xp: 12850, level: 19 },
  { rank: 3, name: "StackGhost", xp: 11740, level: 18 },
  { rank: 4, name: "CodeRift", xp: 10320, level: 16 },
  { rank: 5, name: "NullX", xp: 9600, level: 15 },
];

export default function LeaderboardSection() {
  return (
    <section className="relative py-28 bg-[#05070f] text-white overflow-hidden">
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse opacity-30" />

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/30 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            GLOBAL LEADERBOARD
          </h2>
          <p className="mt-4 text-gray-400 tracking-widest uppercase text-sm">
            Skill · Speed · Consistency
          </p>
        </motion.div>

        {/* Leaderboard */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          {leaderboard.map((user, i) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative px-6 py-6 flex items-center justify-between border-b border-white/10 last:border-none"
            >
              {/* Scanline hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* Left */}
              <div className="flex items-center gap-5">
                {/* Rank Badge */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-lg
                    ${
                      user.rank === 1
                        ? "bg-yellow-400 text-black shadow-yellow-400/50"
                        : user.rank === 2
                        ? "bg-gray-300 text-black shadow-gray-300/50"
                        : user.rank === 3
                        ? "bg-orange-400 text-black shadow-orange-400/50"
                        : "bg-indigo-500/20 text-indigo-300"
                    }
                  `}
                >
                  #{user.rank}
                </div>

                {/* Name */}
                <div>
                  <p className="font-semibold tracking-wide">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Level {user.level}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right min-w-[160px]">
                <p className="font-bold text-indigo-300">
                  {user.xp.toLocaleString()} XP
                </p>

                {/* XP Bar */}
                <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(user.xp / 150, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 font-bold tracking-wide hover:scale-105 transition shadow-lg shadow-indigo-500/40">
            JOIN THE RANKS
          </button>
        </motion.div>
      </div>
    </section>
  );
}

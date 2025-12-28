import { motion } from "framer-motion";

/* ================= ICON DATA ================= */

const iconDataSets = {
  set1: [
    { emoji: "🍕", color: "#FFE5CC" },
    { emoji: "🍔", color: "#FFD6D6" },
    { emoji: "🍟", color: "#FFF2CC" },
    { emoji: "🌭", color: "#E6FFFA" },
    { emoji: "🍿", color: "#F0E5FF" },
  ],
  set2: [
    { emoji: "🍩", color: "#FCE4EC" },
    { emoji: "🧁", color: "#FFFDE7" },
    { emoji: "🍪", color: "#F3E5F5" },
    { emoji: "🍰", color: "#FFF3E0" },
    { emoji: "🍫", color: "#E8F5E9" },
  ],
  set3: [
    { emoji: "🍎", color: "#FFE0E0" },
    { emoji: "🍓", color: "#F8BBD0" },
    { emoji: "🍇", color: "#E1BEE7" },
    { emoji: "🍉", color: "#E8F5E9" },
    { emoji: "🍌", color: "#FFF9C4" },
  ],
};

/* ================= COMPONENT ================= */

const SmoothInfiniteScroll = ({ direction = "up" }) => {
  // 1️⃣ Combine all sets in order
  const combinedIcons = [
    ...iconDataSets.set1,
    ...iconDataSets.set2,
    ...iconDataSets.set3,
  ];

  // 2️⃣ Duplicate ONCE for infinite effect
  const infiniteIcons = [...combinedIcons, ...combinedIcons];

  // 3️⃣ Direction control
  const translateY =
    direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div
      style={{
        height: "300px",
        overflow: "hidden",
        width: "120px",
        borderRadius: "12px",
      }}
    >
      <motion.div
        animate={{ y: translateY }}
        transition={{
         duration: 90,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {infiniteIcons.map((item, index) => (
          <div
            key={index}
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              backgroundColor: item.color,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SmoothInfiniteScroll;

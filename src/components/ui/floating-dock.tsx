/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// Horizontally scrollable skill row for mobile. Always visible, no toggle.
const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex md:hidden overflow-x-auto gap-4 px-2 py-2",
        // Hide scrollbar cross-browser while keeping scroll functional
        "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center gap-1.5 flex-shrink-0"
        >
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center">
            <div className="h-5 w-5 flex items-center justify-center">
              {item.icon}
            </div>
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [showHint, setShowHint] = useState(true);
  const timer = useRef<NodeJS.Timeout>();
  const controls = useAnimation();
  useEffect(() => {
    // Capture timer ref at effect-start, not inside cleanup, to satisfy react-hooks/exhaustive-deps
    const t = timer.current;
    if (showHint) {
      controls.start({
        opacity: [0, 1, 1, 0],
        x: [-50, -50, 50, 50],
        transition: {
          duration: 2,
          repeatDelay: 2,
          delay: 2,
          times: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop();
    }
    return () => {
      controls.stop();
      clearInterval(t);
    };
    // controls is a stable Framer Motion animation controller; omitting intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showHint]);
  return (
    <div className="relative h-fit flex items-center justify-center pointer-events-auto">
      <motion.div
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
          setShowHint(false);
        }}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "hidden md:flex gap-2 md:gap-4",
          "mx-auto h-16 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
          // "blur-sm brightness-50",
          className
        )}
      >
        {items.map((item) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
      {showHint && (
        <div
          className="z-10 absolute t-0 w-full h-full pointer-events-none"
          onMouseEnter={() => setShowHint(false)}
        >
          <div
            className={cn(
              "relative w-full h-full flex items-center justify-center"
              // "backdrop-blur-md"
            )}
          >
            <motion.div
              className={cn(
                "w-5 h-5 border-2 left-[50%] top-0 border-black dark:border-white rounded-full",
                "translate-x-[-50px]"
              )}
              initial={{ opacity: 0, x: -50 }}
              animate={controls}
            ></motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

import Link from "next/link";
import { Plus } from "lucide-react";
import { useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export default function StickyButton() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, {amount: "all"})


  const entrySequence = [
    ["#container", { display: "flex"}, { duration: 0.01 }],
    ["#container", { scale: 1, width: '3.75rem' }, { ease: "easeInOut", duration: 0.5 }],
    ["#button", { scale: 2.5, opacity: 0.7 }, { ease: "easeInOut", at: "<", duration: 0.5 }],
    ["#button", { scale: 1, opacity: 1 }, { ease: "easeInOut", duration: 0.3 }],
    ["#icon", { opacity: 1 }, { ease: "easeInOut", at: "<", duration: 0.3 }],
    ["#container", { width: "16rem"}],
    ["#contents", { display: "block" }, { duration: 0.01 }],
    ["#contents", { opacity: 1 }],
  ]

  const exitSequence = [
    ["#contents", { opacity: 0 }],
    ["#button", { scale: 0 }, { ease: "backInOut", at: "<" }],
    ["#icon", { opacity: 0 }, { ease: "backInOut", at: "<" }],
    ["#contents", { display: "none" }, { duration: 0.01 }],
    ["#container", { width: '3.75rem' }, { duration: 0.25, ease: "circIn" }],
    ["#container", { scale: 0 }, { duration: 0.3, ease: "circIn" }]
  ]

  useEffect(() => {
    if (isInView) {
      console.log(isInView)
      animate(entrySequence)
    } else {
      animate(exitSequence)
    }
  }, [isInView])

  return (
    <div
      ref={scope}
      className="sticky top-[92vh] z-10 flex items-center"
    >
      <div id="container" className="hidden h-[3.5rem] pr-3 items-center justify-end bg-gray-300/20 backdrop-blur-md rounded-full scale-0">
        <div id="contents" className="hidden">
          <p className="text-sm font-bold pl-4 pr-3">深入 M4 系列芯片内部看看</p>
        </div>
        <Link id="button" href="/" className="group flex justify-center items-center bg-blue-500 rounded-full w-9 h-9 scale-0 opacity-0">
          <Plus id="icon" className="opacity-0 text-white/70 group-hover:text-white" width={30} />
        </Link>
      </div>
    </div>
  )
}
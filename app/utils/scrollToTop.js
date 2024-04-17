"use client";

export const ScrollToTop = () => {
  const sctollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={() => {
        sctollTop();
      }}
      className="fixed bottom-2 right-2 p-[40px] bg-black text-white"
    >
      scrollUp
    </button>
  );
};

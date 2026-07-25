import { useEffect, useState } from "react";

export function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 38,
  pause = 1600,
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setText("");
    setDeleting(false);
    setIndex(0);
  }, [words]);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    if (!deleting && text === current) {
      const id = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(id);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const id = setTimeout(
      () =>
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
        ),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(id);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient font-semibold">{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[3px] animate-pulse rounded-full bg-accent align-middle"
      />
    </span>
  );
}

import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <Link href="/projects">
      <button className="font-semibold text-lg mx-auto px-4 py-2 border-2 rounded-3xl animate-pulse">
        MY PROJECTS
      </button>
    </Link>
  );
};

export default CTA;

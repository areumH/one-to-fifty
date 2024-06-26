'use client';

import ColorSelector from "../Components/ColorSelector";

export default function Setting() {
  return (
    <div className="flex w-10/12 h-svh justify-center relative py-10">
      <div className="flex flex-col items-center gap-7">
        <div className="text-xl font-bold">COLOR</div>
        <div className="flex flex-col gap-5">
          <ColorSelector id={1} container="bg-blue-400" cell="bg-slate-100" />
          <ColorSelector id={2} container="bg-red-200" cell="bg-violet-200" />
          <ColorSelector id={3} container="bg-pink-200" cell="bg-yellow-100" />
        </div>
      </div>
    </div>
  );
}

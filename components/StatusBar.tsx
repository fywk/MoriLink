import { player } from "@/lib/config";

export default function StatusBar() {
  const today = new Date();

  return (
    <div className="flex items-center px-10 text-sm font-semibold tracking-normal text-bone">
      <div className="flex flex-grow items-center gap-x-2">
        <button
          className="flex h-6 w-10 transform items-center justify-center rounded-full bg-bone text-alabaster transition active:scale-90"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
        <span>{player.name}</span>
      </div>
      <div className="flex-none">
        <span className="place-self-end">
          {`${today.getDate()}/${today.getMonth() + 1}`}
        </span>
      </div>
    </div>
  );
}

import type { TrackedOrder } from "../data";

/**
 * Vertical delivery stepper. Events at or below `currentStep` are complete
 * (filled), the current one is ringed + pulsing, future ones are muted. A
 * colored connector links completed steps.
 */
export default function ShipmentTimeline({ order }: { order: TrackedOrder }) {
  const { timeline, currentStep } = order;

  return (
    <section className="overflow-hidden rounded-md bg-white ring-1 ring-black/5">
      <div className="border-b border-gray-100 px-5 py-3">
        <h2 className="text-[15px] font-semibold tracking-wide text-gray-700">Delivery Timeline</h2>
      </div>

      <ol className="px-5 py-4">
        {timeline.map((event, i) => {
          const isPast = i < currentStep;
          const isCurrent = i === currentStep;
          const isLast = i === timeline.length - 1;

          return (
            <li key={event.key} className="flex gap-4">
              {/* left rail: dot + connector */}
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full transition ${
                    isCurrent
                      ? "bg-shopee text-white ring-4 ring-shopee/20 animate-pulse"
                      : isPast
                        ? "bg-shopee text-white"
                        : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {isPast ? <CheckIcon /> : isCurrent ? <DotIcon /> : <span className="text-[10px] font-bold">{i + 1}</span>}
                </span>
                {!isLast && (
                  <span className={`w-0.5 flex-1 ${i < currentStep ? "bg-shopee" : "bg-gray-200"}`} />
                )}
              </div>

              {/* content */}
              <div className={`flex flex-col pb-6 last:pb-0 ${isLast ? "pb-0" : ""}`}>
                <p className={`text-sm font-medium ${isPast || isCurrent ? "text-gray-900" : "text-gray-400"}`}>
                  {event.label}
                </p>
                <p className={`text-xs ${isPast || isCurrent ? "text-gray-500" : "text-gray-300"}`}>
                  {event.date}
                </p>
                {event.description && (
                  <p className={`mt-0.5 text-xs ${isPast || isCurrent ? "text-gray-500" : "text-gray-300"}`}>
                    {event.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function DotIcon() {
  return <span className="h-1.5 w-1.5 rounded-full bg-white" />;
}

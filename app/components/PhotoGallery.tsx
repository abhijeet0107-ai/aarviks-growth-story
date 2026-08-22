"use client";

import { useState } from "react";
import type { PhotoEvent } from "../../lib/photos";

interface PhotoGalleryProps {
  events: PhotoEvent[];
}

export default function PhotoGallery({ events }: PhotoGalleryProps) {
  const [activeEvent, setActiveEvent] = useState(events[0]?.id ?? "");

  return (
    <section className="relative py-20 px-6 sm:py-28 max-w-6xl mx-auto">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-800 dark:text-amber-200">
          Moments &amp; Milestones
        </h2>

        {/* Event tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveEvent(event.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeEvent === event.id
                  ? "bg-amber-700 text-white border-amber-700 shadow-lg shadow-amber-200/50 dark:shadow-amber-900/30"
                  : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-amber-100 dark:border-amber-900/30 hover:border-amber-300 dark:hover:border-amber-700"
              }`}
            >
              {event.title}
            </button>
          ))}
        </div>

        {/* Active event */}
        {events.map((event) => {
          if (event.id !== activeEvent) return null;
          return (
            <div key={event.id} className="animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-amber-800 dark:text-amber-200">
                  {event.title}
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {event.date}
                </p>
                {event.caption && (
                  <p className="mt-4 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
                    {event.caption}
                  </p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {event.photos.length === 0 ? (
                  <div className="col-span-full text-center py-16 text-zinc-500 dark:text-zinc-400">
                    Photos coming soon for this event.
                  </div>
                ) : (
                  event.photos.map((photo, index) => (
                    <div
                      key={`${event.id}-${index}`}
                      className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-50 dark:border-amber-900/20 hover:-translate-y-1"
                    >
                      <div className="aspect-square overflow-hidden bg-amber-50 dark:bg-zinc-900">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.url}
                          alt={photo.caption || `${event.title} photo`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {photo.caption && (
                        <div className="p-4">
                          <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                            {photo.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

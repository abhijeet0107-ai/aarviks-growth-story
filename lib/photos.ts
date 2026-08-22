/**
 * Photo gallery data.
 *
 * HOW TO ADD PHOTOS OF A NEW EVENT
 * ---------------------------------
 * 1. Put your photos into the `public/photos/` folder on your computer.
 *    (Create it if it doesn't exist yet.)
 * 2. Add a new entry to the `events` array below with:
 *      - `id`     : a short unique slug (letters + dashes, e.g. "first-birthday")
 *      - `title`  : the name of the event (e.g. "First Birthday")
 *      - `date`   : the date of the event (e.g. "February 5, 2026")
 *      - `caption`: a one-line description of the event
 *      - `photos` : an array of photo objects.
 *                   Each photo `url` should be a path inside /public/photos/,
 *                   e.g. "/photos/first-birthday-01.jpg". `caption` is optional.
 * 3. Deploy to Vercel. The gallery automatically shows the new event.
 *
 * EXAMPLE
 * -------
 * {
 *   id: "first-birthday",
 *   title: "First Birthday",
 *   date: "February 5, 2027",
 *   caption: "One whole year of wonder, laughter, and love!",
 *   photos: [
 *     { url: "/photos/first-birthday-01.jpg", caption: "Blowing out the candle" },
 *     { url: "/photos/first-birthday-02.jpg" },
 *   ],
 * }
 */

export interface Photo {
  /** Path to the image, e.g. "/photos/first-birthday-01.jpg" */
  url: string;
  /** Optional short caption shown under the photo */
  caption?: string;
}

export interface PhotoEvent {
  /** Unique slug, e.g. "birthday" */
  id: string;
  /** Display name of the event, e.g. "Birthday" */
  title: string;
  /** Date of the event, e.g. "August 10, 2026" */
  date: string;
  /** Optional one-line description */
  caption?: string;
  /** List of photos for this event */
  photos: Photo[];
}

export const photoEvents: PhotoEvent[] = [
  {
    id: "arrival",
    title: "The Arrival",
    date: "February 5, 2026",
    caption: "The day Aarvik came into our world at Sitaram Bhartia Hospital, New Delhi.",
    photos: [
      { url: "/photos/arrival-01.jpg", caption: "Welcome to the world, little one" },
    ],
  },
  {
    id: "first-smile",
    title: "First Smile",
    date: "Spring 2026",
    caption: "Your first smile lit up the whole room.",
    photos: [
      { url: "/photos/first-smile-01.jpg", caption: "That infectious smile" },
    ],
  },
  {
    id: "first-festival",
    title: "First Festival",
    date: "Summer 2026",
    caption: "Celebrating your very first festival with family.",
    photos: [
      { url: "/photos/first-festival-01.jpg", caption: "Dressed up for the celebration" },
    ],
  },
];

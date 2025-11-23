import Image from "next/image";
import Link from "next/link";

interface ExploreCardProps {
  heading: string;
  description: string;
  link: string;
  imageSrc: string;
}

export default function ExploreCard({
  heading,
  description,
  link,
  imageSrc,
}: Readonly<ExploreCardProps>) {
  return (
    <Link href={link} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Image Container with Zoom Effect */}
        <div className="relative h-80 w-full overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={heading}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient to make text pop if image is light, or just for style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-col p-6">
          <h3 className="group-hover:text-primary-600 mb-3 text-xl font-bold text-gray-900 transition-colors">
            {heading}
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          {/* CTA Arrow that moves on hover */}
          <div className="text-primary-600 mt-auto flex items-center text-sm font-semibold">
            Learn more
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

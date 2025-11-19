import Link from "next/link";
import Image from "next/image";

type ExploreCardProps = {
  readonly heading: string;
  readonly description: string;
  readonly link: string;
  readonly imageSrc: string;
};

export default function ExploreCard({
  heading,
  description,
  link,
  imageSrc,
}: ExploreCardProps) {
  return (
    <Link
      href={link}
      className="bg-primary-800 flex h-100 w-80 flex-col rounded-2xl p-5 text-gray-100 shadow-2xl"
    >
      <div className="relative h-50 w-70 overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={heading} fill className="object-cover" />
      </div>

      <h2 className="mt-2 text-xl font-bold">{heading}</h2>
      <p className="mt-2">{description}</p>
    </Link>
  );
}

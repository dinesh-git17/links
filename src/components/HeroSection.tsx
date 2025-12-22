import Image from 'next/image';

import { AvatarGlow } from './AvatarGlow';
import { StatusIndicator } from './StatusIndicator';

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      {/* Avatar with gradient glow */}
      <div className="relative">
        <AvatarGlow />
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/10">
          <Image
            src="/avatar.jpg"
            alt="Dinesh - Senior Software Engineer"
            width={96}
            height={96}
            className="h-full w-full object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESExBhITQXHR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oADAMBAAIRAxEAPwC/1JqGp6VdWCrViVpI+1m+MBuTuDxn3zjGKLV//9k="
            priority
          />
        </div>
      </div>

      {/* Identity */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-white">Dinesh</h1>
        <p className="text-sm text-gray-400">
          Senior Software Engineer • Building Better Experiences
        </p>
      </div>

      {/* Status */}
      <StatusIndicator statusText="Online • Working on PassFX" />
    </section>
  );
}

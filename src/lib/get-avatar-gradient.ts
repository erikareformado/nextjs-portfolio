const AVATAR_GRADIENTS = [
  "from-violet to-teal",
  "from-coral to-mango",
  "from-teal to-violet",
  "from-mango to-coral",
  "from-violet to-mango",
  "from-teal to-coral",
];

export function getAvatarGradient(seed: string): string {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) | 0;
  }
  return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
}

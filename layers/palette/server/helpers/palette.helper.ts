import type { PaletteDto } from '../dtos/palette.dto';
import type { PaletteEntity } from '../entities/palette.entity';

export function mapPaletteEntityToDto(entity: PaletteEntity): PaletteDto {
  return {
    id: entity.id,
    colors: entity.colors,
    tags: entity.tags,
    name: entity.name,
    description: entity.description,
    likesCount: entity.likesCount,
    createdAt: entity.createdAt
  };
}

const descriptors = [
  'matching',
  'vibrant',
  'contrasting',
  'muted',
  'pastel',
  'strong',
  'soft',
  'colorful',
  'intense',
  'complementary',
  'balanced',
  'warm',
  'cold',
  'cool',
  'saturated'
];

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export function getHexPalettePrompt(): string {
  const shuffledDescriptors = shuffleArray(descriptors);
  const randDescriptor = shuffledDescriptors[0];
  const randDescriptor2 = shuffledDescriptors[1];

  let prompt = `Generate a list of unique hex color codes. I need a palette with ${randDescriptor} and ${randDescriptor2} colors, `;
  prompt += 'consisting of 4 hex codes. Please present them in a comma-separated list. ';
  prompt += 'Exclude the following hex codes: #FF0000, #00FF00, #0000FF, and #FFFF00. ';
  prompt += 'Aim for creative and interesting colors, avoiding typical or boring shades.';
  prompt += 'Only return the comma seperated list, nothing else.';

  return prompt;
}

export function getNamePalettePrompt(hexPalette: string[]): string {
  return `Name this color palette: ${hexPalette.join(',')}. Just give me the name, no quotes.`;
}

export function getCategorizePalettePrompt(hexPalette: string[]): string {
  let prompt = `Describe the following color palette: ${hexPalette.join(',')}. `;
  prompt += 'Give me 2-6 words in a comma-separated list. No quotes, no descriptions, just the words.';
  return prompt;
}

export function getDescribePalettePrompt(hexPalette: string[]): string {
  return `Give me a short description (maximum 2 sentences) of this color palette: ${hexPalette.join(',')}.`;
}

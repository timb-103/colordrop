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

export function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export function getHexPalettePrompt(idea: string[]): string {
  let prompt = `Generate a list of matching hex color codes based on these keywords: ${idea.join(',')}, `;
  prompt += 'consisting of 4 hex codes. Please present them in a comma-separated list. ';
  prompt += 'The hex codes must be in order from darkest to lightest with not too much difference between them.';
  prompt += 'The hex codes must look good next to each other.';
  prompt += 'Don\'t be creative. Don\'t use really bright colors.';
  prompt += 'Only return the comma seperated list, nothing else.';

  return prompt;
}

export function getNamePalettePrompt(idea: string[], hexCodes: string): string {
  let prompt = `Give me a color palette name for these keywords "${idea.join(',')}" with these hex codes: "${hexCodes}". Don't be too creative.`;
  prompt += 'ALWAYS include a color in the name from one of the hex codes.';
  prompt += 'The name must be 2 words unless the color is a two words in that case it can be 3 words.';
  prompt += 'Only return the name, no quotes.';

  return prompt;
}

export function getCategorizePalettePrompt(hexPalette: string[]): string {
  let prompt = `Describe the following color palette: ${hexPalette.join(',')}. `;
  prompt += 'Give me 2-6 words in a comma-separated list. No quotes, no descriptions, just the words.';
  return prompt;
}

export function getDescribePalettePrompt(hexPalette: string[]): string {
  return `Give me a short description (maximum 2 sentences) of this color palette: ${hexPalette.join(',')}.`;
}

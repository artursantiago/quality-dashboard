import * as ALL_COVERS from 'assets/cover';

const COVERS_ARRAY = Object.values(ALL_COVERS);

export function mockImgCover(index: number): string {
  return COVERS_ARRAY[index];
}

import { dependencySatisfies, macroCondition } from '@embroider/macros';

let ecRange;

if (macroCondition(dependencySatisfies('ember-concurrency', '^1.0.0'))) {
  ecRange = '^1.0.0';
} else {
  ecRange = '*not* ^1.0.0';
}

export const range = ecRange;

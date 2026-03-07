import fs from 'node:fs/promises';
import path from 'node:path';
import * as p from '@clack/prompts';
import {allComponents, type ComponentAnatomyName} from '@zag-js/anatomy-icons';
import {renderToString} from 'react-dom/server';
import svgson from 'svgson';

const workspaceRoot = path.resolve(path.dirname('../..'));
const outputDir = path.join(workspaceRoot, 'website/src/components/icons/anatomy');

export async function generateAnatomyIcons() {
  const spinner = p.spinner();

  spinner.start('Generating anatomy icons...');

  const keys = Object.keys(allComponents) as ComponentAnatomyName[];

  const filenames: string[] = [];
  const promises: Promise<void>[] = [];

  for (const key of keys) {
    const jsx = await allComponents[key]({accentColor: '#4a4186'});
    const svg = renderToString(jsx);
    const filename = `${kebabToPascalCase(key)}AnatomyIcon.svelte`;
    const content = await svgToSvelteComponent(svg);
    const promise = fs.writeFile(path.join(outputDir, filename), content, 'utf-8');

    promises.push(promise);
    filenames.push(filename);
  }

  promises.push(createBarrelFile(filenames));

  await Promise.all(promises);
  spinner.stop('Anatomy icons generated successfully!');
}

async function createBarrelFile(filenames: string[]) {
  const content = filenames
    .toSorted((a, b) => a.localeCompare(b))
    .map((filename) => {
      const basename = filename.split('.')[0];
      const exportName = `${kebabToPascalCase(basename)}`;

      return `export {default as ${exportName}} from './${filename}';\n`;
    })
    .join('');

  await fs.writeFile(path.join(outputDir, 'index.ts'), content, 'utf-8');
}

function kebabToPascalCase(str: string) {
  return str
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
}

async function svgToSvelteComponent(html: string) {
  const node = await svgson.parse(html, {
    transformNode(node) {
      if (node.name === 'svg') {
        return {
          ...node,
          attributes: {
            ...node.attributes,
            $$props: '',
          },
        };
      }

      return node;
    },
  });

  const svelteSvg = svgson.stringify(node, {
    transformAttr(key, value, esc) {
      return key === '$$props' ? '{...props}' : `${key}="${esc(value)}"`;
    },
  });

  return `<script lang="ts">\nimport type {SVGAttributes} from 'svelte/elements';\nlet {...props} : SVGAttributes<SVGSVGElement> = $props();\n</script>\n${svelteSvg}`;
}

await generateAnatomyIcons();

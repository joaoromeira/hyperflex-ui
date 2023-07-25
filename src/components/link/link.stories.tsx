import { StoryFn } from '@storybook/react';

import { Link as LinkComponent } from './link';
import { LinkProps } from './link.types';

export default {
  title: 'Components/Link',
  argTypes: {
    variant: {
      options: [
        'display1',
        'display2',
        'display3',
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'body2',
        'caption',
      ],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
};
const Template: StoryFn = (args: LinkProps) => {
  return (
    <LinkComponent
      {...args}
      href={args.href ?? 'https://github.com/joaoromeira/hyperflex-ui'}
    >
      Link
    </LinkComponent>
  );
};

export const Link = Template.bind({});

Link.args = {
  disabled: false,
  variant: 'body2',
  href: 'https://github.com/joaoromeira/hyperflex-ui',
};

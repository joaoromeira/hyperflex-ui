import { styled, css } from '@mui/material/styles';
import { StoryFn, Meta } from '@storybook/react';

import { withUtility } from '../../utils';
import { TOKENS_DARK } from './tokens';
import { Tokens } from './tokens.types';

export default {
  title: 'Foundation/Palette',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
    viewMode: 'canvas',
  },
} as Meta;

const Value = styled('div')<{ value: keyof Tokens }>(
  withUtility(
    ({ palette }, { value }) => css`
      width: 30px;
      height: 30px;
      background-color: ${palette(value)};
      border-radius: 50%;
    `
  )
);

const Template: StoryFn = () => {
  return (
    <table>
      <tbody>
        {Object.keys(TOKENS_DARK).map((key: string) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>
                <Value value={key as keyof Tokens} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const Palette = Template.bind({});

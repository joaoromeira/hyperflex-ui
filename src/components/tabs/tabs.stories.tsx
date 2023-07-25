import Box from '@mui/material/Box';
import { useArgs } from '@storybook/client-api';
import { StoryFn, Meta } from '@storybook/react';

import { Tabs as TabsComponent, Tab } from './tabs';
import { TabsProps } from './tabs.types';

export default {
  title: 'Components/Tabs',
  argTypes: {
    value: {
      options: [0, 1, 2],
      control: {
        type: 'select',
      },
    },
    centered: {
      control: {
        type: 'boolean',
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
} as Meta;

const Template: StoryFn<TabsProps> = (args) => {
  const [{ value = 0 }, updateArgs] = useArgs();

  const handleOnChange = (_event: unknown, value: number) =>
    updateArgs({ value });

  const getPanel = () => {
    switch (true) {
      case value === 0:
        return <div>Panel one</div>;
      case value === 1:
        return <div>Panel two</div>;

      default:
        return <div>Panel three</div>;
    }
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabsComponent onChange={handleOnChange} value={value} {...args}>
          <Tab label="One" />
          <Tab label="Two" />
          <Tab label="Three" />
        </TabsComponent>
      </Box>
      <Box paddingTop={4}>{getPanel()}</Box>
    </>
  );
};

export const Tabs = Template.bind({});

Tabs.args = {};

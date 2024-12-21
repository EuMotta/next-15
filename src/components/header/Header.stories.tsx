import type { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingTitle, HeadingSubtitle } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Components/Common/Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    center: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    center: false,
    children: (
      <>
        <HeadingTitle>Título Principal</HeadingTitle>
        <HeadingSubtitle>Este é o subtítulo</HeadingSubtitle>
      </>
    )
  }
};

export const Centered: Story = {
  args: {
    center: true,
    children: (
      <>
        <HeadingTitle>Título Centralizado</HeadingTitle>
        <HeadingSubtitle>Este subtítulo está centralizado</HeadingSubtitle>
      </>
    )
  }
};

export const WithoutSubtitle: Story = {
  args: {
    center: false,
    children: <HeadingTitle>Título Sem Subtítulo</HeadingTitle>
  }
};

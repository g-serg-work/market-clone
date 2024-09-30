import { CSSProperties } from 'react';
import { Story } from '@storybook/react';

export const StyledDecorator =
    (style: CSSProperties) => (StoryComponent: Story) =>
        (
            <div style={style}>
                <StoryComponent />
            </div>
        );

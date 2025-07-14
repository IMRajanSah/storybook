import { CopyToClipboard } from './CopyToClipboard';

export default {
  title: 'Components/CopyToClipboard',
  component: CopyToClipboard,
};

export const Basic = () => (
  <CopyToClipboard text="Hello World!" />
);

export const CustomTooltip = () => (
  <CopyToClipboard text="secret-token-123" tooltipText="Token copied!" />
);

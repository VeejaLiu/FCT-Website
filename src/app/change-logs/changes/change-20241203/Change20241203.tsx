import { Image, MarkdownRender } from '@douyinfe/semi-ui';
import golden_player from '../../assets/changelogs/20241203/golden_player.webp';

export function Change20241203() {
  const rawString = `
# New Feature: **🏅 Golden player.**

## 2024-12-03

I often wonder who the most promising players are in my team for a specific position, and who currently has the highest ability rating.

This feature sets a gold medal marker for the player with the highest ability or potential in a specific position, making it easy for you to notice them quickly.

In fact, we will set markers for the top three players in a position, which are gold, silver, and bronze medals.
`;

  return (
    <div style={{ width: '90%' }}>
      <MarkdownRender raw={rawString} />
      <Image width={800} src={golden_player} />
    </div>
  );
}

export default Change20241203;

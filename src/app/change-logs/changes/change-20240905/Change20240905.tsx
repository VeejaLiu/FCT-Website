'use client';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function Change20240905() {
  const rawString = `
# First version:

## 2024-09-05
**Maximize Your FC24 Manager Career Mode with Comprehensive Player Insights**

Elevate your gaming experience in FC24 Manager career mode by leveraging our powerful tools designed to support both player lists and player trends. Our solution is essential for dedicated managers aiming to build a winning team.

### Key Features of Our FC24 Player Insights Tool:

- **Extensive Player List**:

  Gain access to an exhaustive list of all players within your team. Our user-friendly interface allows you to easily view crucial player information, including:
    - **Name**: Identify players with ease.
    - **Avatar**: Visual representation for quick recognition.
    - **Position**: Understand each player's role on the field.
    - **Player ID**: Unique identifiers for seamless tracking.
    - **Age**: Evaluate the experience and potential longevity of each player.
    - **Overall Rating**: Assess the current skill level of players.
    - **Potential Rating**: Discover the future capabilities of your players, aiding in long-term team strategy.

- **Dynamic Player Trends**:
  Stay ahead of the competition by analyzing player performance trends over time. Our tool provides:
    - **Overall Rating Trends**: Track how players’ skills evolve throughout their careers.
    - **Potential Rating Trends**: Monitor the potential growth of players, helping you make strategic decisions about training and transfers.
    - **Automatic Tracking**: Our system automatically updates player statistics, ensuring you have the most current data at your fingertips.

### System Requirements

To utilize these powerful features, you will need the **FC24 Live Editor** and **LUA scripting** capabilities. These tools enable real-time data updates and integration, ensuring a seamless experience while managing your team.

### Why Choose Our Tool?

With the competitive landscape of FC24, having access to in-depth player analytics is crucial for success. Whether you’re managing a budding squad or a seasoned team, understanding player dynamics can significantly impact your gameplay strategy and outcomes. Our tool empowers you to make informed decisions, ultimately leading to enhanced performance in career mode.

### Conclusion

Transform your FC24 Manager career mode with our advanced player insights. By utilizing our player list and trend analysis, you can strategically build and manage your team for optimal results. Don’t just play—dominate the game!
`;

  return (
    <div style={{ width: '90%' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{rawString}</ReactMarkdown>
      <Image
        width={800}
        height={400}
        src="/changelogs/20240905/player_list.webp"
        alt={'player list, Support FC24 and FC25 Manager career mode'}
      />
      <Image
        width={800}
        height={400}
        src="/changelogs/20240905/player_trends.webp"
        alt={'player trends, Support FC24 and FC25 Manager career mode'}
      />
    </div>
  );
}

export default Change20240905;

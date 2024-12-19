import Image from "next/image";
import './page.css';

const images = [
  {
    src: "/feature/multi_version.png",
    title: "Multi-Version Support",
    paragraph:
      "Our application provides robust support for multiple game versions, including FIFA 24 and FIFA 25. Easily select the version you're playing to start tracking your players' performance and data in FC24/FC25 Manager Career Mode.",
  },
  {
    src: "/feature/automated_efficiency.png",
    title: "Experience Fully Automated Efficiency",
    paragraph:
      "Import the code just once and say goodbye to tedious manual input—streamline your processes effortlessly! Our application automatically fetches player data from the game and updates it in real-time, saving you time and effort in your FC24/FC25 Manager Career.",
  },
  {
    src: "/feature/player_trends.png",
    title: "Player Trends",
    paragraph:
      "The Player Trends page tracks changes in players' overall ratings and potential over time. This insight helps you monitor player growth and make informed decisions about their development and game time in your FC24/FC25 Manager Career.",
  },
  {
    src: "/feature/player_list.png",
    title: "Player List Page",
    paragraph:
      "The Player List Page allows you to effortlessly view players' ages, overall ratings, and potential. This feature is essential for deciding which players to develop for the next season. Additionally, the 'Gold Players' feature awards gold, silver, and bronze medals to the top three players in each position, highlighting the most valuable talents to nurture in your FC24/FC25 Manager Career.",
  },
  {
    src: "/feature/player_detail.png",
    title: "Player Details",
    paragraph:
      "The Player Details page offers in-depth information about each player, including attribute values. Analyze a player's growth trend to strategize their future development in your FC24/FC25 Manager Career.",
  },
  {
    src: "/feature/notifications.png",
    title: "Notifications",
    paragraph:
      "Our Notifications feature alerts you whenever your players make progress in their attributes, potential, or ratings. Stay updated on player development to make timely decisions in your FC24/FC25 Manager Career.",
  },
  {
    src: "/feature/settings.png",
    title: "Settings",
    paragraph:
      "The Settings page allows you to customize your application experience. Enable or disable notifications, reset your secret key, and manage other preferences tailored to enhance your FC24/FC25 Manager Career.",
  },
  {
    src: "/feature/get_started.png",
    title: "Get Started",
    paragraph:
      "The Get Started page provides a quick guide to using the application and its dependencies. Set up your account, select your game version, and begin tracking your players' data in FC24/FC25 Manager Career Mode effortlessly.",
  },
  {
    src: "/feature/multi_language.png",
    title: "Multi-Language Support",
    paragraph:
      "The application supports multiple languages, including English and Chinese. Switch between languages for a personalized experience, and contribute to the application's translation to enhance accessibility for all FC24/FC25 Manager Career enthusiasts.",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      {/* Basic Information Section */}
      <div className="mb-8 p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <p className="mb-2">
          fccareer.top is a web application designed to help you manage and
          track your players' growth in FIFA/FC Manager Career Mode. It
          automates the data collection process and provides various features to
          enhance your gaming experience.
        </p>
        <p className="mb-2">
          Supported EA FC 24 and EA FC 25.
        </p>
      </div>

      {/* Feature Section */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex items-center justify-between w-full mb-8 p-6 rounded-lg shadow-lg ${
            index % 2 === 0
              ? "flex-row bg-gradient-to-r from-blue-500 to-purple-500"
              : "flex-row-reverse bg-gradient-to-r from-green-500 to-teal-500"
          }`}
        >
          <div className="relative mt-4 cursor-pointer">
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={800}
              height={400}
              style={{ borderRadius: "10px", border: "1px solid #333" }}
              tabIndex={0} // Make the div focusable
            />
          </div>
          <div className={`w-1/2 p-4 text-white`}>
            <h1 className="text-3xl font-bold title">{image.title}</h1>
            <p className="mt-2 text">{image.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

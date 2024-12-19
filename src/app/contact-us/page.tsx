// src/app/contact/page.tsx
import JoinDiscord from "@/app/contact-us/JoinDiscord";
import JoinGithub from "@/app/contact-us/JoinGithub";
import JoinIns from "@/app/contact-us/JoinIns";
import JoinTwitter from "@/app/contact-us/JoinTwitter";

function ContactUsPage() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 mt-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Github</h2>
            <p className="mt-2 text-gray-600">
              <JoinGithub />
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Discord</h2>
            <p className="mt-2 text-gray-600">
              <JoinDiscord />
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-gray-600">
              <a href={"mailto:support@fccareer.top"} title="Click to email us">
                support@fccareer.top
              </a>
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Instagram</h2>
            <p className="mt-2 text-gray-600">
              <JoinIns />
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Twitter</h2>
            <p className="mt-2 text-gray-600 ml-4">
              <JoinTwitter />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;

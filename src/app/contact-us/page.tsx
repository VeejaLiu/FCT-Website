// src/app/contact/page.tsx

function ContactUsPage() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 mt-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Github</h2>
            <p className="mt-2 text-gray-600">
              {/* <JoinGithub /> */}
              <a
                href="https://github.com/VeejaLiu/FIFA-Career-Dashboard-Frontend"
                title="Click to visit our Github"
                target="_blank"
              >
                VeejaLiu/FIFA-Career-Dashboard-Frontend
              </a>
            </p>
          </div>

          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Discord</h2>
            <p className="mt-2 text-gray-600">
              {/* <JoinDiscord /> */}
              <a
                href="https://discord.gg/aKfWAtbJ8F"
                title="Click to join our Discord"
                target="_blank"
              >
                https://discord.gg/aKfWAtbJ8F
              </a>
            </p>
          </div>

          <div className="card bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-gray-600">
              <a
                href="mailto:support@fccareer.top"
                title="Click to email us"
                target="_blank"
              >
                Mail: support@fccareer.top
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;

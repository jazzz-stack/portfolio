import revio from "../assets/images/revio.webp";
import pepsico from "../assets/images/pepsico.png";
import aer_customer from "../assets/images/aer_customer.png";
import aer_driver from "../assets/images/aer_driver.png";
import provider from "../assets/images/provider.png";
import customer from "../assets/images/customer.png";
import ecomnow from "../assets/images/ecomnow.png";
import boxpro from "../assets/images/boxpro.webp";

export const Projects = () => {
  const projects = [
    {
      name: "Rev.IO FSA",
      period: "04/2024 - Present",
      location: "USA",
      image: revio,
      description: [
        "Enhanced app performance by 30-40% through optimization and code refactoring. Implemented On-Prem user accounts, signature capture functionality, and robust unit tests, reducing production bugs by 50%.",
        "Spearheaded the development of new features, cross-platform functionalities, and real-time notifications, resulting in a 70% increase in user engagement.",
        "Published the app on the App Store and Play Store.",
        "Streamlined fieldwork with offline tools for managing tickets, contacts, and opportunities, featuring CRM access, auto-sync, and dispatch tracking.",
      ],
    },
    {
      name: "PepsiCo - MiNegocio+",
      period: "07/2022 - 04/2024",
      location: "USA",
      image: pepsico,
      appLink:
        "https://play.google.com/store/apps/details?id=com.pepsicoconsumer.minegocio",
      description: [
        "Enhanced digital ordering and profile management with OKTA integration, which increased order accuracy by 40% and customer satisfaction by 25%.",
        "Provided over 6 training sessions to troubleshoot bugs and crash issues.",
        "Provided 24/7 support to the client to resolve issues, resulting in a 20% reduction in app crashes.",
      ],
    },
    {
      name: "AER Electric Ride-Share",
      period: "03/2022 - 06/2022",
      location: "Chandigarh",
      image: aer_customer,
      appLink: "https://apps.apple.com/in/app/a-e-r/id1615394811",
      description: [
        "Led the front-end development, designing user-friendly interfaces and ensuring seamless app navigation.",
        "Implemented Ride Booking & Tracking Features: that allows user to book a ride instantly, and the app enables real-time tracking of the driver's arrival at the specified location.",
        "Scheduled Rides: The app allows users to schedule rides for a future time, ensuring convenience and planning flexibility.",
      ],
    },
    {
      name: "AER Ride-Share Driver",
      period: "03/2022 - 06/2022",
      location: "Chandigarh",
      image: aer_driver,
      appLink: "https://apps.apple.com/in/app/a-e-r/id1615394811",
      description: [
        "Utilized the app for cross-platform development, implemented real-time driver tracking with Google Maps API, and ensured secure user authentication using Firebase.",
        "Implemented a ride rating system: After completing a trip, users can rate their driver and overall ride experience, thereby improving service quality.",
        "Added Agora.io SDK for real-time voice calling to connect with customers.",
        "Implemented onboarding features for driver partners, including a simple background screening process to ensure a quick and hassle-free start.",
      ],
    },
    {
      name: "Direct Paramed Provider",
      period: "03/2022 - 06/2022",
      location: "USA",
      image: provider,
      appLink:
        "https://apps.apple.com/in/app/direct-paramed-provider/id1608493398",
      description: [
        "Implemented Onboarding features that allows user to upload certifications to apply; resources for quick phlebotomy certification are available. Approval takes 3-7 days from admin panel.",
        "Integrated navigation, automatic status updates, real-time tracking, and customer preferences for specific providers.",
        "Implemented real-time voice calling feature using Agora.io SDK to connect with customers, enhancing communication and support.",
        "Worked on Flexible On-Demand Services for Providers to receive service requests within 30 miles, with details on pay and location, and can cancel if unsafe.",
      ],
    },
    {
      name: "Direct Paramed Customer",
      period: "03/2022 - 06/2022",
      location: "USA",
      image: customer,
      appLink:
        "https://apps.apple.com/in/app/direct-paramed-customer/id1608482853",
      description: [
        "Worked on app enhancement and achieved a 20% reduction in booking time with optimized APIs, resulting in a 4.8/5 average user rating on the app store.",
        "Implemented a rating system for providers to rate customers and vice versa, ensuring quality service and accountability.",
      ],
    },
    {
      name: "eComNow",
      period: "06/2021 - 08/2021",
      location: "India",
      image: ecomnow,
      appLink: "https://ecomnow.org/ecom-now-connect/",
      description: [
        "Led the mobile and web team to achieve the goal using React & React Native technology.",
        "The outcome of the successful delivery was 20% of company growth.",
      ],
    },
    {
      name: "Box Pro fitness",
      period: "12/2020 - 02/2021",
      location: "Lucknow",
      image: boxpro,
      appLink:
        "https://apkpure.com/box-pro-fitness/com.boxpro.fitness/download/",
      description: [
        "I successfully implemented all the project requirements independently and resolved all existing bugs, ensuring a smooth and efficient workflow.",
        "Delivered the product to the client successfully, causing the client to be very happy, and he gave a 10% bonus amount to the company.",
        "The target deadline was 6 months, but I delivered the project within 3 months.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                project.appLink ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (project.appLink) {
                  window.open(project.appLink, "_blank");
                }
              }}
            >
              <div className="flex gap-4 mb-4">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-20 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-blue-600">
                    {project.name}
                  </h3>
                  <p className="text-gray-600">{project.period}</p>
                  <p className="text-gray-500">{project.location}</p>
                </div>
              </div>
             
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

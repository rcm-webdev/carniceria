import Marquee from "../components/Marquee";

const Welcome = () => {
  const businessHours = [
    { day: "Monday", hours: "8:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
    { day: "Friday", hours: "8:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "7:00 AM - 8:00 PM" },
  ];

 

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#ED213A] to-[#93291E]" />
      <div className="relative w-full">
        <Marquee />
        <div className="w-full px-4 py-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl justify-center items-center">
              <div className="mb-8">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={120} 
                  height={120} 
                  viewBox="0 0 512 512"
                  className="mx-auto text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <path fill="currentColor" d="M151.22 61.008c-45.151 7.449-99.44 35.085-131.642 54.097V297.21c5.34 7.523 13.07 12.906 24.904 17.07c5.308 1.868 11.417 3.433 18.221 4.783c-21.112-27.026-26.391-50.921-21.297-79.236l17.715 3.192c-6.724 34.584 13.695 64.344 34.152 77.013l7.15 4.37l2.407 3.814c9.482 17.063 28.034 25.752 51.426 41.152l9.723 6.403l-8.645 7.798c-9.834 8.873-17.062 16.44-18.367 26.559l-1.592 12.342l-24.098-11.545c-11.192 12.316-20.47 25.593-27.652 40.025c10.977 6.704 36.525 19.136 49.105 16.346c32.21-21.813 59.517-67.5 71.09-97.953c-6.484-24.65-21.778-46.56-40.277-70.047l-4.1-5.205c4.853-7.592 11.429-14.973 18.084-19.31c26.259-20.873 35.437-38.189 37.44-53.362c.675-21.155-6.159-35.841-14.106-53.04l16.34-7.55c9.207 20.935 17.712 44.638 15.611 62.947c-1.68 12.732-7.198 25.876-17.857 39.399c9.34-1.382 16.555-2.574 25.883-4.121l.262 10.343c.44 17.375 1.668 24.569 15.748 49.57l1.554 2.763l-8.457 51.103c7.432 10.524 20.33 11.513 30.994 10.781c25.144-26.855 42.492-57.16 57.1-89.058c-8.896-1.83-15.986-6.023-20.451-11.895c-5.026-6.609-6.408-14.801-5.057-22.137c2.702-14.67 16.832-27.65 34.66-25.044l-.304-.04c4.278.478 8.63.829 13.035 1.09c-42.222-45.878-38.747-104.57-74.713-138.82c-37.98-22.166-89.34-36.372-133.988-36.701zm299.657 133.017c-25.974 8.19-52.938 16.89-80.334 23.028a3126 3126 0 0 1 8.764 18.293c29.023-10.805 51.564-25.555 71.57-41.32zm19.978 55.053c-40.912 3.884-85.203 8.795-125.962 4.25l-.153-.017l-.152-.022c-8.297-1.213-13.24 4.437-14.356 10.494c-.557 3.029-.034 5.724 1.684 7.983c1.688 2.22 4.886 4.52 11.58 5.46c52.566 1.922 92.792-11.677 127.36-28.148zm-163.32 43.738c4.068-.076 9.831 6.07 9.94 9.87c.123 4.33-4.278 13.351-12.106 22.978c-2.335-8.081-8.27-32.478 2.166-32.848m-13.96 64.67l-19.882 19.58s-2.011-12.095 1.621-16.068c6.037-2.969 12.016-3.867 18.26-3.512zm-44.636 38.348l-11.55 35.494s-12.831-12.815-20.018-10.535c-12.026 3.815-17.207 33.71-17.207 33.71l-23.176-9.13s3.691 28.627 14.748 34.416c15.559 8.145 51.621-10.535 51.621-10.535s1.372 21.203 9.483 23.176c15.088 3.669 35.467-30.2 35.467-30.2s36.32 34.765 51.972 23.88c14.938-10.39 2.14-52.38-4.103-54.432c-7.744-2.546-16.676 17.888-16.676 17.888s-10.826-24.025-22.063-27.017c-9.81-2.613-28.445 10.885-28.445 10.885l5.393-31.528c-3.305-.031-6.567-.272-9.77-.781l-10.37 29.932l4.347-31.245c-3.373-.936-6.912-2.436-9.653-3.978M84.4 398.047c-11.613 11.065-20.069 23.628-27.237 37.137c3.725 1.954 7.425 4.1 11.086 6.3c7.066-13.88 15.86-26.738 26.148-38.648z"></path>
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center">La Ranchera Market</h1>
              <p className="py-4 text-base sm:text-lg md:text-xl text-yellow-400 text-center">Your authentic Mexican meat shop and restaurant, bringing the finest cuts and traditional flavors to your table.</p>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mt-8">
                {/* Hours Card */}
                <div className="stats bg-white bg-opacity-90 shadow hover:scale-105 transition-transform w-full md:w-auto">
                  <div className="stat p-3 sm:p-4">
                    <div className="stat-title text-gray-700 text-base sm:text-lg font-semibold mb-2">Business Hours</div>
                    <div className="flex flex-col gap-1">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
                          <span className="font-medium text-gray-700">{schedule.day}</span>
                          <span className="text-gray-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact & Location Card */}
                <div className="stats bg-white bg-opacity-90 shadow hover:scale-105 transition-transform w-full md:w-auto">
                  <div className="stat p-3 sm:p-4">
                    <div className="stat-title text-gray-700 text-base sm:text-lg font-semibold mb-2">Contact & Location</div>
                    <div className="flex flex-col gap-2">
                      <div className="text-gray-700">
                        <p className="font-medium text-sm sm:text-base">Phone</p>
                        <a href="tel:+1234567890" className="text-red-700 hover:text-red-800 text-sm sm:text-base">(123) 456-7890</a>
                      </div>
                      <div className="text-gray-700">
                        <p className="font-medium text-sm sm:text-base">Address</p>
                        <p className="text-xs sm:text-sm">123 Market Street</p>
                        <p className="text-xs sm:text-sm">Nampa, ID 83686</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Announcement Link */}
              <div className="mt-6 md:mt-8 pb-4 items-center justify-center">
                <a 
                  href="/announcement" 
                  className="btn btn-warning btn-lg text-white hover:bg-yellow-500 transition-colors w-full md:w-auto text-sm sm:text-base"
                >
                  View Current Announcements
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome 
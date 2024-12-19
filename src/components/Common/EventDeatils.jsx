import { BANNER7 } from "../../assets/Image";

const EventDeatils = () => {
  return (
    <section className="py-12 sm:py-6">
      <div className="container mx-auto px-4">

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 ">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img className="h-full w-full max-w-full object-cover"
                    src={BANNER7} alt="" />
                </div>
              </div>

            </div>
          </div>
          {/* banner Content */}
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <div className="mx-auto max-w-xs rounded-xl border bg-white px-6 py-8 text-gray-800">
              <h1 className="mb-2 text-2xl font-medium">Solo Singing</h1>
              <div className="mb-4 flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z" />
                  <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z" />
                </svg>
                <span className="font-medium">MET Talent Show</span>
              </div>
              <div className="mb-4 flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <span className="font-medium">August 15, 2023 | 6:00 PM</span>
              </div>
              <div className="mb-4 flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                <span className="font-medium">Pooja Bhoir | 8956234170</span>
              </div>
              <div className="mb-4 flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <span className="font-medium">MET Convention Center</span>
              </div>
              <hr className="border-r-2 border-gray-400 m-0" />
              <button className="w-full mt-4 rounded-xl bg-red-600 px-4 py-3 text-xl font-medium text-white">Register</button>
            </div>
          </div>

          <div className="lg:col-span-3">
            {/* <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

                <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                  Reviews
                  <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                </a>
              </nav>
            </div> */}

            <div className="mt-8 flow-root sm:mt-2">
              <h1 className="text-3xl font-bold">About the Event</h1>
              <p className="mt-4">
                Welcome to MET UTSAV ! The Solo and Duet Singing Competitions celebrate the musical talent of
                individual and paired singers from all the intitutes. Please read the rules carefully to ensure a
                fantastic performance experience.

                1. Eligibility and Registration:
                • Open to all students and Staff from participating Institutes.
                • Solo Singing is open to individual singers, while Duet Singing requires two
                participants.
                • All participants must present a valid ID at the time of registration.
                • Registration must be completed by the specified deadline along with backup
                karaoke tracks if necessary.
                 Auditions to be held on 11 th , 12 th , &amp; 13 th January 2025.

                2. Accompaniment and Backing Tracks:
                • A backing track (must be submitted in advance in MP3 format).
                • Live instruments (participants must bring their own instruments)
                • Acapella singing is also allowed.

                • The use of autotune or any pre-recorded vocal tracks is strictly prohibited.

                3. Performance Requirements:
                • Solo Singing: Each singer has a maximum of 3 minutes to perform.
                • Duet Singing: Each duo has a maximum of 3.5 minutes to perform.
                • Participants may choose to sing either an original composition or a cover song.
                • Songs with offensive or explicit content are prohibited; lyrics should be appropriate
                for a general audience.
                • Performances must be in one or a mix of the following languages: English, Hindi, or
                any regional language.
                4. Judging Criteria:
                • Vocal Ability and Technique: Pitch, tone, control, and technique.
                • Creativity and Originality: Song interpretation and unique style.
                • Stage Presence: Confidence, engagement, and connection with the audience.
                • Overall Impact: General impression and crowd appeal.
                • Judges’ decisions are final.
                5. Code of Conduct:
                • Participants are expected to show respect towards organizers, other participants,
                and audience members.
                • Any form of misconduct, including harassment, disruptive behaviour, or substance
                use, will lead to disqualification.
                • Participants are encouraged to maintain sportsmanship and professionalism
                throughout the event.

                6. Prizes and Awards: The Selected Participants shall perform on the final day Cultural night
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default EventDeatils
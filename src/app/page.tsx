import { BsExclamationTriangle, BsSun } from 'react-icons/bs'
import { HiOutlineBolt } from 'react-icons/hi2'

export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className=" grid grid-cols-1 space-x-2 md:grid-cols-3 text-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BsSun className="h-8 w-8" />
            <h2>Exemples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Explain quantum computing in simple terms
            </p>
            <p className="infoText">
              Got any creative ideas for a 10 year old’s birthday?
            </p>
            <p className="infoText">
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <HiOutlineBolt className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT model to use</p>
            <p className="infoText">
              Messages are stored in Firebase&apos;s Firestore
            </p>
            <p className="infoText">
              Hot Toast nofifications when ChatGPT is thinking
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BsExclamationTriangle className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

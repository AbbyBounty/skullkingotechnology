/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { ChatAlt2Icon } from '@heroicons/react/outline'


const products = [
    {
        id: 1,
        name: ` H.265 IP 2.0 MP DOME `,
        href: '#',
        imageSrc: 'http://activepixel.in/wp-content/uploads/2018/07/07_AP-IPC-DM-40L2.jpg',
        imageAlt: " 2.4MP DOME.",
        price: 'Send Query',
        color: `1/3” Progressive Scan CMOS Image sensor 
        2MP@1920*1080P Resolution
        Video System NTSC/PAL
        3.6mm Fixed Lens (6mm Optional)
        IR Range of 30 Meters
        H.265 and MJPEG Tri-stream encoding
        Auto IR cut filter with auto switch, ONVIF / PoE support / IP66`,
    },
    {
        id: 2,
        name: 'Wifi Smart Wireless Video Ip Doorbell ',
        href: '#',
        imageSrc: 'http://activepixel.in/wp-content/uploads/2018/06/doorbell.jpg',
        imageAlt: "wifi Smart Wireless Video Ip Doorbell",
        price: 'Send Query',
        color: `Wide-angle Lens Camera
        P2P features for easy remote access
        Compatible with free iOS & Android App
        Wireless connection Support IEEE 802.11/bg/n.
        Support PIR sensor
        Support Two-way Audio, Ring tone
        Support Night Vision
        IP65 Weatherproof`,
    },
    {
        id: 3,
        name: 'IP 4.0 MP BULLET CAMERA',
        href: '#',
        imageSrc: 'http://activepixel.in/wp-content/uploads/2021/07/208526010_1185512691875161_5169790219652922755_n.jpg',
        imageAlt: "IP 4.0 MP BULLET CAMERA.",
        price: 'Send Query',
        color: `1/3” Progressive Scan CMOS Image sensor
        4MP@2592*1520P Resolution
        Video System NTSC/PAL
        3.6mm Fixed Lens (6mm Optional)
        IR Range of 20 Meters
        MJPEG Tri-stream encoding
        Auto IR cut filter with auto switch
        ONVIF / PoE support / IP66`,
    },
    {
        id: 4,
        name: 'IP 5.0 MP DOME CAMERA',
        href: '#',
        imageSrc: 'http://activepixel.in/wp-content/uploads/2018/09/AP-IPC-DM-50L2-Product-Image-2.jpg',
        imageAlt: "IP 5.0 MP DOME CAMERA",
        price: 'Send Query',
        color: `IP 5.0 MP DOME CAMERA
        1/3” Progressive scan CMOS sensor
        Max. 2944 × 1656@20fps
        Video System NTSC/PAL
        FULL HD Fixed 3.6mm, 6mm Optional Lens
        20 to 30 meter illumination
        Support Tri-stream
        Auto IR cut filter with auto switch
        ONVIF / PoE optional / IP66`,
    },
    {

        id: 5,
        name: '4CH-2MP WIFI NVR KIT',
        href: '#',
        imageSrc: ' http://activepixel.in/wp-content/uploads/2021/07/217420790_2858891077692706_8159793461278444230_n.jpg ',
        imageAlt: "4CH-2MP WIFI NVR KIT",
        price: 'Send Query',
        color: `Image Sensor: 1/4" Color CMOS
        Minimum Illumination: 0.001 Lux
        Image Resolution: 1080P
        Lens: 3.6mm
        Night Vision: 30M
        Audio: Built-in Microphone
        Compression Format: H.265+
        Power: DC power adapter power supply
        Video Output: Monitor or HDTV via VGA, HDMI
        Remote Access: iPhone/Android Phone, Windows/Mac PC
        Weatherproof: IP65 water resistance`,


    },

    {

        id: 5,
        name: '4 CHANNEL 2MP DVR',
        href: '#',
        imageSrc: ' http://activepixel.in/wp-content/uploads/2018/07/01_AP-0404-1080N-H1-1.jpg',
        imageAlt: "4 CHANNEL 2MP DVR",
        price: 'Send Query',
        color: `4CH 1U 1080N, Video Compression H.264+
        DVR 4*1080N, IPC+TVI+CVI+AHD+CVBS (5in1/XVR)
        Video Output: 1CH VGA, 1CH HDMI upto 1920*1080
        Audio In: 4CH RCA, Audio Out: 1CH RCA
        Full Channel 1080N Resolution Real-time Recording
        SyncPlayback: 4CH, Audio In/Out: 4/1
        1*SATA (6TB), 2*USB2.0, 1*RJ45 (10/100M), 1*RS485`,

    },
    // More products...
]

export default function Example() {
    return (

        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Our services work even better together </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Interesting Inovations With Technology.
                   </p>
                </div>

            </div>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500  ">{product.color}</p>
                                </div>


                            </div>
                            <a href="tel:8665562570"
                                className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                <ChatAlt2Icon className="h-5 w-6" aria-hidden="true" />
                                Send Query </a>
                        </div>
                    ))}
                </div>
            </div>
        </div >


    )
}

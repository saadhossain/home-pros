import React from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io'
import {BsFillPhoneFill} from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md'
const Footer = () => {
    return (
        <div className='bg-hprohf text-white'>
           <div className='w-10/12 mx-auto grid md:grid-cols-4 gap-10 py-10'>
            <div>
                <h1 className='text-xl font-bold'>Offers</h1>
                <div className='my-5'>
                    <ul>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Properties</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Agents</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Locations</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Clients Support</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Company</h1>
                <div className='my-5'>
                    <ul>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>About</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Business Policy</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Strategry</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Careers</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Quick Links</h1>
                <div className='my-5'>
                    <ul>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Privacy Policy</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Terms & Conditions</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Users Guide</Link></li>
                        <li className='flex items-center gap-1 mb-2'><IoIosArrowForward/><Link>Buying Guide</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Have a Question?</h1>
                <div className='my-5'>
                    <ul>
                        <li className='flex items-center gap-1 mb-2'><MdLocationOn className='w-10 h-10'/><Link>203 Fake St. Mountain View, San Francisco, California, USA</Link></li>
                        <li className='flex items-center gap-1 mb-2'><BsFillPhoneFill/><Link>+2 392 3929 210</Link></li>
                        <li className='flex items-center gap-1 mb-2'><FaEnvelope/><Link>care@homepros.com</Link></li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Footer;
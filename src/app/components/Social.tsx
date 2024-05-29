import React from 'react';

interface SocialProps {
    twitter: string;
    github: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    instagram: string;
}

const Social: React.FC<SocialProps> = ({ twitter, github, facebook, linkedin, youtube, instagram }) => {
    return (
        <div className="mt-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Contáctame</h2>
            <div className="flex justify-center space-x-4">
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <img src="/images/Twitter.png" alt="Twitter" className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24" />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <img src="/images/Github.png" alt="GitHub" className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24" />
                </a>
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                    <img src="/images/Facebook.png" alt="Facebook" className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/images/Linkedin.png" alt="LinkedIn" className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24" />
                </a>
                <a href={youtube} target="_blank" rel="noopener noreferrer">
                    <img src="/images/YouTube.png" alt="YouTube" className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24" />
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <img src="/images/Instagram.png" alt="Instagram" className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24" />
                </a>
            </div>
        </div>
    );
};

export default Social;

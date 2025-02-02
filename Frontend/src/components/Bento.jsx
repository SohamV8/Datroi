import React from 'react';
import { 
    Briefcase, 
    Newspaper, 
    FileText, 
    MessageCircle, 
    Globe 
} from "lucide-react";

import { BentoCard, BentoGrid } from "./ui/bento-grid";

function Bento() {
    const features = [
        {
            Icon: Briefcase,
            name: "Business",
            description: "Insights and strategies for success.",
            href: "/business",
            cta: "Explore",
            background: <img className="absolute -right-20 -top-20 opacity-60" />,
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
        },
        {
            Icon: Newspaper,
            name: "Education",
            description: "Resources for learning and growth.",
            href: "/education",
            cta: "Discover",
            background: <img className="absolute -right-20 -top-20 opacity-60" />,
            className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
        },
        {
            Icon: FileText,
            name: "Research",
            description: "In-depth studies and findings.",
            href: "/research",
            cta: "Read more",
            background: <img className="absolute -right-20 -top-20 opacity-60" />,
            className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
        },
        {
            Icon: MessageCircle,
            name: "Blogs",
            description: "Latest articles and stories.",
            href: "/blogs",
            cta: "Read now",
            background: <img className="absolute -right-20 -top-20 opacity-60" />,
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
        },
        {
            Icon: Globe,
            name: "CSR",
            description: "Corporate social responsibility initiatives.",
            href: "/csr",
            cta: "Learn more",
            background: <img className="absolute -right-20 -top-20 opacity-60" />,
            className: "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5",
        },
        {
            Icon: Newspaper,
            name: "News",
            description: "Stay updated with current events.",
            href: "/news",
            cta: "Check updates",
            background: <img className="absolute -right-20 -top-20 opacity-60" />,
            className: "lg:col-start-1 lg:col-end-3 lg:row-start-5 lg:row-end-6",
        },
    ];

    return (
        <div>
            <BentoGrid className="lg:grid-rows-5 justify-center align-middle">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
}

export default Bento;

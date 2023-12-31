import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import React from "react";
import faq_data from "@/data/faq_data";

export interface FaqProps {
    title: string;
    content: string;
}

const FaqComponents: React.FC = () => {
    return (
        <div className={'max-w-7xl mx-auto mt-12'}>
            <h2 className={'text-3xl font-bold mb-6'}>Frequently Asked Questions </h2>
            <Accordion type="single" collapsible>
                {faq_data.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>
                            <h2 className="text-xl font-semibold">{faq.title}</h2>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-700 text-lg">
                                {faq.content}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FaqComponents;
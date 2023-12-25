import React from 'react';
import {TourData} from '@/data/tour_data';
import { Itinerary, AdditionalInfo, GroupTour, PrivateTour } from "@/components/pages/tour_detail/content_details";

export interface TourTripProps {
    tour: TourData;
}

const TripContent: React.FC<TourTripProps> = ({tour}) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip</h2>
            <div className={'flex flex-col gap-4 justify-between'}>
                <GroupTour tour={tour}/>
                <PrivateTour tour={tour}/>
                <Itinerary itinerary={tour.itinerary}/>
                <AdditionalInfo
                    requirements={tour.requirements}
                    childrenCategory={tour.childrenCategory}
                    exclude={tour.exclude}
                    paymentMethods={tour.paymentMethods}
                />
            </div>
        </section>
    );
};

export default TripContent;

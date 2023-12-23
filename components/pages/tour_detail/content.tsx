import React from 'react';
import {motion} from 'framer-motion';
import {TourData} from '@/data/tour_data';

interface TourTripProps {
    tour: TourData;
}

interface AdditionalInfoProps {
    requirements?: string[];
    childrenCategory?: string;
    exclude?: string[];
    paymentMethods?: string[];
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({requirements, childrenCategory, exclude, paymentMethods}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="bg-white p-6 shadow-md rounded-lg">
                {requirements && (
                    <div className="mb-4">
                        <h4 className="text-base font-bold text-gray-700 mb-2">Keperluan yang Perlu Dibawa:</h4>
                        <ul className="list-disc list-inside ml-4">
                            {requirements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {childrenCategory && (
                    <div className="mb-4">
                        <h4 className="text-base font-bold text-gray-700 mb-2">Kategori Anak-anak:</h4>
                        <p>{childrenCategory}</p>
                    </div>
                )}
                {exclude && (
                    <div className="mb-4">
                        <h4 className="text-base font-bold text-gray-700 mb-2">Tour Exclude:</h4>
                        <ul className="list-disc list-inside ml-4">
                            {exclude.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {paymentMethods && (
                    <div className="mb-4">
                        <h4 className="text-base font-bold text-gray-700 mb-2">Pembayaran:</h4>
                        <ul className="list-disc list-inside ml-4">
                            {paymentMethods.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    );
};


const PrivateTour: React.FC<TourTripProps> = ({tour}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Private Tour</h3>
                <div className="flex flex-col gap-3">
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Price</h4>
                        <div className="flex gap-4">
                            <div>
                                <h5 className="text-base font-bold text-gray-700 mb-2">Domestic</h5>
                                <ul className="list-disc list-inside ml-4">
                                    {tour.privateTour.price.domestic.map((price, index) => (
                                        <li key={index}>
                                            {index + 1} person: Rp. {price.toLocaleString()},- / person
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-base font-bold text-gray-700 mb-2">International</h5>
                                <ul className="list-disc list-inside ml-4">
                                    {tour.privateTour.price.foreign.map((price, index) => (
                                        <li key={index}>
                                            {index + 1} person: Rp. {price.toLocaleString()},- / person
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Include</h4>
                        <ul className="list-disc list-inside ml-4">
                            {tour.privateTour.include.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Highlight</h4>
                        <ul className="list-disc list-inside ml-4">
                            {tour.privateTour.highlight.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2 inline">
                            Meeting Point: {' '}
                        </h4>
                        <p className={'inline'}>{tour.privateTour.meetingPoint.join(', ')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
const Itinerary: React.FC<{ itinerary: { timeRange: string; activity: string }[] }> = ({itinerary}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="bg-white p-6 shadow-md rounded-lg mt-4">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Itinerary</h3>
                <ul className="list-disc list-inside ml-4">
                    {itinerary.map((item, index) => (
                        <li key={index}>
                            {item.timeRange} - {item.activity}
                        </li>
                    ))}
                </ul>

                <p className={'text-sm text-gray-500 mt-2'}>
                    *Itinerary can be changed at any time according to the situation and conditions in the field.
                </p>
            </div>

        </motion.div>
    );
};
const GroupTour: React.FC<TourTripProps> = ({tour}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Group Tour</h3>
                <div className="flex flex-col gap-3">
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Price</h4>
                        <ul className="list-disc list-inside ml-4">
                            <li>
                                Domestic: Rp. {tour.groupTour.price.domestic.toLocaleString()}/ person
                            </li>
                            <li>
                                International: Rp. {tour.groupTour.price.foreign.toLocaleString()}/ person
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Include</h4>
                        <ul className="list-disc list-inside ml-4">
                            {tour.groupTour.include.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2">Highlight</h4>
                        <ul className="list-disc list-inside ml-4">
                            {tour.groupTour.highlight.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-gray-700 mb-2 inline">
                            Meeting Point: {' '}
                        </h4>
                        <p className={'inline'}>{tour.groupTour.meetingPoint}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

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

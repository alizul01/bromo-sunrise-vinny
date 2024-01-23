import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {Button} from "@/components/ui/button"
import React, {Fragment} from "react";
import {cn} from "@/lib/utils";
import {Check} from "lucide-react";
import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {useToast} from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    tourismType: z.enum(["domestic", "international"], {
        required_error: "You must select one of the options",
    }),
    destination: z.string().min(2).max(50),
    person: z.number().min(1).max(6),
})

export interface bookingFormValues {
    destination: string;
}

const Booking: React.FC<bookingFormValues> = ({destination}) => {
    const {toast} = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            tourismType: undefined,
            destination: destination,
            person: 1,
        },

    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        toast({
            title: "Booking Success",
            description: `You have booked a tour to ${data.destination} with ${data.tourismType} tourism type. You will be directed to WhatsApp in 3 seconds.`,
            duration: 2000,
        });

        let countdown = 3;

        const countdownInterval = setInterval(() => {
            countdown -= 1;

            if (countdown === 0) {
                clearInterval(countdownInterval);

                const whatsappMessage = `Hello Bromo Smart Tour, I'm ${data.name} and I want to book a tour to ${data.destination} with ${data.tourismType} tourism type.`;
                const phoneNumber = '6282143261091';
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                window.open(url, '_blank');
            } else {
                toast({
                    title: "Countdown",
                    description: `${countdown}`,
                });
            }
        }, 1000);
    };


    return (
        <Fragment>
            <Card className={cn('sticky top-10')}>
                <CardHeader>
                    <CardTitle>Booking</CardTitle>
                    <CardDescription>Book a tour</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                            <FormField
                                control={form.control}
                                name={'name'}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="What Is Your Name?" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={'email'}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type={'email'} placeholder="What Is Your Name?" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={'tourismType'}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Tourism Type</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className={'flex flex-row gap-4'}
                                            >
                                                <FormItem className={'flex items-center space-x-3 spaye-y-0'}>
                                                    <FormControl>
                                                        <RadioGroupItem value={'domestic'}/>
                                                    </FormControl>
                                                    <FormLabel>Domestic</FormLabel>
                                                </FormItem>
                                                <FormItem className={'flex items-center space-x-3 spaye-y-0'}>
                                                    <FormControl>
                                                        <RadioGroupItem value={'international'}/>
                                                    </FormControl>
                                                    <FormLabel>International</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={'person'}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Person</FormLabel>
                                        <FormControl>
                                            <Input type={'number'} placeholder="How Many Person?" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={'destination'}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Destination</FormLabel>
                                        <FormControl>
                                            <Input readOnly={true} className={'bg-gray-200'}
                                                   placeholder="Where Do You Want To Go?" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button type={"submit"} className="w-full">
                                <Check className="mr-2 h-4 w-4"/> Book Now
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default Booking
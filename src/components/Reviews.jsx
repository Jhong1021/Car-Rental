import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'

const Reviews = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
                    <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                        Hear from our satisfied customers and see why they choose SwiftRide Rentals for their driving needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white/30 backdrop-blur-lg rounded-lg p-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage
                                    src="https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186104.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>

                            <div>
                                <h4 className="text-lg font-bold">Christine Mae</h4>
                                <p className="text-muted-foreground text-sm">Satisfied Customer</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            "I had an amazing experience renting from SwiftRide Rentals. The car was in pristine condition and
                            the service was exceptional. I'll definitely be a repeat customer!"
                        </p>
                    </div>
                    <div className="bg-white/30 backdrop-blur-lg rounded-lg p-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="https://favim.com/pd/s4/orig/160107/boy-icon-random-tumblr-Favim.com-3854704.jpg"
                                    className='w-16 h-16 rounded-full object-cover'
                                />
                                <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="text-lg font-bold">Jinno Tired</h4>
                                <p className="text-muted-foreground text-sm">Satisfied Customer</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            "I was blown away by the selection of SwiftRide Rentals. The booking process was
                            seamless, and the car I rented exceeded my expectations. Highly recommended!"
                        </p>
                    </div>
                    <div className="bg-white/30 backdrop-blur-lg rounded-lg p-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDZgQJZ6UoQT-YRG1t8A891pv1fbq25tVQw&s"
                                    className='w-16 h-16 rounded-full object-cover'
                                />
                                <AvatarFallback>MJ</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="text-lg font-bold">Johny Brano</h4>
                                <p className="text-muted-foreground text-sm">Satisfied Customer</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            "I've rented from SwiftRide Rentals multiple times, and they've never disappointed. The cars are
                            always in top condition, and the customer service is outstanding. Highly recommended!"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews

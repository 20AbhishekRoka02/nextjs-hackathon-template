export type DayType = {
    time: string,
    description: string
}


export type ScheduleType = {
    date: string,
    events: DayType[],
}


export const ScheduleList: ScheduleType[] = [
    {
        date: "Saturday January 6 2024",
        events: [
            {
                time: "12:00 PM",
                description: "Free Boba in the Engineering Building. Bring your hacker passes."
            },
            {
                time: "1:00 PM",
                description: "Descope and GGV Capital are giving a speech on startups!"
            }
        ]
    },
    {
        "date": "Sunday January 7 2024",
        "events": [
            {
                "time": "3:00 PM",
                "description": "Descope workshop in Room 117! Learn all about authentication and user management!"
            },
            {
                "time": "9:00 PM",
                "description": "How to build a website in Next.js with Descope!"
            }
        ]
    },
]
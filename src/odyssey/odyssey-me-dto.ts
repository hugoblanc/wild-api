interface OdysseyMeDTO {
    id: number;
    email: string;
    admin: boolean;
    lastname: string;
    firstname: string;
    github: string;
    banished: boolean;
    fullname: string;
    main_role: string;
    roles: string[];
    current_crew: Currentcrew;
    locations: Location[];
    locations_choices: Location[];
    managed_locations: any[];
}

interface Currentcrew {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    start_date: string;
    opened: boolean;
    users: User[];
    location: Location;
    course: Course;
}

interface Course {
    id: number;
    name: string;
}

interface Location {
    id: number;
    city: string;
    address: string;
    postal_code: string;
    opened: boolean;
    country_id: number;
    locales: string[];
    main_locale: string;
}

interface User {
    id: number;
    email: string;
    admin: boolean;
    lastname: string;
    firstname: string;
    github?: string;
    banished: boolean;
    fullname: string;
    main_role: string;
    roles: string[];
}

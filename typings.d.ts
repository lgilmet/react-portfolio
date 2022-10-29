interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface pageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    progress: number;
    description: string;
    image: Image;
}


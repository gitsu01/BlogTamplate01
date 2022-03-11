export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  comments: Comment[];
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}

export interface Comment {
  approved: boolean;
  name: string;
  email: string;
  comment: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface Membar {
    _id: string;
  name: string;
  image: {
    asset: {
      url: string;
    }
  },
  job: string;
  slug: {
    current : string;
  };
  description: string
}
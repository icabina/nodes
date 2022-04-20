export interface Node {
  url: string;
  online: boolean;
  name: string;
  loading: boolean;
  notes: {
      number: string;
      text: string;
  }[];
}


export interface Document {
  _id?: string;
  title: string;
  category: string;
  tags: string[];
  currentFile: string;
  owner: string;
}

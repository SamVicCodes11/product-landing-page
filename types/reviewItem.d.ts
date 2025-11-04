export interface ReviewItem {
  id: number;
  userName: string;
  avatar: string;        
  rating: number;       
  title: string;
  content?: string;
  createdAt: string;     
  likes: number;
  dislikes: number;
  hasMedia?: boolean;
  hasDescription?: boolean;
  topics?: string[];     
}

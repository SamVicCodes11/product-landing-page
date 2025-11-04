// /types/reviewItem.d.ts
export interface ReviewItem {
  id: number;
  userName: string;
  avatar: string;        // path in /public
  rating: number;        // 1 - 5
  title: string;
  content?: string;
  createdAt: string;     // display-ready date
  likes: number;
  dislikes: number;
  hasMedia?: boolean;
  hasDescription?: boolean;
  topics?: string[];     // e.g. ["Product Quality", "Shipment"]
}

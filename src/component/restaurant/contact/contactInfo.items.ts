export interface ContactInfoItem {
  id: 'address' | 'phone' | 'email' | 'hours' | 'website';
  title: string;
  description?: string;
  details?: string[];
  href?: string;
}

export const contactInfoItems: ContactInfoItem[] = [
  {
    id: 'address',
    title: 'Địa chỉ',
    description: '123 Đường ABC, Phường 1, Quận 1, TP. Hồ Chí Minh'
  },
  {
    id: 'phone',
    title: 'Điện thoại',
    description: '0123 456 789',
    href: 'tel:0123456789'
  },
  {
    id: 'email',
    title: 'Email',
    description: 'contact@restaurant.com',
    href: 'mailto:contact@restaurant.com'
  },
  {
    id: 'hours',
    title: 'Thời gian hoạt động',
    details: ['Thứ 2 - Thứ 6: 10:00 - 22:00', 'Thứ 7 - Chủ nhật: 09:00 - 23:00']
  },
  {
    id: 'website',
    title: 'Website',
    description: 'www.restaurant.com',
    href: 'https://www.restaurant.com'
  }
];
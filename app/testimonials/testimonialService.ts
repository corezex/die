export interface Testimonial {
  _id: string;
  name: string;
  age?: string;
  growth?: string;
  servicestype?: string;
  description?: string;
  rating?: number | null;
  dateRelative?: string;
  photoCount?: number;
  reviewsCount?: number;
  source?: "api" | "google";
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  count?: number;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.dietfiniti.com/api';

export const testimonialService = {
  // Get all testimonials with pagination
  getAll: async (page = 1, limit = 10): Promise<ApiResponse<Testimonial[]>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials?page=${page}&limit=${limit}`);
      if (!response.ok) throw new Error('Failed to fetch testimonials');
      return response.json();
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  },

  // Get single testimonial
  getById: async (id: string): Promise<ApiResponse<Testimonial>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials/${id}`);
      if (!response.ok) throw new Error('Failed to fetch testimonial');
      return response.json();
    } catch (error) {
      console.error('Error fetching testimonial:', error);
      throw error;
    }
  }
};
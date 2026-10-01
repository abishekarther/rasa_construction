export interface Project {
  id:          string;
  title:       string;
  category:    string;
  location:    string;
  image:       string;
  /** Taller aspect ratio in masonry grid */
  tall?:       boolean;
  /** Short project caption for hover overlay */
  description?: string;
  /** Duration or year, e.g. "6 Months" or "2023" */
  duration?:   string;
  /** Services involved */
  services?:   string[];
  /** Verified external project/company URL — opens in new tab */
  externalUrl?: string;
  /** Additional project images for lightbox gallery */
  gallery?:    string[];
  ta?: {
    title:        string;
    category:     string;
    location:     string;
    description?: string;
    duration?:    string;
    services?:    string[];
  };
}

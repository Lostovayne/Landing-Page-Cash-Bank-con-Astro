type Testimonial = Array<{
  image: string;
  opinion: string;
  name: string;
  rating?: number;
  job: string;
}>;

export const TestimonialData: Testimonial = [
  {
    image: "/images/TestimonialImg1.svg",
    opinion:
      "Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is ",
    name: "Wade Warren",
    job: "Ceo Google.Inc",
    rating: 5,
  },
  {
    image: "/images/TestimonialImg2.svg",
    opinion:
      "Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is ",
    name: "Esther Howard",
    job: "Ceo Google.Inc",
    rating: 5,
  },
  {
    image: "/images/TestimonialImg3.svg",
    opinion:
      "Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is ",
    name: "Robert Fox",
    job: "Ceo Google.Inc",
    rating: 5,
  },
  {
    image: "/images/TestimonialImg4.svg",
    opinion:
      "Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is ",
    name: "Kristin Watson",
    job: "Ceo Google.Inc",
    rating: 5,
  },
];

export const Services = [
  {
    name: "How It's Works",
    href: "/",
  },
  {
    name: "Features",
    href: "/",
  },
  {
    name: "Integrations",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
];

export const Company = [
  {
    name: "About",
    href: "/",
  },

  {
    name: "Terms",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/",
  },
  {
    name: "Careers",
    href: "/",
  },
];

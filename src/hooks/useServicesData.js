import { useMemo } from "react";
import plumbing from "../assets/img/plumbing.jpg";
import electrical from "../assets/img/electrical.jpg";
import carpenter from "../assets/img/carpenter.webp";
import home1 from "../assets/img/homecleaning.jpeg";
import spa1 from "../assets/img/spa1.jpeg";

const useServicesData = () => {
  const allServices = [
    {
      id: 1,
      title: "Emergency Plumbing Repair",
      category: "Plumbing",
      price: 599,
      rating: 4.9,
      reviews: 847,
      image: plumbing,
      availableToday: true,
      provider: "Ramesh Sharma",
      description: "Fix leaks, unclog drains, repair pipes",
      location: "Ahmedabad"
    },
    {
      id: 2,
      title: "Electrical Wiring & Repair",
      category: "Electrical",
      price: 799,
      rating: 4.8,
      reviews: 523,
      image: electrical,
      availableToday: true,
      provider: "Suresh Patel",
      description: "Wiring, socket installation, troubleshooting",
      location: "Mumbai"
    },
    {
      id: 3,
      title: "Deep House Cleaning",
      category: "Cleaning",
      price: 499,
      rating: 4.9,
      reviews: 1203,
      image: home1,
      availableToday: false,
      provider: "Priya Cleaning Services",
      description: "Complete home cleaning service",
      location: "Delhi"
    },
    {
      id: 4,
      title: "Carpentry & Furniture Repair",
      category: "Carpentry",
      price: 1500,
      rating: 4.7,
      reviews: 342,
      image: carpenter,
      availableToday: true,
      provider: "Rajesh Carpenter",
      description: "Furniture repair, custom woodwork",
      location: "Bangalore"
    },
    {
      id: 5,
      title: "AC Repair & Maintenance",
      category: "AC Repair",
      price: 2000,
      rating: 4.6,
      reviews: 289,
      image: spa1,
      availableToday: true,
      provider: "AC Experts",
      description: "AC servicing, gas refilling, repairs",
      location: "Pune"
    },
    {
      id: 6,
      title: "Interior Painting Services",
      category: "Painting",
      price: 1200,
      rating: 4.8,
      reviews: 456,
      image: home1,
      availableToday: true,
      provider: "Color Masters",
      description: "Interior & exterior painting",
      location: "Hyderabad"
    }
  ];

  const cityOptions = [
    "All Cities",
    "Ahmedabad", 
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Jaipur"
  ];

  const categories = [
    "All Categories",
    "Plumbing",
    "Electrical", 
    "Cleaning",
    "Carpentry",
    "AC Repair",
    "Painting",
    "Appliance Repair"
  ];

  const applyFilters = useMemo(() => (filters) => {
    const { allServices, searchQuery, price, category, location, ratingFilters, availabilityFilters, sortBy } = filters;

    let filtered = allServices.filter((service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply other filters
    filtered = filtered.filter((service) => {
      if (location !== "All Cities" && service.location !== location) return false;
      if (category !== "All Categories" && service.category !== category) return false;
      if (service.price > price) return false;
      
      if (!ratingFilters.rating5 && service.rating >= 4.8) return false;
      if (!ratingFilters.rating4 && service.rating >= 4.0 && service.rating < 4.8) return false;
      if (!ratingFilters.rating3 && service.rating >= 3.0 && service.rating < 4.0) return false;
      
      if (availabilityFilters.today && !service.availableToday) return false;

      return true;
    });

    // Sort
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "Price: Low to High":
          return a.price - b.price;
        case "Price: High to Low":
          return b.price - a.price;
        case "Highest Rated":
          return b.rating - a.rating;
        case "Most Popular":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });
  }, []);

  return {
    allServices,
    cityOptions,
    categories,
    applyFilters
  };
};

export default useServicesData;
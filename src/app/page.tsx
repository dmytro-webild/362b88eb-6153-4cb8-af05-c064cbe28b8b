"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, CheckCircle, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Our Story",
          id: "story",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="LUXE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Timeless Elegance, Modern Fit."
      description="Discover a collection defined by quality materials, thoughtful design, and a commitment to sustainable fashion. Your new wardrobe essentials start here."
      imageSrc="http://img.b2bpic.net/free-photo/studio-with-props-photography_23-2148885674.jpg"
      imageAlt="Minimalist hero banner for LUXE clothing brand"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/elegant-woman-holding-shopping-bags-with-copy-space_23-2148624953.jpg",
          alt: "Elegant woman holding shopping bags with copy space",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-female-sitting-floor_23-2148880178.jpg",
          alt: "Portrait beautiful young female sitting on floor",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sympathetic-girl-stands-near-bulding_8353-213.jpg",
          alt: "The sympathetic girl stands near building",
        },
        {
          src: "http://img.b2bpic.net/free-photo/people-wearing-face-masks-public-coronavirus-pandemic-japan-social-banner_53876-160759.jpg",
          alt: "People wearing face masks in public during pandemic",
        },
        {
          src: "http://img.b2bpic.net/free-photo/shopping-day-international-girlfriends-women-city_1157-46950.jpg",
          alt: "Happy customer wearing fashion",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Sustainable",
        },
        {
          type: "text",
          text: "Timeless",
        },
        {
          type: "text",
          text: "Ethical",
        },
        {
          type: "text",
          text: "Minimalist",
        },
        {
          type: "text",
          text: "Premium",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Signature Tee",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-young-caucasian-woman-posing_273609-14657.jpg",
        },
        {
          id: "p2",
          name: "Denim Jacket",
          price: "$125",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-girl-posing-outdoors_23-2148499586.jpg",
        },
        {
          id: "p3",
          name: "Silk Dress",
          price: "$189",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-mature-woman-grey-dress_23-2148275052.jpg",
        },
        {
          id: "p4",
          name: "Wool Sweater",
          price: "$95",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-textured-knitted-blankets-stack_169016-16558.jpg",
        },
        {
          id: "p5",
          name: "Chino Trousers",
          price: "$85",
          imageSrc: "http://img.b2bpic.net/free-photo/light-brown-beige-pants-indoors-still-life_23-2150756265.jpg",
        },
        {
          id: "p6",
          name: "Silk Scarf",
          price: "$55",
          imageSrc: "http://img.b2bpic.net/free-photo/summer-holiday-s-accessories_1321-960.jpg",
        },
      ]}
      title="Featured Collections"
      description="Curated pieces designed to elevate your everyday style."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Crafted With Purpose"
      description="We believe fashion should feel as good as it looks. Every piece we make focuses on sustainable sourcing and longevity."
      metrics={[
        {
          value: "100%",
          title: "Sustainable Fabrics",
        },
        {
          value: "20+",
          title: "Artisanal Factories",
        },
        {
          value: "50k+",
          title: "Happy Customers",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-hands-manufacturing-clothes_23-2149007429.jpg"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Premium Materials",
          tags: [
            "Sustainable",
            "Natural",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-thimble-silk-arrangement_23-2148897939.jpg",
        },
        {
          id: "f2",
          title: "Modern Design",
          tags: [
            "Contemporary",
            "Style",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-ribbon_23-2149247502.jpg",
        },
        {
          id: "f3",
          title: "Enduring Quality",
          tags: [
            "Durable",
            "Classic",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-creating-vision-board_23-2150061836.jpg",
        },
      ]}
      title="The LUXE Quality Standard"
      description="Why our pieces stand apart."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          icon: Sparkles,
          title: "Global Reach",
          value: "15 Countries",
        },
        {
          id: "m2",
          icon: Award,
          title: "Design Awards",
          value: "24 Won",
        },
        {
          id: "m3",
          icon: CheckCircle,
          title: "Quality Checks",
          value: "99.9%",
        },
      ]}
      title="By The Numbers"
      description="Making an impact in the world of fashion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The quality of LUXE clothing is simply unmatched. Every piece I've bought feels brand new even after multiple washes."
      rating={5}
      author="Elena M."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/shopping-day-international-girlfriends-women-city_1157-46950.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021803.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-curly-haired-woman-shopper-rests-after-making-purchases-mall-dressed-fashionable-clothes-surrounded-by-shopping-bags-looks-gladfully-away-poses-against-blurred-urban-background_273609-59142.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-stylish-woman_23-2149213179.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-holding-clothes_23-2149241339.jpg",
          alt: "Customer 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split-description"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What is your return policy?",
          content: "You can return items within 30 days of purchase for a full refund.",
        },
        {
          id: "q2",
          title: "How do I find my size?",
          content: "Check our detailed size chart on each product page for precise measurements.",
        },
        {
          id: "q3",
          title: "Where do you ship?",
          content: "We ship globally to over 50 countries with tracked delivery.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cheerful-woman-talking-cell-while-choosing-clothes-browsing-dresses-rack-fashion-store-medium-shot-boutique-customer-retail-concept_74855-11615.jpg"
      title="Questions Answered"
      description="Everything you need to know about your order."
      faqsAnimation="blur-reveal"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch"
      description="Questions about collections or your order? We're here to help."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/inside-hairdresser-view-from-street_122409-37.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-young-woman-with-vitiligo_23-2149180781.jpg"
      logoText="LUXE"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "New Arrivals",
              href: "#",
            },
            {
              label: "Best Sellers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Shipping",
              href: "#",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

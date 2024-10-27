import { Injectable } from '@angular/core';
import { Reseller } from '../interfaces/reseller';

@Injectable({
  providedIn: 'root',
})
export class ResellersService {
  resellers: Reseller[] = [
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/ca.svg',
      name: 'Pro Car Dealer',
      fragment: 'pro-car-dealer',
      description:
        'Leading car dealership with premium auto services and vehicle protection solutions.',
      country: 'Canada',
      countryCode: 'ca',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/br.svg',
      name: 'Formala Pint Cair',
      fragment: 'formala-pint-cair',
      description:
        'Experts in high-quality automotive paint protection and detailing services.',
      country: 'Brazil',
      countryCode: 'br',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/gb.svg',
      name: 'Enka Car Care Detailing',
      fragment: 'enka-car-care-detailing',
      description:
        'Top-notch car detailing and care services to keep your vehicle in pristine condition.',
      country: 'United Kingdom',
      countryCode: 'gb',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/pl.svg',
      name: 'Gdansk Protection',
      fragment: 'gdansk-protection',
      description:
        'Providing advanced automotive protection and care solutions in Poland.',
      country: 'Poland',
      countryCode: 'pl',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/ua.svg',
      name: 'System Pin Caer',
      fragment: 'system-pin-caer',
      description:
        'Innovative car protection systems for superior paint and surface protection.',
      country: 'Ukraine',
      countryCode: 'ua',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/fi.svg',
      name: 'Car Protection Pin',
      fragment: 'car-protection-pin',
      description:
        'Offering cutting-edge car protection products to safeguard your vehicle’s finish.',
      country: 'Finland',
      countryCode: 'fi',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/no.svg',
      name: 'Car Caer System',
      fragment: 'car-caer-system',
      description:
        'Specialized in vehicle care and advanced protection systems for long-lasting results.',
      country: 'Norway',
      countryCode: 'no',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/it.svg',
      name: 'X Protection Pin',
      fragment: 'x-protection-pin',
      description:
        'High-performance protection solutions for cars, with innovative technology.',
      country: 'Italy',
      countryCode: 'it',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/es.svg',
      name: 'Pin Car Protection',
      fragment: 'pin-car-protection',
      description:
        'Comprehensive car protection services ensuring your vehicle stays immaculate.',
      country: 'Spain',
      countryCode: 'es',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/ru.svg',
      name: 'Star Pin Protection',
      fragment: 'star-pin-protection',
      description:
        'Professional car care and protection with a focus on paint and surface treatments.',
      country: 'Russia',
      countryCode: 'ru',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/au.svg',
      name: 'Australia',
      fragment: 'australia',
      description:
        'Trusted automotive protection services delivering top-tier results across Australia.',
      country: 'Australia',
      countryCode: 'au',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/in.svg',
      name: 'Stiyl Car Paint Protection',
      fragment: 'stiyl-car-paint-protection',
      description:
        'Leaders in car paint protection, offering innovative solutions for long-lasting shine.',
      country: 'India',
      countryCode: 'in',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/my.svg',
      name: 'Grand Auto Car Caer',
      fragment: 'grand-auto-car-caer',
      description:
        'Premium auto care and protection services for maintaining your vehicle’s excellence.',
      country: 'Malaysia',
      countryCode: 'my',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/eg.svg',
      name: 'Royal Nano Ceramic',
      fragment: 'royal-nano-ceramic',
      description:
        'Providing high-quality ceramic coating for superior paint protection in Egypt.',
      country: 'Egypt',
      countryCode: 'eg',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/za.svg',
      name: 'Az Protection',
      fragment: 'az-protection',
      description:
        'Offering advanced automotive protection systems for cars in South Africa.',
      country: 'South Africa',
      countryCode: 'za',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/ao.svg',
      name: 'Superior Protection',
      fragment: 'superior-protection',
      description:
        'Specialists in superior car protection and detailing services for lasting durability.',
      country: 'Angola',
      countryCode: 'ao',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/ga.svg',
      name: 'Nanotechnology',
      fragment: 'nanotechnology',
      description:
        'Cutting-edge nanotechnology solutions for automotive paint and surface protection.',
      country: 'Gabon',
      countryCode: 'ga',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/mn.svg',
      name: 'Perfect Protection',
      fragment: 'perfect-protection',
      description:
        'Providing perfect solutions for car protection with state-of-the-art technology.',
      country: 'Mongolia',
      countryCode: 'mn',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/pt.svg',
      name: 'Th Protection',
      fragment: 'th-protection',
      description:
        'Offering comprehensive protection services to maintain your vehicle’s value and look.',
      country: 'Portugal',
      countryCode: 'pt',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/hu.svg',
      name: 'Car Protection Shield',
      fragment: 'car-protection-shield',
      description:
        'Providing robust car protection solutions for complete peace of mind.',
      country: 'Hungary',
      countryCode: 'hu',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/rs.svg',
      name: 'Aston Protect',
      fragment: 'aston-protect',
      description:
        'Dedicated to protecting vehicles with premium automotive solutions in Serbia.',
      country: 'Serbia',
      countryCode: 'rs',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/bg.svg',
      name: 'Alfred Protection',
      fragment: 'alfred-protection',
      description:
        'Trusted car protection services offering durable paint and surface treatments.',
      country: 'Bulgaria',
      countryCode: 'bg',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/ro.svg',
      name: 'West Car Protection',
      fragment: 'west-car-protection',
      description:
        'Leading providers of automotive protection and detailing services in Romania.',
      country: 'Romania',
      countryCode: 'ro',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/lt.svg',
      name: 'M.G Car Care',
      fragment: 'm.g-car-care',
      description:
        'Experts in car care and detailing, ensuring your vehicle remains spotless.',
      country: 'Lithuania',
      countryCode: 'lt',
    },
    {
      flagPath: 'https://tools.royalshieldworld.com/public/countries/ee.svg',
      name: '1 Car Protection',
      fragment: '1-car-protection',
      description:
        'Offering number one car protection services for complete surface and paint care.',
      country: 'Estonia',
      countryCode: 'ee',
    },
  ];
}

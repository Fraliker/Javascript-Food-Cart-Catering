# Food Cart Catering

# Table of Contents
1. [Summary](#summary)
2. [Author](#author)
3. [Setup](#setup)
4. [Goals](#goals)
5. [Features](#features)
6. [Issues](#issues)
7. [Wishlist](#wishlist)
8. [IP](#ip)

## Summary

A proof of concept web application for developing a web application to coordinate catering from food carts to office events.

## Author

Jay Freeman, Carlos Munoz Kampff, Clayton Collins, Benjamin T. Seaver, and David Quisenberry

## Setup

1. `npm install`
2. `bower install`
3. Create an account on Google Firebase
4. Allow for email user authentication on your firebase app
5. Create an account for a google maps API key
6. In project root, create file: `src/app/api-keys.ts` and edit the file to contain:
`export const masterApiKeys = {
googleMapsApiKey: your-google-maps-api-key,
apiKey: your-firebase-api-key,
authDomain: 'your-auth-domain.firebaseapp.com',
databaseURL: 'your-database-url.firebaseio.com',
projectId: 'your-project-id',
storageBucket: 'your-storage-bucket.appspot.com',
messagingSenderId: 'your-messaging-senderID'
};
`
7. `npm serve`

## Goals

- Build a prototype site for a food cart catering business.

## Features

Three unique user stories:

Office Event Coordinator | Preferred Viewport: Computer Monitor

  - create an customer account
  - login to their customer account
  - view existing orders yet to be delivered
  - choose from a list of food carts to place an order
  - choose items for your order

Food Cart Operator | Preferred Viewport: Tablet

  - create a food cart account
  - login to their food cart account
  - add to and edit their online menu for ordering
  - view existing orders needing to be cooked
  - mark orders as complete
  - view completed orders needing to be picked up

Deliverer Contractor | Preferred Viewport: Mobile Phone

  - create a deliverer account
  - login to their deliverer account
  - claim orders that need delivering
  - view orders to be picked up from food carts and delivered based on time due.
  - mark orders as picked up
  - mark orders as delivered

## Issues

  - Orders being doubled in food cart screen after accepting an order



## Wishlist

  - credit card processing
  - yelp api integration food cart owners to not have to enter as much information and for viewers to build up demand for a food cart
  - stripe credit card processing

## IP

Copyright
Jay Freeman, Carlos Munoz Kampff, Clayton Collins, Benjamin T. Seaver, and David Quisenberry 2017

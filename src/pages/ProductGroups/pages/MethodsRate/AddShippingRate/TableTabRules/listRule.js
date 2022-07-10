export const ruleBase = [
  // Rule-based
  {
    tab: 'rule-based',
    contentTab: [
      {
        rule: 'Free shipping',
        description: 'Set a free shipping price without conditions.',
      },
      {
        rule: 'Flat Rate',
        description: 'Set a single flat rate shipping price.',
      },
      {
        rule: 'By Items',
        description:
          'Set a shipping price per item and each additional item or create a item table-based rule.',
      },
      {
        rule: 'By Weight',
        description:
          'Set a shipping price for first kilogram and each additional kilogram or create a table-based rule.',
      },
      {
        rule: 'By Price',
        description:
          "Set a shipping price as a percentage of the products' total price or create a table-based rule.",
      },
    ],
  },
];

export const listRule = [
  //   UPS
  {
    id: 1,
    tab: 'UPS',
    contentTab: [
      {
        area: 'UNITED STATES DOMESTIC',
        moreDescription: 'For shipping within the US',
        listMethod: [
          {
            method: 'UPS Ground',
            time: '1-5 business days',
            details: [
              'Ships from the US to all 50 states and Puerto Rico.',
              'Transit time will vary by destination.',
              'Transit time may be greater than 5 business days outside the contiguous 48 states.',
            ],
          },
          {
            method: 'UPS 3 Day Select',
            time: '3 business days',
            details: ['Ships within the contiguous 48 United States only.'],
          },
          {
            method: 'UPS 2nd Day Air',
            time: '2 business days',
            details: [
              'Ships from the US to all 50 states and Puerto Rico.',
              'Arrives as early as 10:30am.',
            ],
          },
          {
            method: 'UPS 2nd Day Air AM',
            time: '2 business days',
            details: [
              'Ships within the contiguous 48 United States only.',
              'Arrives as early as 10:30am.',
              'Destination must be a business address.',
            ],
          },
          {
            method: 'UPS Next Day Air Saver',
            time: '1 business day',
            details: [
              'Ships within the contiguous 48 United States only.',
              'Arrives as early as 3pm.',
            ],
          },
          {
            method: 'UPS Next Day Air',
            time: '1 business day',
            details: [
              'Ships from the US to all 50 states and Puerto Rico.',
              'Arrives as early as 10:30am.',
            ],
          },
          {
            method: 'UPS Next Day Air Early',
            time: '1 business day',
            details: [
              'Ships within the contiguous 48 United States only.',
              'Arrives as early as 8am.',
            ],
          },
          {
            method: 'UPS SurePost',
            time: '2-7 business days',
            details: [
              'Ships from the US to all 50 states, Puerto Rico, and all US Territories.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
              'Transit time may be greater than 7 business days outside the contiguous 48 states.',
            ],
          },
        ],
      },
      {
        area: 'CANADA DOMESTIC',
        moreDescription: 'For shipping within Canada',
        listMethod: [
          {
            method: 'UPS Standard',
            time: '1-5 business days',
            details: [
              'Ships within Canada only.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'UPS Expedited',
            time: '2 business days',
            details: ['Ships within Canada only.'],
          },
          {
            method: 'UPS Express Saver',
            time: '1 business days',
            details: ['Ships within Canada only.', 'Arrives as early as 3pm.'],
          },
          {
            method: 'UPS Express',
            time: '1 business days',
            details: [
              'Ships within Canada only.',
              'Arrives as early as 10:30am.',
            ],
          },
          {
            method: 'UPS Express Early',
            time: '1 business day',
            details: ['Ships within Canada only.', 'Arrives as early as 9am.'],
          },
        ],
      },
      {
        area: 'INTERNATIONAL',
        moreDescription: 'For shipping to/from all other countries',
        listMethod: [
          {
            method: 'UPS Worldwide Expedited',
            time: '2-5 business days',
            details: [
              'Ships internationally between all countries supported by UPS.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'UPS Worldwide Saver',
            time: '1-3 business days',
            details: [
              'Ships internationally between all countries supported by UPS.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'UPS Worldwide Express',
            time: '1-3 business days',
            details: [
              'Ships internationally between all countries supported by UPS.',
              'Transit time will vary by destination.',
              'Arrives as early as 10:30am to some destinations.',
            ],
          },
          {
            method: 'UPS Worldwide Express Plus',
            time: '1-2 business days',
            details: [
              'Ships internationally between all countries supported by UPS.',
              'Transit time will vary by destination.',
              'Arrives as early as 9am to some destinations.',
            ],
          },
          {
            method: 'UPS Standard',
            time: '3-7 business days',
            details: [
              'Ships internationally between the contiguous 48 United States and Canada or Mexico.',
              'Ships internationally between select countries in Europe.',
              'Transit time will vary by destination.',
            ],
          },
        ],
      },
    ],
  },
  //   FedEx
  {
    id: 2,
    tab: 'FedEx',
    contentTab: [
      {
        area: 'UNITED STATES DOMESTIC',
        moreDescription: 'For shipping within the US',
        listMethod: [
          {
            method: 'FedEx Ground® / Home Delivery®',
            time: '1-5 business days',
            details: [
              'Ships from the US to all 50 states.',
              'Transit time will vary by destination.',
              'Transit time may be greater than 5 business days outside the contiguous 48 states.',
              'FedEx Home Delivery® includes Saturdays as business days.',
              'Rate title is dynamic. Will appear as FedEx Ground® to business addresses and FedEx Home Delivery® to residential addresses.',
            ],
          },
          {
            method: 'FedEx Express Saver®',
            time: '3 business days',
            details: [
              'Ships within the contiguous 48 United States only.',
              'Arrives at businesses by 4:30pm and residences by 8pm.',
            ],
          },
          {
            method: 'FedEx 2Day®',
            time: '2 business days',
            details: [
              'Ships from the US to all 50 states.',
              'Arrives at businesses by 4:30pm and residences by 8pm.',
            ],
          },
          {
            method: 'FedEx 2Day® AM',
            time: '2 business days',
            details: [
              'Ships from the US to all 50 states except Hawaii.',
              'Arrives as early as 10:30am.',
            ],
          },
          {
            method: 'FedEx Standard Overnight®',
            time: '1 business day',
            details: [
              'Ships from the US to all 50 states except Hawaii. Other exceptions may apply.',
              'Arrives as early as 3pm.',
            ],
          },
          {
            method: 'FedEx Priority Overnight®',
            time: '1 business day',
            details: [
              'Ships from the US to all 50 states.',
              'Arrives as early as 10:30am.',
            ],
          },
          {
            method: 'FedEx First Overnight®',
            time: '1 business day',
            details: [
              'Ships from the US to all 50 states.',
              'Arrives as early as 8am.',
            ],
          },
          {
            method: 'FedEx SmartPost®',
            time: '2-7 business days',
            details: [
              'Ships from the US to all 50 states, Puerto Rico, and all US Territories.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
              'Transit time may be greater than 7 business days outside the contiguous 48 states.',
            ],
          },
        ],
      },
      {
        area: 'CANADA DOMESTIC',
        moreDescription: 'For shipping within Canada',
        listMethod: [
          {
            method: 'FedEx Ground®',
            time: '1-7 business days',
            details: [
              'Ships within Canada only.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'FedEx Economy®',
            time: '1-3 business days',
            details: [
              'Ships within Canada only',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'FedEx 2Day®',
            time: '2 business days',
            details: ['Ships within Canada only.'],
          },
          {
            method: 'FedEx Standard Overnight®',
            time: '1 business days',
            details: ['Ships within Canada only.'],
          },
          {
            method: 'FedEx Priority Overnight®',
            time: '1 business day',
            details: ['Ships within Canada only.', 'Arrives as early as 10am.'],
          },
          {
            method: 'FedEx First Overnight®',
            time: '1 business day',
            details: ['Ships within Canada only.', 'Arrives as early as 10am.'],
          },
        ],
      },
      {
        area: 'INTERNATIONAL',
        moreDescription: 'For shipping to/from all other countries',
        listMethod: [
          {
            method: 'FedEx International Ground®',
            time: '2-7 business days',
            details: [
              'Ships from the US to Canada only.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'FedEx International Economy®',
            time: '2-5 business days',
            details: [
              'Ships internationally between all countries supported by FedEx.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'FedEx International Priority®',
            time: '1-3 business days',
            details: [
              'Ships internationally between all countries supported by FedEx.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'FedEx International Priority Express®',
            time: '1-3 business days',
            details: [
              'Ships internationally between all countries supported by FedEx.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'FedEx International First®',
            time: '1 business days',
            details: [
              'Ships internationally between all countries supported by FedEx.',
              'Transit time will vary by destination.',
              'Arrives as early as 10:30am.',
            ],
          },
          {
            method: 'FedEx Europe First®',
            time: '1 business days',
            details: [
              'Ships internationally to or within Europe only.',
              'Arrives as early as 9am.',
            ],
          },
          {
            method: 'FedEx International Connect Plus®',
            time: '1-3 business days',
            details: [
              'Ships internationally between all countries supported by FedEx.',
              'Transit time will vary by destination.',
              'This rate must be activated on your FedEx account and requires negotiated rates credentials.',
            ],
          },
        ],
      },
    ],
  },
  //   USPS
  {
    id: 3,
    tab: 'USPS',
    contentTab: [
      {
        area: 'UNITED STATES DOMESTIC',
        moreDescription: 'For shipping within the US',
        listMethod: [
          {
            method: 'USPS Priority Mail',
            time: '1-3 days',
            details: [
              'Ships from the US to all 50 states, Puerto Rico, and all US Territories.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'USPS Priority Mail Express',
            time: '1-2 days',
            details: [
              'Ships from the US to all 50 states, Puerto Rico, and all US Territories.',
              'Transit time will vary by destination',
            ],
          },
          {
            method: 'USPS First-Class Mail',
            time: '1-3 days',
            details: [
              'Ships from the US to all 50 states, Puerto Rico, and all US Territories.',
              'Transit time will vary by destination.',
              'Restricted to envelopes and lightweight packages under 13oz',
            ],
          },
          {
            method: 'USPS Media Mail Parcel',
            time: '2-8 days',
            details: [
              'Ships from the US to all 50 states, Puerto Rico, and all US Territories.',
              'Transit time will vary by destination.',
              'Transit time may be significantly longer than 2-8 days outside the contiguous 48 states.',
              'Restricted to media and educational materials',
            ],
          },
          {
            method: 'USPS Retail Ground',
            time: '2-8 days',
            details: [
              'Ships from the US to all 50 states, Puerto Rico, and all US Territories.',
              'Transit time will vary by destination.',
              'Transit time may be significantly longer than 2-8 days outside the contiguous 48 states',
            ],
          },
        ],
      },
      {
        area: 'INTERNATIONAL',
        moreDescription: 'For shipping to/from all other countries',
        listMethod: [
          {
            method: 'USPS Priority Mail International',
            time: '6-10 days',
            details: [
              'Ships internationally from the US to all countries supported by USPS.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
            ],
          },
          {
            method: 'USPS Priority Mail Express International',
            time: '3-5 days',
            details: [
              'Ships internationally from the US to all countries supported by USPS.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
            ],
          },
          {
            method: 'USPS Global Express Guaranteed (GXG)',
            time: '1-3 days',
            details: [
              'Ships internationally from the US to all countries supported by USPS.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
            ],
          },
          {
            method: 'USPS First-Class Package International Service',
            time: 'Transit time not available',
            details: [
              'Ships internationally from the US to all countries supported by USPS.',
              'Transit time is unavailable.',
              'Restricted to packages up to 4lb. Minimum package dimensions apply',
            ],
          },
        ],
      },
    ],
  },
  //   Canada Post
  {
    id: 4,
    tab: 'Canada Post',
    contentTab: [
      {
        area: 'CANADA DOMESTIC',
        moreDescription: 'For shipping within Canada',
        listMethod: [
          {
            method: 'Canada Post Regular Parcel',
            time: '1-9 business days',
            details: [
              'Ships within Canada only.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'Canada Post Expedited Parcel',
            time: '1-7 business days',
            details: [
              'Ships within Canada only.',
              'Transit time will vary by destination',
            ],
          },
          {
            method: 'Canada Post Xpresspost',
            time: '1-2 business days',
            details: [
              'Ships within Canada only.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'Canada Post Priority',
            time: '1 business days',
            details: [
              'Ships within Canada only.',
              'Transit time will vary by destination.',
            ],
          },
        ],
      },
      {
        area: 'CANADA TO UNITED STATES',
        moreDescription: 'For shipping from Canada to the US',
        listMethod: [
          {
            method: 'Canada Post Small Packet USA',
            time: '5-8 business days',
            details: [
              'Ships from Canada to the US only.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
              'Restricted to small and lightweight items under 2kg.',
            ],
          },
          {
            method: 'Canada Post Tracked Packet USA',
            time: '4-7 business days',
            details: [
              'Ships from Canada to the US only.',
              'Transit time will vary by destination.',
              'Restricted to small and lightweight items under 1kg.',
            ],
          },
          {
            method: 'Canada Post Expedited Parcel USA',
            time: '4-7 business days',
            details: [
              'Ships from Canada to the US only..',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'Canada Post Xpresspost USA',
            time: '2-3 business days',
            details: [
              'Ships from Canada to the US only.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: 'Canada Post Priority Worldwide Pak USA',
            time: '1-3 business day',
            details: [
              'Ships from Canada to the US only.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
              'Arrives as early as 10:30am next day.',
            ],
          },
          {
            method: 'Canada Post Priority Worldwide Envelope USA',
            time: '1-3 business day',
            details: [
              'Ships from Canada to the US only.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
              'Arrives as early as 10:30am next day.',
              'Restricted to envelopes under .5kg.',
            ],
          },
        ],
      },
      {
        area: 'INTERNATIONAL',
        moreDescription: 'For shipping to/from all other countries',
        listMethod: [
          {
            method: 'Canada Post Small Packet International Surface',
            time: 'Transit time not available',
            details: [
              'Ships internationally from Canada to all countries supported by Canada Post.',
              'Transit time is unavailable.',
              'Arrivals between 1 and 3 months depending on destination',
              'Restricted to small and lightweight items under 2kg.',
            ],
          },
          {
            method: 'Canada Post Small Packet International Air',
            time: '6-10 business days',
            details: [
              'Ships internationally from Canada to all countries supported by Canada Post.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
              'Restricted to small and lightweight items under 2kg.',
            ],
          },
          {
            method: 'Canada Post Tracked Packet International',
            time: '6-10 business days',
            details: [
              'Ships internationally from Canada to all countries supported by Canada Post.',
              'Transit time will vary by destination.',
              'Restricted to small and lightweight items under 2kg.',
            ],
          },
          {
            method: 'Canada Post International Parcel Surface',
            time: 'Transit time not available',
            details: [
              'Ships internationally from Canada to all countries supported by Canada Post.',
              'Transit time is unavailable.',
              'Arrivals between 1 and 3 months depending on destination.',
            ],
          },
          {
            method: 'Canada Post Xpresspost International',
            time: '4-7 business days',
            details: [
              'Ships internationally from Canada to all countries supported by Canada Post.',
              'Transit time will vary by destination.',
            ],
          },
          {
            method: "Canada Post Priority Worldwide Pak INT'L",
            time: '2-3 business days',
            details: [
              'Ships internationally from Canada to all countries supported by Canada Post.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
            ],
          },
          {
            method: "Canada Post Priority Worldwide Envelope INT'L",
            time: '2-3 business days',
            details: [
              'Ships internationally from Canada to all countries supported by Canada Post.',
              'Precise number of transit days is unavailable; transit time will always appear as a range.',
              'Restricted to envelopes under .5kg.',
            ],
          },
        ],
      },
    ],
  },
  //   DHL
  {
    id: 5,
    tab: 'DHL',
    contentTab: [
      {
        area: 'INTERNATIONAL',
        moreDescription: 'For shipping across borders',
        listMethod: [
          {
            method: 'Canada Post Regular Parcel',
            time: '1-2 business days',
            details: [
              'Ships internationally between all countries supported by DHL.',
              'Transit time may vary by destination.',
            ],
          },
        ],
      },
    ],
  },
];


![](https://cdn.prod.website-files.com/636fea919b96f729afeb9bf3/636fecb23e9741026fee1b94_fuul-logo-color.webp "Fuul")

# Fuul Pricing Service

## This services calculates the right purchase price.

 __This services evaluates a purchases batch, finds special offers in place and computes the best fitting price.__ 

__To setup:__
```
./npm install
```

__To run dev:__
```
./npm run dev
```

__To run the built:__
```
./node ./bin/index.js
```

## Behavior

- The infeed is taken internally from a repository and run through the pricing service.
- The pricing methodology (strategy) is selected automátically by the ```PricingResolver```

- If the inbound data can't match any Special Offer, it will be resolved by the FULL-PRICE strategy.


## For Developers

````
// Inline comments were added to help you follow the code!
````

### To add Special Offers of existing types:
- Just add the appropriate values in the Conditions repository for that particular Special Offer type.

### To add Special Offer Types:
In case of a new strategy is required:
- Add the new type in ```SpecialOfferType.ts```
- Add the conditions object of the newly added type in ```SpecialOfferConditions.ts```
- Add the appropriate creational logic in ```SpecialOfferFactory.ts```

## Room for growth.
__The better approach to resolving dynamic pricing strategies would be along the the following path:__
- Define all the possible base strategies upfront and build on top.
- Base strategies would be used to build more complex strategies with aggregation and parametrization only.
- All the parameters for the resulting strategies would be stored in a dynamic repository.
- The strategies could be created and administered by a qualified sales strategist instead of a programmer.

## Big Scale Scenario:
- In a large scale development the creational elements should be either injected or added as plugins, and fully operated by soft type dictionaries.
- Data retrieved from remote repositories should be validated and transformed by a frontier service (internal) and guarantee that domain models are the only format carried into the app.
- Corporate dependencies must be configured in a domain segment and be shared across the organization's domain.
- All data received by core services such this, must have a redundant queued architecture to guarantee no conversions loss and no congestions, and be crash-recoverable.

### left out:
- __Description for the NFTs in Cart.__

  - On creating the "cart", getting the description for the NFTs had been left out.

- __Reason why:__
  - Field exists but at the time of using it, retrieving the data was considered unnecessary in this scenario. The field "Code" was used instead.


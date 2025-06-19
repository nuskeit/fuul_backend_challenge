
![](https://cdn.prod.website-files.com/636fea919b96f729afeb9bf3/636fecb23e9741026fee1b94_fuul-logo-color.webp "Fuul")

# Fuul Pricing Service

## This services calculates the right purchase price.

 __This services evaluates a purchases batch, finds special offers in place and computes the best fitting price.__ 

__To setup:__
```
npm install
```

__To run dev:__
```
npm run dev
```

__To run the built:__
```
node ./bin/index.js
```

## Behavior

- The infeed is taken internally from a repository and run through the pricing service.
- The pricing methodology (strategy) is selected automatically by the ```pricingStrategyResolver()``` function.

- If the inbound data can't match any Special Offer, it will fall back to the Full Price strategy.


## For Developers

````
// Inline comments were added to help you follow the code.
````

### To add Special Offers of existing types:
- Just add the appropriate parameter values in the Conditions repository for that particular Special Offer type.
- ```Conditions``` parameter is an ```Array<number>```
- Each parameter is referenced by order from its Strategy Function.

### To add new Pricing Strategy:
In case of a new strategy is required:

- Add ```Special Offer``` type:
  - Add a new entry in ```src/lib/types/special-offer/SpecialOfferType.ts``` to get a new ```Special Offer``` type.
- Add a ```Pricing Strategy``` logic:
  - Create a new function in ```src/external/services/``` to calculate the new ```Pricing Strategy``` (this could be replaced by an external service).

- Map the new ```Special Offer``` to the ```Pricing Strategy``` logic. 
  - Add a new entry in ```src/external/PricingStrategiesPort.ts``` to map the new ```Pricing Strategy``` to a ```Special Offer``` type.

## Room for growth.
### Build on top of this.
__On this design, a good approach to resolving dynamic pricing strategies would be to:__
- Define all the possible base strategies upfront and build on top.
- Base strategies would be used to build more complex strategies with aggregation and parametrization only.
- All the parameters for the resulting strategies would be stored in a dynamic repository.
- The strategies could be created and administered by a qualified sales strategist instead of a programmer.

### Connect to external Pricing Service.
__The current architectural design would play well with an external pricing service.
- The only change to make is to connect the ```PricingStrategiesPort``` to an external service provider.
- the only file to change would be ```src/external/PricingStrategiesPort.ts```
- This would dim the type ```SpecialOfferType``` completely useless. It'd be replaced by a simple ```string```.

## Large Scale Scenario:
- In a large scale development scenario the Creational Services should be either injected or added as plugins, and fully operated by soft-types in dictionaries.
- Data retrieved from remote repositories should be validated and transformed by a frontier-service (preferable internal and streamline, over a 3rd party ORM) and guarantee that domain models are correctly translated into the app.
- Corporate dependencies must be configured in a domain segment and be shared across the organization's domain.
- All data received by core services such this, must have a redundant queued architecture to guarantee no transactions loss and no congestion, and be crash-recoverable.

### left out:
- __Price Strategies Repo__
  > ```getAllPricingStrategies()``` should retrieve the strategies logic from a pluggable source. It's all internal in this version.


- __Description for the NFTs in Cart.__

  > On creating the "Cart", getting the description for the NFTs has been left out.
  > Field exists but at the time of using it, retrieving the data was considered unnecessary in this scenario. The field "Code" was used instead.


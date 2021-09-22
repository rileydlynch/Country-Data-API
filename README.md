# For those who want to host the API:

## Step 1
Use the *npm install* command to install everything from the *package.json*

## Step 2
Run this command:
> npx nodemon app.js

And it's live!  


# For those who want to call the API:

## Step 1
Write a normal URL addressed to the address of the API, and add relevant URL parameters. The example below of *"theapi.com"* is not a real website, you will need the address of the actual API. You will need to specify the country, and optionally you can call specific pieces of data out of a particular country's full dataset. [The full list of country IDs is here](https://github.com/rileydlynch/Country-Data-API/blob/main/country-ids.csv). So to get all of a country's data:

> http://theapi.com/?country=1

The above will give you all data for Afghanistan. Optionally, if you want a specific piece of data for Afghanistan, use a second URL parameter like so:

> http://theapi.com/?country=1&name

Here is the list of acceptable second URL parameters:

- id
- name
- iso3
- iso2
- numeric_code
- phone_code
- capital
- currency
- currency_symbol
- tld
- native
- region
- subregion
- timezones
- latitude
- longitude
- emoji
- emojiU

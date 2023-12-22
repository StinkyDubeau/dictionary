# A Stinky Dictionary
A simple node app that will fetch definitions from [Merriam Webster's free API](https://dictionaryapi.com/).

## Installation
Prerequisites:
- Node must be installed (Project was creating using v20.10.0)
- Node Package Manager (npm) will be used for setup
- You will need to [create a free account](https://dictionaryapi.com/register/index) with Merriam Webster (In order to obtain your own API key)

1. Clone the repository
```
git clone https://github.com/stinkydubeau/dictionary.git
```
2. cd into the directory and then install the required packages using npm
```
cd dictionary
npm i
```
3. Get an API key from Merriam Webster. It should be for their "Merriam-Webster's Collegiate® Dictionary with Audio".
4. Define your key for Dictionary to read. It should be saved in "/private/apikey.txt". Create this file and put your key in  the first line. No other text should follow.
```
mkdir private
cd private
touch apikey.txt
```
5. (Optional) Set the port in index.js to your choosing, by default it will be 3000.
6. Run the app using node.
```
node index.js
```
7. Open a browser and see it working. Again, by default you can find it at localhost:3000/

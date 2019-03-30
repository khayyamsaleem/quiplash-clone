## Quip API's

### Getting started
To get the [prompts](https://github.com/nyu-software-engineering/quip-thinking/blob/master/prompts/prompts.csv) on your local machine, cd server/api-utils and run the command `node populate-prompts`.

### API's

##### POST '/prompt/create-prompt'

body: {  
	question: <question>  
}  

Takes form input with body above, creates a new prompt and adds it to the database.


##### GET '/prompt/get-prompt'

Returns a random prompt from the database.
 

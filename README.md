# alexa-santa-claus

This skill gives Alexa a direct connection to Santa Claus.

* Alexa ask Santa how many reindeer there are
* Alexa ask Santa what color nose does Rudolphs have
* Alexa ask Santa where he lives
* Alexa ask Santa what he likes to eat 
* Alexa ask Santa what the elves are doing
* Alexa ask Santa am I on the naught list

## Alexa Certification Feedback

Unfortuanlly this skill will not accepted but your kids can still ask Alexa "how many days unil christmas".

![Amazon Response](https://raw.githubusercontent.com/jspooner/alexa-santa-claus/master/response.png)


## AWS Lambda Setup

1. Go to the AWS Console and click on the Lambda link. Note: ensure you are in us-east or you won't be able to use Alexa with Lambda.
2. Click on the Create a Lambda Function or Get Started Now button.
3. Skip the blueprint
4. Name the Lambda Function "Santa-Claus-Skill".
5. Select the runtime as Node.js
6. Go to the the src directory, select all files and then create a zip file, make sure the zip file does not contain the src directory itself, otherwise Lambda function will not work.
7. Select Code entry type as "Upload a .ZIP file" and then upload the .zip file to the Lambda
8. Keep the Handler as index.handler (this refers to the main js file in the zip).
9. Create a basic execution role and click create.
10. Leave the Advanced settings as the defaults.
11. Click "Next" and review the settings then click "Create Function"
12. Click the "Event Sources" tab and select "Add event source"
13. Set the Event Source type as Alexa Skills kit and Enable it now. Click Submit.
14. Copy the ARN from the top right to be used later in the Alexa Skill Setup


## Configure Amazon

TODO

#### Links

* http://tobuildsomething.com/2015/08/14/Amazon-Echo-Alexa-Tutorial-The-Definitive-Guide-to-Coding-an-Alexa-Skill/
* https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interaction-model-reference#slot-types
* https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#audio
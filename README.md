# APIX VSCode IDE Plugin for Node.js

## What is APIX? 

The APIX platform helps Financial Institutions and FinTechs innovate and collaborate solving business problems towards financial inclusion.
Visit [APIX Platform](https://apixplatform.com) for more details.

### Marketplace: 

Discover a new community to experiment and collaborate with.

- Catalogue of vetted Financial Institutions and FinTechs
- Search through a vetted product catalog of APIs and solutions
- Easily post a problem statement privately or publically
- Contribute an idea, API or solution to a business problem
- Track and follow contribution and activity through your homepage

### Sandbox

Easily and quickly Design an API/solution for Deployment

- Subscribe and try out Sandbox APIs via a GUI to easily understand
- Use the Sandbox IDE to quickly build solutions using subscribed APIs
- View comprehensive documentation and support for each API
- Access APIs and functionality belonging to subscribed solutions
- Share access to subscribed APIs seamlessly within all users

# VSCode IDE Plugin 

This Visual Code Plugin was designed to accelerate the innovation with the APIs published in APIX.

- Plugin can be used for Node.js only
- All the subscribed and published APIs, versions, endpoint details can be accessed through the plugin.
- Plugin will generate code to tryout the endpoints

[![Watch the video](https://content.apixplatform.com/documents/training/ide/APIX_IDE_Extension_in_VSCode_Youtube.png)](https://youtu.be/4xq8p1YICGI)

## Installation steps

1. Open Visual Code. Go to `View` Menu > `Extensions`
2. Search for `apix`
3. Select `APIX IDE` > click on `Install`

![Installation Step](https://content.apixplatform.com/documents/other/vscode-plugin/images/installation-step1.png)

## Create a Node.js project [OPTIONAL]

1. Download Install `Node.js` from official [website](https://nodejs.org/en/download/)
2. Open `Terminal` application
3. Browse to your preferred path to store your Node.js project

		cd ~/Desktop
		mkdir my-project
		cd my-project

4. Execute below command and provide the project details.

		npm init

## Configure Node.js Project to use IDE

1. Open your Node.js project `my-project` in Visual Code
2. Open `New Terminal` window from `Terminal` menu.
3. Execute below command to install `swagger-client` npm dependency.

		npm install --save swagger-client

4. Open APIX IDE Extension 
5. Click on `Configure` button from the toolbar and click `Configure Credentials`.
6. Provide `domain`, `username`, `password` information in the input dialog. Credentials will be encrypted and saved to `apix.json` in the project root folder.

	![Credentials Step](https://content.apixplatform.com/documents/other/vscode-plugin/images/credentials.png)

7. Click `Refresh` button in the APIX IDE Extension.
8. If the provided credentials are correct and if you have any published or subscribed APIs in APIX,  API list should get listed now.

## Using extension to try-out APIs

### View an code Example

- Click on `Add index.js` button which will create a index.js file with an example in your Node.js project.

![Installation Step](https://content.apixplatform.com/documents/other/vscode-plugin/images/installation-step3.png)

Generated Code Sample is as below.

		let Swagger = require('swagger-client');

		exports.handler = function (event, context, callback) {

			Swagger.http({
				url: 'https://services.apixplatform.com/api-sandbox/application/token',
				method: 'post',
				query: {},
				headers: { "Accept": "*/*", "Content-Type": "application/json" },
				body: JSON.stringify({
					"userName": "<EMAIL>",
					"password": "<PASSWORD>"
				})
			}).then((response) => {
				var access_token = "bearer " + response.body.access_token;
				// Insert new API calls here to call with APIX Access Token


				callback(null, access_token);
			}).catch((err) => {
				console.log(err);
				callback("Execution failed");
			});

		}

### Generate Code for a API endpoint

1. Open the file and put the cursor to the place where you want to insert the generated code.
2. Expand the API > Version > Endpoint and select the method to generate the code.
3. Click on the arrow next to the method to generate the code.

![Installation Step](https://content.apixplatform.com/documents/other/vscode-plugin/images/installation-step4.png)

4. Code will be generated and added to the working document where the cursor was.

![Installation Step](https://content.apixplatform.com/documents/other/vscode-plugin/images/installation-step5.png)

5. Change the generated code with `header`, `query`, `body`, `path` parameter values.
6. Save the file.
7. Run code with below command.

		node <filename>
		
	ex: 
		
		node index.js

### Generate Code for APIX Token generation

1. Open the file and put the cursor to the place where you want to insert the generated code.
2. Go to the APIX IDE Extension
3. Click on the `Key` icon in the toolbar.

![Installation Step](https://content.apixplatform.com/documents/other/vscode-plugin/images/installation-step6.png)

4. Code to get the APIX token will be generated and added to the working document where the cursor was.

![Installation Step](https://content.apixplatform.com/documents/other/vscode-plugin/images/installation-step7.png)

### Add External APIs

External APIs which are not available in APIX can also be linked to this extension by following below steps.

1. Open APIX IDE Extension 
2. Click on `Configure` button from the toolbar and click `Add External API`.
3. Provide `API Name`, `API Specification`information in the input dialog. Provided details will be saved to `apix.json` in the project root folder.

	![External APIs Configure](https://content.apixplatform.com/documents/other/vscode-plugin/images/external-apis.png)

4. `EXTERNAL APIS` section will populate the added external APIs with API Endpoints and Methods. Code can be generated using the same methodology described in the previous section.

	![External APIs View](https://content.apixplatform.com/documents/other/vscode-plugin/images/external-apis-view.png)

### Git Integration

Follow the steps below to integrate IDE code with your git repo. 

**You will need to have your git setup url, username and password handy before following the steps listed below:**

1. Initialize git by executing command _git init_
2. Setup config to tell git who you are by executing the commands: 
	- _git config --local user.email "youremail@example.com"_
	- _git config --local user.name "Your Name"_
3. Add and commit initial set of files by running the command _git add -A && git commit -m "Your Message"_
4. Set linking of the remote origin by executing the command _git remote add origin https://github.com/username/git-repo-name.git_
5. Finally push your changes to the remote git by executing the command _git push -u origin master_ You will be asked to feed in your credentials before push. Once authenticated your changes will be pushed to the specified remote git repository and you are all set to explore!

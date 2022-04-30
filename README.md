# Data Foundation Listing Platform

# Group 2 - Team 2

```txt
Astitva Gupta - 2018101085
Trusha Sakharkar - 2018101093
Siddharth Jain - 2018101038
```

## Setup

#### React

### Installation

```
cd frontend
yarn
```
### Run React:
```
yarn start
```
Navigate to localhost:3000/ in your browser.
### Build:
```
yarn build
```


## File/Direction Structure
```txt
./ListingPlatform
├── backend
│   ├── server.py
│   └── users.json
├── frontend
│   ├── config-overrides.js
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Auth.js
│   │   │   ├── css
│   │   │   │   ├── Auth.css
│   │   │   │   ├── Dashboard.css
│   │   │   │   ├── Details.css
│   │   │   │   └── Landing.css
│   │   │   ├── Dashboard.js
│   │   │   ├── Details.js
│   │   │   ├── img
│   │   │   │   ├── challenge.png
│   │   │   │   └── dataset.png
│   │   │   ├── Landing.js
│   │   │   ├── Listing.js
│   │   │   ├── Subscription.js
│   │   │   └── Tabs
│   │   │       ├── Description.js
│   │   │       ├── Metadata.js
│   │   │       ├── Versions.js
│   │   │       └── Visualization.js
│   │   ├── index.css
│   │   ├── index.js
│   │   └── serviceWorker.js
│   ├── yarn-error.log
│   └── yarn.lock
├── Requirements.txt
└── README.md
```



## Project Description and Breakdown
### Homepage
- Landing page, links to dataset listing, ML Challenges

### Profile page
- List of datasets uploaded by loggedin user
- List of datasets subscribed by loggedin user, with subscription status

### Dataset listing
- List of all public datasets
- Option to upload a dataset
- Option to filter/sort dataset based on different parameters
- Redirection to detailed view of a dataset

### Dataset Details page
- Description of dataset
- Metadata
- Versions
- Visualization
- Option to subscribe/view subscription status
- Option to download for subscribed users

### Login/Signup
- Registration for admin and users
- SignIn for existing admin and users
- Auth Workflow
- Admin redirected to admin portal
- User redirected to user homepage

## Technologies Stack
- ReactJS (Frontend Framework)
- Axios (HTTP Client)
- Bootstrap (CSS)
- jQuery

## Documentation
- https://reactjs.org/docs/getting-started.html
- https://docs.npmjs.com/
- https://devdocs.io/d3~4/
- https://axios-http.com/docs/intro
- https://getbootstrap.com/docs/4.1/getting-started

## Deliverables
- Filtering datasets
- Auth Workflow
- Subscription workflow
- Profile page : subscriptions, uploads and authorization
- Merging Components

## APIs
```
user_auth(username, email, password) - get request; 
response:
[
	{
		username: string, 
		email: string, 
		isAdmin: bool,
	}
]
```
```
get_subscription(userId) - get request; get subsciption data for a logged in user
reponse:
[
	{
        id: {
            id: "",
            startDate: "", //YYYYMMDD
            endDate: "",, //YYYYMMDD
            approvalStatus: "", //Approved/Pending
        },
    },
] 
```
```
get_details() - get request; get all the datasets(public) to list.
reponse:
[
	{
        id: {
          id: "",
          name: "",
          description: "",
          tags: [],
          versions: "",
          uploadBy: "",
          uploadDate: "", //DDMMYYYY
          dataType: "", //csv,json
          downloadSize: "",//in GB
        },
      })
]
```
```
get_myUploadData(userId) - get request; get all dataset-Ids of the datasets uploaded by the logged-in user.
response:
[
	[ "datasetID1", "datasetID2"...]
]
```
```
subscribe_dataset(datasetId, UserId) - post request; subscribes to a dataset.
```
```
download_dataset(datasetId, UserId) - post request - downloads to a dataset.
```

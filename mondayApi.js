import "dotenv/config";

const Monday_Query = '
        query {
    boards (ids: 18401847850) {
        items_page{
            items{
                id
                name
                column_values{
                    id
                    Text
                }
            }
        }
    }
}
';

//Make API Request

export const fetchFromMondayAPI = async () => {
    //Check if the token exists. If not, error.
    if (!process.env.Monday_Token){
        throw new Error (
            "Missing Monday_Token! Add it to your .env file."
        );
    }
//Capturing the API's response in a variable by making a request
    const response = await fetch ("https://api.monday.com/v2", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            Authorization: process.env.Monday_Token, 
        },
        body: JSON.stringify({query:Monday_Query}),
    });

    //Turn the response into a Javascript object
    const data = await response.json();

    return data;
}

fetchFromMondayAPI()
    .then((data)=> {
        console.log("Yay! I fetched the data from monday.com!");
        //if you want to return to show/print result run:
        .then((result)) => {
            console.log("Yay! I fetched the data from monday.com!", result.status );
        }
        const data = result.data
        //Show the FULL JSON
        //console.log(Json.stringify(data, null, 2));
        console.log(JSON.stringify(data, null, 2));
        console.log(data.data.boards[0].items_page.items)//data: {boards: [[Object]]},
    })
    //to store items
    const item = data.data.boards[0].items_page.items
    console.log(item) 
    //to map
    const itemName = items.map((item) => item.name)
    //to print table format instead of json format
    console.table(items.map((i) => ({
        id: i.id,
        name: i.name 
    })))
    .catch((err)=> {
        console.error("Aw shucks! Failed to fetch data from monday.com :( :");
        console.error("Reason: ", err.message);

        process.exit(1);
    });

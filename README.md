## Description
Project made to act as a CRUD for a wishlist application.  
It is a React-Redux CRUD application to save amazon items I would like to receive.

## Quickstart
Just run it with:  

```
npm start
```

The application will try to connect to this API URL.  
```
http://localhost:3000/api/v1/wishlist
```
The server runs on the port 8000 by default.  

Add a new item with the 'ADD ITEM' button to show the form.
![alt text](https://user-images.githubusercontent.com/10179447/50036941-8a1a6200-ffd2-11e8-9aba-2e039f620c48.png "Add Item")

Each item has an 'EDIT' and 'DELETE' button.
![alt text](https://user-images.githubusercontent.com/10179447/50036942-8ab2f880-ffd2-11e8-9806-a5f8159b098c.png "Edit Item")


#### JSON object model:

```
{
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 200},
    price: {type: Number, required: true},
    image_url: {type: String, required: true, max: 500},
    product_url: {type: String, required: true, max: 500},
}
```

#### Environment variables
```
PORT=8000
```

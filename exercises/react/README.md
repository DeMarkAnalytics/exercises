This is an application for a pizza shop to manage its orders.

We need to make the "Submit order" button work.

This is a list of things that need to happen when the user presses "Submit order".

1. "Order not submitted" needs to change to a timestamp.
2. The "submit order" button needs to disappear.
3. The remove ingredient buttons need to disappear.
4. The "Number of completed orders" needs to update to reflect the correct number.

After making the sumit order button work, please look at `src/components/Order.js`. What are some ways in which this component could be improved?

*Tem Response:*
We could look into leveraging the use of pure components or adding in the shouldComponentUpdate life cycle event.
We could also update the summary store only on successful order updates. I was thinking about utilizing the effect hooks.

Also look at the reducer function in `src/store/orders.js`. Do you see any problems with this reducer function?
*Tem Response:*
The only thing I can see so far is not checking for duplicate ids before inserting a new order.
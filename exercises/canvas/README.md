Exercise that involves drawing data from a websocket connection onto an HTML canvas

To run use `npm start`

### Task

You are provided with a websocket connection that emits (fake) data for the price of a stock every 1 second. Your task is to create a bar chart based on that data that looks like the following:

### Requirements

- A bar char that looks like the given image below
- Bars should be draw on a `canvas`
- Only 20 bars should be visible at a time
- Bars should be ordered from oldest to newest, left to right.
- New bars should "push" out old bars on the left and be "inserted" on the right

![bar chart](docs/example1.png)


### Stretch Goals

- Each bar's height should be relative to what bars are in view (ie tallest visible bar should be the height of the canvas)
- Give each bar a red border
- Show the price value within each bar

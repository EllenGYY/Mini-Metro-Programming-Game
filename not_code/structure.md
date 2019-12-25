- Class
  - Station
    - var position get()
    - var shape get()
    - var lines get()
    - var passengers get()
    + addLines()
    + drawStation()
    + spawnPassengers()
    + showPassengers()
    + checkPassengers()
  - Line
    - var stations get()
    - var color get()
    - var carts get()
    + drawLine()
    + addCarts()
  - Cart
    - var line
    - var start 0 (from station line[0])
    - var direction 1 (positive)
    + initialize()
    + operating()
    + passengers_deal_on()
    + passengers_deal_off()
    + showPassengers()
  - Passenger
    - var shape get()
    - var status get() set(s)
    + drawPassenger()
  - Position
    - var x get()
    - var y get()
    + distance(Position)
    + rotation(Position)


- Const & Help Functions
  - Enum Eshape
  - Enum EPstatus
  + drawCircle()
  + drawSquare()
  + drawTriangle()
  + findInArray()
  + animate()
  
- CSS stylesheet
  - myMap 600\*600
  - metro 50\*30
  - blank 50\*50

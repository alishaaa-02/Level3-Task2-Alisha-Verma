## WebSockets for Real-Time Communication
This project demonstrates how to set up real-time, bidirectional communication between a server and multiple clients using WebSockets via Socket.io. It includes functionality for chat messaging, user-specific notifications, and efficient data updates, making it suitable for dynamic, interactive web applications.

## 📌 Features 
1. Real-time bidirectional communication between client and server <br>
2. Personalized messages and notifications per user <br>
3. Efficient event-based data updates <br>
4. Simple frontend integration (HTML+JS) <br>

## How It Works
**WebSocket Flow**
1. Client connects to server via Socket.io <br>
2. Server assigns user ID and listens to events: message, notification <br>
3. Server emits events based on logic (broadcast or specific users) <br>
4. Clients receive events and update the UI in real-time <br>

## Testing
1. Open two browser windows <br>
2. Login with different usernames <br>
3. Chat or trigger a notification <br>
4. Check that each user receives the correct message <br>

## Conclusion
This project showcases how to build scalable, real-time web applications using WebSockets with Socket.io. With support for bidirectional communication, user-specific messaging, and optimized data handling, it provides a solid foundation for features like chat systems, live notifications, and collaborative tools.


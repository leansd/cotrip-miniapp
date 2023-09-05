export interface WebSocketMessage {
  command: string;
  headers: {
      "content-length": string;
      "message-id": string;
      subscription: string;
      "content-type": string;
      destination: string;
  };
  body: any; 
}
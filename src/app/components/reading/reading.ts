export interface Reading {
    id: Number,
    sensorEndpointId: Number,
    soilMoisture: Number,
    waterLevel: Number,
    humidity: Number,
    temperature: Number,
    readingTimeStamp: Date
}
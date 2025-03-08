"use client"
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { ConsoleSpanExporter, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { DocumentLoadInstrumentation } from "@opentelemetry/instrumentation-document-load";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { XMLHttpRequestInstrumentation } from "@opentelemetry/instrumentation-xml-http-request";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

// Initialize the OpenTelemetry provider
const provider = new WebTracerProvider();
const consoleExporter = new ConsoleSpanExporter();
provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));
// Export traces to the browser console (for debugging)
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// Export traces to an OTLP collector (Elastic APM or other backend)
const otlpExporter = new OTLPTraceExporter({
  url: "http://localhost:8200/v1/traces", // Change this to your APM server or OpenTelemetry Collector endpoint
  headers: {}, // Add authentication headers if needed
});

provider.addSpanProcessor(new SimpleSpanProcessor(otlpExporter));
provider.register();

// Register automatic instrumentation for browser events
registerInstrumentations({
  instrumentations: [
    new DocumentLoadInstrumentation(), // Tracks page load performance
    new FetchInstrumentation(), // Tracks network requests
    new XMLHttpRequestInstrumentation(), // Tracks XHR requests
  ],
});

console.log("OpenTelemetry initialized successfully!");

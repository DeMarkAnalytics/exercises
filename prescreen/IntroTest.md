# Sr. Full Stack Prescreen test

This pre-screening test is designed to identify your strengths in relation to the core technologies we utilize on a daily basis at DeMARK Analytics. Please note that you are not expected to know every detail about every question. It's perfectly acceptable to say, "I'm not familiar with this technology."  If so at least give a brief description of similar technologies you may have familiarity with.

## React

Our primary application `Symbolik` is written using a combination of React components, Custom components and canvas elements.

1. **Can you explain the difference between a functional component and a class component in React? When would you use one over the other?**

1. **How do you handle component lifecycle in React, especially with the introduction of Hooks?**

1. **How do you approach designing a large, complex component? Would you break it down into smaller components? If so, how would you decide what should be its own component?**

1. **How would you manage state in a complex React application with multiple components needing access to shared state?**

1. **Can you explain the concept of "props drilling" and how you would address this issue in a large React application?**

## Micro Frontend

In order to help separate portions of the frontend into digestible, isolated and decoupled features we utilize Micro Frontend architecture.

1. **Can you explain the concept of a MicroFrontend? How does this architecture benefit the development and maintenance of large-scale applications?**

1. **In a MicroFrontend architecture, what strategies would you use to ensure consistency in both design and functionality across different MicroFrontends?**

1. **How would you manage communication between different MicroFrontends in an application?**

1. **What would be your strategy for handling shared dependencies in a MicroFrontend environment?**

1. **How would you approach testing in a MicroFrontend architecture, given that individual MicroFrontends might be developed and deployed independently?**

## Kubernetes

DeMARK Analytics does all it's deployments to Kubernetes clusters utilizing Helm charts.

1. **Can you explain how Kubernetes' declarative model works for managing services and how it differs from the imperative model?**

1. **What is Helm and how does it interact with Kubernetes to manage deployments?**

1. **Can you describe a situation where you've used Helm charts to manage a complex application deployment on Kubernetes? What challenges did you face and how did you overcome them?**

1. **How would you manage secrets and sensitive data in a Kubernetes environment?**

1. **How would you monitor and troubleshoot issues in a Kubernetes environment? What tools would you use?**

## API Design

At DeMARK Analytics we utilize a variety of API technologies from HTTP, gRPC, WebSocket, GraphQL with an emphasis on resource state transitions.  

1. **What are the key principles of REST? How do they affect your approach to API design?**

1. **How would you design a RESTful API for a complex entity that has several relationships with other entities?** for example:
    1. Stock Market Tickers
    1. Companies
    1. Company-Ticker Relationship
    1. Exchanges
    1. Exchange-Company Relationship
    1. Indexes
    1. Index-Company Relationship
    1. Portfolios
    1. Portfolio-Ticker Relationship

1. **How would you handle versioning in a RESTful API design? Can you discuss the pros and cons of different strategies?**

1. **Explain the concept of idempotency and safe methods in REST API design. Can you provide examples of how and when you would use these?**

1. **How would you approach designing error messages in a RESTful API?**

## NodeJS

Many of our micro services are written in typescript in order to help maintain parity with frontend code.

1. **Can you explain how you would structure a Node.js application using a microservice architecture? What factors would you consider when defining each service?**

1. **What are some challenges that you might face when implementing microservices in Node.js, and how would you address them?**

1. **How would you handle shared code or libraries across different microservices in a Node.js ecosystem?**

1. **What strategies would you use for communicating between microservices in a Node.js application?**

1. **How would you handle error tracking and logging across multiple microservices in a Node.js application?**

## AWS

DeMARK is heavily invested in AWS infrastructure.  Running all the Kubernetes infrastructure on EC2 instances.  Storage and MicroFrontend is handled by s3 and cloudfront.

1. **Can you describe a scenario where you would use AWS Lambda, and how it integrates with other AWS services?**

1. **What are some use cases for AWS CloudFront, and how would you set it up to deliver content stored in an S3 bucket?**

1. **AWS S3 provides different storage classes. Could you explain some of them and the scenarios they're best suited for?**

1. **In a serverless architecture using AWS Lambda and S3, how would you design error handling and retries?**

1. **How would you ensure the security of data stored in S3 and being processed by AWS Lambda? Can you discuss some best practices?**

## Rust

Many critical services that require significant computing performance are implemented in the Rust Programming language

1. **Can you explain how Rust's ownership model works? How does it help in preventing memory-related bugs?**

1. **In Rust, what are lifetimes and why are they important? Can you provide an example?**

1. **Rust has a strong focus on concurrency. Can you explain some of the concurrency concepts in Rust and how it differs from other languages?**

1. **What is "cargo" in the context of Rust? How does it aid in Rust development?**

1. **Can you discuss error handling in Rust? How does it compare with error handling in other languages you've used?**

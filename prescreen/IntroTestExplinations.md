# Full Stack Prescreen test

This pre-screening test is designed to identify your strengths in relation to the core technologies we utilize on a daily basis at DeMARK Analytics. Please note that you are not expected to know every detail about every question. It's perfectly acceptable to say, "I'm not familiar with this technology."

## React

Our primary application `Symbolik` is written using a combination of React components, Custom components and canvas elements.

1. **Can you explain the difference between a functional component and a class component in React? When would you use one over the other?**
   - Help assess the candidate's understanding of different types of components in React and their ability to choose the right one depending on the situation.

1. **How do you handle component lifecycle in React, especially with the introduction of Hooks?**
   - Discuss lifecycle methods in class components like componentDidMount, componentDidUpdate, componentWillUnmount, etc. For functional components, they should explain hooks like useEffect and how they can be used to mimic lifecycle methods.

1. **How do you approach designing a large, complex component? Would you break it down into smaller components? If so, how would you decide what should be its own component?**
   - Check ability to design a maintainable and reusable component structure, adhering to best practices for separation of concerns.

1. **How would you manage state in a complex React application with multiple components needing access to shared state?**
   - See knowledge about state management solutions in React, like Context API, Redux, or MobX, and when to use them.

1. **Can you explain the concept of "props drilling" and how you would address this issue in a large React application?**
   - View understanding of "props drilling" and their knowledge of methods to solve it - like using Context API, Redux, or even compound components.

## Micro Frontend

In order to help separate portions of the frontend into digestible, isolated and decoupled features we utilize Micro Frontend architecture.

1. **Can you explain the concept of a MicroFrontend? How does this architecture benefit the development and maintenance of large-scale applications?**
   - Check understanding of the MicroFrontend concept, including its purpose, benefits, and potential drawbacks.

1. **In a MicroFrontend architecture, what strategies would you use to ensure consistency in both design and functionality across different MicroFrontends?**
   - See experience with maintaining uniformity across multiple teams working on different parts of the same application, and their knowledge of shared design systems, shared component libraries, or other strategies.

1. **How would you manage communication between different MicroFrontends in an application?**
   - Asses understanding of inter-MicroFrontend communication and their experience with events, shared global state, or other patterns for coordinating behavior across different parts of the application.

1. **What would be your strategy for handling shared dependencies in a MicroFrontend environment?**
   - This question assesses the candidate's knowledge about dependency management in a MicroFrontend architecture, including potential strategies for avoiding dependency version conflicts and reducing the overall size of the application.

1. **How would you approach testing in a MicroFrontend architecture, given that individual MicroFrontends might be developed and deployed independently?**
   - This question tests the candidate's experience with testing in a MicroFrontend environment, including unit testing, integration testing, end-to-end testing, and potentially contract testing. The candidate should understand how to ensure that the overall application remains functional even when individual MicroFrontends are changed.

## Kubernetes

DeMARK Analytics does all it's deployments to Kubernetes clusters utilizing Helm charts.

1. **Can you explain how Kubernetes' declarative model works for managing services and how it differs from the imperative model?**
   - This question helps to assess the candidate's understanding of Kubernetes' declarative approach for managing application state, including the roles of the Kubernetes API, etcd, and the various controller processes.

1. **What is Helm and how does it interact with Kubernetes to manage deployments?**
   - This question assesses the candidate's understanding of Helm as a package manager for Kubernetes, and its role in simplifying the deployment and management of applications.

1. **Can you describe a situation where you've used Helm charts to manage a complex application deployment on Kubernetes? What challenges did you face and how did you overcome them?**
   - This question allows the candidate to demonstrate their practical experience with Helm and Kubernetes, including dealing with issues of chart complexity, dependencies, and version management.

1. **How would you manage secrets and sensitive data in a Kubernetes environment?**
   - This question tests the candidate's knowledge of Kubernetes' mechanisms for managing sensitive data, such as Secret and ConfigMap objects, and their understanding of security best practices.

1. **How would you monitor and troubleshoot issues in a Kubernetes environment? What tools would you use?**
   - This question evaluates the candidate's experience with monitoring and debugging in a Kubernetes environment, including the use of tools like Prometheus, Grafana, Jaeger, or the Kubernetes Dashboard, as well as the built-in kubectl and kube-apiserver tools.

## API Design

At DeMARK Analytics we utilize a variety of API technologies between from HTTP, gRPC, WebSocket, GraphQL.  

1. **What are the key principles of REST? How do they affect your approach to API design?**
   - This question helps understand if the candidate has a fundamental understanding of the RESTful architecture and its constraints. The candidate should be able to talk about client-server separation, statelessness, cacheability, uniform interface, layered system, and code-on-demand.

1. **How would you design a RESTful API for a complex entity that has several relationships with other entities?** for example:
    1. Stock Market Tickers: Each ticker can be represented as a unique resource.
         - To retrieve a specific ticker: GET /tickers/{tickerId}
    1. Companies: Similar to tickers, each company is a unique resource.
         - To retrieve a specific company: GET /companies/{companyId}
    1. Company-Ticker Relationship: Each company can have multiple tickers (for example, on different stock exchanges). The relationship can be modeled as follows:
         - To retrieve all tickers for a specific company: GET /companies/{companyId}/tickers
    1. Exchanges: Each exchange can be represented as a unique resource.
         - To retrieve a specific exchange: GET /exchanges/{exchangeId}
    1. Exchange-Company Relationship: Each exchange can list multiple companies.
         - To retrieve all companies listed on a specific exchange: GET /exchanges/{exchangeId}/companies
    1. Indexes: Each index is a unique resource.
         - To retrieve a specific index: GET /indexes/{indexId}
    1. Index-Company Relationship: Each index can comprise multiple companies.
         - To retrieve all companies within a specific index: GET /indexes/{indexId}/companies
    1. Portfolios: Each portfolio is a unique resource.
         - To retrieve a specific portfolio: GET /portfolios/{portfolioId}
    1. Portfolio-Ticker Relationship: Each portfolio can have multiple tickers.
         - To retrieve all tickers within a specific portfolio: GET /portfolios/{portfolioId}/tickers
   - This question can be used to probe deeper into the candidate's understanding of resource modeling, handling complex relations, URI design, and choosing the correct HTTP methods.

1. **How would you handle versioning in a RESTful API design? Can you discuss the pros and cons of different strategies?**
   - The candidate should be able to discuss different strategies such as URI versioning, request header versioning, or media type versioning and explain the situations in which each would be the most suitable.

1. **Explain the concept of idempotency and safe methods in REST API design. Can you provide examples of how and when you would use these?**
   - This question gives the candidate an opportunity to demonstrate knowledge of HTTP methods and when to use them correctly, maintaining the REST principles.

1. **How would you approach designing error messages in a RESTful API?**
   - Error handling is a crucial part of API design. The candidate should be able to talk about HTTP status codes, and the importance of clear, informative, and standardized error messages for the client. They should also be aware of how to embed additional details in the response body for client debugging and logging purposes.

## NodeJS

Many of our micro services are written in typescript in order to help maintain parity with frontend code.

1. **Can you explain how you would structure a Node.js application using a microservice architecture? What factors would you consider when defining each service?**
   - This question assesses the candidate's understanding of microservices architecture principles and how they can be applied using Node.js. They should be able to discuss separation of concerns, bounded contexts, and other factors that would influence the definition of each service.

1. **What are some challenges that you might face when implementing microservices in Node.js, and how would you address them?**
   - This question tests the candidate's awareness of potential issues in a microservices architecture, such as data consistency, inter-service communication, fault isolation, and service discovery. The candidate should be able to discuss strategies for addressing these challenges.

1. **How would you handle shared code or libraries across different microservices in a Node.js ecosystem?**
   - This question evaluates the candidate's experience with managing shared code in a microservices environment, including strategies for avoiding dependency version conflicts and for deploying updates to shared code.

1. **What strategies would you use for communicating between microservices in a Node.js application?**
   - This question assesses the candidate's knowledge of different inter-service communication patterns, such as REST, gRPC, or message queues, and their ability to choose the right pattern for a given scenario.

1. **How would you handle error tracking and logging across multiple microservices in a Node.js application?**
   - This question tests the candidate's experience with distributed logging and error tracking, and their knowledge of tools and techniques for aggregating and analyzing logs from multiple services.

## AWS

DeMARK is heavily invested in AWS infrastructure.  Running all the Kubernetes infrastructure on EC2 instances.  Storage and MicroFrontend is handled by s3 and cloudfront.

1. **Can you describe a scenario where you would use AWS Lambda, and how it integrates with other AWS services?**
   - This question is to assess the candidate's understanding of AWS Lambda, a serverless computing service, and how it can be integrated with other services for event-driven programming.

1. **What are some use cases for AWS CloudFront, and how would you set it up to deliver content stored in an S3 bucket?**
   - This question evaluates the candidate's knowledge of AWS CloudFront, a content delivery network (CDN), and its integration with S3 for static content delivery.

1. **AWS S3 provides different storage classes. Could you explain some of them and the scenarios they're best suited for?**
   - The candidate should be able to discuss various storage classes like S3 Standard, S3 Intelligent-Tiering, S3 One Zone-IA, and S3 Glacier, along with their respective use cases.

1. **In a serverless architecture using AWS Lambda and S3, how would you design error handling and retries?**
   - This question evaluates the candidate's experience with designing robust serverless applications. The candidate should discuss AWS Lambda error handling, Dead Letter Queues (DLQ), and the use of AWS Step Functions or other strategies to handle retries.

1. **How would you ensure the security of data stored in S3 and being processed by AWS Lambda? Can you discuss some best practices?**
   - This question assesses the candidate's understanding of AWS security best practices, including IAM roles and policies, KMS for encryption, S3 bucket policies, and more.

## Rust

Many critical services that require significant computing performance are implemented in the Rust Programming language

1. **Can you explain how Rust's ownership model works? How does it help in preventing memory-related bugs?**
   - This question evaluates the candidate's understanding of Rust's unique ownership model, a core feature of the language that helps in managing memory safety without a garbage collector.

1. **In Rust, what are lifetimes and why are they important? Can you provide an example?**
   - This question assesses the candidate's knowledge of lifetimes, a Rust-specific feature that helps in managing memory safety and concurrency. The candidate should be able to explain lifetimes and provide code examples.

1. **Rust has a strong focus on concurrency. Can you explain some of the concurrency concepts in Rust and how it differs from other languages?**
   - This question aims to test the candidate's understanding of Rust's approach to concurrency and its related features like threads, message passing, shared state, and the "fearless concurrency" principle.

1. **What is "cargo" in the context of Rust? How does it aid in Rust development?**
   - This question evaluates the candidate's experience with Rust's build system and package manager, Cargo. They should be able to discuss its role in building, testing, and managing dependencies in Rust projects.

1. **Can you discuss error handling in Rust? How does it compare with error handling in other languages you've used?**
   - This question is aimed to check the candidate's understanding of Rust's error handling mechanisms, specifically the use of the `Result` and `Option` types, and the `match` and `unwrap` methods. The candidate should be able to discuss how these features contribute to Rust's focus on safety and robustness.

# S.A.F.E. (Scam Analysis and Fraud Elimination)

[cite_start]S.A.F.E. is a robust, machine learning-driven solution designed to combat the rise of sophisticated online scams[cite: 4, 15].

[cite_start]This project proposes a unified and proactive security system that analyzes threats holistically[cite: 93, 95]. [cite_start]Unlike traditional security measures that operate in silos [cite: 11][cite_start], S.A.F.E. is designed to bridge the "critical security gap" [cite: 12] [cite_start]by correlating signals across different domains to see the entire attack chain[cite: 94].

## 📄 The Problem

[cite_start]The digital age, while convenient, is a fertile ground for cybercriminals[cite: 5]. [cite_start]Traditional, rule-based security systems are reactive and fragmented, leaving users vulnerable to multi-stage attacks that may start with a phishing email, lead to a malicious website, and end in a fraudulent transaction[cite: 10, 86, 88]. [cite_start]These disjointed tools cannot see the "bigger picture," creating a significant vulnerability[cite: 12, 89].

## 🎯 The Solution

[cite_start]S.A.F.E. shifts the security posture from reactive to proactive[cite: 95]. [cite_start]It acts as a single, cohesive system where insights from one module can inform the analysis of another[cite: 102]. [cite_start]By analyzing threats as an interconnected chain, the system can provide earlier, more accurate detection[cite: 94].

## ✨ Key Features (Modules)

S.A.F.E. is designed as a multi-modal platform integrating four specialized detection engines:

1.  [cite_start]**Fraudulent Message & Email Detection:** Employs advanced NLP techniques to analyze text for linguistic markers of deception, urgency, or manipulation[cite: 98].
2.  [cite_start]**Malicious Phishing URL Detection:** Uses robust machine learning models to analyze lexical and host-based features of URLs to predict and block phishing attempts[cite: 99].
3.  [cite_start]**Suspicious Financial Transaction Classification:** Implements real-time anomaly detection to learn user spending patterns and flag unusual deviations[cite: 100].
4.  [cite_start]**Deceptive Job & Product Offer Identification:** Scrutinizes the legitimacy of job postings and product advertisements to protect users from commercial scams[cite: 101].

## 🚀 MVP: Running the Phishing URL Module

This repository contains a functional MVP for the **Phishing URL Detection Module**. Its goal is to take a URL as input and return a "Safe" or "Scam" classification.

### 1. Prerequisites

* Python 3.x
* Flask
* Scikit-learn
* Pandas

You can install all dependencies using the `requirements.txt` file:
```bash
pip install -r requirements.txt
```

### 2. Run the API Server

[cite_start]The model is served via a lightweight Flask API[cite: 123]. To start the server, run the following command from your terminal:

```bash
python app.py
```
*You should see a message indicating the server is running, typically on `http://127.0.0.1:5000/`.*

### 3. Test the "Running Module"

Once the server is running, you can test its classification ability. Open a new terminal and use `curl` (or any API client like Postman) to send a POST request.

**Example request with a "Not Safe" URL:**

```bash
curl -X POST -H "Content-Type: application/json" \
     -d '{"url": "[http://login.paypal.com.security-check.net](http://login.paypal.com.security-check.net)"}' \
     [http://127.0.0.1:5000/check_url](http://127.0.0.1:5000/check_url)
```

**Desired Result (Output):**

The API will return a JSON response with the classification:

```json
{
  "classification": "Scam",
  "url": "[http://login.paypal.com.security-check.net](http://login.paypal.com.security-check.net)"
}
```

**Example request with a "Safe" URL:**

```bash
curl -X POST -H "Content-Type: application/json" \
     -d '{"url": "[https://www.google.com](https://www.google.com)"}' \
     [http://127.0.0.1:5000/check_url](http://127.0.0.1:5000/check_url)
```

**Desired Result (Output):**

```json
{
  "classification": "Safe",
  "url": "[https://www.google.com](https://www.google.com)"
}
```

## 🛠️ Proposed Technology Stack

The full S.A.F.E. project is designed to use a modern, scalable tech stack:

* [cite_start]**Backend & API:** Flask [cite: 123]
* [cite_start]**Machine Learning:** Scikit-learn, TensorFlow, PyTorch [cite: 124]
* [cite_start]**Data Processing:** Pandas, NumPy [cite: 125]
* [cite_start]**Database:** SQL and NoSQL combination [cite: 120]
* [cite_start]**Deployment (Planned):** AWS, Azure, or Google Cloud [cite: 126]

## 🏗️ System Architecture (Full Project)

[cite_start]The complete system is designed with a layered, microservice-based architecture for scalability and resilience[cite: 107].

1.  [cite_start]**Data Ingestion Layer:** The entry point for all data, responsible for collecting and preprocessing text, URLs, and transaction records[cite: 109, 110].
2.  [cite_start]**Processing Core:** The analytical heart containing the four specialized ML detection engines (Scam Message, Phishing URL, etc.) working in parallel[cite: 112, 113].
3.  [cite_start]**ML/NLP Engine:** A central service that aggregates scores from the individual modules to produce a final, unified risk assessment[cite: 115, 116].
4.  [cite_start]**API Gateway:** The secure single point of entry for all external interactions, handling routing and authentication[cite: 118].

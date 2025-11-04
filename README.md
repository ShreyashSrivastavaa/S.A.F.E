# S.A.F.E. (Scam Analysis and Fraud Elimination)

S.A.F.E. is a robust, machine learning-driven solution designed to combat the rise of sophisticated online scams.

This project proposes a unified and proactive security system that analyzes threats holistically. Unlike traditional security measures that operate in silos, S.A.F.E. is designed to bridge the "critical security gap" by correlating signals across different domains to see the entire attack chain.

## 📄 The Problem

The digital age, while convenient, is a fertile ground for cybercriminals. Traditional, rule-based security systems are reactive and fragmented, leaving users vulnerable to multi-stage attacks that may start with a phishing email, lead to a malicious website, and end in a fraudulent transaction. These disjointed tools cannot see the "bigger picture," creating a significant vulnerability.

## 🎯 The Solution

S.A.F.E. shifts the security posture from reactive to proactive. It acts as a single, cohesive system where insights from one module can inform the analysis of another. By analyzing threats as an interconnected chain, the system can provide earlier, more accurate detection.

## ✨ Key Features (Modules)

S.A.F.E. is designed as a multi-modal platform integrating four specialized detection engines:

1.  **Fraudulent Message & Email Detection:** Employs advanced NLP techniques to analyze text for linguistic markers of deception, urgency, or manipulation.
2.  **Malicious Phishing URL Detection:** Uses robust machine learning models to analyze lexical and host-based features of URLs to predict and block phishing attempts.
3.  **Suspicious Financial Transaction Classification:** Implements real-time anomaly detection to learn user spending patterns and flag unusual deviations.
4.  **Deceptive Job & Product Offer Identification:** Scrutinizes the legitimacy of job postings and product advertisements to protect users from commercial scams.

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

The model is served via a lightweight Flask API. To start the server, run the following command from your terminal:

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

* **Backend & API:** Flask
* **Machine Learning:** Scikit-learn, TensorFlow, PyTorch
* **Data Processing:** Pandas, NumPy
* **Database:** SQL and NoSQL combination
* **Deployment (Planned):** AWS, Azure, or Google Cloud

## 🏗️ System Architecture (Full Project)

The complete system is designed with a layered, microservice-based architecture for scalability and resilience.

1.  **Data Ingestion Layer:** The entry point for all data, responsible for collecting and preprocessing text, URLs, and transaction records.
2.  **Processing Core:** The analytical heart containing the four specialized ML detection engines (Scam Message, Phishing URL, etc.) working in parallel.
3.  **ML/NLP Engine:** A central service that aggregates scores from the individual modules to produce a final, unified risk assessment.
4.  **API Gateway:** The secure single point of entry for all external interactions, handling routing and authentication.

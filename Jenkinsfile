pipeline {
    agent any

    environment {
        NODE_VERSION = '20.9.0' // Define the version of Node.js to use
    }

    tools {
        nodejs NODE_VERSION // Use the Node.js version defined in environment
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the GitHub repository
                git branch: 'main', url: 'https://github.com/dimal1234/cypress-test'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests in headless mode
                sh 'npx cypress run --spec \"cypress/integration/test_cases/cucumberBDD/*.feature'
            }
        }
    }

    post {
        always {
            // Publish test results, even if the pipeline fails
            junit '**/cypress/results/*.xml'
        }
    }
}

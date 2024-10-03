pipeline {
    agent any

    // environment {
    //     NODE_VERSION = '20.9.0' // Define the version of Node.js to use
    // }

    tools {
        nodejs 'nodejs_20_9_0' // Use the Node.js version defined in environment
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
                script {
 // Install Node.js dependencies
                bat 'npm install'
                }
               
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script{
                    // Run Cypress tests in headless mode
                bat 'npx cypress run --spec cypress/integration/test_cases/cucumberBDD/*.feature'
                }
                
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

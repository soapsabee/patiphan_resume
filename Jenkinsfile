pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'resume-app'
        DOCKER_TAG = 'latest'
        APP_PORT = '80'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                    echo "Building Docker image..."
                    docker build -t $DOCKER_IMAGE:$DOCKER_TAG .
                    '''
                }
            }
        }

        stage('Run Application') {
            steps {
                script {
                    sh '''
                    echo "Stopping existing container (if any)..."
                    docker stop resume-app || true
                    docker rm resume-app || true
                    echo "Starting new container..."
                    docker run -d --name resume-app -p $APP_PORT:80 $DOCKER_IMAGE:$DOCKER_TAG
                    '''
                }
            }
        }

        stage('Validate Application') {
            steps {
                script {
                    sh '''
                    echo "Validating the application..."
                    docker ps | grep resume-app
                    curl -f http://localhost:$APP_PORT || exit 1
                    '''
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh '''
                    echo "Cleaning up unused Docker resources..."
                    docker system prune -f
                    '''
                }
            }
        }
    }
}
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'resume-app'
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
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Run Application') {
            steps {
                script {
                    sh '''
                    docker stop resume-app || true
                    docker rm resume-app || true
                    docker run -d --name resume-app -p 80:80 $DOCKER_IMAGE
                    '''
                }
            }
        }
    }
}
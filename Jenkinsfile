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
 
        stage('Debug') { 
            steps { 
                powershell '''
                Get-ChildItem Env: | Sort-Object Name
                & where.exe docker
                docker --version
                ''' 
            } 
        } 
 
        stage('Build Docker Image') { 
            steps { 
                script { 
                    powershell ''' 
                    Write-Host "Building Docker image..."
                    docker build -t $env:DOCKER_IMAGE:$env:DOCKER_TAG . 
                    ''' 
                } 
            } 
        } 
 
        stage('Run Application') { 
            steps { 
                script { 
                    powershell ''' 
                    Write-Host "Stopping existing container (if any)..."
                    docker stop resume-app 2>$null
                    docker rm resume-app 2>$null
                    Write-Host "Starting new container..."
                    docker run -d --name resume-app -p $env:APP_PORT`:80 $env:DOCKER_IMAGE`:$env:DOCKER_TAG 
                    ''' 
                } 
            } 
        } 
 
        stage('Validate Application') { 
            steps { 
                script { 
                    powershell ''' 
                    Write-Host "Validating the application..."
                    docker ps | Select-String "resume-app"
                    try {
                        $response = Invoke-WebRequest -Uri "http://localhost:$env:APP_PORT" -Method Get
                        if ($response.StatusCode -ne 200) {
                            throw "Application not responding correctly"
                        }
                    }
                    catch {
                        Write-Error "Application validation failed"
                        exit 1
                    }
                    ''' 
                } 
            } 
        } 
 
        stage('Cleanup') { 
            steps { 
                script { 
                    powershell ''' 
                    Write-Host "Cleaning up unused Docker resources..."
                    docker system prune -f 
                    ''' 
                } 
            } 
        } 
    } 
}
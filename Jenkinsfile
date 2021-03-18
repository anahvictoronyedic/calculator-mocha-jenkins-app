
pipeline{
	agent any
	stages{
		stage('Setup') {
			steps {
			}
		}
		stage('Build'){
			steps{
				bat 'npm install'
			}
		}
		stage('DevDeploy'){
			steps{
				bat 'NODE_ENV=development pm2 start app.js'
			}
		}
		stage('Test'){
			steps{
				bat 'npm test'
			}
		}
		stage('ProdDeploy'){
			steps{
				bat 'pm2 stop app.js'
				bat 'NODE_ENV=production pm2 start app.js'
			}
		}
	}
}
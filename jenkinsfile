
pipeline{
	agent any
	stages{
		stage('Setup') {
			steps {
				sh 'pm2 stop app.js'
			}
		}
		stage('Build'){
			steps{
				sh 'npm install'
			}
		}
		stage('DevDeploy'){
			steps{
				sh 'NODE_ENV=development pm2 app.js'
			}
		}
		stage('Test'){
			steps{
				sh 'npm test'
			}
		}
		stage('ProdDeploy'){
			steps{
				sh 'pm2 stop app.js'
				sh 'NODE_ENV=production pm2 app.js'
			}
		}
	}
}
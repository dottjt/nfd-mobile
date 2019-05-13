# fastlane_version '2.53.1'

# before_all do
#   ensure_git_branch
#   ensure_git_status_clean
#   git_pull
# end

# platform :ios do
#    # iOS Lanes
# end

# platform :android do
#   # Android Lanes
# end



lane :deployment do |version: version|
  bump_version_number(version: version)
  canary
  production
  sh 'npm run repositories:upload:android'
  commit_and_push_version_bump
  slack_notification(platform: 'Android', version: version)
end

lane :deployment do |version: version|
  setup_certificates
  bump_version_number(version: version)
  canary
  production
  sh 'npm run repositories:upload:ios'
  commit_and_push_version_bump
  git_flow_merge(version: version)
  slack_notification(platform: 'iOS', version: version)
end



# todo
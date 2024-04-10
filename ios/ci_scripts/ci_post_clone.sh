#!/bin/sh

#  ci_post_clone.sh
#  readyAppFront
#
#  Created by 최유빈 on 4/10/24.
#  

# *.xconfig 파일이 생성될 폴더 경로
FOLDER_PATH = "/Volumes/workspace/repository/readyAppFront"

# PARTS 배열의 두 번째 요소가 "Scheme Name"에 해당
IFS='-' read -ra PARTS <<< "$CI_XCODE_SCHEME"

# *.xconfig 파일이름
CONFIG_FILENAME="${PARTS[1]}.xcconfig"

# *.xconfig 파일의 전체 경로 계산
CONFIG_FILE_PATH="$FOLDER_PATH/$CONFIG_FILENAME"

# 생성된 *.xconfig 파일 내용 출력

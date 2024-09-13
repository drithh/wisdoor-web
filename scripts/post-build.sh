#!/bin/bash
WEB="web"

# Function to move a directory
move_static_folder_and_compress() {
    local APP_NAME=$1

    echo "Moving static directory $APP_NAME"
    mv "./.next/static" "./.next/standalone/.next/static"

    echo "Moving public directory $APP_NAME"
    mv "./public" "./.next/standalone/public"

    echo "Move completed successfully."

    # Compress the directory
    echo "Compressing directory $APP_NAME"
    tar -czf "$APP_NAME.tar.gz" "./.next/standalone"

    du -sh "./.next/standalone/"
    du -sh "$APP_NAME.tar.gz"
}

move_static_folder_and_compress $WEB
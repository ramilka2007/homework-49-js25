mkdir projects && cd projects
mkdir directory1 directory2 directory3 && cd directory1
mkdir subdirectory1 && cd - && cd directory2
echo "Hello from JS" > hello.txt && cd - && cd directory3
mkdir subdirectory2
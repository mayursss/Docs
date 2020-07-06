Get-ChildItem $env:windir -Attributes !Directory+!System+Encrypted,!Directory+!System+Compressed -Recurse -ErrorAction SilentlyContinue

# $test =

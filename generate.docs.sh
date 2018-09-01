echo Generating Code Documentation
echo -----------------------------
echo

echo Features:
echo .........
docco features/step_definitions/*.js
docco features/support/*.js
docco features/test_data/*.js
echo

echo Worlds:
echo ...........
docco index.js
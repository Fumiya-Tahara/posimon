<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="http://127.0.0.1:8000/up_positive_conversions">
        @csrf 
        <div>
          <label>お題ID:
            <input type="number" name="positive_theme_id">
          </label>
        </div>
        <div>
          <label>変換:
            <input type="text" name="converted_word">
          </label>
        </div>
        <div>
          <label>トレーナーID:
            <input type="number" name="user_id">
          </label>
        </div>
        <input type="submit" value="送信">
      </form>
</body>
</html>
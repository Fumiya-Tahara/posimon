<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="http://127.0.0.1:8000/up_positive_thimes">
        @csrf
        <div>
          <label>タイトル:
            <input type="text" name="title">
          </label>
        </div>
        <div>
          <label>トレーナーID:
            <input type="number" name="user_id">
          </label>
        </div>
        <div>
          
        <input type="radio" id="inq1" name="state" value="0">
        <label for="inq1">非公開</label>
        <input type="radio" id="inq2" name="state" value="1">
        <label for="inq2">公開</label>
        </div>
        <input type="submit" value="送信">
      </form>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="http://127.0.0.1:8000/add_posimon_v">
        @csrf
        <div>
          <label>ぽじもんID:
            <input type="number" name="posimon_id">
          </label>
        </div>
        <div>
          <label>鳴き声:
            <input type="text" name="voice">
          </label>
        </div>
        <div>
            <label>状態:
                <input type="number" name="state">
            </label>
        </div>
        <input type="submit" value="送信">
      </form>
</body>
</html>
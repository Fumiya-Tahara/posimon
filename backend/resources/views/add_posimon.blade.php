<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="http://127.0.0.1:8000/add_posimon">
        @csrf
        <div>
          <label>名前:
            <input type="text" name="name">
          </label>
        </div>
        <div>
          <label>生態:
            <input type="text" name="ecology">
          </label>
        </div>
        <div>
            <label>レアリティ:
                <input type="number" name="rarity">
            </label>
        </div>
        <div>
          <label>プロフィール:
            <input type="text" name="profile">
          </label>
        </div>
        <input type="submit" value="送信">
      </form>
</body>
</html>
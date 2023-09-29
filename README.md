# Мой первый проект в Hexlet: 5 консольных игр
## Hexlet tests and linter status:
[![Actions Status](https://github.com/obsidinan/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/obsidinan/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a4d00f9dda2d3ef6273b/maintainability)](https://codeclimate.com/github/obsidinan/frontend-project-44/maintainability)

## Описание

В проекте реализованы 5 игр: проверка на четность, калькулятор, НОД, аримфметическая прогрессия, простое ли число. 
В каждой игре есть три раунда. Игрок побеждает, если правильно отвечает во всех 3-х раундах.

## Установка:
1. Для установки понадобятся программы [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en) и [Npm](https://www.npmjs.com/)
2. При наличии данных программ создайте папку в удобном для Вас месте откройте ее с помощью терминала. 
   Как открыть терминал:

   Windows:
      - нажмите сочетание клавиш Windows+X;
      - выберите Windows PowerShell (или "Командная строка")

   MacOS:
      - нажмите сочетание клавиш Command+Space
      - введите в поиске "Терминал"

   Linux:
      - нажмите сочетание клавиш Ctrl + Alt + T
4. Находясь в созданной папке, склонируйте проект при помощи команды в терминале: 
  ```bash
  git clone https://github.com/obsidinan/frontend-project-44.git
  ```
4. Войдите в папку проекта, прописав в терминале команду:
  ```bash
  cd frontend-project-44
  ```
5. После пропишите команды:
  ```bash
  npm i
  ```
  ```bash
  npm link
  ```

## Как играть:

#### 1. Проверка на четность ([Brain Even game](https://asciinema.org/a/610394)) [![asciicast](https://asciinema.org/a/610394.svg)](https://asciinema.org/a/610394)
   В этой игре необходимо проверить число на четность: если число четное, введите "yes", если нечетное - "no".  
   Для запуска игры введите в терминале команду **"brain-even"**

#### 2. Калькулятор ([Brain Calc game](https://asciinema.org/a/610393))
   В этой игре будут даны два числа с разными операциями: сложение, вычитание или умножение. Необходимо ввести результат выражения.  
   Для запуска игры введите в терминале команду **"brain-calc"**

#### 3. НОД ([Brain GCD game](https://asciinema.org/a/610398))
   В данной игре Вам необходимо найти наибольший общий делитель двух чисел.  
   Для запуска игры введите в терминале команду **"brain-gcd"**

#### 4. Арифметическая прогрессия ([Brain Progression game](https://asciinema.org/a/610392))
   В этой игре Вам будет дана арифметическая прогрессия, в которой одно число будет пропущено. Введите это число.  
   Для запуска игры введите в терминале команду **"brain-progression"**

#### 5. Простое ли число? ([Brain Prime game](https://asciinema.org/a/610396))
   В данной игре необходимо узнать, простое ли число.  
   Для запуска игры введите в терминале команду **"brain-prime"**

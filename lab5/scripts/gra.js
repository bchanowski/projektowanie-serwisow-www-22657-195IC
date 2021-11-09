// Zmienne globalne
var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

var rounds = [5];

// Tworzymy obiekt piłki
var Ball = {
    new: function (incrementedSpeed) {
        return {
            width: 18,
            height: 18,
            x: (this.canvas.width / 2) - 9,
            y: (this.canvas.height / 2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 9
        };
    }
};

// Tworzymy obiekt platformy którą steruje gracz/ai
var Paddle = {
    new: function (side) {
        return {
            width: 18,
            height: 70,
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height / 2) - 35,
            score: 0,
            move: DIRECTION.IDLE,
            speed: 10
        };
    }
};

// Inicjalizujemy naszą planszę do gry i dodajemy do niej obiekty
var Game = {
    initialize: function () {
        this.canvas = document.getElementById('canvas-gra');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = 1600;
        this.canvas.height = 900;

        this.player = Paddle.new.call(this, 'left');
        this.paddle = Paddle.new.call(this, 'right');
        this.ball = Ball.new.call(this);

        this.paddle.speed = 8;
        this.running = this.over = false;
        this.turn = this.paddle;
        this.timer = this.round = 0;
        document.body.style.backgroundColor = '#f5b047';
        this.color = '#f5b047';
        this.canvas.style.border = "5px dashed white";

        Pong.menu();
        Pong.listen();
    },

    endGameMenu: function (text) {
        // Zmieniamy czcionkę i kolor naszego płótna
        Pong.context.font = '50px Courier New';
        Pong.context.fillStyle = this.color;

        // Rysujemy prostokąt na którym będzie komunikat żeby rozpocząć grę
        Pong.context.fillRect(
            Pong.canvas.width / 2 - 350,
            Pong.canvas.height / 2 - 48,
            700,
            100
        );

        // Zmieniamy kolor płótna
        Pong.context.fillStyle = '#ffffff';

        // Rysujemy końcowy komunikat
        Pong.context.fillText(text,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15
        );

        setTimeout(function () {
            Pong = Object.assign({}, Game);
            Pong.initialize();
        }, 3000);
    },

    menu: function () {
        // Rysujemy wszystkie obiekty naszej gry
        Pong.draw();

        // Zmieniamy czcionkę i kolor komunikatów
        this.context.font = '50px Courier New';
        this.context.fillStyle = this.color;

        // Rysujemy prostokąt na którym będzie komunikat żeby rozpocząć grę
        this.context.fillRect(
            this.canvas.width / 2 - 350,
            this.canvas.height / 2 - 48,
            700,
            100
        );

        // Zmieniamy kolor płótna
        this.context.fillStyle = '#ffffff';

        // Rysujemy tekst startowego komunikatu
        this.context.fillText('Naciśnij dowolny przycisk by zacząć',
            this.canvas.width / 2,
            this.canvas.height / 2 + 15
        );
    },

    // Funkcja update która będzie aktualizować elementy
    update: function () {
        if (!this.over) {
            // Sprawdzamy czy piłka trafiła jakąś barierę, jeśli tak to albo przechodzimy resetu lub zmiany kierunku
            if (this.ball.x <= 0) Pong._resetTurn.call(this, this.paddle, this.player);
            if (this.ball.x >= this.canvas.width - this.ball.width) Pong._resetTurn.call(this, this.player, this.paddle);
            if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
            if (this.ball.y >= this.canvas.height - this.ball.height) this.ball.moveY = DIRECTION.UP;

            // Zmieniamy położenie platformy użytkownika
            if (this.player.move === DIRECTION.UP) this.player.y -= this.player.speed;
            else if (this.player.move === DIRECTION.DOWN) this.player.y += this.player.speed;

            // Ustawiamy aby po zdobyciu punktu piłka poleciała w odpowiednim kierunku oraz losujemy czy poleci w górę czy w dół
            if (Pong._turnDelayIsOver.call(this) && this.turn) {
                this.ball.moveX = this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
                this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round(Math.random())];
                this.ball.y = Math.floor(Math.random() * this.canvas.height - 200) + 200;
                this.turn = null;
            }

            // Sprawdzamy czy gracz nie dotknął którejś z barier
            if (this.player.y <= 0) this.player.y = 0;
            else if (this.player.y >= (this.canvas.height - this.player.height)) this.player.y = (this.canvas.height - this.player.height);

            // Zmieniamy kierunek ruchu piłki
            if (this.ball.moveY === DIRECTION.UP) this.ball.y -= (this.ball.speed / 1.5);
            else if (this.ball.moveY === DIRECTION.DOWN) this.ball.y += (this.ball.speed / 1.5);
            if (this.ball.moveX === DIRECTION.LEFT) this.ball.x -= this.ball.speed;
            else if (this.ball.moveX === DIRECTION.RIGHT) this.ball.x += this.ball.speed;

            // Ruchy AI
            if (this.paddle.y > this.ball.y - (this.paddle.height / 2)) {
                if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y -= this.paddle.speed / 1.5;
                else this.paddle.y -= this.paddle.speed / 4;
            }
            if (this.paddle.y < this.ball.y - (this.paddle.height / 2)) {
                if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y += this.paddle.speed / 1.5;
                else this.paddle.y += this.paddle.speed / 4;
            }

            // Ruchy AI - kolizje
            if (this.paddle.y >= this.canvas.height - this.paddle.height) this.paddle.y = this.canvas.height - this.paddle.height;
            else if (this.paddle.y <= 0) this.paddle.y = 0;

            // Kolizje gracza z piłką
            if (this.ball.x - this.ball.width <= this.player.x && this.ball.x >= this.player.x - this.player.width) {
                if (this.ball.y <= this.player.y + this.player.height && this.ball.y + this.ball.height >= this.player.y) {
                    this.ball.x = (this.player.x + this.ball.width);
                    this.ball.moveX = DIRECTION.RIGHT;

                }
            }

            // Kolizje piłki z platformą
            if (this.ball.x - this.ball.width <= this.paddle.x && this.ball.x >= this.paddle.x - this.paddle.width) {
                if (this.ball.y <= this.paddle.y + this.paddle.height && this.ball.y + this.ball.height >= this.paddle.y) {
                    this.ball.x = (this.paddle.x - this.ball.width);
                    this.ball.moveX = DIRECTION.LEFT;

                }
            }
        }

        // Koniec rundy, sprawdzamy czy gracz wygrał
        if (this.player.score === rounds[this.round]) {
            this.over = true;
            setTimeout(function () { Pong.endGameMenu('Wygrałeś!'); }, 1000);

        }
        // Sprawdzamy czy AI wygrało
        else if (this.paddle.score === rounds[this.round]) {
            this.over = true;
            setTimeout(function () { Pong.endGameMenu('Przegrałeś!'); }, 1000);
        }
    },

    // Rysujemy elementy na naszym płótnie
    draw: function () {
        // Czyścimy canvas
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        // Set the fill style to black
        this.context.fillStyle = this.color;

        // Rysujemy tło
        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        // Wybieramy kolor dla naszych platform i piłki
        this.context.fillStyle = '#ffffff';

        // Rysujemy platformę gracza
        this.context.fillRect(
            this.player.x,
            this.player.y,
            this.player.width,
            this.player.height
        );

        //Rysujemy platformę AI
        this.context.fillRect(
            this.paddle.x,
            this.paddle.y,
            this.paddle.width,
            this.paddle.height
        );

        // Rysujemy piłkę
        if (Pong._turnDelayIsOver.call(this)) {
            this.context.fillRect(
                this.ball.x,
                this.ball.y,
                this.ball.width,
                this.ball.height
            );
        }

        // Rysujemy linię po środku planszy
        this.context.beginPath();
        this.context.setLineDash([7, 15]);
        this.context.moveTo((this.canvas.width / 2), this.canvas.height - 15);
        this.context.lineTo((this.canvas.width / 2), 140);
        this.context.lineWidth = 10;
        this.context.strokeStyle = '#ffffff';
        this.context.stroke();

        this.context.font = '100px Courier New';
        this.context.textAlign = 'center';

        // Rysujemy wynik gracza
        this.context.fillText(
            this.player.score.toString(),
            (this.canvas.width / 2) - 300,
            200
        );

        // Rysujemy wynik AI
        this.context.fillText(
            this.paddle.score.toString(),
            (this.canvas.width / 2) + 300,
            200
        );

        this.context.font = '40px Courier';

        // Rysujemy ilość punktów potrzebnych do wygrania
        this.context.fillText(
            rounds[Pong.round],
            (this.canvas.width / 2),
            100
        );
    },

    loop: function () {
        Pong.update();
        Pong.draw();

        // Rysujemy kolejną klatkę
        if (!Pong.over) requestAnimationFrame(Pong.loop);
    },

    listen: function () {
        document.addEventListener('keydown', function (key) {
            // Event sprawdzający czy gracz przyciska przycisk by rozpocząć grę
            if (Pong.running === false) {
                Pong.running = true;
                window.requestAnimationFrame(Pong.loop);
            }

            // Sprawdzanie ruchu gracza
            if (key.keyCode === 38 || key.keyCode === 87) Pong.player.move = DIRECTION.UP;

            if (key.keyCode === 40 || key.keyCode === 83) Pong.player.move = DIRECTION.DOWN;
        });

        // Powstrzymanie przed ruchem platformy gdy gracz nic nie wciska
        document.addEventListener('keyup', function (key) { Pong.player.move = DIRECTION.IDLE; });
    },

    // Reset pozycji piłki i dodanie punktu po jego zdobyciu
    _resetTurn: function(victor, loser) {
        this.ball = Ball.new.call(this, this.ball.speed);
        this.turn = loser;
        this.timer = (new Date()).getTime();

        victor.score++;
    },

    // delay między grami
    _turnDelayIsOver: function() {
        return ((new Date()).getTime() - this.timer >= 1000);
    },

};

var Pong = Object.assign({}, Game);
Pong.initialize();

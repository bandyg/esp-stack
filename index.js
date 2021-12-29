require('wawaPins');
require('const');

function action(wawaPinNo, duration)
    gpio.mode(wawaPinNo, gpio.OUTPUT);
    gpio.write(wawaPinNo, gpio.LOW);
    tmr.delay(duration);
    gpio.write(wawaPinNo, gpio.HIGH);

end

function insertOneCoin()
    action(wawaPins.insertCoin, 20 * const.us_ms);
end

function catch()
    action(wawaPins.catch, 500 * const.us_ms);
end

function moveLeft()
    action(wawaPins.left, 200 * const.us_ms);
end

function moveRight()
    action(wawaPins.right, 200 * const.us_ms);
end

function moveForward()
    action(wawaPins.forward, 200 * const.us_ms);
end

function moveBackward()
    action(wawaPins.backward, 200 * const.us_ms);
end

-- print(const.us_ms_s);
-- for i = 1, 1 do
--     move();
-- end
insertOneCoin();
moveRight();
catch();
/* ╔═══════════════╗ */
/* ║     CODSU     ║ */
/* ║ By Nostalgia3 ║ */
/* ║     A.K.A     ║ */
/* ║ LegotronForce ║ */
/* ╚═══════════════╝ */

function _() {
    /** For outputting color! */
    this.colorLib = function() {
        this.color = {
            reset     : "\x1b[0m",
            bright    : "\x1b[1m",
            dim       : "\x1b[2m",
            underscore: "\x1b[4m",
            blink     : "\x1b[5m",
            reverse   : "\x1b[7m",
            hidden    : "\x1b[8m",
    
            black     : "\x1b[30m",
            red       : "\x1b[31m",
            green     : "\x1b[32m",
            yellow    : "\x1b[33m",
            blue      : "\x1b[34m",
            magenta   : "\x1b[35m",
            cyan      : "\x1b[36m",
            white     : "\x1b[37m",
    
            bgBlack   : "\x1b[40m",
            bgRed     : "\x1b[41m",
            bgGreen   : "\x1b[42m",
            bgYellow  : "\x1b[43m",
            bgBlue    : "\x1b[44m",
            bgMagenta : "\x1b[45m",
            bgCyan    : "\x1b[46m",
            bgWhite   : "\x1b[47m"
        };

        // Functions
        this.black = function(text)   { return this.color.black + text + this.color.reset;   }
        this.red = function(text)     { return this.color.red + text + this.color.reset;     }
        this.green = function(text)   { return this.color.green + text + this.color.reset;   }
        this.yellow = function(text)  { return this.color.yellow + text + this.color.reset;  }
        this.blue = function(text)    { return this.color.blue + text + this.color.reset;    }
        this.magenta = function(text) { return this.color.magenta + text + this.color.reset; }
        this.cyan = function(text)    { return this.color.cyan + text + this.color.reset;    }
        this.white = function(text)   { return this.color.white + text + this.color.reset;   }

        return this;
    };

    /** For general purpose string modifying */
    this.strLib = function() {
        /** Splits a string using a newline symbol. Has support for both CRLF and LF newlines.
         * @param {string} str A string to be splitted
         */
        this.splitNewLine = (str) => {
            if(str.includes('\r\n')) {
                return str.split('\r\n');
            } else {
                return str.split('\n');
            }
        }
        return this;
    }

    /** For making custom errors */
    this.errorLib = function() {
        let color = _().colorLib();

        class BaseError {
            /** @private */
            reason = '';
            /** @private */
            type = '';
        
            constructor(reason, type) {
                this.reason = reason;
                this.type = type;
            }
        
            getReason() { return this.reason; }
            getType() { return this.type; }
        }

        class FileError extends BaseError {
            constructor(reason) { super(reason, 'FileError'); }
        }

        this.throwError = function(err) {
            console.log(`${color.red('An error has occured!')}
    ${color.red('Type:')}   ${color.green(err.getType())}
    ${color.red('Reason:')} ${color.green(err.getReason())}`);
        }

        this.BaseError = BaseError;
        this.FileError = FileError;

        return this;
    }

    return this;
}

module.exports = { _ };

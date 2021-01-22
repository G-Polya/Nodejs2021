CREATE TABLE nodejs.users
(
    id INT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT UNSIGNED NOT NULL,
    married TINYINT NOT NULL,
    comment TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    UNIQUE INDEX name_UNIQUE(name ASC)
)
COMMENT = '사용자 정보'
DEFAULT CHARACTER SET = utf8
ENGINE = InnoDB;


CREATE TABLE nodejs.comments
(
    id INT NOT NULL AUTO_INCREMENT,
    commenter INT NOT NULL,
    comment VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    INDEX commenter_idx (commenter ASC),
    CONSTRAINT commenter FOREIGN KEY(commenter) REFERENCES nodejs.users (id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
)
COMMENT = '댓글'
DEFAULT CHARSET=utf8mb4
ENGINE=InnoDB;

INSERT INTO users(name, age, married, comment) VALUES
(
    'zero',
    24,
    0,
    '자기소개1'
);

INSERT INTO users(name, age, married, comment) VALUES
(
    'nero',
    32,
    1,
    '자기소개2'
);

UPDATE nodejs.users SET comment = '바꿀내용' WHERE id = 2;
DELETE FROM nodejs.users WHERE id = 2;
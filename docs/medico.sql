/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100414
 Source Host           : localhost:3306
 Source Schema         : medico

 Target Server Type    : MySQL
 Target Server Version : 100414
 File Encoding         : 65001

 Date: 19/12/2020 09:15:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE [IF NOT EXISTS] medico;

-- ----------------------------
-- Table structure for appointment
-- ----------------------------
DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment`  (
  `id_appointment` int NOT NULL AUTO_INCREMENT,
  `id_office` int NOT NULL,
  `date_appointment` datetime(0) NOT NULL,
  PRIMARY KEY (`id_appointment`) USING BTREE,
  INDEX `fk_appointment_office1`(`id_office`) USING BTREE,
  CONSTRAINT `fk_appointment_office1` FOREIGN KEY (`id_office`) REFERENCES `office` (`id_office`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of appointment
-- ----------------------------
INSERT INTO `appointment` VALUES (1, 1, '2020-11-28 10:30:00');
INSERT INTO `appointment` VALUES (2, 2, '2020-11-28 10:00:00');

-- ----------------------------
-- Table structure for appointment_person
-- ----------------------------
DROP TABLE IF EXISTS `appointment_person`;
CREATE TABLE `appointment_person`  (
  `id_appointment_person` int NOT NULL AUTO_INCREMENT,
  `id_person` int NOT NULL,
  `id_appointment` int NOT NULL,
  PRIMARY KEY (`id_appointment_person`) USING BTREE,
  INDEX `fk_appointment_doctor0`(`id_person`) USING BTREE,
  INDEX `fk_appointment_person_appointment1`(`id_appointment`) USING BTREE,
  CONSTRAINT `fk_appointment_doctor0` FOREIGN KEY (`id_person`) REFERENCES `person` (`id_person`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_person_appointment1` FOREIGN KEY (`id_appointment`) REFERENCES `appointment` (`id_appointment`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of appointment_person
-- ----------------------------
INSERT INTO `appointment_person` VALUES (1, 1, 1);
INSERT INTO `appointment_person` VALUES (2, 3, 1);
INSERT INTO `appointment_person` VALUES (3, 1, 2);
INSERT INTO `appointment_person` VALUES (4, 2, 2);
INSERT INTO `appointment_person` VALUES (5, 3, 2);
INSERT INTO `appointment_person` VALUES (6, 4, 2);

-- ----------------------------
-- Table structure for observation
-- ----------------------------
DROP TABLE IF EXISTS `observation`;
CREATE TABLE `observation`  (
  `id_observation` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `id_appointment_person` int NOT NULL,
  `date_observation` datetime(0) NOT NULL,
  `observation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_observation`) USING BTREE,
  INDEX `fk_results_appointment_person1`(`id_appointment_person`) USING BTREE,
  CONSTRAINT `fk_results_appointment_person1` FOREIGN KEY (`id_appointment_person`) REFERENCES `appointment_person` (`id_appointment_person`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of observation
-- ----------------------------

-- ----------------------------
-- Table structure for office
-- ----------------------------
DROP TABLE IF EXISTS `office`;
CREATE TABLE `office`  (
  `id_office` int NOT NULL AUTO_INCREMENT,
  `number_office` int NOT NULL,
  PRIMARY KEY (`id_office`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of office
-- ----------------------------
INSERT INTO `office` VALUES (1, 201);
INSERT INTO `office` VALUES (2, 203);

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person`  (
  `id_person` int NOT NULL AUTO_INCREMENT,
  `id_rol` int NOT NULL,
  `names` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_names` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `identification` int NOT NULL,
  PRIMARY KEY (`id_person`) USING BTREE,
  INDEX `fk_person_rol1`(`id_rol`) USING BTREE,
  CONSTRAINT `fk_person_rol1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES (1, 1, 'Pepe', 'Perez', 100000001);
INSERT INTO `person` VALUES (2, 1, 'Juanito', 'Marquez', 100000002);
INSERT INTO `person` VALUES (3, 2, 'Ana', 'Perez', 100000003);
INSERT INTO `person` VALUES (4, 2, 'Manuel', 'Velez', 100000004);
INSERT INTO `person` VALUES (5, 3, 'Javier', 'Vela', 123456789);

-- ----------------------------
-- Table structure for result
-- ----------------------------
DROP TABLE IF EXISTS `result`;
CREATE TABLE `result`  (
  `id_result` int NOT NULL AUTO_INCREMENT,
  `id_appointment` int NOT NULL,
  `id_pactient` int NOT NULL,
  `result` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_result`) USING BTREE,
  INDEX `fk_result_appointment1`(`id_appointment`) USING BTREE,
  INDEX `fk_result_person1`(`id_pactient`) USING BTREE,
  CONSTRAINT `fk_result_appointment1` FOREIGN KEY (`id_appointment`) REFERENCES `appointment` (`id_appointment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_person1` FOREIGN KEY (`id_pactient`) REFERENCES `person` (`id_person`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of result
-- ----------------------------

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol`  (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `name_rol` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id_rol`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO `rol` VALUES (1, 'Doctor');
INSERT INTO `rol` VALUES (2, 'Patient');
INSERT INTO `rol` VALUES (3, 'Admin');

SET FOREIGN_KEY_CHECKS = 1;

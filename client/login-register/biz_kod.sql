-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2021 at 10:11 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biz_kod`
--

-- --------------------------------------------------------

--
-- Table structure for table `next_week`
--

CREATE TABLE `next_week` (
  `user_id` int(11) NOT NULL,
  `monday` tinyint(4) NOT NULL,
  `tuesday` tinyint(4) NOT NULL,
  `wednesday` tinyint(4) NOT NULL,
  `thursday` tinyint(4) NOT NULL,
  `friday` tinyint(4) NOT NULL,
  `saturday` tinyint(4) NOT NULL,
  `sunday` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `next_week`
--

INSERT INTO `next_week` (`user_id`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`) VALUES
(6, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `this_week`
--

CREATE TABLE `this_week` (
  `monday` tinyint(4) NOT NULL,
  `tuesday` tinyint(4) NOT NULL,
  `wednesday` tinyint(4) NOT NULL,
  `thursday` tinyint(4) NOT NULL,
  `friday` tinyint(4) NOT NULL,
  `saturday` tinyint(4) NOT NULL,
  `sunday` tinyint(4) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `this_week`
--

INSERT INTO `this_week` (`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`, `user_id`) VALUES
(0, 0, 0, 0, 0, 0, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `f_name` varchar(40) NOT NULL,
  `l_name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL,
  `verification_code` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `f_name`, `l_name`, `email`, `password`, `role`, `verification_code`) VALUES
(6, 'Joe', 'Doe', 'joedoe@gmail.com', '$2y$10$MVp219A1SbyEcugwrvIwveBboG62MWl30FNiU62aPIgsSHvqLrSh2', 0, '');

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `new_input` AFTER INSERT ON `users` FOR EACH ROW BEGIN
		INSERT INTO this_week(user_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday)
        VALUES(NEW.id,0,0,0,0,0,0,0);
        INSERT INTO next_week(user_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday)
        VALUES(NEW.id,0,0,0,0,0,0,0);
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `next_week`
--
ALTER TABLE `next_week`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `this_week`
--
ALTER TABLE `this_week`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `this_week`
--
ALTER TABLE `this_week`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `next_week`
--
ALTER TABLE `next_week`
  ADD CONSTRAINT `next_week_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `this_week`
--
ALTER TABLE `this_week`
  ADD CONSTRAINT `this_week_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

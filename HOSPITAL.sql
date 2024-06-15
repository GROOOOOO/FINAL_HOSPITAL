-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2024 at 06:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `appointment_date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `reason` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patient_id`, `doctor_id`, `appointment_date`, `status`, `reason`, `created_at`, `updated_at`) VALUES
(2, 1, 2, '2024-06-20 22:19:00', 'pending', 'masakit likod', '2024-06-08 06:20:37', '2024-06-15 05:25:48'),
(5, 1700413, 2, '2024-06-07 22:57:00', 'pending', 'tule', '2024-06-08 06:57:49', '2024-06-08 06:57:49'),
(6, 10, 2, '2024-06-20 23:21:00', 'pending', 'tule', '2024-06-08 07:21:16', '2024-06-08 07:21:16'),
(7, 10, 2, '2024-06-22 23:21:00', 'pending', 'pigsa', '2024-06-08 07:22:49', '2024-06-08 07:22:49'),
(13, 10, 4, '2024-06-16 23:59:00', 'Pending', 'sakit sa chan', '2024-06-09 05:59:07', '2024-06-09 05:59:07'),
(14, 11, 5, '2024-06-11 21:56:00', 'Pending', 'masakit ulo', '2024-06-10 04:55:51', '2024-06-10 04:55:51'),
(15, 11, 5, '2024-06-12 01:40:00', 'Pending', 'masakit putotoy', '2024-06-10 08:40:47', '2024-06-10 08:40:47');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `specialization` varchar(255) NOT NULL,
  `license_number` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `first_name`, `last_name`, `specialization`, `license_number`, `phone`, `email`, `created_at`, `updated_at`) VALUES
(6, 'Rodelas', 'Rodrigo', 'Heart', '2452462', '09294865251', 'tenaro@gmail.com', '2024-06-15 00:53:50', '2024-06-15 05:15:05'),
(7, 'Joshua', 'Salmorin', 'Buts', '1700474', '09294865251', 'tenaro@gmail.com', '2024-06-15 00:59:50', '2024-06-15 05:15:37'),
(8, 'koko', 'wfwef', 'lungs', '234255566', '0922551155', 'koko@gmail.com', '2024-06-15 05:19:31', '2024-06-15 05:19:31'),
(9, 'mark', 'salvame', 'lungs', '2452462', '2341243', 'mark@gmail.com', '2024-06-15 05:31:21', '2024-06-15 05:31:21'),
(10, 'HAROLD', 'SALVAME', 'Lungs', '1256366', '09294865251', 'haroldsalvame9151@gmail.com', '2024-06-15 05:35:24', '2024-06-15 05:35:24');

-- --------------------------------------------------------

--
-- Table structure for table `medical_records`
--

CREATE TABLE `medical_records` (
  `id` int(20) NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `visit_date` date NOT NULL,
  `diagnosis` varchar(255) NOT NULL,
  `treatment` text NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medical_records`
--

INSERT INTO `medical_records` (`id`, `patient_id`, `doctor_id`, `visit_date`, `diagnosis`, `treatment`, `notes`, `created_at`, `updated_at`) VALUES
(1, 12, 21, '2024-06-14', 'ryjejrj', 'bobo', 'asdasd', '2024-06-13 07:50:55', '2024-06-15 01:07:40'),
(2, 13, 21, '2024-06-14', 'rtyhtry', 'wala', 'sory', '2024-06-13 07:56:28', '2024-06-15 01:07:30'),
(3, 22, 21, '2024-06-04', 'sfgbseb', 'gbezgb', 'gbehbe', '2024-06-15 01:27:30', '2024-06-15 01:27:30');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2024_06_03_064407_create_patients_table', 1),
(2, '2024_06_05_074448_create_doctors_table', 2),
(3, '2024_06_08_093837_create_appointments_table', 3),
(4, '2024_06_08_141723_create_appointments_table', 4),
(5, '2024_06_12_213532_create_medical_records_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `emergency_contact` varchar(255) NOT NULL,
  `medical_history` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `first_name`, `last_name`, `date_of_birth`, `gender`, `address`, `phone`, `email`, `emergency_contact`, `medical_history`, `created_at`, `updated_at`) VALUES
(6, 'Christian asdasd', 'Jaramillo', '2024-06-07', 'Male', 'lakeside', '09270536573', 'tanjaramillo222@gmail.com', '12312312', 'asdasda', '2024-06-05 00:19:51', '2024-06-05 00:19:51'),
(8, 'Christian', 'Jaramillo', '2024-06-05', 'Male', 'lakeside', '09270536573', 'tanjaramillo123@gmail.com', '12312312', 'dfdsfsdfsdf', '2024-06-05 01:25:27', '2024-06-05 01:25:27'),
(9, 'viray', 'salvame', '2024-06-05', 'Female', 'wefv', '09294865251', 'viray@gmail.com', '3422662666', 'ewcrev', '2024-06-15 01:05:49', '2024-06-15 01:05:49'),
(10, 'HAROLD', 'SALVAME', '2024-06-17', 'Male', 'SITIO LIPAHAN BRGY PULONG BUNGA', '09294865251', 'haroldsalvame9151@gmail.com', '63673737377', 'aerg3wggea3g', '2024-06-15 05:26:33', '2024-06-15 05:26:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `password`, `created_at`, `updated_at`) VALUES
(18, 'yubi', 'yubi@gmail.com', 'admin', '$2y$10$PSrpijifpEXSZAER7lPwWOQ1TlSPTrpxqCsLojhGXteE.SuX9pFY6', '2024-06-14 10:43:10', '2024-06-14 10:43:10'),
(20, 'main', 'main@gmail.com', 'receptionist', '$2y$10$d1blApP0qesCcEe./aBKJ.f78ZLqmNeARN9WZwT3PVRr/8bOaCZly', '2024-06-15 00:26:13', '2024-06-15 00:29:07'),
(21, 'tantan', 'tenaro@gmail.com', 'doctor', '$2y$10$uyRUV3.S8e489V2jHZIIF.yv8Vd1gID/AAUu4vaMS4EW5vZw2x2p.', '2024-06-15 00:39:14', '2024-06-15 00:40:04'),
(22, 'virayti', 'viray@gmail.com', NULL, '$2y$10$wQJC4lOb4gG2hViayJk/B.s.eP5Id9XV/KT914/WIT92moy/5SZH6', '2024-06-15 00:57:32', '2024-06-15 00:57:32'),
(24, 'rodelas', 'rod@gmail.com', NULL, '$2y$10$nGNkukqFTaZSv2ZuXjHkj.foRC8WJz.YSE6J2ZzNyeowzUMs00ARu', '2024-06-15 05:47:57', '2024-06-15 05:47:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medical_records`
--
ALTER TABLE `medical_records`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `patients_email_unique` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `medical_records`
--
ALTER TABLE `medical_records`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

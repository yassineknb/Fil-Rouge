-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 02 jan. 2026 à 20:59
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `fitlog`
--

-- --------------------------------------------------------

--
-- Structure de la table `exercises`
--

CREATE TABLE `exercises` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `workout_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `sets` int(11) NOT NULL DEFAULT 0,
  `reps` int(11) NOT NULL DEFAULT 0,
  `weight` decimal(8,2) NOT NULL DEFAULT 0.00,
  `rpe` decimal(3,1) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `calories` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `exercises`
--

INSERT INTO `exercises` (`id`, `workout_id`, `name`, `sets`, `reps`, `weight`, `rpe`, `notes`, `calories`, `created_at`, `updated_at`) VALUES
(2, 4, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-22 21:58:34', '2025-12-22 21:58:34'),
(3, 5, 'tempore', 2, 9, 47.47, NULL, 'Culpa qui consequuntur praesentium nulla.', NULL, '2025-12-22 21:58:34', '2025-12-22 21:58:34'),
(5, 7, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-22 22:02:52', '2025-12-22 22:02:52'),
(6, 8, 'et', 4, 17, 7.92, NULL, 'Sunt est quisquam vel dolorum quo.', NULL, '2025-12-22 22:02:52', '2025-12-22 22:02:52'),
(10, 12, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 00:08:51', '2025-12-23 00:08:51'),
(11, 13, 'natus', 2, 8, 128.50, NULL, 'Amet earum nostrum eos.', NULL, '2025-12-23 00:08:51', '2025-12-23 00:08:51'),
(14, 17, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 00:27:18', '2025-12-23 00:27:18'),
(15, 18, 'eius', 2, 3, 7.12, NULL, 'Omnis ipsam accusamus et.', NULL, '2025-12-23 00:27:18', '2025-12-23 00:27:18'),
(18, 22, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 00:38:55', '2025-12-23 00:38:55'),
(19, 23, 'velit', 4, 17, 113.01, NULL, 'Pariatur dolorem delectus quibusdam consequatur.', NULL, '2025-12-23 00:38:55', '2025-12-23 00:38:55'),
(22, 27, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 01:13:23', '2025-12-23 01:13:23'),
(23, 28, 'omnis', 1, 14, 175.66, NULL, 'Id possimus exercitationem non laboriosam nisi nostrum.', NULL, '2025-12-23 01:13:23', '2025-12-23 01:13:23'),
(26, 32, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 16:04:57', '2025-12-23 16:04:57'),
(27, 33, 'optio', 2, 7, 95.61, NULL, 'Et debitis voluptas distinctio et dolorum itaque exercitationem consequatur.', NULL, '2025-12-23 16:04:57', '2025-12-23 16:04:57'),
(29, 39, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(30, 40, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(31, 40, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(32, 44, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(33, 45, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(34, 45, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(36, 47, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 17:17:01', '2025-12-23 17:17:01'),
(37, 48, 'et', 4, 8, 65.04, NULL, 'Et molestiae dicta nobis consectetur temporibus itaque eius.', NULL, '2025-12-23 17:17:01', '2025-12-23 17:17:01'),
(39, 54, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(40, 55, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(41, 55, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(43, 57, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(44, 58, 'nihil', 5, 11, 16.10, NULL, 'Et voluptates consectetur vitae aliquam corporis.', NULL, '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(46, 64, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(47, 65, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(48, 65, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(49, 69, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(50, 70, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(51, 70, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(53, 72, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 18:14:43', '2025-12-23 18:14:43'),
(54, 73, 'blanditiis', 3, 20, 54.75, NULL, 'Ea autem aut ut aut fuga ea repellendus.', NULL, '2025-12-23 18:14:43', '2025-12-23 18:14:43'),
(56, 79, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(57, 80, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(58, 80, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(60, 82, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-23 18:21:26', '2025-12-23 18:21:26'),
(61, 83, 'aperiam', 3, 4, 102.94, NULL, 'Accusamus eveniet accusantium vitae veniam fugiat et.', NULL, '2025-12-23 18:21:26', '2025-12-23 18:21:26'),
(63, 89, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(64, 90, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(65, 90, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(67, 92, 'Squat Heavy', 5, 3, 130.00, NULL, NULL, NULL, '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(68, 93, 'atque', 1, 18, 116.99, NULL, 'Sed distinctio iste id exercitationem fugiat voluptate.', NULL, '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(70, 99, 'Bench Press', 1, 1, 100.00, NULL, NULL, NULL, '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(71, 100, 'Bench Press', 1, 1, 120.00, NULL, NULL, NULL, '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(72, 100, 'Squat', 1, 1, 150.00, NULL, NULL, NULL, '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(94, 111, 'Cycling', 0, 0, 0.00, NULL, NULL, 560, '2026-01-01 17:07:05', '2026-01-01 17:07:44'),
(96, 111, 'Cycling', 0, 0, 0.00, NULL, NULL, 56, '2026-01-01 17:12:14', '2026-01-01 17:12:14'),
(99, 115, 'Cycling', 0, 0, 0.00, NULL, NULL, 276, '2026-01-01 19:01:04', '2026-01-01 19:01:04'),
(100, 116, 'Running', 0, 0, 0.00, NULL, NULL, 160, '2026-01-01 19:12:32', '2026-01-01 19:12:32'),
(101, 116, 'Swimming', 0, 0, 0.00, NULL, NULL, 72, '2026-01-01 19:14:14', '2026-01-01 19:14:14'),
(102, 117, 'Pull-Ups', 0, 0, 0.00, NULL, NULL, 83, '2026-01-01 19:17:23', '2026-01-01 19:17:23'),
(103, 117, 'Barbell Row', 0, 0, 0.00, NULL, NULL, 97, '2026-01-01 19:18:13', '2026-01-01 19:18:13'),
(104, 118, 'Cycling', 0, 0, 0.00, NULL, NULL, 160, '2026-01-01 21:24:46', '2026-01-02 18:53:04'),
(106, 111, 'Cycling', 0, 0, 0.00, NULL, NULL, 80, '2026-01-02 14:03:04', '2026-01-02 14:03:04'),
(107, 120, 'Hip Flexor Stretch', 0, 0, 0.00, NULL, NULL, 21, '2026-01-02 14:04:03', '2026-01-02 14:04:03'),
(113, 118, 'Rowing Machine', 0, 0, 0.00, NULL, NULL, 80, '2026-01-02 18:29:38', '2026-01-02 18:29:38');

-- --------------------------------------------------------

--
-- Structure de la table `exercise_sets`
--

CREATE TABLE `exercise_sets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `exercise_id` bigint(20) UNSIGNED NOT NULL,
  `set_number` int(11) NOT NULL,
  `weight` decimal(8,2) NOT NULL DEFAULT 0.00,
  `reps` int(11) NOT NULL DEFAULT 0,
  `rpe` decimal(3,1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `exercise_sets`
--

INSERT INTO `exercise_sets` (`id`, `exercise_id`, `set_number`, `weight`, `reps`, `rpe`, `created_at`, `updated_at`) VALUES
(42, 94, 1, 0.00, 10, NULL, '2026-01-01 17:07:44', '2026-01-01 17:07:44'),
(43, 94, 2, 0.00, 0, NULL, '2026-01-01 17:07:44', '2026-01-01 17:07:44'),
(46, 96, 1, 0.00, 1, NULL, '2026-01-01 17:12:14', '2026-01-01 17:12:14'),
(51, 99, 1, 0.00, 3, 9.0, '2026-01-01 19:01:04', '2026-01-01 19:01:04'),
(52, 100, 1, 0.00, 2, 8.0, '2026-01-01 19:12:32', '2026-01-01 19:12:32'),
(53, 101, 1, 0.00, 1, 7.0, '2026-01-01 19:14:14', '2026-01-01 19:14:14'),
(54, 102, 1, 30.00, 10, 8.0, '2026-01-01 19:17:23', '2026-01-01 19:17:23'),
(55, 102, 2, 80.00, 12, 9.0, '2026-01-01 19:17:23', '2026-01-01 19:17:23'),
(56, 102, 3, 80.00, 12, 8.0, '2026-01-01 19:17:23', '2026-01-01 19:17:23'),
(57, 103, 1, 50.00, 10, 5.0, '2026-01-01 19:18:13', '2026-01-01 19:18:13'),
(58, 103, 2, 100.00, 12, 8.0, '2026-01-01 19:18:13', '2026-01-01 19:18:13'),
(59, 103, 3, 100.00, 12, 8.0, '2026-01-01 19:18:13', '2026-01-01 19:18:13'),
(62, 106, 1, 0.00, 1, 8.0, '2026-01-02 14:03:04', '2026-01-02 14:03:04'),
(63, 107, 1, 0.00, 2, NULL, '2026-01-02 14:04:03', '2026-01-02 14:04:03'),
(65, 113, 1, 0.00, 1, 8.0, '2026-01-02 18:29:38', '2026-01-02 18:29:38'),
(69, 104, 1, 0.00, 2, 8.0, '2026-01-02 18:53:04', '2026-01-02 18:53:04');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_12_22_171924_create_workouts_table', 1),
(6, '2025_12_22_185528_create_exercises_table', 1),
(7, '2025_12_22_195125_laratrust_setup_tables', 1),
(8, '2025_12_23_181205_add_profile_fields_to_users_table', 2),
(9, '2025_12_31_020007_add_type_and_duration_to_workouts_table', 3),
(10, '2025_12_31_032125_add_exercises_count_to_workouts_table', 4),
(11, '2025_12_31_203321_add_rpe_to_exercises_table', 5),
(12, '2025_12_31_204432_create_exercise_sets_table', 6),
(13, '2026_01_01_011138_add_calories_burned_to_workouts_table', 7),
(14, '2026_01_01_011834_add_calories_to_exercises_table', 8);

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'manage-workouts', 'Manage Workouts', 'Manage Workouts', '2025-12-22 21:37:10', '2025-12-22 21:37:10'),
(2, 'manage-exercises', 'Manage Exercises', 'Manage Exercises', '2025-12-22 21:37:10', '2025-12-22 21:37:10');

-- --------------------------------------------------------

--
-- Structure de la table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `permission_user`
--

CREATE TABLE `permission_user` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `permission_user`
--

INSERT INTO `permission_user` (`permission_id`, `user_id`, `user_type`) VALUES
(1, 9, 'App\\Models\\User'),
(1, 11, 'App\\Models\\User'),
(1, 16, 'App\\Models\\User'),
(1, 22, 'App\\Models\\User'),
(1, 28, 'App\\Models\\User'),
(1, 34, 'App\\Models\\User'),
(1, 41, 'App\\Models\\User'),
(1, 60, 'App\\Models\\User'),
(1, 73, 'App\\Models\\User'),
(1, 92, 'App\\Models\\User'),
(1, 105, 'App\\Models\\User'),
(1, 118, 'App\\Models\\User');

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 132, 'auth_token', 'b3ae7992f9e5f0b5b1f26568edbf8585e7268ab6806c68c35864fadd1dcdf569', '[\"*\"]', NULL, NULL, '2025-12-30 20:57:06', '2025-12-30 20:57:06'),
(2, 'App\\Models\\User', 133, 'auth_token', '7415e31bda92bb522a0af4bc84c693257420023f4736071d584a3e6e8b2db9bd', '[\"*\"]', NULL, NULL, '2025-12-30 21:38:59', '2025-12-30 21:38:59'),
(3, 'App\\Models\\User', 134, 'auth_token', 'e497231337c6a357481fe4d431192d4513c48c7e7c91580ee79aeeda04d7fa45', '[\"*\"]', NULL, NULL, '2025-12-30 21:41:32', '2025-12-30 21:41:32'),
(4, 'App\\Models\\User', 134, 'auth_token', 'c15c69e171effa747e562fc5b2021ddfb6ac29e1f36dfda515d00ffc3e8f0c1d', '[\"*\"]', NULL, NULL, '2025-12-30 21:42:00', '2025-12-30 21:42:00'),
(5, 'App\\Models\\User', 134, 'auth_token', '97d2a8aa14fe99d92cf1abd89d31db42e538abe27cf2f0390d626cb7e46adf2b', '[\"*\"]', NULL, NULL, '2025-12-30 21:42:02', '2025-12-30 21:42:02'),
(6, 'App\\Models\\User', 134, 'auth_token', '562ed78f36599014cbde44746425f3d25feb8291f3fe9b87cff7df3bcadb6464', '[\"*\"]', NULL, NULL, '2025-12-30 21:43:19', '2025-12-30 21:43:19'),
(7, 'App\\Models\\User', 135, 'auth_token', 'b329a20a0be2a4772a3ba5de8261446a0a4edfece5296b5edeac3e0ecb2fb447', '[\"*\"]', NULL, NULL, '2025-12-30 21:46:00', '2025-12-30 21:46:00'),
(8, 'App\\Models\\User', 136, 'auth_token', '73b70ea2dd89114933db7085190f63e3b355d79f3f13775422559a20338361c8', '[\"*\"]', NULL, NULL, '2025-12-30 22:19:18', '2025-12-30 22:19:18'),
(9, 'App\\Models\\User', 136, 'auth_token', 'b74dab4c5afdb629b05dc10917bbd45bff90837c4122cdfe496a21a02dded1f5', '[\"*\"]', NULL, NULL, '2025-12-30 22:19:31', '2025-12-30 22:19:31'),
(10, 'App\\Models\\User', 137, 'auth_token', '91b215dd85f5c6eaec4b374293247a3b442b418b00fdfa3c33797f6d00132423', '[\"*\"]', NULL, NULL, '2025-12-30 22:22:38', '2025-12-30 22:22:38'),
(11, 'App\\Models\\User', 138, 'auth_token', 'f809e25938dd2b4824b27ef346c5c9f1d6216016cc5c9f10714c86e44aff7df0', '[\"*\"]', NULL, NULL, '2025-12-30 22:24:55', '2025-12-30 22:24:55'),
(12, 'App\\Models\\User', 139, 'auth_token', '1c06ed78f44eff3b529ca508fe3fca6869d147ef4852c6f1f74da40b8fd9b5ca', '[\"*\"]', NULL, NULL, '2025-12-30 22:26:32', '2025-12-30 22:26:32'),
(13, 'App\\Models\\User', 139, 'auth_token', '7b41ceacdf5e67b2a4c4e3180154cbb39a8e592b46e94109f5126280d737caea', '[\"*\"]', NULL, NULL, '2025-12-30 22:26:47', '2025-12-30 22:26:47'),
(14, 'App\\Models\\User', 139, 'auth_token', 'd5aa81750b7dbf520dd8ee3003a20ece93977d5a08785c774409f26194196574', '[\"*\"]', NULL, NULL, '2025-12-30 22:26:49', '2025-12-30 22:26:49'),
(15, 'App\\Models\\User', 140, 'auth_token', '52eb85c834b5385fa378268b3eeeb223ca810765e5057f789b2a6e84c30ea7f6', '[\"*\"]', NULL, NULL, '2025-12-30 22:41:26', '2025-12-30 22:41:26'),
(16, 'App\\Models\\User', 139, 'auth_token', 'a6770a35041a99a99cb60d9e8568a09d17f3941cb302c70f18507a4ca5e3cb62', '[\"*\"]', NULL, NULL, '2025-12-30 22:54:05', '2025-12-30 22:54:05'),
(23, 'App\\Models\\User', 146, 'auth_token', 'c93703ce39a8713c76387f436817de8fd0a6adacf9af00b4af3f3bea0dd9da5b', '[\"*\"]', '2025-12-31 02:24:23', NULL, '2025-12-31 01:59:35', '2025-12-31 02:24:23'),
(29, 'App\\Models\\User', 148, 'auth_token', '6e51c2d625a844660b61be35c8274ee7c3fd4d1d9cb8bebc6d67baee15ca6d18', '[\"*\"]', '2025-12-31 19:19:42', NULL, '2025-12-31 18:16:27', '2025-12-31 19:19:42'),
(36, 'App\\Models\\User', 149, 'auth_token', 'b1800e9aa093f73efec169c3d312d4185282c0537fee77198b0e2e9e305d2620', '[\"*\"]', NULL, NULL, '2026-01-01 19:48:03', '2026-01-01 19:48:03'),
(37, 'App\\Models\\User', 148, 'auth_token', '58171f74cf673c24403b9d36a96bddc30f239e4890595d67baa33dfd0f7c9f0b', '[\"*\"]', NULL, NULL, '2026-01-01 19:48:17', '2026-01-01 19:48:17'),
(45, 'App\\Models\\User', 152, 'auth_token', 'd2c7bd706558dbdb903c6db4e2d603b14f8edc8f08edc615485bc0227f714474', '[\"*\"]', '2026-01-01 21:31:19', NULL, '2026-01-01 21:29:51', '2026-01-01 21:31:19'),
(47, 'App\\Models\\User', 152, 'auth_token', '0cab5bdb0b74c2e57f93bf9c2d4d1b26e041f9b8a9d9ec23f7b564fd27b04bb2', '[\"*\"]', '2026-01-02 00:10:04', NULL, '2026-01-02 00:09:06', '2026-01-02 00:10:04'),
(48, 'App\\Models\\User', 148, 'auth_token', '47293ea19d71a1422b65ea975cadf799eaba19a655e2ca7fa7017c33d20b543b', '[\"*\"]', '2026-01-02 14:19:40', NULL, '2026-01-02 14:00:56', '2026-01-02 14:19:40'),
(51, 'App\\Models\\User', 153, 'auth_token', '562a88f05e3e2c5fc6e27d692cd1f0a110fc10efea07f4c4dedec8d6f4473bd2', '[\"*\"]', '2026-01-02 18:55:43', NULL, '2026-01-02 18:55:37', '2026-01-02 18:55:43');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Admin', 'Admin', '2025-12-22 21:37:10', '2025-12-22 21:37:10'),
(2, 'user', 'User', 'User', '2025-12-22 21:37:10', '2025-12-22 21:37:10');

-- --------------------------------------------------------

--
-- Structure de la table `role_user`
--

CREATE TABLE `role_user` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`, `user_type`) VALUES
(1, 1, 'App\\Models\\User'),
(2, 2, 'App\\Models\\User'),
(2, 3, 'App\\Models\\User'),
(2, 4, 'App\\Models\\User'),
(2, 5, 'App\\Models\\User'),
(2, 6, 'App\\Models\\User'),
(2, 7, 'App\\Models\\User'),
(2, 8, 'App\\Models\\User'),
(2, 9, 'App\\Models\\User'),
(2, 10, 'App\\Models\\User'),
(2, 11, 'App\\Models\\User'),
(2, 12, 'App\\Models\\User'),
(2, 13, 'App\\Models\\User'),
(2, 14, 'App\\Models\\User'),
(2, 15, 'App\\Models\\User'),
(2, 16, 'App\\Models\\User'),
(2, 17, 'App\\Models\\User'),
(2, 18, 'App\\Models\\User'),
(2, 19, 'App\\Models\\User'),
(2, 20, 'App\\Models\\User'),
(2, 21, 'App\\Models\\User'),
(2, 22, 'App\\Models\\User'),
(2, 23, 'App\\Models\\User'),
(2, 24, 'App\\Models\\User'),
(2, 25, 'App\\Models\\User'),
(2, 26, 'App\\Models\\User'),
(2, 27, 'App\\Models\\User'),
(2, 28, 'App\\Models\\User'),
(2, 29, 'App\\Models\\User'),
(2, 30, 'App\\Models\\User'),
(2, 31, 'App\\Models\\User'),
(2, 32, 'App\\Models\\User'),
(2, 33, 'App\\Models\\User'),
(2, 34, 'App\\Models\\User'),
(2, 35, 'App\\Models\\User'),
(2, 36, 'App\\Models\\User'),
(2, 37, 'App\\Models\\User'),
(2, 38, 'App\\Models\\User'),
(2, 39, 'App\\Models\\User'),
(2, 40, 'App\\Models\\User'),
(2, 41, 'App\\Models\\User'),
(2, 42, 'App\\Models\\User'),
(2, 43, 'App\\Models\\User'),
(2, 44, 'App\\Models\\User'),
(2, 45, 'App\\Models\\User'),
(2, 46, 'App\\Models\\User'),
(2, 47, 'App\\Models\\User'),
(2, 48, 'App\\Models\\User'),
(2, 49, 'App\\Models\\User'),
(2, 50, 'App\\Models\\User'),
(2, 51, 'App\\Models\\User'),
(2, 52, 'App\\Models\\User'),
(2, 53, 'App\\Models\\User'),
(2, 54, 'App\\Models\\User'),
(2, 55, 'App\\Models\\User'),
(2, 56, 'App\\Models\\User'),
(2, 57, 'App\\Models\\User'),
(2, 58, 'App\\Models\\User'),
(2, 59, 'App\\Models\\User'),
(2, 60, 'App\\Models\\User'),
(2, 61, 'App\\Models\\User'),
(2, 62, 'App\\Models\\User'),
(2, 63, 'App\\Models\\User'),
(2, 64, 'App\\Models\\User'),
(2, 65, 'App\\Models\\User'),
(2, 66, 'App\\Models\\User'),
(2, 67, 'App\\Models\\User'),
(2, 68, 'App\\Models\\User'),
(2, 69, 'App\\Models\\User'),
(2, 70, 'App\\Models\\User'),
(2, 71, 'App\\Models\\User'),
(2, 72, 'App\\Models\\User'),
(2, 73, 'App\\Models\\User'),
(2, 74, 'App\\Models\\User'),
(2, 75, 'App\\Models\\User'),
(2, 76, 'App\\Models\\User'),
(2, 77, 'App\\Models\\User'),
(2, 78, 'App\\Models\\User'),
(2, 79, 'App\\Models\\User'),
(2, 80, 'App\\Models\\User'),
(2, 81, 'App\\Models\\User'),
(2, 82, 'App\\Models\\User'),
(2, 83, 'App\\Models\\User'),
(2, 84, 'App\\Models\\User'),
(2, 85, 'App\\Models\\User'),
(2, 86, 'App\\Models\\User'),
(2, 87, 'App\\Models\\User'),
(2, 88, 'App\\Models\\User'),
(2, 89, 'App\\Models\\User'),
(2, 90, 'App\\Models\\User'),
(2, 91, 'App\\Models\\User'),
(2, 92, 'App\\Models\\User'),
(2, 93, 'App\\Models\\User'),
(2, 94, 'App\\Models\\User'),
(2, 95, 'App\\Models\\User'),
(2, 96, 'App\\Models\\User'),
(2, 97, 'App\\Models\\User'),
(2, 98, 'App\\Models\\User'),
(2, 99, 'App\\Models\\User'),
(2, 100, 'App\\Models\\User'),
(2, 101, 'App\\Models\\User'),
(2, 102, 'App\\Models\\User'),
(2, 103, 'App\\Models\\User'),
(2, 104, 'App\\Models\\User'),
(2, 105, 'App\\Models\\User'),
(2, 106, 'App\\Models\\User'),
(2, 107, 'App\\Models\\User'),
(2, 108, 'App\\Models\\User'),
(2, 109, 'App\\Models\\User'),
(2, 110, 'App\\Models\\User'),
(2, 111, 'App\\Models\\User'),
(2, 112, 'App\\Models\\User'),
(2, 113, 'App\\Models\\User'),
(2, 114, 'App\\Models\\User'),
(2, 115, 'App\\Models\\User'),
(2, 116, 'App\\Models\\User'),
(2, 117, 'App\\Models\\User'),
(2, 118, 'App\\Models\\User'),
(2, 119, 'App\\Models\\User'),
(2, 120, 'App\\Models\\User'),
(2, 121, 'App\\Models\\User'),
(2, 122, 'App\\Models\\User'),
(2, 123, 'App\\Models\\User'),
(2, 124, 'App\\Models\\User'),
(2, 125, 'App\\Models\\User'),
(2, 126, 'App\\Models\\User'),
(2, 127, 'App\\Models\\User'),
(2, 128, 'App\\Models\\User'),
(2, 129, 'App\\Models\\User'),
(2, 130, 'App\\Models\\User'),
(2, 131, 'App\\Models\\User'),
(2, 132, 'App\\Models\\User'),
(2, 133, 'App\\Models\\User'),
(2, 134, 'App\\Models\\User'),
(2, 135, 'App\\Models\\User'),
(2, 136, 'App\\Models\\User'),
(2, 137, 'App\\Models\\User'),
(2, 138, 'App\\Models\\User'),
(2, 139, 'App\\Models\\User'),
(2, 140, 'App\\Models\\User'),
(2, 141, 'App\\Models\\User'),
(2, 142, 'App\\Models\\User'),
(2, 143, 'App\\Models\\User'),
(2, 144, 'App\\Models\\User'),
(2, 145, 'App\\Models\\User'),
(2, 146, 'App\\Models\\User'),
(2, 147, 'App\\Models\\User'),
(2, 148, 'App\\Models\\User'),
(2, 149, 'App\\Models\\User'),
(2, 150, 'App\\Models\\User'),
(2, 151, 'App\\Models\\User'),
(2, 152, 'App\\Models\\User'),
(2, 153, 'App\\Models\\User');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `current_weight` decimal(5,2) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `birth_date`, `current_weight`, `avatar_url`) VALUES
(1, 'Admin User', 'admin@fitlog.com', NULL, '$2y$12$iXGLUJZEKcAn2Uhh2ZROQev7uvcnjt/J9usTdXSyXqmZiXHWfiU/a', NULL, '2025-12-22 21:37:10', '2025-12-22 21:37:10', NULL, NULL, NULL),
(2, 'Itzel Ebert', 'earlene.pfannerstill@example.net', '2025-12-22 21:50:26', '$2y$04$pgoga3shRT.hv6Qor/iniu3pltxvyVH8GL9Q7RXqhsTojYQ6qsqUu', 'xfOhn90oNp', '2025-12-22 21:50:26', '2025-12-22 21:50:26', NULL, NULL, NULL),
(3, 'Myron Hudson', 'kturner@example.net', '2025-12-22 21:58:34', '$2y$04$MTX4Wm.SIjXLsJY3icSgjuZD5snnKSpNPJi533zyMDmhh6jeG5Kfy', 'dytKNT5DVx', '2025-12-22 21:58:34', '2025-12-22 21:58:34', NULL, NULL, NULL),
(4, 'Ms. Jaquelin Rowe DVM', 'tdietrich@example.com', '2025-12-22 21:58:34', '$2y$04$MTX4Wm.SIjXLsJY3icSgjuZD5snnKSpNPJi533zyMDmhh6jeG5Kfy', '5x0NunhTld', '2025-12-22 21:58:34', '2025-12-22 21:58:34', NULL, NULL, NULL),
(5, 'Maximo Ratke', 'teagan37@example.com', '2025-12-22 21:58:34', '$2y$04$MTX4Wm.SIjXLsJY3icSgjuZD5snnKSpNPJi533zyMDmhh6jeG5Kfy', 'SQxKkuDmD6', '2025-12-22 21:58:34', '2025-12-22 21:58:34', NULL, NULL, NULL),
(6, 'Liana Lesch', 'fcarroll@example.net', '2025-12-22 22:02:52', '$2y$04$rUJoL6oKvZhhJKzkCMxrbe3gcOUnzROwqD6/3N8hbu1/nOAX3huJq', 'jF7Te5xOJd', '2025-12-22 22:02:52', '2025-12-22 22:02:52', NULL, NULL, NULL),
(7, 'Riley Rosenbaum', 'carleton.rodriguez@example.com', '2025-12-22 22:02:52', '$2y$04$rUJoL6oKvZhhJKzkCMxrbe3gcOUnzROwqD6/3N8hbu1/nOAX3huJq', '2awcUQOvMW', '2025-12-22 22:02:52', '2025-12-22 22:02:52', NULL, NULL, NULL),
(8, 'Patricia Emard', 'carmella78@example.org', '2025-12-22 22:02:52', '$2y$04$rUJoL6oKvZhhJKzkCMxrbe3gcOUnzROwqD6/3N8hbu1/nOAX3huJq', '8XjBl2aWRE', '2025-12-22 22:02:52', '2025-12-22 22:02:52', NULL, NULL, NULL),
(9, 'Loyce Mante', 'hhills@example.com', '2025-12-23 00:04:31', '$2y$04$gIWisf.rjxptb7anLHEJ.OPs3F/gWCYojxczu8LlTW0fQhHutRnD.', '0sZsG7NnJa', '2025-12-23 00:04:31', '2025-12-23 00:04:31', NULL, NULL, NULL),
(10, 'Bernie Wuckert', 'breitenberg.brad@example.org', '2025-12-23 00:04:31', '$2y$04$gIWisf.rjxptb7anLHEJ.OPs3F/gWCYojxczu8LlTW0fQhHutRnD.', 'o6HwIFnraj', '2025-12-23 00:04:31', '2025-12-23 00:04:31', NULL, NULL, NULL),
(11, 'Clement Kovacek III', 'stone.rohan@example.org', '2025-12-23 00:05:33', '$2y$04$8KJPVNiHEZCbK2TzN8hc4.MvWiXwEU7XwRO0LiPcYYSADHhH3NJhi', 'rG5Emcy5ir', '2025-12-23 00:05:33', '2025-12-23 00:05:33', NULL, NULL, NULL),
(12, 'Llewellyn Schneider', 'hickle.marco@example.com', '2025-12-23 00:05:33', '$2y$04$8KJPVNiHEZCbK2TzN8hc4.MvWiXwEU7XwRO0LiPcYYSADHhH3NJhi', '5N4bnAl5Qx', '2025-12-23 00:05:33', '2025-12-23 00:05:33', NULL, NULL, NULL),
(13, 'Merl Ankunding', 'rowe.jettie@example.org', '2025-12-23 00:08:51', '$2y$04$CICIi.KAntTZREgi8PQpxezJff8A13Z/juxC1F6DFocgAOQl7uRGG', 'kmVxqLwkMm', '2025-12-23 00:08:51', '2025-12-23 00:08:51', NULL, NULL, NULL),
(14, 'Daphney Swaniawski', 'yaltenwerth@example.com', '2025-12-23 00:08:51', '$2y$04$CICIi.KAntTZREgi8PQpxezJff8A13Z/juxC1F6DFocgAOQl7uRGG', '8UkluPzTUI', '2025-12-23 00:08:51', '2025-12-23 00:08:51', NULL, NULL, NULL),
(15, 'Prof. Rosalinda Grimes II', 'karli86@example.com', '2025-12-23 00:08:51', '$2y$04$CICIi.KAntTZREgi8PQpxezJff8A13Z/juxC1F6DFocgAOQl7uRGG', '18hhsXvM4L', '2025-12-23 00:08:51', '2025-12-23 00:08:51', NULL, NULL, NULL),
(16, 'Margaretta McKenzie', 'soconnell@example.net', '2025-12-23 00:08:51', '$2y$04$CICIi.KAntTZREgi8PQpxezJff8A13Z/juxC1F6DFocgAOQl7uRGG', 'XesD17BsHx', '2025-12-23 00:08:51', '2025-12-23 00:08:51', NULL, NULL, NULL),
(17, 'Michel Bergstrom', 'hansen.ulises@example.org', '2025-12-23 00:08:51', '$2y$04$CICIi.KAntTZREgi8PQpxezJff8A13Z/juxC1F6DFocgAOQl7uRGG', 'N81MU2ejsk', '2025-12-23 00:08:51', '2025-12-23 00:08:51', NULL, NULL, NULL),
(18, 'Arianna Koelpin I', 'duncan.stokes@example.net', '2025-12-23 00:08:51', '$2y$04$CICIi.KAntTZREgi8PQpxezJff8A13Z/juxC1F6DFocgAOQl7uRGG', '7UvbpqDzHQ', '2025-12-23 00:08:51', '2025-12-23 00:08:51', NULL, NULL, NULL),
(19, 'Dr. Austin Shields', 'zemlak.dane@example.org', '2025-12-23 00:27:18', '$2y$04$g7mrUkM2OXjNOzLIYnfqF.XxXQUwpvJfT4ZYePw8s3hsiASCFbNve', 'MkK1f7JIuU', '2025-12-23 00:27:18', '2025-12-23 00:27:18', NULL, NULL, NULL),
(20, 'Laurel Fay III', 'barrows.tracy@example.net', '2025-12-23 00:27:18', '$2y$04$g7mrUkM2OXjNOzLIYnfqF.XxXQUwpvJfT4ZYePw8s3hsiASCFbNve', '6102jubJiI', '2025-12-23 00:27:18', '2025-12-23 00:27:18', NULL, NULL, NULL),
(21, 'Mrs. Juliana Krajcik III', 'gjohnston@example.com', '2025-12-23 00:27:18', '$2y$04$g7mrUkM2OXjNOzLIYnfqF.XxXQUwpvJfT4ZYePw8s3hsiASCFbNve', '9s2oNBfQFa', '2025-12-23 00:27:18', '2025-12-23 00:27:18', NULL, NULL, NULL),
(22, 'Prof. Rashad Hills', 'daniel.alford@example.com', '2025-12-23 00:27:18', '$2y$04$g7mrUkM2OXjNOzLIYnfqF.XxXQUwpvJfT4ZYePw8s3hsiASCFbNve', 'uDVqOPBoCa', '2025-12-23 00:27:18', '2025-12-23 00:27:18', NULL, NULL, NULL),
(23, 'Hobart Heaney', 'manley50@example.net', '2025-12-23 00:27:18', '$2y$04$g7mrUkM2OXjNOzLIYnfqF.XxXQUwpvJfT4ZYePw8s3hsiASCFbNve', '5nvhQpdJbv', '2025-12-23 00:27:18', '2025-12-23 00:27:18', NULL, NULL, NULL),
(24, 'Vilma Lockman', 'rbogisich@example.org', '2025-12-23 00:27:18', '$2y$04$g7mrUkM2OXjNOzLIYnfqF.XxXQUwpvJfT4ZYePw8s3hsiASCFbNve', 'J4wsurvb4J', '2025-12-23 00:27:18', '2025-12-23 00:27:18', NULL, NULL, NULL),
(25, 'Scarlett Gorczany MD', 'jany.aufderhar@example.com', '2025-12-23 00:38:55', '$2y$04$DLfXv7jgUjKITGAaXDU2.eLx.oE.4FnZYLewclPku84RZZSaP3om6', 'PPnjSDnbm9', '2025-12-23 00:38:55', '2025-12-23 00:38:55', NULL, NULL, NULL),
(26, 'Velma Shields', 'ycronin@example.org', '2025-12-23 00:38:55', '$2y$04$DLfXv7jgUjKITGAaXDU2.eLx.oE.4FnZYLewclPku84RZZSaP3om6', 'AqRZeFnWi1', '2025-12-23 00:38:55', '2025-12-23 00:38:55', NULL, NULL, NULL),
(27, 'Dr. Michelle Monahan I', 'stan45@example.org', '2025-12-23 00:38:55', '$2y$04$DLfXv7jgUjKITGAaXDU2.eLx.oE.4FnZYLewclPku84RZZSaP3om6', '4u1iL17qeb', '2025-12-23 00:38:55', '2025-12-23 00:38:55', NULL, NULL, NULL),
(28, 'Mr. Wilfred Kilback Jr.', 'sydnie67@example.com', '2025-12-23 00:38:55', '$2y$04$DLfXv7jgUjKITGAaXDU2.eLx.oE.4FnZYLewclPku84RZZSaP3om6', 'tPPkYkRXWC', '2025-12-23 00:38:55', '2025-12-23 00:38:55', NULL, NULL, NULL),
(29, 'Lucio Deckow', 'witting.gerardo@example.com', '2025-12-23 00:38:55', '$2y$04$DLfXv7jgUjKITGAaXDU2.eLx.oE.4FnZYLewclPku84RZZSaP3om6', '3Hza2p8cte', '2025-12-23 00:38:55', '2025-12-23 00:38:55', NULL, NULL, NULL),
(30, 'Jaclyn Bogisich', 'jlemke@example.com', '2025-12-23 00:38:55', '$2y$04$DLfXv7jgUjKITGAaXDU2.eLx.oE.4FnZYLewclPku84RZZSaP3om6', 'MynfRjgF7O', '2025-12-23 00:38:55', '2025-12-23 00:38:55', NULL, NULL, NULL),
(31, 'Oral Mueller', 'carey.beahan@example.net', '2025-12-23 01:13:23', '$2y$04$yi3l1bQvCKz532gHPIxPwOxO2OQCiAQT5TBCNH1vx48W9secdKJdK', '3grn6p5zuE', '2025-12-23 01:13:23', '2025-12-23 01:13:23', NULL, NULL, NULL),
(32, 'Cleo Aufderhar', 'cokeefe@example.net', '2025-12-23 01:13:23', '$2y$04$yi3l1bQvCKz532gHPIxPwOxO2OQCiAQT5TBCNH1vx48W9secdKJdK', '98dK7BF5hs', '2025-12-23 01:13:23', '2025-12-23 01:13:23', NULL, NULL, NULL),
(33, 'Jett Mills', 'kulas.rosendo@example.org', '2025-12-23 01:13:23', '$2y$04$yi3l1bQvCKz532gHPIxPwOxO2OQCiAQT5TBCNH1vx48W9secdKJdK', 'fsKURPcFbb', '2025-12-23 01:13:23', '2025-12-23 01:13:23', NULL, NULL, NULL),
(34, 'Mrs. Theresa Luettgen V', 'omer.cole@example.com', '2025-12-23 01:13:24', '$2y$04$yi3l1bQvCKz532gHPIxPwOxO2OQCiAQT5TBCNH1vx48W9secdKJdK', 'kgJFsZEHMF', '2025-12-23 01:13:24', '2025-12-23 01:13:24', NULL, NULL, NULL),
(35, 'Isabella Sawayn MD', 'mozelle38@example.net', '2025-12-23 01:13:24', '$2y$04$yi3l1bQvCKz532gHPIxPwOxO2OQCiAQT5TBCNH1vx48W9secdKJdK', 'lKizWaZyvP', '2025-12-23 01:13:24', '2025-12-23 01:13:24', NULL, NULL, NULL),
(36, 'Patrick O\'Keefe', 'flo99@example.com', '2025-12-23 01:13:24', '$2y$04$yi3l1bQvCKz532gHPIxPwOxO2OQCiAQT5TBCNH1vx48W9secdKJdK', 'ihjuoY8bgT', '2025-12-23 01:13:24', '2025-12-23 01:13:24', NULL, NULL, NULL),
(37, 'Graciela Haag', 'roel.erdman@example.com', '2025-12-23 16:04:57', '$2y$04$xdB/z0hIOHKI6IxYHKowleFAs99M.0bQP38DGdIZn5OdtbD3Pza1.', '8nGB9xsI0L', '2025-12-23 16:04:57', '2025-12-23 16:04:57', NULL, NULL, NULL),
(38, 'Erica Dibbert', 'marianna.von@example.net', '2025-12-23 16:04:57', '$2y$04$xdB/z0hIOHKI6IxYHKowleFAs99M.0bQP38DGdIZn5OdtbD3Pza1.', '6I2nkWUQDw', '2025-12-23 16:04:57', '2025-12-23 16:04:57', NULL, NULL, NULL),
(39, 'Dixie Wintheiser', 'qwillms@example.org', '2025-12-23 16:04:57', '$2y$04$xdB/z0hIOHKI6IxYHKowleFAs99M.0bQP38DGdIZn5OdtbD3Pza1.', 'yovQZK8NGu', '2025-12-23 16:04:57', '2025-12-23 16:04:57', NULL, NULL, NULL),
(40, 'Ruthie Vandervort', 'paige74@example.net', '2025-12-23 16:04:57', '$2y$04$xdB/z0hIOHKI6IxYHKowleFAs99M.0bQP38DGdIZn5OdtbD3Pza1.', '4mYHbKSPz7', '2025-12-23 16:04:57', '2025-12-23 16:04:57', NULL, NULL, NULL),
(41, 'Andreane Heaney', 'king.augustus@example.com', '2025-12-23 16:04:57', '$2y$04$xdB/z0hIOHKI6IxYHKowleFAs99M.0bQP38DGdIZn5OdtbD3Pza1.', 'h3Q4qIi2dC', '2025-12-23 16:04:57', '2025-12-23 16:04:57', NULL, NULL, NULL),
(42, 'Laverne Thompson DDS', 'lakin.susanna@example.com', '2025-12-23 16:04:57', '$2y$04$xdB/z0hIOHKI6IxYHKowleFAs99M.0bQP38DGdIZn5OdtbD3Pza1.', '0K7MxC8mCr', '2025-12-23 16:04:57', '2025-12-23 16:04:57', NULL, NULL, NULL),
(43, 'Haylie Kub DDS', 'kamryn.wisoky@example.com', '2025-12-23 16:04:57', '$2y$04$xdB/z0hIOHKI6IxYHKowleFAs99M.0bQP38DGdIZn5OdtbD3Pza1.', 'xLfGm2Bj2u', '2025-12-23 16:04:57', '2025-12-23 16:04:57', NULL, NULL, NULL),
(44, 'John Profile', 'kenyatta.wiegand@example.org', '2025-12-23 17:15:00', '$2y$04$FJumtVl0g/dTXKOe7RQ7MePpxeWpy8SJk72Ng4jG/ZPArgdbeDvjy', 'My3i1pGgdR', '2025-12-23 17:15:00', '2025-12-23 17:15:00', '1990-01-01', 80.50, NULL),
(45, 'John Updated', 'daugherty.kattie@example.com', '2025-12-23 17:15:00', '$2y$04$FJumtVl0g/dTXKOe7RQ7MePpxeWpy8SJk72Ng4jG/ZPArgdbeDvjy', 'wu0sWkcICl', '2025-12-23 17:15:00', '2025-12-23 17:15:00', '1995-05-05', 75.00, NULL),
(46, 'Jalon Adams', 'cruickshank.nichole@example.net', '2025-12-23 17:15:00', '$2y$04$FJumtVl0g/dTXKOe7RQ7MePpxeWpy8SJk72Ng4jG/ZPArgdbeDvjy', 'AwrwfRGcmI', '2025-12-23 17:15:00', '2025-12-23 17:15:00', NULL, NULL, NULL),
(47, 'Iliana Greenfelder Sr.', 'smraz@example.com', '2025-12-23 17:15:00', '$2y$04$FJumtVl0g/dTXKOe7RQ7MePpxeWpy8SJk72Ng4jG/ZPArgdbeDvjy', '2HZuidLF02', '2025-12-23 17:15:00', '2025-12-23 17:15:00', NULL, NULL, NULL),
(48, 'User One', 'josh31@example.org', '2025-12-23 17:15:00', '$2y$04$FJumtVl0g/dTXKOe7RQ7MePpxeWpy8SJk72Ng4jG/ZPArgdbeDvjy', 'pNvxLQ98rO', '2025-12-23 17:15:00', '2025-12-23 17:15:00', NULL, NULL, NULL),
(49, 'User Two', 'wtowne@example.com', '2025-12-23 17:15:00', '$2y$04$FJumtVl0g/dTXKOe7RQ7MePpxeWpy8SJk72Ng4jG/ZPArgdbeDvjy', 'GHsyhCbcfA', '2025-12-23 17:15:00', '2025-12-23 17:15:00', NULL, NULL, NULL),
(50, 'John Profile', 'schaden.unique@example.net', '2025-12-23 17:16:36', '$2y$04$NjjW44n31V0JEJY7MWzMPeIF4Coxg25r04.369fcgCKtEJG5KMTUm', 'UxbFgPidIX', '2025-12-23 17:16:36', '2025-12-23 17:16:36', '1990-01-01', 80.50, NULL),
(51, 'John Updated', 'nlebsack@example.com', '2025-12-23 17:16:36', '$2y$04$NjjW44n31V0JEJY7MWzMPeIF4Coxg25r04.369fcgCKtEJG5KMTUm', 'RbRTTcLD6J', '2025-12-23 17:16:36', '2025-12-23 17:16:36', '1995-05-05', 75.00, NULL),
(52, 'Dax Mann', 'olaf.hand@example.net', '2025-12-23 17:16:36', '$2y$04$NjjW44n31V0JEJY7MWzMPeIF4Coxg25r04.369fcgCKtEJG5KMTUm', 'ybJ552sqtd', '2025-12-23 17:16:36', '2025-12-23 17:16:36', NULL, NULL, NULL),
(53, 'Otho Emmerich', 'declan.schulist@example.org', '2025-12-23 17:16:36', '$2y$04$NjjW44n31V0JEJY7MWzMPeIF4Coxg25r04.369fcgCKtEJG5KMTUm', 'Z2GwlrG5Xa', '2025-12-23 17:16:36', '2025-12-23 17:16:36', NULL, NULL, NULL),
(54, 'User One', 'cernser@example.net', '2025-12-23 17:16:36', '$2y$04$NjjW44n31V0JEJY7MWzMPeIF4Coxg25r04.369fcgCKtEJG5KMTUm', 'XR7NFAwwKd', '2025-12-23 17:16:36', '2025-12-23 17:16:36', NULL, NULL, NULL),
(55, 'User Two', 'kemmer.ethelyn@example.net', '2025-12-23 17:16:36', '$2y$04$NjjW44n31V0JEJY7MWzMPeIF4Coxg25r04.369fcgCKtEJG5KMTUm', 'zqBWFttKGe', '2025-12-23 17:16:36', '2025-12-23 17:16:36', NULL, NULL, NULL),
(56, 'Cheyanne Bernhard', 'felicia.shields@example.com', '2025-12-23 17:17:01', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'ME6HJUjpbh', '2025-12-23 17:17:01', '2025-12-23 17:17:01', NULL, NULL, NULL),
(57, 'Trey Daugherty Sr.', 'dwisoky@example.org', '2025-12-23 17:17:01', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'ADNPlYeJqg', '2025-12-23 17:17:01', '2025-12-23 17:17:01', NULL, NULL, NULL),
(58, 'Prof. Giovanni Cummerata', 'cmiller@example.net', '2025-12-23 17:17:01', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', '0IyTOnSm3C', '2025-12-23 17:17:01', '2025-12-23 17:17:01', NULL, NULL, NULL),
(59, 'Dr. Aurore Murray', 'mathew19@example.net', '2025-12-23 17:17:01', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'PfvzE63BmO', '2025-12-23 17:17:01', '2025-12-23 17:17:01', NULL, NULL, NULL),
(60, 'Levi Collier', 'kwalter@example.com', '2025-12-23 17:17:01', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'Ff8njzMUbO', '2025-12-23 17:17:01', '2025-12-23 17:17:01', NULL, NULL, NULL),
(61, 'Willard Harvey', 'hyatt.al@example.com', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'ufFFfIr24L', '2025-12-23 17:17:02', '2025-12-23 17:17:02', NULL, NULL, NULL),
(62, 'Wilfrid Jaskolski III', 'elijah.marks@example.net', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'FNVZ3qDedk', '2025-12-23 17:17:02', '2025-12-23 17:17:02', NULL, NULL, NULL),
(63, 'John Profile', 'akreiger@example.net', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'u5bOIhBt9u', '2025-12-23 17:17:02', '2025-12-23 17:17:02', '1990-01-01', 80.50, NULL),
(64, 'John Updated', 'antonia.lockman@example.net', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', '4bIE5GW79S', '2025-12-23 17:17:02', '2025-12-23 17:17:02', '1995-05-05', 75.00, NULL),
(65, 'Noble Bernier', 'hilpert.felix@example.org', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'iBWF3t8pO4', '2025-12-23 17:17:02', '2025-12-23 17:17:02', NULL, NULL, NULL),
(66, 'Alyson Batz', 'corkery.abigail@example.net', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'v2Jeb7Q5P2', '2025-12-23 17:17:02', '2025-12-23 17:17:02', NULL, NULL, NULL),
(67, 'User One', 'gvon@example.org', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', 'zD17QM0lUa', '2025-12-23 17:17:02', '2025-12-23 17:17:02', NULL, NULL, NULL),
(68, 'User Two', 'maryjane.denesik@example.com', '2025-12-23 17:17:02', '$2y$04$FxrQOe/Jky7gGPIDWhksJ.CfwS.Iar7g49C4Tq933O/eL4wiwVr5e', '9fPmB6Gb2G', '2025-12-23 17:17:02', '2025-12-23 17:17:02', NULL, NULL, NULL),
(69, 'Felicity Lockman', 'xbreitenberg@example.net', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'XBQkZk2KyQ', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(70, 'Alvah Schmitt', 'becker.hudson@example.net', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'pEJh7gA2OX', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(71, 'Prof. Lilyan Borer', 'lind.giles@example.org', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'Nrj5BeZrhp', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(72, 'Horacio Pacocha', 'gprice@example.com', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'G9pk6oiwxs', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(73, 'Kyler Jacobi', 'skuhlman@example.org', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'dZhGNMrMiv', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(74, 'Dora Roberts', 'jorge17@example.net', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'ryrqE5qOxd', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(75, 'Lina Morar', 'beatrice.becker@example.com', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'IVrnMPi2Ol', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(76, 'John Profile', 'yparisian@example.org', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'hsTtOP5cQq', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '1990-01-01', 80.50, NULL),
(77, 'John Updated', 'soledad80@example.net', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'QnRkyfQyOT', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '1995-05-05', 75.00, NULL),
(78, 'Kiley Schiller', 'blanca.collins@example.net', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'eEoL7TlpR7', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(79, 'Russ Haag', 'robel.jordon@example.com', '2025-12-23 18:11:09', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'ilAcai5IaH', '2025-12-23 18:11:09', '2025-12-23 18:11:09', NULL, NULL, NULL),
(80, 'User One', 'gleason.reuben@example.org', '2025-12-23 18:11:10', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'IvKz6hn5jR', '2025-12-23 18:11:10', '2025-12-23 18:11:10', NULL, NULL, NULL),
(81, 'User Two', 'heller.destin@example.com', '2025-12-23 18:11:10', '$2y$04$R.DluSJ0ryKGuAevEZr/vugcfZkKFV39/SsbqY7HonTzOkwadu.Sm', 'G75JB0XIAF', '2025-12-23 18:11:10', '2025-12-23 18:11:10', NULL, NULL, NULL),
(82, 'John Profile', 'wluettgen@example.com', '2025-12-23 18:13:03', '$2y$04$JSXWOX7VER.3p9.fynBBIeFUcSC4dSqEP/Bc96rfFOUKczyj1LJ9.', 'jEV7hE8o9k', '2025-12-23 18:13:03', '2025-12-23 18:13:03', '1990-01-01', 80.50, NULL),
(83, 'John Updated', 'jennie69@example.com', '2025-12-23 18:13:04', '$2y$04$JSXWOX7VER.3p9.fynBBIeFUcSC4dSqEP/Bc96rfFOUKczyj1LJ9.', 'YomZDFMMvN', '2025-12-23 18:13:04', '2025-12-23 18:13:04', '1995-05-05', 75.00, NULL),
(84, 'Miss Madelyn Beatty', 'maybelle97@example.net', '2025-12-23 18:13:04', '$2y$04$JSXWOX7VER.3p9.fynBBIeFUcSC4dSqEP/Bc96rfFOUKczyj1LJ9.', '2t6KpoFm4P', '2025-12-23 18:13:04', '2025-12-23 18:13:04', NULL, NULL, NULL),
(85, 'Ila Weber', 'mireille08@example.net', '2025-12-23 18:13:04', '$2y$04$JSXWOX7VER.3p9.fynBBIeFUcSC4dSqEP/Bc96rfFOUKczyj1LJ9.', 'G4o59E4Wco', '2025-12-23 18:13:04', '2025-12-23 18:13:04', NULL, NULL, NULL),
(86, 'User One', 'legros.joannie@example.net', '2025-12-23 18:13:04', '$2y$04$JSXWOX7VER.3p9.fynBBIeFUcSC4dSqEP/Bc96rfFOUKczyj1LJ9.', 'soO37KrQtX', '2025-12-23 18:13:04', '2025-12-23 18:13:04', NULL, NULL, NULL),
(87, 'User Two', 'swift.ryder@example.org', '2025-12-23 18:13:04', '$2y$04$JSXWOX7VER.3p9.fynBBIeFUcSC4dSqEP/Bc96rfFOUKczyj1LJ9.', '52PsZiNATz', '2025-12-23 18:13:04', '2025-12-23 18:13:04', NULL, NULL, NULL),
(88, 'Rafael Lebsack', 'lenny53@example.org', '2025-12-23 18:14:43', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'pyrBNXKCLQ', '2025-12-23 18:14:43', '2025-12-23 18:14:43', NULL, NULL, NULL),
(89, 'Garry Baumbach', 'wschulist@example.net', '2025-12-23 18:14:43', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'QO3sQGUoz8', '2025-12-23 18:14:43', '2025-12-23 18:14:43', NULL, NULL, NULL),
(90, 'Alayna Kilback I', 'raul71@example.com', '2025-12-23 18:14:43', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'rIELEFRq3K', '2025-12-23 18:14:43', '2025-12-23 18:14:43', NULL, NULL, NULL),
(91, 'Immanuel Hand PhD', 'lyric.marvin@example.net', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'ltp1jlQe1r', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(92, 'Eliane Metz', 'ledner.jana@example.org', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'mNs3mg4kMW', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(93, 'Quinten Schowalter', 'fbarrows@example.com', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'ph9cPQBn7X', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(94, 'Dorothy Hirthe', 'naomie.watsica@example.com', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'CYrUeDU6ru', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(95, 'John Profile', 'carroll.lola@example.org', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'CKWokXddUA', '2025-12-23 18:14:44', '2025-12-23 18:14:44', '1990-01-01', 80.50, NULL),
(96, 'John Updated', 'aletha.kuhn@example.org', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'jpGK9Ifq4H', '2025-12-23 18:14:44', '2025-12-23 18:14:44', '1995-05-05', 75.00, NULL),
(97, 'Kirstin Lesch', 'ptrantow@example.com', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'LfacUtmb5u', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(98, 'Wendy Mueller', 'ankunding.stan@example.org', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'lRxR0oaHZY', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(99, 'User One', 'sconnelly@example.org', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'SOYPstR7dY', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(100, 'User Two', 'kariane.runte@example.com', '2025-12-23 18:14:44', '$2y$04$Mzj8d/W0Letn1ozHLu.4mesKvL770vyOgfnWlLPj7rke.rTV3vGl2', 'Pf37xotiwr', '2025-12-23 18:14:44', '2025-12-23 18:14:44', NULL, NULL, NULL),
(101, 'Dr. Palma Fadel II', 'vdenesik@example.net', '2025-12-23 18:21:26', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'rlYkzGxlt8', '2025-12-23 18:21:26', '2025-12-23 18:21:26', NULL, NULL, NULL),
(102, 'Prof. Ali Rolfson II', 'gutkowski.winona@example.net', '2025-12-23 18:21:26', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'o1cTakbYYM', '2025-12-23 18:21:26', '2025-12-23 18:21:26', NULL, NULL, NULL),
(103, 'Pablo Donnelly', 'ygibson@example.net', '2025-12-23 18:21:26', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', '937ZMwHIPp', '2025-12-23 18:21:26', '2025-12-23 18:21:26', NULL, NULL, NULL),
(104, 'Dr. Evelyn Pfannerstill II', 'lesch.charlotte@example.net', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'ztEe33Bbyi', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(105, 'Joesph Barrows', 'wintheiser.hulda@example.net', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'MkvGiPBK3s', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(106, 'Maurine Abshire', 'lebsack.kattie@example.com', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'A7yNRF4QTL', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(107, 'Heath Satterfield IV', 'bogisich.christy@example.org', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'KnIhGakKxs', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(108, 'John Profile', 'cnienow@example.org', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'S8wyLADCjr', '2025-12-23 18:21:27', '2025-12-23 18:21:27', '1990-01-01', 80.50, NULL),
(109, 'John Updated', 'jrosenbaum@example.net', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'WeFDQQisDl', '2025-12-23 18:21:27', '2025-12-23 18:21:27', '1995-05-05', 75.00, NULL),
(110, 'Jacinthe Kling', 'roconner@example.net', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', '2mBUSTA5fB', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(111, 'Lonie Kovacek', 'karelle76@example.org', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'olUYhzH3JL', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(112, 'User One', 'nicolas.stuart@example.net', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'WHCFK8RgGv', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(113, 'User Two', 'frami.addison@example.org', '2025-12-23 18:21:27', '$2y$04$UIroACk5zw1durUoU4mr5uBgYRUW6zDJ9fHJiP/P3tcx5hFUwShWS', 'W53zYEHGs4', '2025-12-23 18:21:27', '2025-12-23 18:21:27', NULL, NULL, NULL),
(114, 'Prof. Laverne Swaniawski Sr.', 'mellie95@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'FiuxTvu4p4', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(115, 'Mr. Deondre Mraz', 'elias.mante@example.com', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'OWL5n2PsZM', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(116, 'Eugene Ondricka II', 'weissnat.lolita@example.com', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'OXzVrCYenI', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(117, 'Dr. Merl Wunsch DVM', 'eprice@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'CU6tONp96F', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(118, 'Lesley Eichmann', 'ugreenholt@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'JtLlfxkylX', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(119, 'Eldon Langosh', 'rjacobi@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'uCBdrNhVjw', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(120, 'Sierra Tillman', 'vstoltenberg@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'oO1PgZbwyz', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(121, 'John Profile', 'imani.bins@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', '9BSET3tqbd', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '1990-01-01', 80.50, NULL),
(122, 'John Updated', 'champlin.erna@example.com', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'TzF7RydRAQ', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '1995-05-05', 75.00, NULL),
(123, 'Karine Huels', 'scottie.bechtelar@example.com', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'FQZ97fL36d', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(124, 'Trevion Schmeler', 'stracke.oswald@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'A13ggNjHOR', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(125, 'User One', 'brock77@example.org', '2025-12-27 16:18:28', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', '6ryOST1Fbi', '2025-12-27 16:18:28', '2025-12-27 16:18:28', NULL, NULL, NULL),
(126, 'User Two', 'bosco.helen@example.net', '2025-12-27 16:18:29', '$2y$04$FsBtaANMj0pxxpojmkGenuDup7LJ39bl0O53pFuJ45vXun8r8EJIm', 'fJJGrTiUeX', '2025-12-27 16:18:29', '2025-12-27 16:18:29', NULL, NULL, NULL),
(127, 'Test User', 'new_unique_user@example.com', NULL, '$2y$12$Cg.0.bUNq3X9LEpyD9vlOemsd6.qSXPZBmBgs.PQ7AXl7jH7LM4WW', NULL, '2025-12-29 01:15:03', '2025-12-29 01:15:03', NULL, NULL, NULL),
(128, 'Test User', 'newtestuser@example.com', NULL, '$2y$12$INof7ahf3V1j4yy7dQJ0Uut2iQqJIk.LEWiQTBlslPFDvdugOF.ZG', NULL, '2025-12-30 20:27:11', '2025-12-30 20:27:11', NULL, NULL, NULL),
(129, 'Test User', 'user_test_123@example.com', NULL, '$2y$12$JJCobT72VoitgzFnqmnsGuZG9a.Qw3xfqwKjlJaYZNNJPWdzR1xYa', NULL, '2025-12-30 20:43:45', '2025-12-30 20:43:45', NULL, NULL, NULL),
(130, 'User Retry', 'user_retry_999@example.com', NULL, '$2y$12$k7vzlIk/cs8aAEtP5KrT6.w5s1ZCe/9ewSFLwq.aMI5JSzJf.uUlm', NULL, '2025-12-30 20:47:07', '2025-12-30 20:47:07', NULL, NULL, NULL),
(131, 'Test 2', 'test2_1735595460@example.com', NULL, '$2y$12$WhbX5LE8no/RxyIIY17VGONMUxUgfKnRR0Sk9zvi94FRdnRsFxzsa', NULL, '2025-12-30 20:52:40', '2025-12-30 20:52:40', NULL, NULL, NULL),
(132, 'User Fixed', 'user_fixed_98765@example.com', NULL, '$2y$12$cW5fhJauxaWVyBu7DakFae05.iU8tv0pgVVE0GnlxM1/31UjlxS1y', NULL, '2025-12-30 20:57:06', '2025-12-30 20:57:06', NULL, NULL, NULL),
(133, 'Test User', 'testuser@example.com', NULL, '$2y$12$gbIqbZUqwfcTYab2Z9m5W..Zj.70INDcZY2/ZrqYB1JIwQ.spKoEm', NULL, '2025-12-30 21:38:59', '2025-12-30 21:38:59', NULL, NULL, NULL),
(134, 'Test User', 'testuser01@example.com', NULL, '$2y$12$TeABBseV6mVO5GZYNYk1ouKyUXslGrh0KIjSYXwFpNbJu5eElVG9y', NULL, '2025-12-30 21:41:32', '2025-12-30 21:41:32', NULL, NULL, NULL),
(135, 'Final Test', 'final_test_1234@example.com', NULL, '$2y$12$I6fxU6nc.fOLmXdmPQ3J5ObHAsaG95oI0arVQjgAnzCeDDFNeeh0i', NULL, '2025-12-30 21:46:00', '2025-12-30 21:46:00', NULL, NULL, NULL),
(136, 'KHANBOUB YASSINE', 'final_test_xyz@example.com', NULL, '$2y$12$.6VOaUYyIIIRPC4tDXqTQ.QydhsTqevDuEYgSdeBlOYGPCjxoNWxW', NULL, '2025-12-30 22:19:17', '2025-12-30 22:19:17', NULL, NULL, NULL),
(137, 'KHANBOUB YASSINE', 'final_test_xyz6@example.com', NULL, '$2y$12$I76F9K.m7gGPtqfphwyAXu0zOZ1m78yPcY5nPnYZPlBa.e/i/DS4.', NULL, '2025-12-30 22:22:38', '2025-12-30 22:22:38', NULL, NULL, NULL),
(138, 'KHANBOUB YASSINE', 'final_test_xyz666@example.com', NULL, '$2y$12$5CCf4.I6QimPQHjxGTLMZuiUuFc238eE7tgzzui9xuRZMx6sqZw8e', NULL, '2025-12-30 22:24:55', '2025-12-30 22:24:55', NULL, NULL, NULL),
(139, 'KHANBOUB YASSINE', 'final_test_xyz666777@example.com', NULL, '$2y$12$O6zuSwTvqw2rfVr8KOgNM.KShxnpRQ7N192UFLpDgIOt1yQYRNDvG', NULL, '2025-12-30 22:26:32', '2025-12-30 22:26:32', NULL, NULL, NULL),
(140, 'Final Test 3', 'final_test_3_xyz@example.com', NULL, '$2y$12$Grwyj2vvqHtMpXqVqSs7KOwg6s3U.7ZZaUAlF1k2gd8BT64v1HzBi', NULL, '2025-12-30 22:41:26', '2025-12-30 22:41:26', NULL, NULL, NULL),
(141, 'User Final 2', 'user_final_2_101@example.com', NULL, '$2y$12$egKlE7/cAwZS2PEqs7iJ0eUa8YBQODFx6SDOC153tW8WAt5UHyyt.', NULL, '2025-12-30 23:41:37', '2025-12-30 23:41:37', NULL, NULL, NULL),
(142, 'User Verified', 'user_verified_123@example.com', NULL, '$2y$12$rk1l/ISsP3dS2f/wEAgigeaDqBrIVvI24muHWmB3pHCdgX9isUQom', NULL, '2025-12-30 23:54:42', '2025-12-30 23:54:42', NULL, NULL, NULL),
(143, 'KHANBOUB YASSINE', 'final_test_xyz78878@example.com', NULL, '$2y$12$2SjO72TwvyRlM8QmvR2lDuMj1lKL4jFSDMk9KFF7QFqn7BiS1I59O', NULL, '2025-12-31 00:01:41', '2025-12-31 00:01:41', NULL, NULL, NULL),
(144, 'Profile Fixed', 'profile_fixed_888@example.com', NULL, '$2y$12$HU.x7UHY25AHUqqZ41aR1ObRXZXlgMUhBoeD6aOO6lPUji/v6Rr3S', NULL, '2025-12-31 00:38:36', '2025-12-31 00:38:36', NULL, NULL, NULL),
(145, 'Fixed User', 'fixed@test.com', NULL, '$2y$12$IL9okUEq3Y3x7Fx.e/p7.eGAJc6FS5kTonNX0CxY2BhCSGkdg1aHy', NULL, '2025-12-31 01:31:03', '2025-12-31 01:31:03', NULL, NULL, NULL),
(146, 'Final User', 'very_final_test@test.com', NULL, '$2y$12$9DgWM2v6iyUef01Fif1pU.saXadoPn.t7oh6lVu8lJTA4ozvWN/Gy', NULL, '2025-12-31 01:59:35', '2025-12-31 01:59:35', NULL, NULL, NULL),
(147, 'KHANBOUB YASSINE', 'admin@mytiQ.com', NULL, '$2y$12$af5chug04WS8KMylwOLgz.LCJGWi1QPm5q4eKVzNcwUiizIpXBFr6', NULL, '2025-12-31 02:45:24', '2025-12-31 02:45:24', NULL, NULL, NULL),
(148, 'yassine2004', 'yassinekhanboub22@gmail.com', NULL, '$2y$12$7/asyiMkE5lVzQh07/d9w.k8uVXH8iWTXLJRDAELDm3uWMGz8F/Tm', NULL, '2025-12-31 16:59:10', '2026-01-02 14:12:20', '2004-01-06', 78.00, '/storage/avatars/yC0jzhKjelZlZ6ygJ7l6FLCY2Lu04yh4mxsOpdWe.jpg'),
(149, 'yassine2001', 'yksavage6547@erzi.me', NULL, '$2y$12$EEUz5KfVv5p15Cq2j.URvOGWbTYfATdqZFAYSZkgo2UhbnfrpeY56', NULL, '2026-01-01 19:06:31', '2026-01-01 19:08:53', '2001-06-01', 70.00, '/storage/avatars/uVAwpSkO669BG1y5vk5APcpO4LWgfyKZBYYKxgTg.jpg'),
(150, 'karim', 'karim@gmail.com', NULL, '$2y$12$XA0.jLjSVAlnS147kYMG0efn0sthN7WauwLbIVpitJboyBMKrX8rm', NULL, '2026-01-01 19:49:55', '2026-01-01 19:56:48', '2012-03-01', 55.00, '/storage/avatars/5FHkNPwO4BSJwuoiOGqL6mZVVnCWA8Ayn5XBqHE4.jpg'),
(151, 'ABDO', 'yksavage66@gmail.com', NULL, '$2y$12$4xw2Ttls5GPSKbFhMoBSJeaZMLmZ7WAFfp7mtlmq8Q/MGeZNRIZEe', NULL, '2026-01-01 19:57:47', '2026-01-01 19:58:18', '2001-04-03', 100.00, '/storage/avatars/I1jGFR28uxMTRilx1u8sGyDvWdUpSiA32Nj7hfeh.jpg'),
(152, 'reem', 'reem@gmail.com', NULL, '$2y$12$ezNtwd71sLgG5cXUemOts.nWd3gVLrXzxMMcejv0gz44zBwJ2KPfW', NULL, '2026-01-01 21:18:13', '2026-01-02 18:47:34', '2007-12-31', 60.00, '/storage/avatars/u5bMCnvxtrhjVL5WYPKC1mjkimU15lU6rBrVaroY.png'),
(153, 'karim01', 'karim01@gmail.com', NULL, '$2y$12$KayosRx80Wza0Vi6golDYuI6tFj5E4YCc5Q9ePyq8RIoGJjDewUKm', NULL, '2026-01-02 18:54:11', '2026-01-02 18:55:04', '2013-10-06', 57.00, '/storage/avatars/Zm9UBhJwDWdiT1xpjREyC7TaRL9J7g8kTG2ND6IX.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `workouts`
--

CREATE TABLE `workouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `calories_burned` int(11) DEFAULT NULL,
  `exercises_count` int(11) DEFAULT 0,
  `description` text DEFAULT NULL,
  `scheduled_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `workouts`
--

INSERT INTO `workouts` (`id`, `user_id`, `title`, `type`, `duration`, `calories_burned`, `exercises_count`, `description`, `scheduled_at`, `created_at`, `updated_at`) VALUES
(3, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Fugiat id temporibus rerum et. Eum ut ut molestiae a. Hic ab dolore quam laborum consequatur voluptatem.', '2025-12-22 21:58:34', '2025-12-22 21:58:34', '2025-12-22 21:58:34'),
(4, 3, 'User Workout', NULL, NULL, NULL, 0, 'Ea iusto voluptatem veritatis earum totam est. Omnis nihil explicabo autem.', '2025-12-22 21:58:34', '2025-12-22 21:58:34', '2025-12-22 21:58:34'),
(5, 5, 'User 2 Workout', NULL, NULL, NULL, 0, 'Officia ad ut in. Ab architecto quo amet quae incidunt qui. Et numquam ex et porro quia harum. Accusamus aspernatur non sed dolores quia sequi voluptas.', '2025-12-22 21:58:34', '2025-12-22 21:58:34', '2025-12-22 21:58:34'),
(6, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Vel perferendis eum ad eaque. Veniam neque illum similique debitis voluptates dolores. Quia dolores consequuntur perferendis. Qui vitae sunt dignissimos rerum ut eum. Beatae facilis blanditiis reprehenderit beatae labore.', '2025-12-22 22:02:51', '2025-12-22 22:02:52', '2025-12-22 22:02:52'),
(7, 6, 'User Workout', NULL, NULL, NULL, 0, 'Ex ut aut voluptatum vel rem. Blanditiis rerum quae magnam nihil optio amet exercitationem. Qui ut ipsum doloremque eaque magnam odit. Sit dolores omnis reprehenderit.', '2025-12-22 22:02:52', '2025-12-22 22:02:52', '2025-12-22 22:02:52'),
(8, 8, 'User 2 Workout', NULL, NULL, NULL, 0, 'Debitis eum sit provident. Maiores et officia minus aliquid necessitatibus quod velit. Dolorem distinctio tempora eaque ut ipsam ab quaerat. Nihil incidunt possimus itaque suscipit rerum ea pariatur.', '2025-12-22 22:02:52', '2025-12-22 22:02:52', '2025-12-22 22:02:52'),
(11, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Magnam quas accusamus est dolorum ipsum non. Consequatur dolorum minima et blanditiis est. Voluptatem quia saepe enim tempore.', '2025-12-23 00:08:51', '2025-12-23 00:08:51', '2025-12-23 00:08:51'),
(12, 13, 'User Workout', NULL, NULL, NULL, 0, 'Id quae ut quis ipsa. Minima at velit in. Nulla tempora qui quis sint.', '2025-12-23 00:08:51', '2025-12-23 00:08:51', '2025-12-23 00:08:51'),
(13, 15, 'User 2 Workout', NULL, NULL, NULL, 0, 'Quia consequatur doloribus eos minima eum ullam. Dolorem soluta vero ut ipsa in ab quam officia. Sit velit dolor dolor exercitationem explicabo. Labore nulla maiores voluptatem vel nostrum dolor.', '2025-12-23 00:08:51', '2025-12-23 00:08:51', '2025-12-23 00:08:51'),
(16, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Sit autem impedit similique dolorem et occaecati est. Nulla est ratione est laboriosam fuga.', '2025-12-23 00:27:17', '2025-12-23 00:27:17', '2025-12-23 00:27:17'),
(17, 19, 'User Workout', NULL, NULL, NULL, 0, 'Doloribus similique maiores dolore in. Cum quia totam rerum omnis. Reprehenderit ea facilis ratione non illo beatae placeat. Non quo debitis neque aut.', '2025-12-23 00:27:18', '2025-12-23 00:27:18', '2025-12-23 00:27:18'),
(18, 21, 'User 2 Workout', NULL, NULL, NULL, 0, 'Laborum odit cumque ea nulla alias nemo quibusdam. Tempore vel laborum suscipit enim dolores voluptatem nobis facere. Pariatur sequi alias sed animi molestias. Dolorum quos laudantium non cumque sit nobis aspernatur cupiditate. Tenetur similique vitae autem et sed.', '2025-12-23 00:27:18', '2025-12-23 00:27:18', '2025-12-23 00:27:18'),
(21, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'In qui dolores dolorum illo voluptatum mollitia dolorum. In tempora mollitia aperiam necessitatibus. Optio aliquid sit reprehenderit autem.', '2025-12-23 00:38:55', '2025-12-23 00:38:55', '2025-12-23 00:38:55'),
(22, 25, 'User Workout', NULL, NULL, NULL, 0, 'Quo eos veniam facere provident et velit aut. Est beatae quia asperiores maxime id vitae. Beatae veritatis molestias vero labore maxime sit.', '2025-12-23 00:38:55', '2025-12-23 00:38:55', '2025-12-23 00:38:55'),
(23, 27, 'User 2 Workout', NULL, NULL, NULL, 0, 'Nostrum et error quia nam sed aut sit. Est assumenda voluptas repudiandae cum. Aliquid quia sit recusandae officiis nulla rerum. Quam animi laboriosam qui debitis quis qui reiciendis.', '2025-12-23 00:38:55', '2025-12-23 00:38:55', '2025-12-23 00:38:55'),
(26, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Maiores corporis minima omnis aspernatur est. Tenetur et ipsam commodi nihil. Modi aut veritatis delectus dolorem et dolor. Nisi enim placeat fuga quis omnis error optio.', '2025-12-23 01:13:23', '2025-12-23 01:13:23', '2025-12-23 01:13:23'),
(27, 31, 'User Workout', NULL, NULL, NULL, 0, 'Soluta ex officiis perferendis adipisci facilis. Ut sequi et reiciendis. Aut distinctio et facilis quia.', '2025-12-23 01:13:23', '2025-12-23 01:13:23', '2025-12-23 01:13:23'),
(28, 33, 'User 2 Workout', NULL, NULL, NULL, 0, 'Voluptas ut harum ratione id eos et. Voluptatum velit et iure est deserunt corrupti fugit. Voluptatibus ut cumque quas ducimus.', '2025-12-23 01:13:23', '2025-12-23 01:13:23', '2025-12-23 01:13:23'),
(31, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Animi quas quia enim voluptatum. Corrupti accusantium quibusdam error fugiat. Totam recusandae impedit consequatur laudantium cumque. Nihil maiores explicabo animi vel voluptas.', '2025-12-23 16:04:56', '2025-12-23 16:04:56', '2025-12-23 16:04:56'),
(32, 37, 'User Workout', NULL, NULL, NULL, 0, 'Non delectus consequatur ea non laudantium. Qui molestias est necessitatibus possimus quam itaque aut aut. Quis fuga est illo modi non odit. Sunt molestiae consequatur excepturi dolor. Hic temporibus aut et maiores quis.', '2025-12-23 16:04:57', '2025-12-23 16:04:57', '2025-12-23 16:04:57'),
(33, 39, 'User 2 Workout', NULL, NULL, NULL, 0, 'Veritatis animi fugit illum et nobis omnis. Iure a recusandae atque libero consequatur. Officiis quos et nihil voluptatem nulla quo debitis.', '2025-12-23 16:04:57', '2025-12-23 16:04:57', '2025-12-23 16:04:57'),
(36, 46, 'Dolor blanditiis.', NULL, NULL, NULL, 0, 'Rerum ipsum et saepe. Dolorum nihil consequatur neque praesentium. A quam voluptates et voluptates alias. Corrupti laudantium possimus veritatis maiores quis sunt incidunt.', '2025-12-23 17:15:00', '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(37, 46, 'Delectus et commodi.', NULL, NULL, NULL, 0, 'Tenetur tempora et non perspiciatis ut. Maxime vero aut nobis in minus blanditiis cumque eos. Libero nulla consequuntur quae quia dolorem enim alias. Reiciendis veritatis nihil corrupti quaerat doloribus nihil inventore officia.', '2025-12-23 17:15:00', '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(38, 46, 'Eum aut quod.', NULL, NULL, NULL, 0, 'Saepe ut earum similique natus. Dolorum ut culpa incidunt aut voluptates quisquam assumenda. Distinctio hic doloremque vero repellat ipsam fuga excepturi. Dignissimos neque quia repellat possimus veritatis.', '2025-11-23 17:15:00', '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(39, 47, 'Sunt aliquid.', NULL, NULL, NULL, 0, 'Vel ea minus debitis maxime beatae et qui. Odit molestiae et debitis non molestiae molestias. Et dolor commodi laudantium nam quaerat nobis est. Vel cupiditate ipsum non veritatis ipsa dolores.', '2025-12-23 17:15:00', '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(40, 47, 'Enim hic maxime.', NULL, NULL, NULL, 0, 'Sed ut harum odio rerum. Nesciunt sunt odio quae rerum. Maxime dolores doloremque facere ut consequatur.', '2025-12-23 17:15:00', '2025-12-23 17:15:00', '2025-12-23 17:15:00'),
(41, 52, 'Rerum qui.', NULL, NULL, NULL, 0, 'Unde maiores quae possimus facilis. Quis qui architecto nisi quis quos atque tempore. Excepturi et maxime eligendi dignissimos rerum molestiae reiciendis.', '2025-12-23 17:16:36', '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(42, 52, 'Illo officiis consequatur asperiores.', NULL, NULL, NULL, 0, 'Recusandae aliquid recusandae natus ea suscipit. Odio excepturi non beatae beatae est ut. Quos recusandae cumque sunt hic cupiditate omnis provident.', '2025-12-23 17:16:36', '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(43, 52, 'Sit eum labore.', NULL, NULL, NULL, 0, 'Voluptatum repellat optio atque fugit fuga. Deleniti voluptatum voluptatem nam aut. Explicabo sit minus neque repellat ad. Dolores recusandae omnis id.', '2025-11-23 17:16:36', '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(44, 53, 'Et vitae qui.', NULL, NULL, NULL, 0, 'Debitis temporibus ut hic tenetur natus et. Minus asperiores a repellat sapiente eum tenetur. Fugit blanditiis ut magni ducimus quis velit quis et.', '2025-12-23 17:16:36', '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(45, 53, 'Ex in sapiente quia tempore.', NULL, NULL, NULL, 0, 'Molestiae dolorem quae quod totam vel. Repudiandae quisquam voluptatibus est saepe omnis. Debitis et ex expedita ipsam qui nam accusantium.', '2025-12-23 17:16:36', '2025-12-23 17:16:36', '2025-12-23 17:16:36'),
(46, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Qui est tempora cumque ratione et nihil voluptatibus. Culpa quo pariatur quis non rerum. Iusto reiciendis voluptatem consequuntur ut aspernatur ipsa.', '2025-12-23 17:17:01', '2025-12-23 17:17:01', '2025-12-23 17:17:01'),
(47, 56, 'User Workout', NULL, NULL, NULL, 0, 'Rerum omnis nam nihil qui officia praesentium consequatur. Eos repellendus velit reiciendis laudantium iusto nobis.', '2025-12-23 17:17:01', '2025-12-23 17:17:01', '2025-12-23 17:17:01'),
(48, 58, 'User 2 Workout', NULL, NULL, NULL, 0, 'Veritatis omnis magnam quas et aut ut qui vero. Et illo dolores cum architecto. Aliquam quia est quaerat aut dolores soluta magni dolorem. Porro est pariatur non autem harum.', '2025-12-23 17:17:01', '2025-12-23 17:17:01', '2025-12-23 17:17:01'),
(51, 65, 'Ipsum vel ut.', NULL, NULL, NULL, 0, 'Qui ut doloribus blanditiis temporibus. Vero corporis ipsum laudantium veritatis quia consectetur sapiente alias. In quae quis laboriosam id est ea necessitatibus. Tempora fugiat minima illum voluptatem ullam cumque.', '2025-12-23 17:17:02', '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(52, 65, 'Quam dolor.', NULL, NULL, NULL, 0, 'At et et quaerat fugiat maxime et corporis. Molestiae rerum impedit mollitia voluptas qui eius iusto.', '2025-12-23 17:17:02', '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(53, 65, 'Illo sint ipsam.', NULL, NULL, NULL, 0, 'Impedit asperiores doloribus unde. Necessitatibus sit illo incidunt accusantium. Beatae natus quia quas eum quis.', '2025-11-23 17:17:02', '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(54, 66, 'Illo totam modi.', NULL, NULL, NULL, 0, 'Sit officiis reiciendis esse et exercitationem animi quia. Doloribus et assumenda quis qui. Atque dolores est magnam est.', '2025-12-23 17:17:02', '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(55, 66, 'Ipsum ipsum a a.', NULL, NULL, NULL, 0, 'Quo magnam hic voluptatum suscipit. Ducimus ut qui dolorem dolorem. Quia impedit qui aut vitae. Harum sapiente sequi sint unde.', '2025-12-23 17:17:02', '2025-12-23 17:17:02', '2025-12-23 17:17:02'),
(56, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Nisi sint suscipit eius officiis et. Ipsum nesciunt optio et nostrum. Deleniti eum itaque sed dolores.', '2025-12-23 18:11:08', '2025-12-23 18:11:08', '2025-12-23 18:11:08'),
(57, 69, 'User Workout', NULL, NULL, NULL, 0, 'Et consectetur ipsum laudantium iste eaque neque consequuntur. Praesentium quia sunt repellat. Reprehenderit minima aut velit. Officia beatae ullam sapiente quisquam sit rerum recusandae.', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(58, 71, 'User 2 Workout', NULL, NULL, NULL, 0, 'Quo velit dolorem dolores nisi rerum ullam aut eos. Sunt dolores quis vero iure eveniet. Est et possimus eos quasi possimus praesentium ratione. Officia dolores amet saepe praesentium quia ut sequi doloribus.', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(61, 78, 'Maiores omnis minima blanditiis.', NULL, NULL, NULL, 0, 'Dolorem totam dolorem cum. Similique eum dolor dolorem et. Culpa necessitatibus sapiente ratione error inventore. Repellendus inventore magni porro voluptatem officiis molestias. Quia culpa rerum rerum sit molestias.', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(62, 78, 'Saepe fuga neque.', NULL, NULL, NULL, 0, 'Dolorem aut doloremque molestiae saepe ut ipsam ab. Ratione sunt mollitia labore qui. Est dolorem ea est ex repellendus atque pariatur. Voluptas porro suscipit ut quaerat quam maiores.', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(63, 78, 'Harum est est sequi dicta.', NULL, NULL, NULL, 0, 'Aut qui eaque voluptatibus ea optio. Quia quos voluptatibus sit consequuntur. Et sapiente expedita alias distinctio. Iusto in quibusdam alias dolorum.', '2025-11-23 18:11:09', '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(64, 79, 'Nisi soluta voluptatum.', NULL, NULL, NULL, 0, 'Incidunt quo delectus quod laudantium reprehenderit hic. Quos voluptates aut accusantium quo. Inventore possimus repellat possimus natus.', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(65, 79, 'Qui debitis temporibus.', NULL, NULL, NULL, 0, 'Eum commodi praesentium illo qui. Fugit fuga aliquid et nam quaerat quidem consequatur. Exercitationem numquam natus quam quis sed qui ad.', '2025-12-23 18:11:09', '2025-12-23 18:11:09', '2025-12-23 18:11:09'),
(66, 84, 'Suscipit neque vel.', NULL, NULL, NULL, 0, 'A culpa cupiditate minus voluptas alias ut. Et est mollitia et omnis consequatur reprehenderit et. Omnis nam delectus exercitationem assumenda animi. Qui autem ex nihil numquam et.', '2025-12-23 18:13:04', '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(67, 84, 'Id sunt officiis.', NULL, NULL, NULL, 0, 'Alias sit a dolorem iure. Veniam quis a ut aut fugiat. Aut vel possimus et corrupti eum.', '2025-12-23 18:13:04', '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(68, 84, 'Neque alias reprehenderit.', NULL, NULL, NULL, 0, 'Fuga voluptas sequi necessitatibus inventore iusto. Dolor tempora nisi sapiente eius aperiam. Quos reprehenderit sint sint ut omnis qui autem neque.', '2025-11-23 18:13:04', '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(69, 85, 'Consequuntur eos voluptatem.', NULL, NULL, NULL, 0, 'Repellat dolor adipisci architecto eos architecto. Aut dicta ut minus architecto. Et aut et voluptatem.', '2025-12-23 18:13:04', '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(70, 85, 'Est quo accusantium magnam.', NULL, NULL, NULL, 0, 'Sed et neque dolor minus. Est sed qui quia quo quis sit rerum. Vero commodi reprehenderit pariatur neque quae dicta.', '2025-12-23 18:13:04', '2025-12-23 18:13:04', '2025-12-23 18:13:04'),
(71, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Assumenda aliquid voluptatem odit perferendis. Fugit amet consequatur ab dolor aut. Nisi sit quas quaerat. Eum et similique dolorem officiis quaerat autem.', '2025-12-23 18:14:43', '2025-12-23 18:14:43', '2025-12-23 18:14:43'),
(72, 88, 'User Workout', NULL, NULL, NULL, 0, 'Blanditiis quia et iusto. Saepe voluptatibus provident qui nesciunt. Illo est iure veritatis doloremque veniam.', '2025-12-23 18:14:43', '2025-12-23 18:14:43', '2025-12-23 18:14:43'),
(73, 90, 'User 2 Workout', NULL, NULL, NULL, 0, 'Aspernatur voluptatem quisquam architecto et inventore qui. Natus et mollitia eos id. Repellendus nostrum ea autem et iure. Ad aliquid quia vitae omnis quod voluptatem numquam.', '2025-12-23 18:14:43', '2025-12-23 18:14:43', '2025-12-23 18:14:43'),
(76, 97, 'Animi recusandae totam.', NULL, NULL, NULL, 0, 'Et accusamus sit dolor dicta et. Incidunt nihil quia aliquam eaque.', '2025-12-23 18:14:44', '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(77, 97, 'Magni aut voluptate omnis.', NULL, NULL, NULL, 0, 'Fugiat omnis veritatis doloremque ad. Voluptatibus voluptas sapiente inventore vitae fugit odio. Qui placeat assumenda quos commodi consequatur. Veritatis voluptatem ratione quae quia sed.', '2025-12-23 18:14:44', '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(78, 97, 'Non necessitatibus deserunt similique dolor.', NULL, NULL, NULL, 0, 'Sunt soluta libero qui est autem. Consectetur et mollitia natus inventore. Molestiae temporibus veritatis dolores adipisci cupiditate impedit error.', '2025-11-23 18:14:44', '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(79, 98, 'Reprehenderit est vel quia.', NULL, NULL, NULL, 0, 'Occaecati totam sequi numquam sed. Ex veritatis deleniti natus nesciunt laboriosam doloremque. Cum voluptatem earum culpa est excepturi ab.', '2025-12-23 18:14:44', '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(80, 98, 'Dolorem dignissimos adipisci.', NULL, NULL, NULL, 0, 'Numquam voluptatem qui et consequatur voluptatem animi sit. Neque excepturi aperiam quia. Laboriosam aliquid ut sit sed hic consequatur sit optio.', '2025-12-23 18:14:44', '2025-12-23 18:14:44', '2025-12-23 18:14:44'),
(81, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Et non quam et voluptates fugit. Culpa dolorem eligendi iure natus totam corporis consequatur. Expedita est voluptatem in est sunt omnis.', '2025-12-23 18:21:26', '2025-12-23 18:21:26', '2025-12-23 18:21:26'),
(82, 101, 'User Workout', NULL, NULL, NULL, 0, 'Qui dolor quis dolorum quam itaque velit eius maiores. Excepturi facilis nulla magnam occaecati. Porro nulla rem ut aut eaque.', '2025-12-23 18:21:26', '2025-12-23 18:21:26', '2025-12-23 18:21:26'),
(83, 103, 'User 2 Workout', NULL, NULL, NULL, 0, 'Et repudiandae ea aut ut aut consequatur sequi. Illum inventore omnis dolore in. Sed qui perferendis neque nihil.', '2025-12-23 18:21:26', '2025-12-23 18:21:26', '2025-12-23 18:21:26'),
(86, 110, 'Voluptates eum numquam laboriosam.', NULL, NULL, NULL, 0, 'Non dolore qui qui. Ea quaerat repudiandae quae eos molestiae quis. Veritatis molestiae ea consequatur aut placeat. Qui quaerat beatae voluptatem totam eligendi sit.', '2025-12-23 18:21:27', '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(87, 110, 'Deserunt aperiam quaerat.', NULL, NULL, NULL, 0, 'Corrupti et et eius soluta consequatur. Expedita enim cupiditate nemo sint.', '2025-12-23 18:21:27', '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(88, 110, 'Quia harum doloremque dolorem.', NULL, NULL, NULL, 0, 'Minus et et totam odio. Dolorem animi blanditiis aut laudantium necessitatibus. Temporibus omnis omnis quasi non aliquid. Nihil deleniti perferendis ratione temporibus illo nemo occaecati.', '2025-11-23 18:21:27', '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(89, 111, 'Exercitationem consequatur ducimus architecto.', NULL, NULL, NULL, 0, 'Et laudantium ullam culpa debitis ea. Ut repellendus soluta pariatur labore. Reprehenderit et error sed aliquam architecto. Sed sit dolores repellendus doloribus ea.', '2025-12-23 18:21:27', '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(90, 111, 'Ut est alias.', NULL, NULL, NULL, 0, 'Libero quia sequi mollitia nobis illo et ut. Fugiat et omnis similique enim quisquam iste ducimus rerum. Alias modi eveniet alias a unde.', '2025-12-23 18:21:27', '2025-12-23 18:21:27', '2025-12-23 18:21:27'),
(91, 1, 'Admin Workout', NULL, NULL, NULL, 0, 'Non unde id minima excepturi corporis laboriosam ipsam. Quod eveniet eius est dolore. Aperiam aut aut in exercitationem.', '2025-12-27 16:18:27', '2025-12-27 16:18:27', '2025-12-27 16:18:27'),
(92, 114, 'User Workout', NULL, NULL, NULL, 0, 'Qui et qui nostrum reprehenderit quia quae. Qui non fuga consectetur animi dignissimos fuga. Voluptatem ut assumenda aliquam quisquam est inventore. Illum aut doloribus recusandae non labore. Consequatur dolores eos quae quae cum possimus vero.', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(93, 116, 'User 2 Workout', NULL, NULL, NULL, 0, 'Eos eligendi velit consequuntur ea. Sed aut laboriosam nulla natus non tempora. Similique sed eum sit omnis. Aut libero explicabo cupiditate sit at.', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(96, 123, 'Totam sunt quam.', NULL, NULL, NULL, 0, 'Ex delectus molestiae aliquid voluptatem quod. Qui id repudiandae enim architecto aperiam. Voluptate libero ipsa voluptatem ut et est laborum.', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(97, 123, 'Quos maxime quia nemo.', NULL, NULL, NULL, 0, 'Ducimus autem nihil aperiam veniam. Sint odit officia aut sed nisi tempora et vel. A suscipit quod dolor itaque illo vel.', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(98, 123, 'Recusandae expedita maxime.', NULL, NULL, NULL, 0, 'Illum facere modi qui. Ducimus tempora totam omnis deserunt ut ab. Cumque quis nobis tenetur. Quia vitae exercitationem est quisquam sequi quo iure.', '2025-11-27 16:18:28', '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(99, 124, 'Quia aut laboriosam.', NULL, NULL, NULL, 0, 'Pariatur hic reiciendis est. Et expedita et eum itaque. Dicta sed asperiores ut sit et ipsa. Soluta non odit ut occaecati vel sed perferendis.', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(100, 124, 'Voluptas earum alias.', NULL, NULL, NULL, 0, 'Inventore voluptas nam libero nisi. Suscipit facere recusandae numquam est in enim error. Est sint iusto soluta est ipsum. Qui quas id neque sunt.', '2025-12-27 16:18:28', '2025-12-27 16:18:28', '2025-12-27 16:18:28'),
(111, 148, 'velo01', 'Cardio', '2h', NULL, 0, 'efeefe', '2025-12-31 23:00:00', '2026-01-01 16:17:45', '2026-01-01 16:59:09'),
(115, 148, 'l3reg', 'Cardio', '1h30min', NULL, 0, NULL, '2025-12-31 23:00:00', '2026-01-01 19:00:31', '2026-01-01 19:00:31'),
(116, 149, 'chest', 'Cardio', '30min', NULL, 0, NULL, '2025-12-31 23:00:00', '2026-01-01 19:10:44', '2026-01-01 19:10:44'),
(117, 149, 'backday', 'Musculation', '1h30min', NULL, 0, NULL, '2026-01-01 23:00:00', '2026-01-01 19:15:52', '2026-01-01 19:15:52'),
(118, 152, 'course01', 'Cardio', '1h', NULL, 0, NULL, '2025-12-31 23:00:00', '2026-01-01 21:19:13', '2026-01-02 18:51:26'),
(120, 148, 'strtch', 'Stretching', '2h', NULL, 0, NULL, '2026-01-01 23:00:00', '2026-01-02 14:03:46', '2026-01-02 14:03:46');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exercises_workout_id_foreign` (`workout_id`);

--
-- Index pour la table `exercise_sets`
--
ALTER TABLE `exercise_sets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exercise_sets_exercise_id_foreign` (`exercise_id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Index pour la table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`);

--
-- Index pour la table `permission_user`
--
ALTER TABLE `permission_user`
  ADD PRIMARY KEY (`user_id`,`permission_id`,`user_type`),
  ADD KEY `permission_user_permission_id_foreign` (`permission_id`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Index pour la table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`user_id`,`role_id`,`user_type`),
  ADD KEY `role_user_role_id_foreign` (`role_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `workouts_user_id_scheduled_at_index` (`user_id`,`scheduled_at`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `exercises`
--
ALTER TABLE `exercises`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT pour la table `exercise_sets`
--
ALTER TABLE `exercise_sets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT pour la table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `exercises`
--
ALTER TABLE `exercises`
  ADD CONSTRAINT `exercises_workout_id_foreign` FOREIGN KEY (`workout_id`) REFERENCES `workouts` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `exercise_sets`
--
ALTER TABLE `exercise_sets`
  ADD CONSTRAINT `exercise_sets_exercise_id_foreign` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `permission_user`
--
ALTER TABLE `permission_user`
  ADD CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `workouts`
--
ALTER TABLE `workouts`
  ADD CONSTRAINT `workouts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

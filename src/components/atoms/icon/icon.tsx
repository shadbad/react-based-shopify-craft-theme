/* eslint-disable max-len */
import React from 'react';
import './icon.scss';

const IconComponent = (function () {
    const data = [
        {
            name: 'care-information',
            path: 'M512 268.8l-76.8-76.8c-89.6-85.333-230.4-85.333-320 0s-89.6 226.133 0 315.733l396.8 388.267 392.533-388.267c89.6-85.333 89.6-226.133 0-315.733-89.6-85.333-230.4-85.333-320 0l-72.533 76.8zM550.4 157.867c106.667-106.667 281.6-106.667 392.533 0 106.667 106.667 106.667 281.6 0 388.267l-392.533 388.267c-21.333 21.333-55.467 21.333-72.533 0l-392.533-388.267c-106.667-106.667-106.667-281.6 0-388.267s281.6-106.667 392.533 0l34.133 38.4 38.4-38.4z'
        },
        {
            name: 'dimensions',
            path: 'M972.8 273.067l-699.733 699.733-221.867-221.867 699.733-699.733 221.867 221.867zM789.333 17.067c-21.333-21.333-51.2-21.333-72.533 0l-699.733 695.467c-21.333 21.333-21.333 51.2 0 72.533l221.867 221.867c21.333 21.333 51.2 21.333 72.533 0l695.467-695.467c21.333-21.333 21.333-51.2 0-72.533l-217.6-221.867z'
        },
        {
            name: 'materials',
            path: 'M315.733 465.067c0-8.533 4.267-12.8 12.8-12.8h379.733c8.533 0 12.8 4.267 12.8 12.8s-4.267 12.8-12.8 12.8h-375.467c-8.533-0-17.067-4.267-17.067-12.8z'
        },
        {
            name: 'logo',
            path: 'M499.2 21.333c0 29.867-68.267 115.2-128 162.133-64 55.467-183.467 110.933-260.267 123.733-34.133 8.533-59.733 17.067-59.733 25.6s25.6 12.8 59.733 21.333c68.267 12.8 187.733 59.733 187.733 72.533s-89.6 68.267-106.667 68.267c-29.867 0-21.333 21.333 12.8 34.133 128 51.2 277.333 277.333 294.4 443.733 4.267 29.867 12.8 46.933 17.067 46.933s17.067-29.867 21.333-64c21.333-93.867 51.2-170.667 106.667-251.733 59.733-89.6 115.2-140.8 179.2-170.667 38.4-17.067 51.2-38.4 21.333-38.4-17.067 0-110.933-59.733-110.933-72.533s115.2-59.733 174.933-72.533c34.133-8.533 59.733-17.067 64-21.333 0-4.267-21.333-12.8-59.733-21.333-72.533-12.8-192-68.267-256-123.733-59.733-51.2-128-136.533-128-162.133 0-12.8-8.533-21.333-12.8-21.333s-17.067 8.533-17.067 21.333zM533.333 145.067c21.333 76.8 68.267 157.867 115.2 221.867l42.667 55.467-68.267 59.733c-34.133 34.133-72.533 76.8-89.6 98.133l-21.333 34.133-12.8-21.333c-8.533-12.8-46.933-55.467-89.6-98.133l-72.533-72.533 38.4-51.2c46.933-64 81.067-123.733 110.933-209.067 12.8-38.4 25.6-68.267 29.867-68.267s8.533 21.333 17.067 51.2zM465.067 170.667c-25.6 72.533-72.533 153.6-119.467 204.8l-25.6 34.133-72.533-29.867c-38.4-17.067-85.333-34.133-102.4-38.4-25.6-8.533-25.6-8.533 29.867-29.867 89.6-29.867 174.933-85.333 238.933-149.333 34.133-34.133 68.267-64 68.267-64 4.267 4.267-4.267 34.133-17.067 72.533zM614.4 166.4c68.267 68.267 153.6 119.467 243.2 149.333 51.2 17.067 51.2 17.067 21.333 25.6-17.067 4.267-64 21.333-102.4 38.4l-68.267 29.867-25.6-34.133c-46.933-55.467-89.6-132.267-119.467-204.8-12.8-38.4-21.333-68.267-21.333-68.267 4.267-0 34.133 29.867 72.533 64zM422.4 524.8c72.533 72.533 85.333 102.4 85.333 251.733 4.267 132.267 0 140.8-34.133 59.733-38.4-102.4-132.267-234.667-204.8-281.6-21.333-12.8-42.667-34.133-42.667-38.4s21.333-21.333 46.933-42.667c51.2-34.133 51.2-34.133 72.533-12.8 17.067 8.533 51.2 38.4 76.8 64zM806.4 516.267c0 4.267-21.333 21.333-46.933 34.133-72.533 46.933-166.4 174.933-204.8 281.6-29.867 85.333-38.4 72.533-34.133-68.267l4.267-132.267 38.4-55.467c21.333-29.867 64-72.533 89.6-98.133l51.2-38.4 51.2 34.133c29.867 21.333 51.2 42.667 51.2 42.667z'
        },
        {
            name: 'arrow-left',
            path: 'M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z'
        },
        {
            name: 'arrow-right',
            path: 'M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z'
        },
        {
            name: 'check',
            path: 'M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z'
        },
        {
            name: 'check-square',
            path: 'M353.835 499.499l128 128c16.683 16.683 43.691 16.683 60.331 0l426.667-426.667c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-396.501 396.501-97.835-97.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM853.333 512v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h469.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-469.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z'
        },
        {
            name: 'chevron-down',
            path: 'M225.835 414.165l256 256c16.683 16.683 43.691 16.683 60.331 0l256-256c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z'
        },
        {
            name: 'chevron-left',
            path: 'M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z'
        },
        {
            name: 'chevron-right',
            path: 'M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z'
        },
        {
            name: 'chevron-up',
            path: 'M798.165 609.835l-256-256c-16.683-16.683-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z'
        },
        {
            name: 'clipboard',
            path: 'M298.667 213.333c0 23.552 9.6 44.928 25.003 60.331s36.779 25.003 60.331 25.003h256c23.552 0 44.928-9.6 60.331-25.003s25.003-36.779 25.003-60.331h42.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM384 42.667c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331h-42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-42.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003zM384 128h256v85.333h-256z'
        },
        {
            name: 'github',
            path: 'M371.755 769.792c-54.101 16.213-87.893 14.293-110.208 7.253-9.856-3.115-18.389-7.509-26.197-12.885-17.536-12.117-31.019-28.8-47.744-50.005-15.189-19.243-36.267-47.232-66.176-62.976-7.893-4.181-16.469-7.552-25.771-9.899-22.869-5.717-46.037 8.192-51.755 31.061s8.192 46.037 31.061 51.755c3.157 0.981 6.613 2.56 6.613 2.56 10.752 5.675 20.779 17.237 38.997 40.363 15.616 19.797 36.523 46.848 66.261 67.371 14.165 9.771 30.336 18.176 49.024 24.064 43.307 13.696 95.403 12.629 160.427-6.912 22.571-6.784 35.371-30.549 28.587-53.12s-30.549-35.371-53.12-28.587zM725.333 938.667v-161.792c2.219-29.184-2.389-57.301-12.459-82.859 33.152-7.296 66.688-18.219 98.005-35.115 88.875-47.957 149.163-138.325 149.163-295.381 0-64.128-22.016-123.179-58.837-169.856 15.147-57.387 9.643-116.309-12.501-167.808-5.205-12.075-15.317-20.565-27.051-24.064-15.232-4.523-73.899-13.184-186.581 58.112-96.981-23.083-194.432-21.717-283.563-0.085-112.597-71.211-171.221-62.549-186.453-58.027-12.629 3.755-22.229 12.8-27.093 24.107-23.637 55.125-26.624 114.005-12.459 167.765-39.68 50.261-59.179 110.976-58.837 171.392 0 154.539 59.264 244.181 146.816 292.651 32.085 17.749 66.56 29.227 100.565 36.992-7.893 19.968-12.203 41.003-12.971 62.123-0.213 6.016-0.128 12.075 0.213 18.091l0.043 163.755c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-165.12c0-0.896-0.043-1.92-0.085-2.944-0.256-3.584-0.299-7.168-0.171-10.752 0.853-24.235 10.283-48.043 28.373-66.731 6.187-6.357 10.496-14.805 11.691-24.405 2.901-23.381-13.696-44.715-37.077-47.616-14.507-1.792-28.885-4.011-42.923-6.784-33.707-6.656-64.768-16.427-91.605-31.275-55.68-30.848-102.016-88.363-102.827-215.125 0.555-52.949 17.877-98.944 52.224-135.040 10.965-11.648 14.933-28.629 9.045-44.373-11.947-31.915-14.549-67.413-5.973-102.059 20.949 4.565 57.771 17.749 112.939 54.699 10.027 6.699 22.741 9.131 35.2 5.675 85.205-23.765 180.992-25.685 276.053 0.085 11.563 3.115 24.277 1.408 34.901-5.76 55.168-36.949 91.989-50.133 112.939-54.699 8.064 32.683 6.699 68.053-6.016 102.059-5.504 15.019-2.475 32.213 9.088 44.373 32.341 33.92 52.224 79.872 52.224 130.56 0 131.2-47.531 189.653-104.32 220.288-26.581 14.336-57.301 23.68-90.581 29.867-13.739 2.56-27.776 4.523-41.941 6.101-8.96 0.981-17.835 4.864-24.917 11.733-16.939 16.384-17.408 43.392-1.024 60.331 2.859 2.987 5.547 6.101 8.021 9.387 14.507 19.157 22.229 43.307 20.224 68.992 0 1.024-0.043 2.176-0.128 3.328v165.205c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z'
        },
        {
            name: 'heart',
            path: 'M859.008 226.859c37.547 37.589 56.277 86.656 56.277 135.851s-18.773 98.261-56.277 135.765l-347.008 347.008-347.008-347.008c-37.504-37.504-56.235-86.571-56.235-135.808s18.731-98.304 56.235-135.808 86.571-56.235 135.808-56.235 98.304 18.731 135.808 56.235l45.227 45.227c16.683 16.683 43.691 16.683 60.331 0l45.312-45.312c37.504-37.504 86.571-56.235 135.765-56.192s98.261 18.773 135.765 56.277zM919.339 166.528c-54.144-54.144-125.184-81.237-196.096-81.28s-141.952 27.051-196.139 81.195l-15.104 15.147-15.061-15.061c-54.144-54.144-125.227-81.237-196.139-81.237s-141.995 27.093-196.139 81.237-81.237 125.227-81.237 196.139 27.093 141.995 81.237 196.139l377.173 377.173c16.683 16.683 43.691 16.683 60.331 0l377.173-377.173c54.144-54.144 81.237-125.184 81.28-196.096s-27.051-141.952-81.28-196.181z'
        },
        {
            name: 'instagram',
            path: 'M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM746.667 320c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667z'
        },
        {
            name: 'linkedin',
            path: 'M682.667 298.667c-82.475 0-157.184 33.493-211.2 87.467s-87.467 128.725-87.467 211.2v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467zM682.667 384c58.923 0 112.213 23.851 150.869 62.464s62.464 91.947 62.464 150.869v256h-85.333v-256c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496v256h-85.333v-256c0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464zM85.333 341.333c-23.552 0-42.667 19.115-42.667 42.667v512c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-512c0-23.552-19.115-42.667-42.667-42.667zM128 426.667h85.333v426.667h-85.333zM298.667 170.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM213.333 170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165z'
        },
        {
            name: 'menu',
            path: 'M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z'
        },
        {
            name: 'minus',
            path: 'M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z'
        },
        {
            name: 'play',
            path: 'M236.416 92.117c-6.528-4.267-14.507-6.784-23.083-6.784-23.552 0-42.667 19.115-42.667 42.667v768c-0.043 7.765 2.133 15.872 6.784 23.083 12.757 19.84 39.125 25.557 58.965 12.8l597.333-384c4.864-3.072 9.344-7.424 12.8-12.8 12.757-19.84 6.997-46.208-12.8-58.965zM256 206.165l475.776 305.835-475.776 305.835z'
        },
        {
            name: 'plus',
            path: 'M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z'
        },
        {
            name: 'refresh',
            path: 'M189.995 398.251c31.445-88.875 95.872-156.544 174.763-194.219s172.032-45.184 260.864-13.739c50.603 17.92 94.123 46.421 127.275 80.213l120.747 113.493h-148.309c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h255.872c0.213 0 0.384 0 0.597 0 5.845-0.043 11.435-1.323 16.469-3.499 5.077-2.176 9.771-5.376 13.824-9.6 0.512-0.555 1.024-1.109 1.536-1.664 3.2-3.712 5.675-7.808 7.381-12.16s2.731-9.003 2.944-13.909c0.043-0.64 0.043-1.237 0.043-1.835v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v157.397l-124.843-117.291c-42.325-43.093-96.896-78.635-159.701-100.864-111.061-39.296-227.627-29.824-326.101 17.152s-179.157 131.669-218.453 242.731c-7.893 22.187 3.755 46.549 25.941 54.443s46.592-3.755 54.443-25.984zM85.333 695.979l126.080 118.485c82.304 82.389 191.573 124.075 300.715 124.117s218.411-41.6 301.739-124.885c47.104-47.104 81.109-102.699 100.736-159.787 7.68-22.272-4.181-46.549-26.496-54.229s-46.549 4.181-54.229 26.496c-15.403 44.8-42.368 89.216-80.341 127.189-66.688 66.645-153.984 99.925-241.365 99.925s-174.677-33.365-242.304-100.949l-119.467-112.341h148.267c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-255.872c-0.213 0-0.384 0-0.597 0-5.845 0.043-11.435 1.323-16.469 3.499-5.077 2.176-9.771 5.376-13.824 9.6-0.512 0.555-1.024 1.109-1.536 1.664-3.2 3.712-5.675 7.808-7.381 12.16s-2.731 9.003-2.944 13.909c-0.043 0.64-0.043 1.237-0.043 1.835v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z'
        },
        {
            name: 'search',
            path: 'M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z'
        },
        {
            name: 'cart',
            path: 'M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 4.992-4.736 7.765-2.773 5.845-4.096 12.075-4.053 18.176v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z'
        },
        {
            name: 'sliders',
            path: 'M213.333 426.667v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM554.667 896v-384c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v384c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM896 512v-384c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v384c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM42.667 640h85.333v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM384 384h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM725.333 725.333h85.333v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z'
        },
        {
            name: 'square',
            path: 'M213.333 85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM213.333 170.667h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z'
        },
        {
            name: 'trash',
            path: 'M768 298.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-426.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-554.667zM725.333 213.333v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h42.667v554.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h426.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-554.667h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM384 213.333v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667zM384 469.333v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 469.333v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z'
        },
        {
            name: 'twitter',
            path: 'M888.875 224.512c-7.936 10.325-16.683 20.267-26.283 29.696-9.941 9.899-14.805 24.192-11.861 38.741 1.579 7.765 2.56 17.237 2.603 27.051 0 224.256-103.637 382.763-247.893 464.981-112.939 64.384-253.355 83.413-393.472 47.787 53.12-15.403 104.96-39.296 153.301-72.107 6.272-4.224 11.648-10.368 15.019-17.963 9.557-21.547-0.128-46.763-21.675-56.32-118.357-52.608-176.213-125.056-203.477-195.968-17.792-46.251-23.296-93.781-22.187-137.685 0.896-34.603 5.888-66.56 11.861-93.099 16.811 14.635 34.261 30.123 52.693 44.288 87.509 67.285 197.291 105.771 315.52 102.699 23.168-0.64 41.643-19.499 41.643-42.667v-43.136c-0.085-7.637 0.384-15.232 1.451-22.741 4.821-34.389 21.504-66.944 49.579-91.349 30.933-26.923 69.803-38.741 107.776-36.096s74.795 19.755 101.717 50.688c10.752 12.203 27.691 17.749 44.075 12.971 9.856-2.859 19.755-6.101 29.653-9.728zM956.757 93.141c-31.573 22.272-64.981 39.509-97.579 51.413-39.723-35.669-89.216-55.552-139.776-59.093-59.648-4.139-121.003 14.464-169.685 56.832-44.203 38.443-70.485 89.941-78.080 143.872-1.579 11.307-2.347 22.699-2.304 34.133-82.005-6.059-157.568-36.267-219.733-84.053-33.067-25.429-62.379-55.851-86.784-90.283-13.653-19.2-40.277-23.765-59.477-10.112-6.571 4.651-11.392 10.795-14.293 17.451 0 0-5.632 12.757-12.16 32.427-4.779 14.379-10.283 33.067-15.232 55.040-6.955 30.805-12.885 68.352-13.909 109.696-1.323 52.352 5.12 111.445 27.819 170.496 29.141 75.733 83.883 148.395 176.939 205.781-66.944 30.976-138.453 44.331-207.915 41.259-23.552-1.024-43.477 17.195-44.501 40.747-0.725 16.597 8.107 31.403 21.888 39.168 209.28 116.267 444.843 114.261 625.749 11.136 172.373-98.176 290.944-285.867 290.944-539.051-0.043-7.125-0.341-14.080-0.981-20.864 42.923-47.573 71.509-103.637 85.163-161.323 5.419-22.912-8.789-45.909-31.701-51.328-12.373-2.944-24.747-0.128-34.432 6.656z'
        },
        {
            name: 'upload',
            path: 'M853.333 640v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 230.997v409.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-409.003l140.501 140.501c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-213.333-213.333c-3.925-3.925-8.619-7.083-13.824-9.259-10.453-4.309-22.229-4.309-32.683 0-5.035 2.091-9.728 5.163-13.824 9.259l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z'
        },
        {
            name: 'cross',
            path: 'M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z'
        },
        {
            name: 'zoom-in',
            path: 'M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331zM341.333 512h85.333v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z'
        }
    ];

    function findIcon(icon: string) {
        return data.find((i) => i.name === icon);
    }

    function Icon({ name, className }: propTypes) {
        const iconData = findIcon(name);

        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1024 1024"
                className={`icon icon--${name} ${className}`}
                data-testid={`icon-${name}`}
            >
                <path className="icon__path" d={iconData?.path} />
            </svg>
        );
    }

    Icon.defaultProps = {
        className: ''
    };

    return Icon;
})();

// #region types

export type iconNameType =
    | 'care-information'
    | 'dimensions'
    | 'materials'
    | 'logo'
    | 'arrow-left'
    | 'arrow-right'
    | 'check'
    | 'check-square'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'clipboard'
    | 'github'
    | 'heart'
    | 'instagram'
    | 'linkedin'
    | 'menu'
    | 'minus'
    | 'play'
    | 'plus'
    | 'refresh'
    | 'search'
    | 'cart'
    | 'sliders'
    | 'square'
    | 'trash'
    | 'twitter'
    | 'upload'
    | 'cross'
    | 'zoom-in';

type propTypes = {
    name: iconNameType;
    className?: string;
};

// #endregion

const Icon = React.memo(IconComponent, (p, n) => p.name === n.name);

export { Icon };

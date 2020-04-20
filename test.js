/*
var provinceAge = [
{'PRUID' : '10', 'field' : '100 and above', 'value' : 0.02}, {'PRUID' : '11', 'field' : '100 and above', 'value' : 0.02}, {'PRUID' : '12', 'field' : '100 and above', 'value' : 0.03}, {'PRUID' : '13', 'field' : '100 and above', 'value' : 0.03}, {'PRUID' : '24', 'field' : '100 and above', 'value' : 0.02}, {'PRUID' : '35', 'field' : '100 and above', 'value' : 0.02}, {'PRUID' : '46', 'field' : '100 and above', 'value' : 0.03}, {'PRUID' : '47', 'field' : '100 and above', 'value' : 0.03}, {'PRUID' : '48', 'field' : '100 and above', 'value' : 0.02}, {'PRUID' : '59', 'field' : '100 and above', 'value' : 0.03}, {'PRUID' : '60', 'field' : '100 and above', 'value' : 0},  {'PRUID' : '61', 'field' : '100 and above', 'value' : 0.01}, {'PRUID' : '62', 'field' : '100 and above', 'value' : 0.01},
{'PRUID' : '10', 'field' : '95 to 99', 'value' : 0.12},  {'PRUID' : '11', 'field' : '95 to 99', 'value' : 0.17},  {'PRUID' : '12', 'field' : '95 to 99', 'value' : 0.2}, {'PRUID' : '13', 'field' : '95 to 99', 'value' : 0.19},  {'PRUID' : '24', 'field' : '95 to 99', 'value' : 0.16},  {'PRUID' : '35', 'field' : '95 to 99', 'value' : 0.16},  {'PRUID' : '46', 'field' : '95 to 99', 'value' : 0.2}, {'PRUID' : '47', 'field' : '95 to 99', 'value' : 0.21},  {'PRUID' : '48', 'field' : '95 to 99', 'value' : 0.12},  {'PRUID' : '59', 'field' : '95 to 99', 'value' : 0.18},  {'PRUID' : '60', 'field' : '95 to 99', 'value' : 0.06},  {'PRUID' : '61', 'field' : '95 to 99', 'value' : 0.05},  {'PRUID' : '62', 'field' : '95 to 99', 'value' : 0.01},
{'PRUID' : '10', 'field' : '90 to 94', 'value' : 0.48},  {'PRUID' : '11', 'field' : '90 to 94', 'value' : 0.63},  {'PRUID' : '12', 'field' : '90 to 94', 'value' : 0.68},  {'PRUID' : '13', 'field' : '90 to 94', 'value' : 0.71},  {'PRUID' : '24', 'field' : '90 to 94', 'value' : 0.65},  {'PRUID' : '35', 'field' : '90 to 94', 'value' : 0.66},  {'PRUID' : '46', 'field' : '90 to 94', 'value' : 0.7}, {'PRUID' : '47', 'field' : '90 to 94', 'value' : 0.73},  {'PRUID' : '48', 'field' : '90 to 94', 'value' : 0.44},  {'PRUID' : '59', 'field' : '90 to 94', 'value' : 0.68},  {'PRUID' : '60', 'field' : '90 to 94', 'value' : 0.24},  {'PRUID' : '61', 'field' : '90 to 94', 'value' : 0.13},  {'PRUID' : '62', 'field' : '90 to 94', 'value' : 0.03},
{'PRUID' : '10', 'field' : '85 to 89', 'value' : 1.19},  {'PRUID' : '11', 'field' : '85 to 89', 'value' : 1.33},  {'PRUID' : '12', 'field' : '85 to 89', 'value' : 1.43},  {'PRUID' : '13', 'field' : '85 to 89', 'value' : 1.43},  {'PRUID' : '24', 'field' : '85 to 89', 'value' : 1.48},  {'PRUID' : '35', 'field' : '85 to 89', 'value' : 1.4}, {'PRUID' : '46', 'field' : '85 to 89', 'value' : 1.36},  {'PRUID' : '47', 'field' : '85 to 89', 'value' : 1.48},  {'PRUID' : '48', 'field' : '85 to 89', 'value' : 0.98},  {'PRUID' : '59', 'field' : '85 to 89', 'value' : 1.45},  {'PRUID' : '60', 'field' : '85 to 89', 'value' : 0.54},  {'PRUID' : '61', 'field' : '85 to 89', 'value' : 0.36},  {'PRUID' : '62', 'field' : '85 to 89', 'value' : 0.11},
{'PRUID' : '10', 'field' : '80 to 84', 'value' : 2.13},  {'PRUID' : '11', 'field' : '80 to 84', 'value' : 2.36},  {'PRUID' : '12', 'field' : '80 to 84', 'value' : 2.37},  {'PRUID' : '13', 'field' : '80 to 84', 'value' : 2.36},  {'PRUID' : '24', 'field' : '80 to 84', 'value' : 2.3}, {'PRUID' : '35', 'field' : '80 to 84', 'value' : 2.17},  {'PRUID' : '46', 'field' : '80 to 84', 'value' : 1.98},  {'PRUID' : '47', 'field' : '80 to 84', 'value' : 2.1}, {'PRUID' : '48', 'field' : '80 to 84', 'value' : 1.53},  {'PRUID' : '59', 'field' : '80 to 84', 'value' : 2.26},  {'PRUID' : '60', 'field' : '80 to 84', 'value' : 1.04},  {'PRUID' : '61', 'field' : '80 to 84', 'value' : 0.72},  {'PRUID' : '62', 'field' : '80 to 84', 'value' : 0.28},
{'PRUID' : '10', 'field' : '75 to 79', 'value' : 3.26},  {'PRUID' : '11', 'field' : '75 to 79', 'value' : 3.29},  {'PRUID' : '12', 'field' : '75 to 79', 'value' : 3.42},  {'PRUID' : '13', 'field' : '75 to 79', 'value' : 3.39},  {'PRUID' : '24', 'field' : '75 to 79', 'value' : 3.15},  {'PRUID' : '35', 'field' : '75 to 79', 'value' : 2.92},  {'PRUID' : '46', 'field' : '75 to 79', 'value' : 2.62},  {'PRUID' : '47', 'field' : '75 to 79', 'value' : 2.68},  {'PRUID' : '48', 'field' : '75 to 79', 'value' : 2.06},  {'PRUID' : '59', 'field' : '75 to 79', 'value' : 3.12},  {'PRUID' : '60', 'field' : '75 to 79', 'value' : 1.8}, {'PRUID' : '61', 'field' : '75 to 79', 'value' : 1.11},  {'PRUID' : '62', 'field' : '75 to 79', 'value' : 0.58},
{'PRUID' : '10', 'field' : '70 to 74', 'value' : 5.03},  {'PRUID' : '11', 'field' : '70 to 74', 'value' : 4.64},  {'PRUID' : '12', 'field' : '70 to 74', 'value' : 4.87},  {'PRUID' : '13', 'field' : '70 to 74', 'value' : 4.83},  {'PRUID' : '24', 'field' : '70 to 74', 'value' : 4.58},  {'PRUID' : '35', 'field' : '70 to 74', 'value' : 3.93},  {'PRUID' : '46', 'field' : '70 to 74', 'value' : 3.6}, {'PRUID' : '47', 'field' : '70 to 74', 'value' : 3.44},  {'PRUID' : '48', 'field' : '70 to 74', 'value' : 2.88},  {'PRUID' : '59', 'field' : '70 to 74', 'value' : 4.34},  {'PRUID' : '60', 'field' : '70 to 74', 'value' : 3.04},  {'PRUID' : '61', 'field' : '70 to 74', 'value' : 1.96},  {'PRUID' : '62', 'field' : '70 to 74', 'value' : 0.96},
{'PRUID' : '10', 'field' : '65 to 69', 'value' : 7.21},  {'PRUID' : '11', 'field' : '65 to 69', 'value' : 6.96},  {'PRUID' : '12', 'field' : '65 to 69', 'value' : 6.9}, {'PRUID' : '13', 'field' : '65 to 69', 'value' : 6.98},  {'PRUID' : '24', 'field' : '65 to 69', 'value' : 5.98},  {'PRUID' : '35', 'field' : '65 to 69', 'value' : 5.49},  {'PRUID' : '46', 'field' : '65 to 69', 'value' : 5.08},  {'PRUID' : '47', 'field' : '65 to 69', 'value' : 4.85},  {'PRUID' : '48', 'field' : '65 to 69', 'value' : 4.27},  {'PRUID' : '59', 'field' : '65 to 69', 'value' : 6.19},  {'PRUID' : '60', 'field' : '65 to 69', 'value' : 5.15},  {'PRUID' : '61', 'field' : '65 to 69', 'value' : 3.37},  {'PRUID' : '62', 'field' : '65 to 69', 'value' : 1.82},
{'PRUID' : '10', 'field' : '60 to 64', 'value' : 8.09},  {'PRUID' : '11', 'field' : '60 to 64', 'value' : 7.48},  {'PRUID' : '12', 'field' : '60 to 64', 'value' : 7.57},  {'PRUID' : '13', 'field' : '60 to 64', 'value' : 7.77},  {'PRUID' : '24', 'field' : '60 to 64', 'value' : 6.89},  {'PRUID' : '35', 'field' : '60 to 64', 'value' : 6.29},  {'PRUID' : '46', 'field' : '60 to 64', 'value' : 6.03},  {'PRUID' : '47', 'field' : '60 to 64', 'value' : 6.18},  {'PRUID' : '48', 'field' : '60 to 64', 'value' : 5.56},  {'PRUID' : '59', 'field' : '60 to 64', 'value' : 6.97},  {'PRUID' : '60', 'field' : '60 to 64', 'value' : 7.05},  {'PRUID' : '61', 'field' : '60 to 64', 'value' : 5.04},  {'PRUID' : '62', 'field' : '60 to 64', 'value' : 2.71},
{'PRUID' : '10', 'field' : '55 to 59', 'value' : 8.29},  {'PRUID' : '11', 'field' : '55 to 59', 'value' : 7.93},  {'PRUID' : '12', 'field' : '55 to 59', 'value' : 8.28},  {'PRUID' : '13', 'field' : '55 to 59', 'value' : 8.26},  {'PRUID' : '24', 'field' : '55 to 59', 'value' : 7.8}, {'PRUID' : '35', 'field' : '55 to 59', 'value' : 7.36},  {'PRUID' : '46', 'field' : '55 to 59', 'value' : 6.87},  {'PRUID' : '47', 'field' : '55 to 59', 'value' : 6.94},  {'PRUID' : '48', 'field' : '55 to 59', 'value' : 6.77},  {'PRUID' : '59', 'field' : '55 to 59', 'value' : 7.64},  {'PRUID' : '60', 'field' : '55 to 59', 'value' : 8.34},  {'PRUID' : '61', 'field' : '55 to 59', 'value' : 6.77},  {'PRUID' : '62', 'field' : '55 to 59', 'value' : 3.91},
{'PRUID' : '10', 'field' : '50 to 54', 'value' : 8.2}, {'PRUID' : '11', 'field' : '50 to 54', 'value' : 7.88},  {'PRUID' : '12', 'field' : '50 to 54', 'value' : 8.19},  {'PRUID' : '13', 'field' : '50 to 54', 'value' : 8.17},  {'PRUID' : '24', 'field' : '50 to 54', 'value' : 7.59},  {'PRUID' : '35', 'field' : '50 to 54', 'value' : 7.85},  {'PRUID' : '46', 'field' : '50 to 54', 'value' : 7.03},  {'PRUID' : '47', 'field' : '50 to 54', 'value' : 6.85},  {'PRUID' : '48', 'field' : '50 to 54', 'value' : 6.99},  {'PRUID' : '59', 'field' : '50 to 54', 'value' : 7.62},  {'PRUID' : '60', 'field' : '50 to 54', 'value' : 8.04},  {'PRUID' : '61', 'field' : '50 to 54', 'value' : 7.65},  {'PRUID' : '62', 'field' : '50 to 54', 'value' : 5.13},
{'PRUID' : '10', 'field' : '45 to 49', 'value' : 7.44},  {'PRUID' : '11', 'field' : '45 to 49', 'value' : 6.69},  {'PRUID' : '12', 'field' : '45 to 49', 'value' : 6.7}, {'PRUID' : '13', 'field' : '45 to 49', 'value' : 6.87},  {'PRUID' : '24', 'field' : '45 to 49', 'value' : 6.36},  {'PRUID' : '35', 'field' : '45 to 49', 'value' : 6.97},  {'PRUID' : '46', 'field' : '45 to 49', 'value' : 6.21},  {'PRUID' : '47', 'field' : '45 to 49', 'value' : 5.79},  {'PRUID' : '48', 'field' : '45 to 49', 'value' : 6.61},  {'PRUID' : '59', 'field' : '45 to 49', 'value' : 6.94},  {'PRUID' : '60', 'field' : '45 to 49', 'value' : 6.87},  {'PRUID' : '61', 'field' : '45 to 49', 'value' : 6.9}, {'PRUID' : '62', 'field' : '45 to 49', 'value' : 5.74},
{'PRUID' : '10', 'field' : '40 to 44', 'value' : 6.64},  {'PRUID' : '11', 'field' : '40 to 44', 'value' : 6.17},  {'PRUID' : '12', 'field' : '40 to 44', 'value' : 6.18},  {'PRUID' : '13', 'field' : '40 to 44', 'value' : 6.48},  {'PRUID' : '24', 'field' : '40 to 44', 'value' : 6.2}, {'PRUID' : '35', 'field' : '40 to 44', 'value' : 6.48},  {'PRUID' : '46', 'field' : '40 to 44', 'value' : 6.21},  {'PRUID' : '47', 'field' : '40 to 44', 'value' : 5.91},  {'PRUID' : '48', 'field' : '40 to 44', 'value' : 6.91},  {'PRUID' : '59', 'field' : '40 to 44', 'value' : 6.35},  {'PRUID' : '60', 'field' : '40 to 44', 'value' : 7.09},  {'PRUID' : '61', 'field' : '40 to 44', 'value' : 6.76},  {'PRUID' : '62', 'field' : '40 to 44', 'value' : 5.65},
{'PRUID' : '10', 'field' : '35 to 39', 'value' : 5.92},  {'PRUID' : '11', 'field' : '35 to 39', 'value' : 5.72},  {'PRUID' : '12', 'field' : '35 to 39', 'value' : 5.63},  {'PRUID' : '13', 'field' : '35 to 39', 'value' : 5.95},  {'PRUID' : '24', 'field' : '35 to 39', 'value' : 6.74},  {'PRUID' : '35', 'field' : '35 to 39', 'value' : 6.26},  {'PRUID' : '46', 'field' : '35 to 39', 'value' : 6.34},  {'PRUID' : '47', 'field' : '35 to 39', 'value' : 6.52},  {'PRUID' : '48', 'field' : '35 to 39', 'value' : 7.51},  {'PRUID' : '59', 'field' : '35 to 39', 'value' : 6.32},  {'PRUID' : '60', 'field' : '35 to 39', 'value' : 7.2}, {'PRUID' : '61', 'field' : '35 to 39', 'value' : 7.7}, {'PRUID' : '62', 'field' : '35 to 39', 'value' : 6.64},
{'PRUID' : '10', 'field' : '30 to 34', 'value' : 5.66},  {'PRUID' : '11', 'field' : '30 to 34', 'value' : 5.43},  {'PRUID' : '12', 'field' : '30 to 34', 'value' : 5.6}, {'PRUID' : '13', 'field' : '30 to 34', 'value' : 5.56},  {'PRUID' : '24', 'field' : '30 to 34', 'value' : 6.31},  {'PRUID' : '35', 'field' : '30 to 34', 'value' : 6.43},  {'PRUID' : '46', 'field' : '30 to 34', 'value' : 6.66},  {'PRUID' : '47', 'field' : '30 to 34', 'value' : 7.06},  {'PRUID' : '48', 'field' : '30 to 34', 'value' : 8.19},  {'PRUID' : '59', 'field' : '30 to 34', 'value' : 6.75},  {'PRUID' : '60', 'field' : '30 to 34', 'value' : 8.05},  {'PRUID' : '61', 'field' : '30 to 34', 'value' : 8.11},  {'PRUID' : '62', 'field' : '30 to 34', 'value' : 7.83},
{'PRUID' : '10', 'field' : '25 to 29', 'value' : 5.44},  {'PRUID' : '11', 'field' : '25 to 29', 'value' : 5.35},  {'PRUID' : '12', 'field' : '25 to 29', 'value' : 5.82},  {'PRUID' : '13', 'field' : '25 to 29', 'value' : 5.25},  {'PRUID' : '24', 'field' : '25 to 29', 'value' : 6.07},  {'PRUID' : '35', 'field' : '25 to 29', 'value' : 6.5}, {'PRUID' : '46', 'field' : '25 to 29', 'value' : 6.78},  {'PRUID' : '47', 'field' : '25 to 29', 'value' : 7.06},  {'PRUID' : '48', 'field' : '25 to 29', 'value' : 7.65},  {'PRUID' : '59', 'field' : '25 to 29', 'value' : 6.52},  {'PRUID' : '60', 'field' : '25 to 29', 'value' : 7.12},  {'PRUID' : '61', 'field' : '25 to 29', 'value' : 8.3}, {'PRUID' : '62', 'field' : '25 to 29', 'value' : 8.86},
{'PRUID' : '10', 'field' : '20 to 24', 'value' : 5.33},  {'PRUID' : '11', 'field' : '20 to 24', 'value' : 6.03},  {'PRUID' : '12', 'field' : '20 to 24', 'value' : 6.08},  {'PRUID' : '13', 'field' : '20 to 24', 'value' : 5.55},  {'PRUID' : '24', 'field' : '20 to 24', 'value' : 6.13},  {'PRUID' : '35', 'field' : '20 to 24', 'value' : 6.65},  {'PRUID' : '46', 'field' : '20 to 24', 'value' : 6.79},  {'PRUID' : '47', 'field' : '20 to 24', 'value' : 6.38},  {'PRUID' : '48', 'field' : '20 to 24', 'value' : 6.44},  {'PRUID' : '59', 'field' : '20 to 24', 'value' : 6.19},  {'PRUID' : '60', 'field' : '20 to 24', 'value' : 5.48},  {'PRUID' : '61', 'field' : '20 to 24', 'value' : 7.32},  {'PRUID' : '62', 'field' : '20 to 24', 'value' : 8.47},
{'PRUID' : '10', 'field' : '15 to 19', 'value' : 5.24},  {'PRUID' : '11', 'field' : '15 to 19', 'value' : 6.05},  {'PRUID' : '12', 'field' : '15 to 19', 'value' : 5.55},  {'PRUID' : '13', 'field' : '15 to 19', 'value' : 5.43},  {'PRUID' : '24', 'field' : '15 to 19', 'value' : 5.26},  {'PRUID' : '35', 'field' : '15 to 19', 'value' : 6.04},  {'PRUID' : '46', 'field' : '15 to 19', 'value' : 6.45},  {'PRUID' : '47', 'field' : '15 to 19', 'value' : 6.16},  {'PRUID' : '48', 'field' : '15 to 19', 'value' : 5.9}, {'PRUID' : '59', 'field' : '15 to 19', 'value' : 5.57},  {'PRUID' : '60', 'field' : '15 to 19', 'value' : 5.39},  {'PRUID' : '61', 'field' : '15 to 19', 'value' : 6.49},  {'PRUID' : '62', 'field' : '15 to 19', 'value' : 8.72},
{'PRUID' : '10', 'field' : '10 to 14', 'value' : 5.01},  {'PRUID' : '11', 'field' : '10 to 14', 'value' : 5.44},  {'PRUID' : '12', 'field' : '10 to 14', 'value' : 4.96},  {'PRUID' : '13', 'field' : '10 to 14', 'value' : 5.07},  {'PRUID' : '24', 'field' : '10 to 14', 'value' : 5.13},  {'PRUID' : '35', 'field' : '10 to 14', 'value' : 5.61},  {'PRUID' : '46', 'field' : '10 to 14', 'value' : 6.21},  {'PRUID' : '47', 'field' : '10 to 14', 'value' : 6.2}, {'PRUID' : '48', 'field' : '10 to 14', 'value' : 5.95},  {'PRUID' : '59', 'field' : '10 to 14', 'value' : 5.03},  {'PRUID' : '60', 'field' : '10 to 14', 'value' : 5.63},  {'PRUID' : '61', 'field' : '10 to 14', 'value' : 6.54},  {'PRUID' : '62', 'field' : '10 to 14', 'value' : 9.5},
{'PRUID' : '10', 'field' : '5 to 9', 'value' : 5.01},  {'PRUID' : '11', 'field' : '5 to 9', 'value' : 5.53},  {'PRUID' : '12', 'field' : '5 to 9', 'value' : 4.98},  {'PRUID' : '13', 'field' : '5 to 9', 'value' : 5.12},  {'PRUID' : '24', 'field' : '5 to 9', 'value' : 5.75},  {'PRUID' : '35', 'field' : '5 to 9', 'value' : 5.62},  {'PRUID' : '46', 'field' : '5 to 9', 'value' : 6.52},  {'PRUID' : '47', 'field' : '5 to 9', 'value' : 6.78},  {'PRUID' : '48', 'field' : '5 to 9', 'value' : 6.66},  {'PRUID' : '59', 'field' : '5 to 9', 'value' : 5.1}, {'PRUID' : '60', 'field' : '5 to 9', 'value' : 5.91},  {'PRUID' : '61', 'field' : '5 to 9', 'value' : 7.22},  {'PRUID' : '62', 'field' : '5 to 9', 'value' : 11.45},
{'PRUID' : '10', 'field' : '0 to 4', 'value' : 4.3}, {'PRUID' : '11', 'field' : '0 to 4', 'value' : 4.9}, {'PRUID' : '12', 'field' : '0 to 4', 'value' : 4.55},  {'PRUID' : '13', 'field' : '0 to 4', 'value' : 4.6}, {'PRUID' : '24', 'field' : '0 to 4', 'value' : 5.45},  {'PRUID' : '35', 'field' : '0 to 4', 'value' : 5.19},  {'PRUID' : '46', 'field' : '0 to 4', 'value' : 6.34},  {'PRUID' : '47', 'field' : '0 to 4', 'value' : 6.66},  {'PRUID' : '48', 'field' : '0 to 4', 'value' : 6.55},  {'PRUID' : '59', 'field' : '0 to 4', 'value' : 4.75},  {'PRUID' : '60', 'field' : '0 to 4', 'value' : 5.96},  {'PRUID' : '61', 'field' : '0 to 4', 'value' : 7.48},  {'PRUID' : '62', 'field' : '0 to 4', 'value' : 11.57}

];
var maxValue=10;
var expression = ['match',['get', 'PRUID']];
var inputField = [];
provinceAge.forEach(function(row) {
  if (row['field']== '45 to 49')
  {
    var green = (row['value'] / maxValue) * 255;
    var color = 'rgba(' + 0 + ', ' + green + ', ' + 0 + ', 1)';
    expression.push(row['PRUID'], color);
    inputField.push(row['PRUID'],row['field'], row['value'])
  }

});

var inputFields =[];
provinceAge.forEach(function(row) {
  if (row['PRUID']== 13)
  {
    var dict = {field: row['field'], value: row['value']}
    inputFields.push(dict);
  }
});
console.log(inputFields);

// Last valueis the default, used where there is no data
expression.push('rgba(0,0,0,0)');
console.log(expression)
console.log(inputField)

// ==============Create New Graph of the newly selected area ===================
provinceAge.forEach(function(row) {
  if (row['PRUID']== 61)
  {

    console.log(row['PRUID'],row['field'], row['value'])
  }

});




 var expression = ['match',['get', 'PRUID']];
    for (var r = 0; r<provinceAge.length; r++)
    {
      var province = provinceAge[r];
      console.log(province);
 /*   var provinceKey = Object.keys(province)[2]; //get the 'value' field
      console.log('Province Key is '+ provinceKey)
      var provincevalue= Object.values(province)[2];//show the value
      var provinceNum = Object.values(province)[0];
      provinceFieldvalue= Object.values(province)[1];//Get the 'field' field
      if (provinceFieldvalue== 'B_20_to_24')
      {
        console.log('The B_20_to_24 valuefor ' + provinceNum + ' is ' + provincevalue);
        var red = (provinceValue/maxValue)*255;
        var colour = 'rgba('+red+ ',' + '0,0,1)';
        expression.push(provinceNum, colour);
      }
      else
      {
        continue;
      }
    }
    console.log(expression);

var inputField = []
for (var r = 0; r<provinceAge.length; r++)
{
  var province = provinceAge[r];
  var provinceNum = Object.values(province)[0];
  if (provinceNum == 62)
  {
    console.log(province)
    inputField.push(province)
  }
  else
  {
    continue;
  }
}



var maxvalue= 13;
var data = [
{ 'STATE_ID': '01', 'unemployment': 13.17 },
{ 'STATE_ID': '02', 'unemployment': 9.5 },
{ 'STATE_ID': '04', 'unemployment': 12.15 },
{ 'STATE_ID': '05', 'unemployment': 8.99 },
{ 'STATE_ID': '06', 'unemployment': 11.83 },
{ 'STATE_ID': '08', 'unemployment': 7.52 },
{ 'STATE_ID': '09', 'unemployment': 6.44 },
{ 'STATE_ID': '10', 'unemployment': 5.17 },
{ 'STATE_ID': '12', 'unemployment': 9.67 },
{ 'STATE_ID': '13', 'unemployment': 10.64 },
{ 'STATE_ID': '15', 'unemployment': 12.38 },
{ 'STATE_ID': '16', 'unemployment': 10.13 },
{ 'STATE_ID': '17', 'unemployment': 9.58 },
{ 'STATE_ID': '18', 'unemployment': 10.63 },
{ 'STATE_ID': '19', 'unemployment': 8.09 },
{ 'STATE_ID': '20', 'unemployment': 5.93 },
{ 'STATE_ID': '21', 'unemployment': 9.86 },
{ 'STATE_ID': '22', 'unemployment': 9.81 },
{ 'STATE_ID': '23', 'unemployment': 7.82 },
{ 'STATE_ID': '24', 'unemployment': 8.35 },
{ 'STATE_ID': '25', 'unemployment': 9.1 },
{ 'STATE_ID': '26', 'unemployment': 10.69 },
{ 'STATE_ID': '27', 'unemployment': 11.53 },
{ 'STATE_ID': '28', 'unemployment': 9.29 },
{ 'STATE_ID': '29', 'unemployment': 9.94 },
{ 'STATE_ID': '30', 'unemployment': 9.29 },
{ 'STATE_ID': '31', 'unemployment': 5.45 },
{ 'STATE_ID': '32', 'unemployment': 4.21 },
{ 'STATE_ID': '33', 'unemployment': 4.27 },
{ 'STATE_ID': '34', 'unemployment': 4.09 },
{ 'STATE_ID': '35', 'unemployment': 7.83 },
{ 'STATE_ID': '36', 'unemployment': 8.01 },
{ 'STATE_ID': '37', 'unemployment': 9.34 },
{ 'STATE_ID': '38', 'unemployment': 11.23 },
{ 'STATE_ID': '39', 'unemployment': 7.08 },
{ 'STATE_ID': '40', 'unemployment': 11.22 },
{ 'STATE_ID': '41', 'unemployment': 6.2 },
{ 'STATE_ID': '42', 'unemployment': 9.11 },
{ 'STATE_ID': '44', 'unemployment': 10.42 },
{ 'STATE_ID': '45', 'unemployment': 8.89 },
{ 'STATE_ID': '46', 'unemployment': 11.03 },
{ 'STATE_ID': '47', 'unemployment': 7.35 },
{ 'STATE_ID': '48', 'unemployment': 8.92 },
{ 'STATE_ID': '49', 'unemployment': 7.65 },
{ 'STATE_ID': '50', 'unemployment': 8.01 },
{ 'STATE_ID': '51', 'unemployment': 7.62 },
{ 'STATE_ID': '53', 'unemployment': 7.77 },
{ 'STATE_ID': '54', 'unemployment': 8.49 },
{ 'STATE_ID': '55', 'unemployment': 9.42 },
{ 'STATE_ID': '56', 'unemployment': 7.59 }
];

data.forEach(function(row) {
var green = (row['unemployment'] / maxValue) * 255;
var color = 'rgba(' + 0 + ', ' + green + ', ' + 0 + ', 1)';
expression.push(row['STATE_ID'], color);

});
// Last valueis the default, used where there is no data
expression.push('rgba(0,0,0,0)');


 console.log(expression)



 inputFields = [
           { field :"100 and above", value: 10, colour : ""},
            { field :"95 to 99", value: 20, colour : ""},
            { field :"90 to 94", value: 30, colour : ""},
            { field :"85 to 89", value: 32, colour : ""},
            { field :"80 to 84", value: 234, colour : ""},
            { field :"75 to 79", value: 245, colour : ""},
            { field :"70 to 74", value: 345, colour : ""},
            { field :"65 to 69", value: 456, colour : ""},
            { field :"60 to 64", value: 345, colour : ""},
            { field :"55 to 59", value: 345, colour : ""},
            { field :"50 to 54", value: 36, colour : ""},
            { field :"45 to 49", value: 76, colour : ""},
            { field :"40 to 44", value: 27, colour : ""},
            { field :"35 to 39", value: 56, colour : ""},
            { field :"30 to 34", value: 5678, colour : ""},
            { field :"25 to 29", value: 357, colour : ""},
            { field :"20 to 24", value: 68, colour : ""},
            { field :"15 to 19", value: 278, colour : ""},
            { field :"10 to 14", value: 27, colour : ""},
            { field :"5 to 9", value: 368, colour : ""},
            { field :"0 to 4", value: 78, colour : ""}
        ]

https://github.com/dlm589/CensusAnalysis/blob/master/Age_BothSex_Province.json
*/
/*
var myInit = {
  method:"GET",
  headers: {"Content-Type": "application/json"},
  mode: "cors",
  cache: "default"
};

let myRequest = new Request("https://github.com/dlm589/CensusAnalysis/blob/master/Age_BothSex_Province.json",myInit);

fetch(myRequest)
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data.PRUID)
  })


*/
console.log("This js file is working!");
fetch("Age_BothSex_Province.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data)
  })

# Personal Account Number Regex Patterns

This document provides regex patterns to match personal account numbers such as bank account numbers and social security numbers.

## 1. Bank Account Numbers
- Pattern: `^[0-9]{8,17}$`
- Description: Matches bank account numbers that are typically numeric and range from 8 to 17 digits long. This is a generic pattern and may be adjusted based on specific bank formats.

## 2. Social Security Numbers (SSN)
- Pattern: `^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$`
- Description: Matches US Social Security Numbers in the format XXX-XX-XXXX with validation rules:
  - The first three digits cannot be 000, 666, or 900-999.
  - The second group cannot be 00.
  - The third group cannot be 0000.

### Usage
These patterns can be used in compliance and security applications to detect and validate personal account numbers in data streams or documents to ensure compliance with data protection regulations and prevent data leaks.
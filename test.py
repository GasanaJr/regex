"""" This module checks regex """
import re
PATTERN = r"\[Verse \d+\].+"
TEXT = "[Verse 11] Old Macdonald's had a farm, here here I am."
result = re.findall(PATTERN, TEXT)
print(result)

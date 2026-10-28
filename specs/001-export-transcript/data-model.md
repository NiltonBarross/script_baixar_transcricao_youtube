# Data model
Video: title string, current URL string. Filename replaces OS-invalid characters.
Segment: nonempty normalized text, optional displayed timestamp; preserve order and duplicates.
Export: UTF-8 BOM, title, URL, blank line, newline-separated segments.
State: unsupported/empty -> alert and stop; valid -> create, click, remove link, revoke URL.

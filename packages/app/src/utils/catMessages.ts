const catMessages = [
  `
⠀⠀⠀⠀⠀⠀⠀⣠⣶⣶⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⡿⠀⠀⠉⠛⠿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⠟⠉⠀⠈⢿⣿⣿⣇⠀⠀
⠀⠀⠀⠀⠀⣼⣿⣿⡇⠀⠀⠀⠀⠀⠈⠻⣿⡌⠙⠲⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠖⠋⢁⣿⡿⠋⠁⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⣳⠀⠀⠀⢨⣷⣶⣤⣤⣤⣤⣴⣶⣿⡟⠁⠀⠀⣾⠋⠀⠀⠀⠀⠀⠀⠀⢸⢳⣿⣿⠀⠀
⠀⠀⠀⠀⠀⡇⢿⣇⣿⠀⠀⠀⠀⠀⠀⠀⣸⠏⠀⠀⠀⣾⣿⣿⣿⡏⠈⣿⣿⣿⣿⡇⠀⠀⠀⢹⣄⠀⠀⠀⠀⠀⠀⠀⢸⢸⣿⢻⠀⠀
⠀⠀⠀⠀⠀⢸⠘⢿⣿⠀⠀⢀⣤⠴⠖⠋⠁⠀⠀⠀⠀⣿⣿⣿⣿⠀⠀⣿⡿⣽⣿⡇⠀⠀⠀⠀⠈⠙⠲⠤⣄⣀⠀⠀⢸⣾⡟⡾⠀⠀
⠀⠀⠀⠀⠀⠸⣇⠈⠿⡙⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡏⣿⡀⠀⣿⠇⢸⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⣹⠟⣰⠃⠀⠀
⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠘⣇⣠⣟⠀⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠊⠉⣷⡀⢙⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀
⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠉⣁⣀⣿⣷⣄⣀⡱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀
⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠈⠙⢿⣿⣿⡋⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠀
⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⢀⣠⠴⠶⣒⣒⣒⡶⣤⣀⠀⠀⠈⢧⡀⠀⠸⠏⠙⣷⠜⠁⠀⢀⣠⡴⠶⠶⠶⠶⣦⣀⠀⠀⠀⠀⠀⠀⢧⠀
⠀⠀⠀⡾⠁⠀⠀⠀⠀⠀⣏⡠⠚⣁⠀⣤⣿⣿⣶⣌⡳⣄⠀⠀⠈⠙⠒⠋⠉⠀⠀⢀⡴⣫⠖⣞⡇⠀⠀⠉⠉⡪⣳⠄⠀⠀⠀⠀⠸⡇
⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠙⠿⠾⣟⣃⡈⡿⢿⡟⠑⢳⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣞⠜⢹⣈⢒⠆⠀⣀⣤⡾⠗⠉⠀⠀⠀⠀⠀⢠⡇
⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠓⠒⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠸⠿⠒⠛⠛⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇
⢀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇
⡜⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠶⠶⣶⠶⠦⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⢸
⠷⠚⢩⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣷⣿⣾⡿⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣏⠓⠾
⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣦⠀
⢰⠇⠀⠀⣀⣴⠆⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠒⠉⠉⠉⠲⠲⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣦⣀⡀⠀⠈⣇
⡇⣠⡴⠋⢁⣞⣠⡤⠒⠛⠉⠉⠙⠒⠲⠤⠤⡤⣴⠖⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣏⢻⠒⠒⠒⠒⠒⠛⠛⠒⠦⣄⣹⡄⠙⠲⣄⠸
⡼⠁⠀⠀⠘⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠀⠀⠈⢳
  `,
  `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠻⠿⠿⣿⣿⣿⣿⣿⢿⠿⠿⠟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣻⣉⡫⠒⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠔⣐⡫⡑⢶⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⡿⣟⣜⣶⣨⡰⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⣊⠵⣿⣲⢺⡽⣄⡔⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣻⡽⢶⣚⣵⢔⠬⠙⢶⣤⣄⡠⢀⣀⡀⡀⣀⡠⢄⠤⢦⠲⢦⣀⢀⣄⠀⡀⢀⠀⢀⣄⣤⡶⣛⡴⢞⣬⣿⡭⢟⣗⡶⣢⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣾⣟⡏⣭⣯⣭⣚⣐⢙⢻⣿⣷⡍⠀⣿⡱⢠⣟⢮⣺⡵⢎⡩⠃⡴⡟⢰⢌⢞⣫⡿⣋⢖⢭⣰⡩⡕⣫⠝⣾⣞⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣞⡕⠶⢴⣾⣷⣽⣯⡇⠹⠿⠌⠀⣵⣅⠺⢇⠺⣅⠒⣺⠅⢀⣿⠌⠀⠈⠢⠏⢼⣽⣿⣽⣽⣽⣷⢞⡿⣶⣽⣿⠃⠄⠘⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣾⣦⣼⣿⣿⡻⣉⢴⡂⠀⡄⢠⣩⡏⠰⣈⠖⣌⡷⠡⠐⢸⡇⠀⠀⠀⠀⠀⠽⠻⣛⡭⠼⢶⢭⣿⢾⣿⡿⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⣟⢿⣿⣿⡏⡧⢦⣄⣙⢬⡷⠚⡈⢺⣿⣤⠓⠬⣽⢸⡿⠠⢴⡀⡜⡀⠀⠀⠀⢂⠐⢩⢠⣾⢻⣿⣿⣿⢿⢯⣽⠄⠠⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣯⣿⣿⣿⣿⣿⣿⣟⣧⢷⡤⢂⢥⢣⡿⣽⣶⣸⢿⣏⣾⣥⣿⡿⢓⠠⢂⠀⠀⠄⡈⢝⣷⢷⠟⡽⣽⢿⣅⠈⣟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⠟⠙⣿⣿⣾⣿⣷⣿⣟⢧⡒⢯⢾⣿⡿⠙⣿⡵⣾⣿⠏⣼⡟⠀⠐⢠⠂⠀⠀⠀⠀⠐⠙⠚⣩⣔⣿⣿⣿⠃⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⡸⡿⣿⢿⣟⣿⢋⡚⢣⠀⠀⢻⣿⡀⠸⣿⠴⣿⣿⠇⣿⡏⠀⢀⣂⢀⠀⠀⠀⠀⠀⠀⠀⢪⣵⣾⣛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡑⢂⠣⣟⣺⡥⡋⠈⠭⣁⢤⣔⣻⠇⢠⡟⣃⠸⣿⢑⣸⡆⠀⣲⡗⡁⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡜⣧⠍⠶⣨⢭⣰⣶⣷⣾⣷⣾⣿⣷⣫⣬⡈⠒⣊⠡⣬⣧⠂⣠⣶⣷⣾⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣏⣾⣳⣷⡿⣿⣿⣿⣿⣿⣾⣿⡷⣿⣿⡀⡐⠀⠀⡸⠠⢠⣿⣿⣿⣯⣽⣿⣿⠷⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⢿⣛⣏⣿⣿⣿⣿⣿⣿⣿⣿⠑⡿⠉⠁⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⡿⠃⢈⢻⢥⡀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⢯⣿⣾⣿⣿⣿⠿⠿⣛⣿⣇⡒⣤⢇⠜⠂⠀⢒⢠⣒⠙⠿⢿⣿⡿⠟⠀⣰⢺⠴⠘⠓⠢⠀⠀⠀⠀⢀⠀⠰⠄⠰⠐⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣏⣭⣽⣿⣿⣿⡶⣭⢵⣾⣿⣿⣿⡿⡁⠀⠀⠛⢯⣽⣿⣆⡐⠀⠀⡉⢰⣿⢷⠃⠂⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠘⢁⠀⠀⠂⣀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣯⣿⣿⣯⡽⣿⣶⡯⠿⠉⠻⣿⣷⣵⢩⣓⣶⣯⠏⠀⢨⠅⣁⠻⣤⣜⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠐⢀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣿⢿⣹⣽⣩⠁⠀⠉⠀⠀⠉⠻⢿⣿⡿⠉⠁⠀⠀⠀⠉⠁⠉⠉⠀⠀⢶⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠀⠀⠀⠀⢀⠠⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡷⡯⣛⣤⣶⡦⣠⠐⡐⣼⣴⣫⣽⣿⣿⡵⡐⡢⠀⠀⠀⠀⠀⢤⣒⠶⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣭⣷⣿⣷⣷⣧⣞⣵⢾⣐⠮⣟⠻⣛⠻⠟⡿⢿⠇⠀⡀⢠⢀⡐⢋⢍⠀⠠⠢⠄⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣿⡿⣿⣿⣿⣿⣿⣾⣿⣯⣽⣢⣍⣠⠃⢂⣁⣢⣜⡞⣷⣆⣣⣰⣴⠲⣅⠀⠄⠤⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣾⣿⣿⠿⡿⠃⠙⡷⡤⠧⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢀⠀⡈⠰⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡿⣽⣿⣏⡶⣯⡿⢿⣿⣿⣿⣿⣿⣿⢿⢟⡛⠿⡏⢙⠻⣁⡐⢴⡞⠯⠘⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠌⠘⢠⠉⠄⠀
⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⣻⠿⣟⣷⡿⣛⡿⣜⢣⡿⣻⢽⠿⣫⠏⠜⡺⠔⠐⠙⠡⠳⠘⠋⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⠀⠈⠀⠀
⢰⠀⠀⠀⠈⠂⡄⠀⠀⡀⠀⠀⢸⣿⣽⣟⣯⡽⢿⡛⢶⣹⡾⣵⢧⠞⠔⠰⠀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢀⠠⠅⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢱⡀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⣽⣿⣿⣿⣿⣛⡲⢍⢶⢭⣿⡽⡵⢤⠀⠜⢁⠀⠈⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠠⡀⢀⢐⠏⠀⠈⠀⡀⠀⠀⠀⠀⠂⠀⠐⠀⠀⠀⠀
⢬⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣷⣯⠿⣟⣿⣿⣿⡶⢟⣵⣽⢞⠄⢀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣞⠿⣽⡽⠟⠞⠀⠀⡀⣤⡄⠆⠂⢀⠂⠄⠄⠀⠀⠀⠘⢀⠀
⢨⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⠻⣌⠀⣁⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠏⢘⠃⠂⢑⢠⣄⡢⠉⠁⠀⠈⠁⠆⡄⠈⢠⠀⠀⠀⠈⠀⠀
⢎⡻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡭⣿⣿⣿⣿⣿⣿⣿⣮⢧⣛⢌⡽⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⣿⣷⣼⣾⣟⠷⠬⢀⡀⠀⠀⠀⠀⠈⢌⠠⠁⠌⠘⢤⠀⠁⠀
⢞⡽⣟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⢟⠓⣻⣟⣿⣿⣿⣿⣿⣫⢎⣼⢂⡀⣷⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠟⡁⣍⠀⠀⠀⠀⠁⠀⠀⠀⠀⠄⠀⠀⠠⠀⠀⠈⡈⠨⠀
⢸⣣⢿⠀⠀⢀⡰⡂⠀⡀⠀⠀⠀⢙⣷⣫⣕⣟⣯⣿⣿⣿⣿⣯⢻⡛⣎⡥⣎⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣌⠢⡁⠃⠑⠀⠀⠀⠀⠀⠄⠀⠄⠀⠠⠠⡀⠀⠠⢌⠀⠄⠄
⢨⡳⣞⣯⠄⣫⠢⢎⢦⢨⠀⢁⠀⢠⡿⠟⠛⡻⡾⣿⣿⣿⣿⣎⢳⢽⢹⢸⢃⡞⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠃⠐⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠠⠀⡔⠜⢰⢣⢁⠌⡈⠜⡀
⣸⢳⣽⣻⣼⣾⣵⣾⣹⣶⣏⣜⡦⢩⣔⡲⢷⡴⡟⣯⣿⣿⣿⣽⣿⡞⡾⣞⣸⢬⣇⠃⠀⠀⠀⠀⠀⠀⣸⣇⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡣⠕⠈⠐⢁⠀⠌⠞⠘⣲⢀⠀
⢾⣻⣾⣿⣾⣿⣿⣿⣿⣿⣿⣿⣯⡭⠿⢷⣷⢿⡳⢏⣿⣿⣿⣿⣻⡛⣯⢺⣼⢸⢷⢸⣰⠇⠀⠀⠀⢐⣻⣧⢧⢚⡼⡀⠀⠀⠀⠀⠀⠀⠀⠐⠐⡀⢣⠀⢀⡐⠠⡀⠂⠁⠁
⣿⣿⣿⣿⢿⣿⡾⣿⢿⣯⣿⣿⣯⠏⡹⠩⠂⠈⢰⠾⠶⣿⣿⣿⢿⣱⣿⢾⢻⢻⣼⠀⣏⠀⠀⠀⣣⡉⣿⣿⡄⡊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠨⡂⢑⠊⠊⡌⠆⠀
⣽⣿⣿⣿⣿⣾⣿⣽⢷⣟⣿⣿⣿⢿⡈⠎⣖⣮⠯⠂⠀⣼⣿⣿⣝⣿⣿⢿⢾⣿⣿⣷⣿⡇⢇⡇⣷⣷⣿⣧⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠠⠐⠐⢐⢰⠁⠀
⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣚⣤⣠⢵⣾⣿⣿⠿⣾⢣⣿⣎⢷⣻⣌⢼⣫⠇⡸⣣⡼⣿⣿⣟⣮⠐⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢂⠚⠎⠈⠈⡂⡐⠀
⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣏⢧⡛⢬⣷⣿⣿⣿⣿⡾⣿⡟⣮⣷⣻⣷⢿⣿⡿⣿⡛⠆⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠈⠸⠀⣱⠄⠃⠂
⢿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣭⡘⣏⠜⣫⢿⢿⣞⡿⢳⢿⣟⣿⢿⣋⠯⣗⠗⠃⠈⠀⠀⡠⠀⠀⠠⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠣⠄⡙⠔⠀
⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣷⣿⢾⣸⣄⣋⡘⢚⢧⢞⣭⢄⣚⣾⡇⣗⠇⠀⠀⠀⠈⠂⠀⠀⠀⠈⠀⠀⠀⠀⠀⠠⠀⠠⠀⠀⠀⠀⠜⠈⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣟⣿⣻⣿⣾⣿⣾⣷⣾⡌⣰⢞⣺⣏⠅⢆⡉⡀⠡⡠⠀⠀⠁⠀⠀⠀⠄⠁⠀⠀⠀⠀⠀⠀⡀⠀⠠⠠⠀⢄⠈⠂⠀
⣼⢿⣿⠚⣿⣿⣽⢿⣿⢿⣿⣿⣿⣿⣷⣿⣟⣿⣿⣻⡾⣷⣻⣿⣿⣿⣿⣿⣿⣧⣿⣾⣿⣾⡇⣾⡿⡳⡍⠊⡰⡀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠁⠪⠀⢀⢠⠰⢀⠨⠀
⠈⠊⢞⠋⠌⠛⠈⡙⢎⠛⢿⡯⣿⢿⣿⣿⣿⣿⣷⠿⣙⣷⣻⣿⢏⣯⢿⣿⣿⣿⡛⠟⠹⠟⠁⠀⠁⠐⠘⠋⠀⠀⠀⠤⢀⢐⠀⠀⠀⠁⠀⠀⠀⠀⠀⠙⡠⢌⠁⠀⠀⠎⠀
⠀⠁⠀⠣⠀⠀⠀⠀⠀⡂⠀⠣⠇⢉⡋⠇⠇⠛⢿⣦⡽⠉⠁⠊⠁⠘⠉⠙⣿⡟⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⡀⠀⠀⠀⠡⠢⠈⡀
⠀⠀⢀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠐⠀⠁⠁⡀⠀⢀⠙⠿⠂⠘⠛⢂⠄⠂⠂⢝⢿⣆⠉⠢⠀⠀⠀⡀⠀⠀⢐⠀⠄⢀⠀⠀⠀⠀⠀⠂⠂⢠⠀⠀⠀⠀⢀⠂⠀⠀⡀⠘⠰⡀
⠀⠀⠀⠁⠀⠄⠄⠂⠀⠀⠀⠀⠀⠀⠀⠀⠤⠀⠠⠀⠰⠠⠀⠀⠀⠁⠀⢀⠀⠐⠙⠟⢷⢦⢀⠀⠀⠠⠐⢀⠨⠐⠘⠐⠁⠀⠀⠀⠘⠂⠁⠀⠀⠀⠀⠁⠀⢂⡀⢀⢋⠄⠂
⠀⠀⠀⠢⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠠⠀⠂⠊⠆⠂⠀⠀⠂⠀⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀  
  `,
  `
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣠⣤⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠘⣿⣿⣿⣿⠟⠁⠀⠀⠀⠹⣿⣿⣿⣿⣿⠟⠁⠀⠀⠹⣿⣿⡿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⢼⣿⠀⢿⣿⣿⣿⣿⠀⣾⣷⠀⠀⢿⣿⣷⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⣷⡀⠀⠀⠈⠋⢀⣿⣿⣿⣿⣿⡀⠙⠋⠀⢀⣾⣿⣿⠀⠀⠀⠀⠀
⢀⣀⣀⣀⣿⣿⣿⣿⣿⣶⣶⣶⣶⣿⣿⣿⣿⣾⣿⣷⣦⣤⣴⣿⣿⣿⣿⣤⠤⢤⣤⡄
⠈⠉⠉⢉⣙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣀⣀⣀⡀⠀
⠐⠚⠋⠉⢀⣬⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣥⣀⡀⠈⠀⠈⠛
⠀⠀⠴⠚⠉⠀⠀⠀⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠁⠀⠀⠀⠉⠛⠢⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀  
  `,
  `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⠟⠉⠉⠻⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⠿⠉⠀⠀⠀⠀⠀⠹⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⡿⠛⠉
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⡿⠟⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣶⣶⣦⣤⣤⣄⡀⠀⢀⣠⣾⣿⠿⠋⠀⠀⠀⠀⠀⣠
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⠶⠞⣿⠟⠋⠉⠉⠙⣻⠿⢿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⢀⡼⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠁⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠁⢠⡞⠁⠀⠀⠀⢀⡴⠋⠀⢀⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⡞⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣼⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⢠⠏⠀⠀⠀⠀⣰⠏⠀⠀⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡥⠤⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣇⠀⣠⡏⠀⠀⠀⠀⣼⠁⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣄⣄⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡶⠋⠀⠀⠀⠀⢸⣧⠀⠀⣴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⣾⡿⠿⣿⡿⠁⠀⠀⠀⠀⠀⠀⣠⣶⣶⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳
⠀⠀⠀⠀⠀⠀⢀⣾⠿⠛⢿⣿⣷⣄⡀⣿⠃⠀⠈⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⣤⣦⣼⣿⠀⠀⠀⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⢀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣾⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⣠⣾⡿⠋⠉⠉⠁⠀⠀⠀⠀⠉⢯⡙⠻⣿⣿⣷⣤⡀⠀⠀⠀⠀⢿⣿⣿⣿⣿⡿⠃⢀⡤⠖⠋⠉⠉⠉⠉⠉⠉⠒⠦⣄⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀
⣾⣿⠋⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠙⢦⣄⠉⠻⢿⣿⣷⣦⡀⠀⠈⠙⠛⠛⠋⠀⢰⠟⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⠀⣴⠟⣫⣿⣿⣄⠀⠀⠀⠀⡶⢌⡙⠶⣤⡈⠛⠿⣿⣷⣦⣀⠀⠀⠀⠀⡇⠀⢻⣄⠀⠀⣠⢷⠀⠀⠀⠀⠀⡶⠀⠘⡆⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⢸⣟⢸⣿⣿⣿⣿⠀⠀⠀⠀⡇⠀⠈⠛⠦⣝⡳⢤⣈⠛⠻⣿⣷⣦⣀⠀⠀⠀⠀⠈⠙⠋⠁⠀⠛⠦⠤⠤⠚⠁⠀⠀⢳⠀⠀⠀⠈⠛⠿⠿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⠈⢿⣞⣿⣿⣿⠏⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠙⠳⢬⣛⠦⠀⠙⢻⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⠀⠀⠉⠛⠋⠁⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠈⣿⠉⢻⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⠀⠀⠀⣠⣄⠀⠀⢰⠶⠒⠒⢧⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⢸⡇⢸⡟⢿⣷⣦⣴⣶⣶⣶⣶⣤⣔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⣤⠀⠀⠿⠿⠁⢀⡿⠀⠀⠀⡄⠈⠙⡷⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⣿⠀⢸⡇⢸⡇⠀⣿⠙⣿⣿⣉⠉⠙⠿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⡇⠀⠀⠙⠷⢤⣀⣠⠴⠛⠁⠀⠀⠀⠇⠀⠀⡇⢸⡏⢹⡷⢦⣄⡀⠀⠀⠀⣿⡀⢸⡇⢸⡇⠀⡟⠀⢸⠀⢹⡷⢦⣄⣘⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⠢⣤⡀⠀⠀⠀⠀⠀⠀⣠⠾⣿⣿⡷⣤⣀⡇⠸⡇⢸⡇⢸⠉⠙⠳⢦⣄⡻⢿⣾⣧⣸⣧⠀⡇⠀⢸⠀⢸⡇⢤⣈⠙⠻⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢹⣿⣷⣌⡉⠛⠲⢶⣶⠖⠛⠛⢶⣄⡉⠛⠿⣽⣿⣶⣧⣸⡇⢸⠀⠀⠀⠀⠈⠙⠲⢮⣝⠻⣿⣷⣷⣄⣸⠀⢸⡇⠀⠈⠁⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠙⠻⢿⣷⣶⣤⣉⡻⢶⣄⣀⠈⠙⠳⢦⣈⡉⠻⢿⣿⣷⣾⣦⡀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢭⣛⠿⣿⣷⣼⡇⠀⠀⠀⠀⠈⣿⡇⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣀
⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣷⣶⣽⣻⡦⠀⠀⠈⠙⠷⣦⣌⡙⠻⢿⣟⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠳⢯⣻⡇⠀⠀⠀⠀⠀⢸⣿⠀⣀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⢀⡏⠙⠛
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⢿⣿⣿⣿⣶⣤⣤⣤⣀⣈⠛⠷⣤⣈⡛⠷⢽⡻⢶⣄⣀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠳⢤⣀⠀⠀⢸⣿⡀⠈⠳⢤⣀⣀⣰⠃⠈⠛⠶⠶⠿⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⡿⠛⠉⠙⠛⠛⠻⢷⣦⣄⣩⣿⠶⠖⠛⠛⠛⠛⠛⠛⠿⢷⣶⣦⣄⠀⠀⠀⠀⠉⢻⣶⣿⣿⠇⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠁⠀⠀⠀⠀⠀⠀⠀⣿⣿⠋⠀⠀⠀⠀⠀⣠⠖⠂⠀⠀⠀⠈⠙⠿⣿⣦⡄⠀⠀⣸⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⣰⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣶⣄⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⢀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠙⢿⣿⣇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡿⠦⠠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠧⠤⠄⠙⡿⠿⠦⠤⠤⠤⠤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  
  `,
  `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠋⠀⠹⣷⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠸⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇⠀⠀⠀⠀⣿⣠⣤⣤⣄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣸⣧⠀⠀⠀⠀⣿⡏⠀⠈⣿⡆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡾⠉⠉⠟⠀⠀⠀⠀⠉⠁⠀⠀⢹⡇
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣦⠀⠀⠀⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇
⣠⣄⠀⠀⠀⠀⠀⢀⣾⠁⢹⣧⠀⠀⢈⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠏⠀
⣿⠛⢷⣤⣤⡴⠶⠾⠃⠀⠀⣿⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⠏⠀⠀
⢻⡆⣀⡀⠀⠀⠀⠀⣀⣀⠀⣿⡟⠁⠀⠀⠀⠀⠀⢀⣠⣤⠶⠞⠋⠁⠀⠀⠀
⠸⣿⡿⠟⣿⣄⡾⠟⡛⢓⣿⠋⠀⠀⠀⣀⣤⡶⠞⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠹⣷⣼⣁⣽⣧⣽⠿⠋⢁⣠⣴⠶⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣠⡿⠛⠉⠁⠀⠀⠰⣯⣁⣠⠴⠛⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣾⠋⢀⣄⠀⠀⠀⣀⠀⢿⡷⠦⠴⠶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⡏⢠⣿⢹⣧⠀⣾⠻⣧⠘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠘⢷⠟⠁⢸⡏⠀⣿⠀⠻⣦⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡇⢸⡟⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠙⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  
  `,
] as const;

export function getCatMessage() {
  return catMessages[Math.floor(Math.random() * catMessages.length)] as string;
}

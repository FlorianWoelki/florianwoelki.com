.DEFAULT_GOAL := compile_pdf

compile_pdf:
	cd ./pdf && latexmk main.tex --pdf

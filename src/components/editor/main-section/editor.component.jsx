import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { connect } from 'react-redux';

import { EditorOverview, EditorOuter } from './editor.styles';

import EditorLeft from '../left-section/editor-left.component';
import EditorRight from '../right-section/editor-right.component';

import { saveArticleUtil } from '../../../api-utils/article/article.api-utils';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: '',
      theme: 'bubble',
      open: false,
      message: '',
      severity: 'success',
      variant: '',
      elevation: 0,
    };
  }

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  };

  handleThemeChange = (newTheme) => {
    if (newTheme === 'core') newTheme = null;
    this.setState({ theme: newTheme });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  componentDidMount() {
    const _this = this;
    const { match } = this.props;

    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && (event.key === 's' || event.key === 'S')) {
        event.preventDefault();
        // _this.setState({
        //   editorValue: document.querySelector('.ql-editor').innerHTML,
        // });
        if (_this.props.currentUser) {
          console.log(match);
          let editorContent = document.querySelector('.ql-editor').innerHTML;
          saveArticleUtil(
            match.params.articleId,
            editorContent,
            (articleSaveRes) => {
              console.log('asr ', articleSaveRes);
            }
          );

          _this.setState({
            open: true,
            message: 'Saved Successfully.',
            severity: 'success',
            variant: 'filled',
            elevation: 6,
          });
        } else {
          _this.setState({
            open: true,
            message: 'Login to continue.',
            severity: 'error',
            variant: 'filled',
            elevation: 6,
          });
        }
      }
    });
  }

  render() {
    const { open, message, severity, variant, elevation } = this.state;
    return (
      <EditorOverview>
        <EditorLeft />
        <EditorOuter>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={this.handleClose}
          >
            <Alert
              elevation={elevation}
              variant={variant}
              onClose={this.handleClose}
              severity={severity}
            >
              {message}
            </Alert>
          </Snackbar>
          <ReactQuill
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={'.app'}
            placeholder={
              this.props.placeholder
                ? this.props.placeholder
                : 'Write a story...'
            }
          />
        </EditorOuter>
        <EditorRight />
      </EditorOverview>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Editor);

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  keyboard: {
    bindings: {
      strike: {
        key: 'S',
        ctrlKey: true,
        shiftKey: true,
        handler: function (range, context) {
          const format = this.quill.getFormat(range);
          this.quill.format('strike', !format.strike);
        },
      },
      save: {
        key: 's' || 'S',
        ctrlKey: true,
        handler: function (...args) {
          console.log(args);
        },
      },
    },
  },
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

/*
 * PropType validation
 */
// Editor.propTypes = {
//   placeholder: PropTypes.string,
// };

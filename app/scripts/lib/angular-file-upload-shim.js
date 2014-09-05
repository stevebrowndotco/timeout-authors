



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>angular-file-upload/angular-file-upload-shim.js at master · danialfarid/angular-file-upload</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="danialfarid/angular-file-upload" name="twitter:title" /><meta content="angular-file-upload - An AngularJS directive for file upload using HTML5 with FileAPI polyfill for unsupported browsers" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1676054?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1676054?v=2&amp;s=400" property="og:image" /><meta content="danialfarid/angular-file-upload" property="og:title" /><meta content="https://github.com/danialfarid/angular-file-upload" property="og:url" /><meta content="angular-file-upload - An AngularJS directive for file upload using HTML5 with FileAPI polyfill for unsupported browsers" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5C181487:6A43:12377E84:53EE9FB3" name="octolytics-dimension-request_id" /><meta content="2996639" name="octolytics-actor-id" /><meta content="raytracer1975" name="octolytics-actor-login" /><meta content="d0ac394d2c553cc3c4aa25666cbecc1b9bf6ed7e3f00ea9198ad70734955bf79" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="Gkxb7rV+Mby8rJ3QBejq+cWZNMCbYvDVlEIYo1EaSZy2Xz8XAxXu0v7LWljJK98raXB0WWdPq0NxnNwfQReFXg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-5efa7b0b8a55ddcee56e5aee3fa56109d1d2781c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-5a5ec1b700a905d6b5636697f7c33918d7dbfccb.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="cd94a184f75e5b8f9dd34887916952a3">

      
  <meta name="description" content="angular-file-upload - An AngularJS directive for file upload using HTML5 with FileAPI polyfill for unsupported browsers">


  <meta content="1676054" name="octolytics-dimension-user_id" /><meta content="danialfarid" name="octolytics-dimension-user_login" /><meta content="11621778" name="octolytics-dimension-repository_id" /><meta content="danialfarid/angular-file-upload" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11621778" name="octolytics-dimension-repository_network_root_id" /><meta content="danialfarid/angular-file-upload" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/danialfarid/angular-file-upload/commits/master.atom" rel="alternate" title="Recent Commits to angular-file-upload:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


        <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="raytracer1975"
    data-repo="danialfarid/angular-file-upload"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="danialfarid/angular-file-upload">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    
<ul id="user-links">
  <li>
    <a href="/raytracer1975" class="name">
      <img alt="Daniele Urania" data-user="2996639" height="20" src="https://avatars0.githubusercontent.com/u/2996639?v=2&amp;s=40" width="20" /> raytracer1975
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eT7NmghxProQi72xGcq1tDZZDXv8HzE3EUofAI1dYUGXmuWLnsv7cJQUd7QNP16WFhSUQaAXbLhfMGTwbkt/Mw==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="danialfarid/angular-file-upload">This repository</span>
    </li>
      <li>
        <a href="/danialfarid/angular-file-upload/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vm084leV3pa7EQKxV2qcjRllyEMeleKMvIFuzHJI41EyFki/EbwJ9HjyjrPax6qxY+a1xOanTfy6q/WryqNWrw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="11621778" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/danialfarid/angular-file-upload/watchers">
        85
      </a>
      <a href="/danialfarid/angular-file-upload/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/danialfarid/angular-file-upload/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IR6rVfwufAyfmnxWX1bvlY/vFjETWcCnNqnFlFVlv4ilQJV3WUrzriCq6mXKw9vtrobshbhotX7PNDOK9qcadw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar danialfarid/angular-file-upload">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/danialfarid/angular-file-upload/stargazers">
          1,420
        </a>
</form>
    <form accept-charset="UTF-8" action="/danialfarid/angular-file-upload/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+QpVvOzcF5HsLKVJt4rbNN75WCtedMBNpI5dKJdsiitaTCAiSJThXhgNc0129MnWfwFVCsKkvaOCiUgd2MBhHg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star danialfarid/angular-file-upload">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/danialfarid/angular-file-upload/stargazers">
          1,420
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/danialfarid/angular-file-upload/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of danialfarid/angular-file-upload to your account" aria-label="Fork your own copy of danialfarid/angular-file-upload to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/danialfarid/angular-file-upload/network" class="social-count">333</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/danialfarid" class="url fn" itemprop="url" rel="author"><span itemprop="title">danialfarid</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/danialfarid/angular-file-upload" class="js-current-repository js-repo-home-link">angular-file-upload</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/danialfarid/angular-file-upload/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/danialfarid/angular-file-upload" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /danialfarid/angular-file-upload">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/danialfarid/angular-file-upload/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /danialfarid/angular-file-upload/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/danialfarid/angular-file-upload/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /danialfarid/angular-file-upload/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/danialfarid/angular-file-upload/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /danialfarid/angular-file-upload/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/danialfarid/angular-file-upload/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /danialfarid/angular-file-upload/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/danialfarid/angular-file-upload/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /danialfarid/angular-file-upload/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/danialfarid/angular-file-upload.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/danialfarid/angular-file-upload.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:danialfarid/angular-file-upload.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:danialfarid/angular-file-upload.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/danialfarid/angular-file-upload" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/danialfarid/angular-file-upload" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/danialfarid/angular-file-upload" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save danialfarid/angular-file-upload to your computer and use it in GitHub Desktop." aria-label="Save danialfarid/angular-file-upload to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/danialfarid/angular-file-upload/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download danialfarid/angular-file-upload as a zip file"
                   title="Download danialfarid/angular-file-upload as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/danialfarid/angular-file-upload/blob/944cd4ef447a3f08a206314c146e7218e7695397/demo/war/js/angular-file-upload-shim.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:2cf330cd4d39a2d5ab2f80ceaeeb6f5f -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/blob/master/demo/war/js/angular-file-upload-shim.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/v0.1.4/demo/war/js/angular-file-upload-shim.js"
                 data-name="v0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.4">v0.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.6.5/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.6.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.5">1.6.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.6.4/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.4">1.6.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.6.3/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.3">1.6.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.6.2/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.2">1.6.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.6.1/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.1">1.6.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.6.0/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.0">1.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.5.1/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.1">1.5.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.5.0/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.0">1.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.4.0/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.3.1/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.1">1.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.3.0/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.11/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.11">1.2.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.10/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.10">1.2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.9/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.9">1.2.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.8/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.8">1.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.7/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.7">1.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.5/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.5">1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.4/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.4">1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.3/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.3">1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.2/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.2">1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.2.1/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1%2C2%2C0/demo/war/js/angular-file-upload-shim.js"
                 data-name="1,2,0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1,2,0">1,2,0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.11/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.11">1.1.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.10/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.10">1.1.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.9/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.9">1.1.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.8/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.8">1.1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.7/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.7">1.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.6/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.6">1.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.5/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.5">1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.4/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.4">1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.3/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.3">1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.2/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.2">1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.1/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.1.0/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.0.2/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.0.1/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/1.0.0/demo/war/js/angular-file-upload-shim.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/danialfarid/angular-file-upload/tree/0.1.4/demo/war/js/angular-file-upload-shim.js"
                 data-name="0.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.4">0.1.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/danialfarid/angular-file-upload/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="demo/war/js/angular-file-upload-shim.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/danialfarid/angular-file-upload" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular-file-upload</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/danialfarid/angular-file-upload/tree/master/demo" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">demo</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/danialfarid/angular-file-upload/tree/master/demo/war" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">war</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/danialfarid/angular-file-upload/tree/master/demo/war/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">angular-file-upload-shim.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="" class="main-avatar" height="24" src="https://1.gravatar.com/avatar/6072cbad1e573d6d71dacd7ddf59d17c?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
      <span class="author"><span>Danial Farid</span></span>
      <time datetime="2014-07-29T11:52:26-04:00" is="relative-time">July 29, 2014</time>
      <div class="commit-title">
          <a href="/danialfarid/angular-file-upload/commit/c3278b32465ea7930967c56752b8b8b3010bf2d3" class="message" data-pjax="true" title="fixed #284">fixed</a> <a href="https://github.com/danialfarid/angular-file-upload/issues/284" class="issue-link" title="File select callback is called twice in IE8">#284</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
      
    <a class="avatar tooltipped tooltipped-s" aria-label="danialfarid" href="/danialfarid/angular-file-upload/commits/master/demo/war/js/angular-file-upload-shim.js?author=danialfarid"><img alt="Danial Farid" data-user="1676054" height="20" src="https://avatars0.githubusercontent.com/u/1676054?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="destos" href="/danialfarid/angular-file-upload/commits/master/demo/war/js/angular-file-upload-shim.js?author=destos"><img alt="Patrick Forringer" data-user="136456" height="20" src="https://avatars1.githubusercontent.com/u/136456?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Danial Farid" data-user="1676054" height="24" src="https://avatars2.githubusercontent.com/u/1676054?v=2&amp;s=48" width="24" />
            <a href="/danialfarid">danialfarid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Patrick Forringer" data-user="136456" height="24" src="https://avatars3.githubusercontent.com/u/136456?v=2&amp;s=48" width="24" />
            <a href="/destos">destos</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>347 lines (327 sloc)</span>
          <span class="meta-divider"></span>
        <span>11.067 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/danialfarid/angular-file-upload/raw/master/demo/war/js/angular-file-upload-shim.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/danialfarid/angular-file-upload/blame/master/demo/war/js/angular-file-upload-shim.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/danialfarid/angular-file-upload/commits/master/demo/war/js/angular-file-upload-shim.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/danialfarid/angular-file-upload?branch=master&amp;filepath=demo%2Fwar%2Fjs%2Fangular-file-upload-shim.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/danialfarid/angular-file-upload/edit/master/demo/war/js/angular-file-upload-shim.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/danialfarid/angular-file-upload/delete/master/demo/war/js/angular-file-upload-shim.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-line-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-line-code js-file-line"><span class="cm">/**!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-line-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-line-code js-file-line"><span class="cm"> * AngularJS file upload shim for HTML5 FormData</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-line-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-line-code js-file-line"><span class="cm"> * @author  Danial  &lt;danial.farid@gmail.com&gt;</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-line-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-line-code js-file-line"><span class="cm"> * @version &lt;%= pkg.version %&gt;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-line-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-line-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-line-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-line-code js-file-line"><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-line-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-line-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">hasFlash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-line-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-line-code js-file-line">	<span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-line-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-line-code js-file-line">	  <span class="kd">var</span> <span class="nx">fo</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;ShockwaveFlash.ShockwaveFlash&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-line-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-line-code js-file-line">	  <span class="k">if</span> <span class="p">(</span><span class="nx">fo</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-line-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-line-code js-file-line">	<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-line-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-line-code js-file-line">	  <span class="k">if</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="s2">&quot;application/x-shockwave-flash&quot;</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-line-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-line-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-line-code js-file-line">	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-line-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-line-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-line-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">patchXHR</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fnName</span><span class="p">,</span> <span class="nx">newFn</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-line-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-line-code js-file-line">	<span class="nb">window</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">fnName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">newFn</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">fnName</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-line-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-line-code js-file-line"><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-line-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-line-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-line-code js-file-line"><span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-line-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">FormData</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span> <span class="o">||</span> <span class="o">!</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">forceLoad</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-line-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-line-code js-file-line">		<span class="c1">// allow access to Angular XHR private field: https://github.com/angular/angular.js/issues/1934</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-line-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-line-code js-file-line">		<span class="nx">patchXHR</span><span class="p">(</span><span class="s2">&quot;setRequestHeader&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">orig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-line-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">header</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-line-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">header</span> <span class="o">===</span> <span class="s1">&#39;__setXHR_&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-line-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">value</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-line-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-line-code js-file-line">					<span class="c1">// fix for angular &lt; 1.2.0</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-line-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nx">val</span> <span class="k">instanceof</span> <span class="nb">Function</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-line-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-line-code js-file-line">						<span class="nx">val</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-line-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-line-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-line-code js-file-line">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-line-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-line-code js-file-line">					<span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-line-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-line-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-line-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-line-code js-file-line">		<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-line-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-line-code js-file-line">	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-line-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-line-code js-file-line">		<span class="kd">function</span> <span class="nx">initializeUploadListener</span><span class="p">(</span><span class="nx">xhr</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-line-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-line-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">upload</span><span class="p">)</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">upload</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-line-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-line-code js-file-line">				<span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-line-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">origAddEventListener</span> <span class="o">=</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">upload</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-line-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-line-code js-file-line">				<span class="nx">xhr</span><span class="p">.</span><span class="nx">upload</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-line-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-line-code js-file-line">					<span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-line-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-line-code js-file-line">					<span class="nx">origAddEventListener</span> <span class="o">&amp;&amp;</span> <span class="nx">origAddEventListener</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-line-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-line-code js-file-line">				<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-line-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-line-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-line-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-line-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L51" class="blob-line-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-line-code js-file-line">		<span class="nx">patchXHR</span><span class="p">(</span><span class="s2">&quot;open&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">orig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-line-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-line-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-line-code js-file-line">				<span class="nx">initializeUploadListener</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-line-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-line-code js-file-line">				<span class="k">this</span><span class="p">.</span><span class="nx">__url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-line-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-line-code js-file-line">				<span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-line-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-line-code js-file-line">					<span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">m</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">b</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-line-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-line-code js-file-line">				<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-line-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;Access is denied&#39;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-line-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-line-code js-file-line">						<span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">m</span><span class="p">,</span> <span class="s1">&#39;_fix_for_ie_crossdomain__&#39;</span><span class="p">,</span> <span class="nx">b</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-line-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-line-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-line-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-line-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-line-code js-file-line">		<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-line-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-line-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-line-code js-file-line">		<span class="nx">patchXHR</span><span class="p">(</span><span class="s2">&quot;getResponseHeader&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">orig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-line-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-line-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-line-code js-file-line">				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">__fileApiXHR</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">__fileApiXHR</span><span class="p">.</span><span class="nx">getResponseHeader</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span> <span class="o">:</span> <span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">h</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-line-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-line-code js-file-line">			<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-line-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-line-code js-file-line">		<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-line-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-line-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-line-code js-file-line">		<span class="nx">patchXHR</span><span class="p">(</span><span class="s2">&quot;getAllResponseHeaders&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">orig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-line-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-line-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-line-code js-file-line">				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">__fileApiXHR</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">__fileApiXHR</span><span class="p">.</span><span class="nx">abort</span><span class="p">()</span> <span class="o">:</span> <span class="p">(</span><span class="nx">orig</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-line-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-line-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-line-code js-file-line">		<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-line-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-line-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-line-code js-file-line">		<span class="nx">patchXHR</span><span class="p">(</span><span class="s2">&quot;abort&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">orig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-line-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-line-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-line-code js-file-line">				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">__fileApiXHR</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">__fileApiXHR</span><span class="p">.</span><span class="nx">abort</span><span class="p">()</span> <span class="o">:</span> <span class="p">(</span><span class="nx">orig</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">?</span> <span class="kc">null</span> <span class="o">:</span> <span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-line-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-line-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-line-code js-file-line">		<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-line-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-line-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-line-code js-file-line">		<span class="nx">patchXHR</span><span class="p">(</span><span class="s2">&quot;setRequestHeader&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">orig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-line-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">header</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-line-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">header</span> <span class="o">===</span> <span class="s1">&#39;__setXHR_&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-line-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-line-code js-file-line">					<span class="nx">initializeUploadListener</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-line-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">value</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-line-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-line-code js-file-line">					<span class="c1">// fix for angular &lt; 1.2.0</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-line-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nx">val</span> <span class="k">instanceof</span> <span class="nb">Function</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-line-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-line-code js-file-line">						<span class="nx">val</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-line-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-line-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-line-code js-file-line">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-line-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-line-code js-file-line">					<span class="k">this</span><span class="p">.</span><span class="nx">__requestHeaders</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">__requestHeaders</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-line-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-line-code js-file-line">					<span class="k">this</span><span class="p">.</span><span class="nx">__requestHeaders</span><span class="p">[</span><span class="nx">header</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-line-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-line-code js-file-line">					<span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-line-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-line-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-line-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-line-code js-file-line">		<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-line-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-line-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-line-code js-file-line">		<span class="nx">patchXHR</span><span class="p">(</span><span class="s2">&quot;send&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">orig</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-line-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-line-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-line-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">__isShim</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-line-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">formData</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-line-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-line-code js-file-line">					<span class="kd">var</span> <span class="nx">config</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-line-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-line-code js-file-line">						<span class="nx">url</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__url</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-line-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-line-code js-file-line">						<span class="nx">complete</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">fileApiXHR</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-line-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-line-code js-file-line">							<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">err</span> <span class="o">&amp;&amp;</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;load&#39;</span><span class="p">])</span> </td>
      </tr>
      <tr>
        <td id="L109" class="blob-line-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-line-code js-file-line">								<span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;load&#39;</span><span class="p">]({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">loaded</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__loaded</span><span class="p">,</span> <span class="nx">total</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__total</span><span class="p">,</span> <span class="nx">target</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">lengthComputable</span><span class="o">:</span> <span class="kc">true</span><span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-line-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-line-code js-file-line">							<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">err</span> <span class="o">&amp;&amp;</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;loadend&#39;</span><span class="p">])</span> </td>
      </tr>
      <tr>
        <td id="L111" class="blob-line-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-line-code js-file-line">								<span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;loadend&#39;</span><span class="p">]({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;loadend&#39;</span><span class="p">,</span> <span class="nx">loaded</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__loaded</span><span class="p">,</span> <span class="nx">total</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__total</span><span class="p">,</span> <span class="nx">target</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">lengthComputable</span><span class="o">:</span> <span class="kc">true</span><span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-line-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-line-code js-file-line">							<span class="k">if</span> <span class="p">(</span><span class="nx">err</span> <span class="o">===</span> <span class="s1">&#39;abort&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;abort&#39;</span><span class="p">])</span> </td>
      </tr>
      <tr>
        <td id="L113" class="blob-line-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-line-code js-file-line">								<span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;abort&#39;</span><span class="p">]({</span><span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;abort&#39;</span><span class="p">,</span> <span class="nx">loaded</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__loaded</span><span class="p">,</span> <span class="nx">total</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__total</span><span class="p">,</span> <span class="nx">target</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">,</span> <span class="nx">lengthComputable</span><span class="o">:</span> <span class="kc">true</span><span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-line-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-line-code js-file-line">							<span class="k">if</span> <span class="p">(</span><span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">status</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="s1">&#39;status&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="k">return</span> <span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">status</span><span class="p">}});</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-line-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-line-code js-file-line">							<span class="k">if</span> <span class="p">(</span><span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">statusText</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="s1">&#39;statusText&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="k">return</span> <span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">statusText</span><span class="p">}});</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-line-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-line-code js-file-line">							<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="s1">&#39;readyState&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="k">return</span> <span class="mi">4</span><span class="p">}});</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-line-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-line-code js-file-line">							<span class="k">if</span> <span class="p">(</span><span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">response</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="s1">&#39;response&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="k">return</span> <span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">response</span><span class="p">}});</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-line-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-line-code js-file-line">							<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="s1">&#39;responseText&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="k">return</span> <span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">responseText</span><span class="p">}});</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-line-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-line-code js-file-line">							<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="s1">&#39;response&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="k">return</span> <span class="nx">fileApiXHR</span><span class="p">.</span><span class="nx">responseText</span><span class="p">}});</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-line-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-line-code js-file-line">							<span class="nx">xhr</span><span class="p">.</span><span class="nx">__fileApiXHR</span> <span class="o">=</span> <span class="nx">fileApiXHR</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-line-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-line-code js-file-line">							<span class="k">if</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="p">)</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-line-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-line-code js-file-line">						<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-line-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-line-code js-file-line">						<span class="nx">fileprogress</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-line-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-line-code js-file-line">							<span class="nx">e</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="nx">xhr</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-line-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-line-code js-file-line">							<span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;progress&#39;</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__listeners</span><span class="p">[</span><span class="s1">&#39;progress&#39;</span><span class="p">](</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-line-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-line-code js-file-line">							<span class="nx">xhr</span><span class="p">.</span><span class="nx">__total</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">total</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-line-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-line-code js-file-line">							<span class="nx">xhr</span><span class="p">.</span><span class="nx">__loaded</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">loaded</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-line-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-line-code js-file-line">						<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-line-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-line-code js-file-line">						<span class="nx">headers</span><span class="o">:</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">__requestHeaders</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-line-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-line-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-line-code js-file-line">					<span class="nx">config</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-line-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-line-code js-file-line">					<span class="nx">config</span><span class="p">.</span><span class="nx">files</span> <span class="o">=</span> <span class="p">{}</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-line-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-line-code js-file-line">					<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">formData</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-line-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-line-code js-file-line">						<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="nx">formData</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-line-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-line-code js-file-line">						<span class="k">if</span> <span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">val</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">val</span><span class="p">.</span><span class="nx">name</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">val</span><span class="p">.</span><span class="nx">size</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">item</span><span class="p">.</span><span class="nx">val</span><span class="p">.</span><span class="nx">type</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-line-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-line-code js-file-line">							<span class="nx">config</span><span class="p">.</span><span class="nx">files</span><span class="p">[</span><span class="nx">item</span><span class="p">.</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">val</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-line-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-line-code js-file-line">						<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-line-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-line-code js-file-line">							<span class="nx">config</span><span class="p">.</span><span class="nx">data</span><span class="p">[</span><span class="nx">item</span><span class="p">.</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">val</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-line-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-line-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-line-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-line-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-line-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-line-code js-file-line">					<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-line-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-line-code js-file-line">						<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">hasFlash</span><span class="p">())</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-line-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-line-code js-file-line">							<span class="k">throw</span> <span class="s1">&#39;Adode Flash Player need to be installed. To check ahead use &quot;FileAPI.hasFlash&quot;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-line-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-line-code js-file-line">						<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-line-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-line-code js-file-line">						<span class="nx">xhr</span><span class="p">.</span><span class="nx">__fileApiXHR</span> <span class="o">=</span> <span class="nx">FileAPI</span><span class="p">.</span><span class="nx">upload</span><span class="p">(</span><span class="nx">config</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-line-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-line-code js-file-line">					<span class="p">},</span> <span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-line-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-line-code js-file-line">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-line-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-line-code js-file-line">					<span class="nx">orig</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-line-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-line-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-line-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-line-code js-file-line">		<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-line-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-line-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-line-code js-file-line">	<span class="nb">window</span><span class="p">.</span><span class="nx">XMLHttpRequest</span><span class="p">.</span><span class="nx">__isShim</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-line-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-line-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-line-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-line-code js-file-line"><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">FormData</span> <span class="o">||</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span> <span class="o">&amp;&amp;</span> <span class="nx">FileAPI</span><span class="p">.</span><span class="nx">forceLoad</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-line-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">addFlash</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-line-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-line-code js-file-line">		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">hasFlash</span><span class="p">())</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-line-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-line-code js-file-line">			<span class="k">throw</span> <span class="s1">&#39;Adode Flash Player need to be installed. To check ahead use &quot;FileAPI.hasFlash&quot;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-line-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-line-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-line-code js-file-line">		<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-line-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-line-code js-file-line">		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">el</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;js-fileapi-wrapper&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">&#39;ng-file-select&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">&#39;data-ng-file-select&#39;</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-line-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">wrapInsideDiv</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-line-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">wrap</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-line-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-line-code js-file-line">				<span class="nx">wrap</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s1">&#39;&lt;div class=&quot;js-fileapi-wrapper&quot; style=&quot;position:relative; overflow:hidden&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-line-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-line-code js-file-line">				<span class="nx">wrap</span> <span class="o">=</span> <span class="nx">wrap</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-line-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">parent</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-line-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-line-code js-file-line">				<span class="nx">parent</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">wrap</span><span class="p">,</span> <span class="nx">elem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-line-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-line-code js-file-line">				<span class="nx">parent</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-line-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-line-code js-file-line">				<span class="nx">wrap</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-line-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-line-code js-file-line">			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-line-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-line-code js-file-line">				<span class="nx">el</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;js-fileapi-wrapper&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-line-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-line-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-line-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-line-code js-file-line">	<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-line-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">changeFnWrapper</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-line-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-line-code js-file-line">		<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-line-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">files</span> <span class="o">=</span> <span class="nx">FileAPI</span><span class="p">.</span><span class="nx">getFiles</span><span class="p">(</span><span class="nx">evt</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-line-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-line-code js-file-line">			<span class="c1">//just a double check for #233</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-line-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-line-code js-file-line">			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">files</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-line-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">size</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">size</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-line-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">name</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;file&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-line-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">type</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-line-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-line-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">evt</span><span class="p">.</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-line-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-line-code js-file-line">				<span class="nx">evt</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-line-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-line-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-line-code js-file-line">			<span class="nx">evt</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">files</span> <span class="o">=</span> <span class="nx">files</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-line-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-line-code js-file-line">			<span class="c1">// if evt.target.files is not writable use helper field</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-line-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">files</span> <span class="o">!=</span> <span class="nx">files</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-line-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-line-code js-file-line">				<span class="nx">evt</span><span class="p">.</span><span class="nx">__files_</span> <span class="o">=</span> <span class="nx">files</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-line-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-line-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-line-code js-file-line">			<span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">__files_</span> <span class="o">||</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">files</span><span class="p">).</span><span class="nx">item</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-line-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-line-code js-file-line">				<span class="k">return</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">__files_</span> <span class="o">||</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">files</span><span class="p">)[</span><span class="nx">i</span><span class="p">]</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-line-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-line-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="nx">fn</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">evt</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-line-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-line-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-line-code js-file-line">	<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-line-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-line-code js-file-line">	<span class="kd">var</span> <span class="nx">isFileChange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">e</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-line-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-line-code js-file-line">		<span class="k">return</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;change&#39;</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;onchange&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">&#39;type&#39;</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;file&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-line-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-line-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="nx">HTMLInputElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-line-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-line-code js-file-line">		<span class="nx">HTMLInputElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">origAddEventListener</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-line-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-line-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">isFileChange</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">e</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-line-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-line-code js-file-line">					<span class="nx">addFlash</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-line-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-line-code js-file-line">					<span class="nx">origAddEventListener</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">e</span><span class="p">,</span> <span class="nx">changeFnWrapper</span><span class="p">(</span><span class="nx">fn</span><span class="p">),</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">d</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-line-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-line-code js-file-line">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-line-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-line-code js-file-line">					<span class="nx">origAddEventListener</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">e</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">d</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-line-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-line-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-line-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-line-code js-file-line">		<span class="p">})(</span><span class="nx">HTMLInputElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-line-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-line-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-line-code js-file-line">	<span class="k">if</span> <span class="p">(</span><span class="nx">HTMLInputElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-line-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-line-code js-file-line">		<span class="nx">HTMLInputElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">attachEvent</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">origAttachEvent</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-line-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-line-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-line-code js-file-line">				<span class="k">if</span> <span class="p">(</span><span class="nx">isFileChange</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">e</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-line-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-line-code js-file-line">					<span class="nx">addFlash</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-line-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-line-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-line-code js-file-line">						<span class="c1">// fix for #281 jQuery on IE8</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-line-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-line-code js-file-line">						<span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">,</span> <span class="nx">changeFnWrapper</span><span class="p">(</span><span class="kc">null</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-line-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-line-code js-file-line">					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-line-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-line-code js-file-line">						<span class="nx">origAttachEvent</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">e</span><span class="p">,</span> <span class="nx">changeFnWrapper</span><span class="p">(</span><span class="nx">fn</span><span class="p">)]);</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-line-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-line-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-line-code js-file-line">				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-line-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-line-code js-file-line">					<span class="nx">origAttachEvent</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">e</span><span class="p">,</span> <span class="nx">fn</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-line-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-line-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-line-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-line-code js-file-line">		<span class="p">})(</span><span class="nx">HTMLInputElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-line-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-line-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L233" class="blob-line-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-line-code js-file-line">	<span class="nb">window</span><span class="p">.</span><span class="nx">FormData</span> <span class="o">=</span> <span class="nx">FormData</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-line-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-line-code js-file-line">		<span class="k">return</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-line-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-line-code js-file-line">			<span class="nx">append</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-line-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-line-code js-file-line">				<span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-line-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-line-code js-file-line">					<span class="nx">key</span><span class="o">:</span> <span class="nx">key</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-line-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-line-code js-file-line">					<span class="nx">val</span><span class="o">:</span> <span class="nx">val</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-line-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-line-code js-file-line">					<span class="nx">name</span><span class="o">:</span> <span class="nx">name</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-line-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-line-code js-file-line">				<span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-line-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-line-code js-file-line">			<span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-line-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-line-code js-file-line">			<span class="nx">data</span><span class="o">:</span> <span class="p">[],</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-line-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-line-code js-file-line">			<span class="nx">__isShim</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-line-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-line-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-line-code js-file-line">	<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-line-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-line-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-line-code js-file-line">	<span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-line-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-line-code js-file-line">		<span class="c1">//load FileAPI</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-line-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-line-code js-file-line">		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-line-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-line-code js-file-line">			<span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-line-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-line-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-line-code js-file-line">		<span class="k">if</span> <span class="p">(</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">forceLoad</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-line-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-line-code js-file-line">			<span class="nx">FileAPI</span><span class="p">.</span><span class="nx">html5</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-line-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-line-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-line-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L256" class="blob-line-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-line-code js-file-line">		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">upload</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-line-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">jsUrl</span><span class="p">,</span> <span class="nx">basePath</span><span class="p">,</span> <span class="nx">script</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;script&#39;</span><span class="p">),</span> <span class="nx">allScripts</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;script&#39;</span><span class="p">),</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">src</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-line-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">jsUrl</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-line-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-line-code js-file-line">				<span class="nx">jsUrl</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">jsUrl</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-line-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-line-code js-file-line">			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">jsPath</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-line-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-line-code js-file-line">				<span class="nx">basePath</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">jsPath</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-line-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-line-code js-file-line">			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-line-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-line-code js-file-line">				<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">allScripts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-line-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-line-code js-file-line">					<span class="nx">src</span> <span class="o">=</span> <span class="nx">allScripts</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">src</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-line-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-line-code js-file-line">					<span class="nx">index</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;angular-file-upload-shim.js&#39;</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-line-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nx">index</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-line-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-line-code js-file-line">						<span class="nx">index</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;angular-file-upload-shim.min.js&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-line-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-line-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-line-code js-file-line">					<span class="k">if</span> <span class="p">(</span><span class="nx">index</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-line-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-line-code js-file-line">						<span class="nx">basePath</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">index</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-line-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-line-code js-file-line">						<span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-line-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-line-code js-file-line">					<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-line-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-line-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-line-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L276" class="blob-line-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">FileAPI</span><span class="p">.</span><span class="nx">staticPath</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">FileAPI</span><span class="p">.</span><span class="nx">staticPath</span> <span class="o">=</span> <span class="nx">basePath</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-line-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-line-code js-file-line">			<span class="nx">script</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;src&#39;</span><span class="p">,</span> <span class="nx">jsUrl</span> <span class="o">||</span> <span class="nx">basePath</span> <span class="o">+</span> <span class="s2">&quot;FileAPI.min.js&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-line-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-line-code js-file-line">			<span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;head&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">script</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-line-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-line-code js-file-line">			<span class="nx">FileAPI</span><span class="p">.</span><span class="nx">hasFlash</span> <span class="o">=</span> <span class="nx">hasFlash</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-line-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-line-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-line-code js-file-line">	<span class="p">})();</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-line-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-line-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-line-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-line-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-line-code js-file-line"><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">FileReader</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-line-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-line-code js-file-line">	<span class="nb">window</span><span class="p">.</span><span class="nx">FileReader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-line-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-line-code js-file-line">		<span class="kd">var</span> <span class="nx">_this</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">loadStarted</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-line-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">listeners</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-line-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-line-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-line-code js-file-line">			<span class="nx">_this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-line-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-line-code js-file-line">			<span class="nx">_this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">[</span><span class="nx">type</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">fn</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-line-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-line-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">removeEventListener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-line-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-line-code js-file-line">			<span class="nx">_this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">[</span><span class="nx">type</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">[</span><span class="nx">type</span><span class="p">].</span><span class="nx">splice</span><span class="p">(</span><span class="nx">_this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">[</span><span class="nx">type</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">fn</span><span class="p">),</span> <span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-line-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-line-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">dispatchEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-line-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">[</span><span class="nx">evt</span><span class="p">.</span><span class="nx">type</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-line-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">list</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-line-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-line-code js-file-line">				<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">list</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-line-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-line-code js-file-line">					<span class="nx">list</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="nx">_this</span><span class="p">,</span> <span class="nx">evt</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-line-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-line-code js-file-line">				<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-line-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-line-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-line-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">onabort</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">onloadstart</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">onloadend</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">onprogress</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-line-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L306" class="blob-line-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-line-code js-file-line">		<span class="kd">function</span> <span class="nx">constructEvent</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-line-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-line-code js-file-line">			<span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">target</span><span class="o">:</span> <span class="nx">_this</span><span class="p">,</span> <span class="nx">loaded</span><span class="o">:</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">loaded</span><span class="p">,</span> <span class="nx">total</span><span class="o">:</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">total</span><span class="p">,</span> <span class="nx">error</span><span class="o">:</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">error</span><span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-line-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">result</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">evt</span><span class="p">.</span><span class="nx">result</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-line-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-line-code js-file-line">			<span class="k">return</span> <span class="nx">e</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-line-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-line-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-line-code js-file-line">		<span class="kd">var</span> <span class="nx">listener</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-line-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">loadStarted</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-line-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-line-code js-file-line">				<span class="nx">loadStarted</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-line-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">onloadstart</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">onloadstart</span><span class="p">(</span><span class="nx">constructEvent</span><span class="p">(</span><span class="s1">&#39;loadstart&#39;</span><span class="p">,</span> <span class="nx">evt</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-line-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-line-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-line-code js-file-line">			<span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;load&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-line-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">onloadend</span> <span class="o">&amp;&amp;</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">onloadend</span><span class="p">(</span><span class="nx">constructEvent</span><span class="p">(</span><span class="s1">&#39;loadend&#39;</span><span class="p">,</span> <span class="nx">evt</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-line-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="nx">constructEvent</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">evt</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-line-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">onload</span> <span class="o">&amp;&amp;</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">onload</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-line-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-line-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-line-code js-file-line">			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;progress&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-line-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="nx">constructEvent</span><span class="p">(</span><span class="s1">&#39;progress&#39;</span><span class="p">,</span> <span class="nx">evt</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-line-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">onprogress</span> <span class="o">&amp;&amp;</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">onprogress</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-line-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-line-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-line-code js-file-line">			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-line-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-line-code js-file-line">				<span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="nx">constructEvent</span><span class="p">(</span><span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="nx">evt</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-line-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">&amp;&amp;</span> <span class="nx">_this</span><span class="p">.</span><span class="nx">onerror</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-line-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-line-code js-file-line">				<span class="nx">_this</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-line-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-line-code js-file-line">			<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-line-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-line-code js-file-line">		<span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-line-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">readAsArrayBuffer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-line-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-line-code js-file-line">			<span class="nx">FileAPI</span><span class="p">.</span><span class="nx">readAsBinaryString</span><span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="nx">listener</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-line-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-line-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">readAsBinaryString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-line-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-line-code js-file-line">			<span class="nx">FileAPI</span><span class="p">.</span><span class="nx">readAsBinaryString</span><span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="nx">listener</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-line-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-line-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">readAsDataURL</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-line-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-line-code js-file-line">			<span class="nx">FileAPI</span><span class="p">.</span><span class="nx">readAsDataURL</span><span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="nx">listener</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-line-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-line-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-line-code js-file-line">		<span class="k">this</span><span class="p">.</span><span class="nx">readAsText</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">file</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-line-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-line-code js-file-line">			<span class="nx">FileAPI</span><span class="p">.</span><span class="nx">readAsText</span><span class="p">(</span><span class="nx">file</span><span class="p">,</span> <span class="nx">listener</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-line-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-line-code js-file-line">		<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-line-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-line-code js-file-line">	<span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-line-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-line-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L346" class="blob-line-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-line-code js-file-line"><span class="p">})();</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03952s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-eed9577c85e0013020b9d0db4388446fb8b22e01.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>


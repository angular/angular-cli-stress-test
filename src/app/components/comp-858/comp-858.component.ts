/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service858Service } from '../../services/service-858.service';

@Component({
  selector: 'app-comp-858',
  templateUrl: './comp-858.component.html',
  styleUrls: ['./comp-858.component.css']
})
export class Comp858Component implements OnInit {

  constructor(private _service: Service858Service) { }

  ngOnInit() {
  }

}

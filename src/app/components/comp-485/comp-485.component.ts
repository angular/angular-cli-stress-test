/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service485Service } from '../../services/service-485.service';

@Component({
  selector: 'app-comp-485',
  templateUrl: './comp-485.component.html',
  styleUrls: ['./comp-485.component.css']
})
export class Comp485Component implements OnInit {

  constructor(private _service: Service485Service) { }

  ngOnInit() {
  }

}

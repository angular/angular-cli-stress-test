/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service883Service } from '../../services/service-883.service';

@Component({
  selector: 'app-comp-883',
  templateUrl: './comp-883.component.html',
  styleUrls: ['./comp-883.component.css']
})
export class Comp883Component implements OnInit {

  constructor(private _service: Service883Service) { }

  ngOnInit() {
  }

}

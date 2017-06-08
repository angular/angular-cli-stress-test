/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service687Service } from '../../services/service-687.service';

@Component({
  selector: 'app-comp-687',
  templateUrl: './comp-687.component.html',
  styleUrls: ['./comp-687.component.css']
})
export class Comp687Component implements OnInit {

  constructor(private _service: Service687Service) { }

  ngOnInit() {
  }

}

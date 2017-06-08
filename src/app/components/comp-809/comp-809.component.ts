/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service809Service } from '../../services/service-809.service';

@Component({
  selector: 'app-comp-809',
  templateUrl: './comp-809.component.html',
  styleUrls: ['./comp-809.component.css']
})
export class Comp809Component implements OnInit {

  constructor(private _service: Service809Service) { }

  ngOnInit() {
  }

}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service395Service } from '../../services/service-395.service';

@Component({
  selector: 'app-comp-395',
  templateUrl: './comp-395.component.html',
  styleUrls: ['./comp-395.component.css']
})
export class Comp395Component implements OnInit {

  constructor(private _service: Service395Service) { }

  ngOnInit() {
  }

}

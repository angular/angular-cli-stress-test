/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service620Service } from '../../services/service-620.service';

@Component({
  selector: 'app-comp-620',
  templateUrl: './comp-620.component.html',
  styleUrls: ['./comp-620.component.css']
})
export class Comp620Component implements OnInit {

  constructor(private _service: Service620Service) { }

  ngOnInit() {
  }

}

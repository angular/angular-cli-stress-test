/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service955Service } from '../../services/service-955.service';

@Component({
  selector: 'app-comp-955',
  templateUrl: './comp-955.component.html',
  styleUrls: ['./comp-955.component.css']
})
export class Comp955Component implements OnInit {

  constructor(private _service: Service955Service) { }

  ngOnInit() {
  }

}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service227Service } from '../../services/service-227.service';

@Component({
  selector: 'app-comp-227',
  templateUrl: './comp-227.component.html',
  styleUrls: ['./comp-227.component.css']
})
export class Comp227Component implements OnInit {

  constructor(private _service: Service227Service) { }

  ngOnInit() {
  }

}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service720Service } from '../../services/service-720.service';

@Component({
  selector: 'app-comp-720',
  templateUrl: './comp-720.component.html',
  styleUrls: ['./comp-720.component.css']
})
export class Comp720Component implements OnInit {

  constructor(private _service: Service720Service) { }

  ngOnInit() {
  }

}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service539Service } from '../../services/service-539.service';

@Component({
  selector: 'app-comp-539',
  templateUrl: './comp-539.component.html',
  styleUrls: ['./comp-539.component.css']
})
export class Comp539Component implements OnInit {

  constructor(private _service: Service539Service) { }

  ngOnInit() {
  }

}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service602Service } from '../../services/service-602.service';

@Component({
  selector: 'app-comp-602',
  templateUrl: './comp-602.component.html',
  styleUrls: ['./comp-602.component.css']
})
export class Comp602Component implements OnInit {

  constructor(private _service: Service602Service) { }

  ngOnInit() {
  }

}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service15Service } from '../../services/service-15.service';

@Component({
  selector: 'app-comp-15',
  templateUrl: './comp-15.component.html',
  styleUrls: ['./comp-15.component.css']
})
export class Comp15Component implements OnInit {

  constructor(private _service: Service15Service) { }

  ngOnInit() {
  }

}

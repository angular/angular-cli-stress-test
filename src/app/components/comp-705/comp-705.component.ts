/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service705Service } from '../../services/service-705.service';

@Component({
  selector: 'app-comp-705',
  templateUrl: './comp-705.component.html',
  styleUrls: ['./comp-705.component.css']
})
export class Comp705Component implements OnInit {

  constructor(private _service: Service705Service) { }

  ngOnInit() {
  }

}

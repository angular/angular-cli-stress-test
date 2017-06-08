/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service346Service } from '../../services/service-346.service';

@Component({
  selector: 'app-comp-346',
  templateUrl: './comp-346.component.html',
  styleUrls: ['./comp-346.component.css']
})
export class Comp346Component implements OnInit {

  constructor(private _service: Service346Service) { }

  ngOnInit() {
  }

}

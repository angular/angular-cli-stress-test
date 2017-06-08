/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service291Service } from '../../services/service-291.service';

@Component({
  selector: 'app-comp-291',
  templateUrl: './comp-291.component.html',
  styleUrls: ['./comp-291.component.css']
})
export class Comp291Component implements OnInit {

  constructor(private _service: Service291Service) { }

  ngOnInit() {
  }

}

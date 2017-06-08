/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service435Service } from '../../services/service-435.service';

@Component({
  selector: 'app-comp-435',
  templateUrl: './comp-435.component.html',
  styleUrls: ['./comp-435.component.css']
})
export class Comp435Component implements OnInit {

  constructor(private _service: Service435Service) { }

  ngOnInit() {
  }

}

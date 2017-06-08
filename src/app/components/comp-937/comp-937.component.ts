/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service937Service } from '../../services/service-937.service';

@Component({
  selector: 'app-comp-937',
  templateUrl: './comp-937.component.html',
  styleUrls: ['./comp-937.component.css']
})
export class Comp937Component implements OnInit {

  constructor(private _service: Service937Service) { }

  ngOnInit() {
  }

}

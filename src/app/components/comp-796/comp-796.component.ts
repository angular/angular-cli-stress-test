/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service796Service } from '../../services/service-796.service';

@Component({
  selector: 'app-comp-796',
  templateUrl: './comp-796.component.html',
  styleUrls: ['./comp-796.component.css']
})
export class Comp796Component implements OnInit {

  constructor(private _service: Service796Service) { }

  ngOnInit() {
  }

}

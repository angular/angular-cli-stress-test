/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service631Service } from '../../services/service-631.service';

@Component({
  selector: 'app-comp-631',
  templateUrl: './comp-631.component.html',
  styleUrls: ['./comp-631.component.css']
})
export class Comp631Component implements OnInit {

  constructor(private _service: Service631Service) { }

  ngOnInit() {
  }

}

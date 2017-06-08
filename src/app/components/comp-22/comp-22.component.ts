/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service22Service } from '../../services/service-22.service';

@Component({
  selector: 'app-comp-22',
  templateUrl: './comp-22.component.html',
  styleUrls: ['./comp-22.component.css']
})
export class Comp22Component implements OnInit {

  constructor(private _service: Service22Service) { }

  ngOnInit() {
  }

}

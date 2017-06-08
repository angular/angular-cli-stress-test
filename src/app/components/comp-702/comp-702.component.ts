/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service702Service } from '../../services/service-702.service';

@Component({
  selector: 'app-comp-702',
  templateUrl: './comp-702.component.html',
  styleUrls: ['./comp-702.component.css']
})
export class Comp702Component implements OnInit {

  constructor(private _service: Service702Service) { }

  ngOnInit() {
  }

}

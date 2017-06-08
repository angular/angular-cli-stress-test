/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2702Component } from './comp-2702.component';

describe('Comp2702Component', () => {
  let component: Comp2702Component;
  let fixture: ComponentFixture<Comp2702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

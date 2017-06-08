/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp702Component } from './comp-702.component';

describe('Comp702Component', () => {
  let component: Comp702Component;
  let fixture: ComponentFixture<Comp702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

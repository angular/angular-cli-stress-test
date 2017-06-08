/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3702Component } from './comp-3702.component';

describe('Comp3702Component', () => {
  let component: Comp3702Component;
  let fixture: ComponentFixture<Comp3702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

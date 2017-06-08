/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1053Component } from './comp-1053.component';

describe('Comp1053Component', () => {
  let component: Comp1053Component;
  let fixture: ComponentFixture<Comp1053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2576Component } from './comp-2576.component';

describe('Comp2576Component', () => {
  let component: Comp2576Component;
  let fixture: ComponentFixture<Comp2576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

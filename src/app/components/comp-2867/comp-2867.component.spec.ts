/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2867Component } from './comp-2867.component';

describe('Comp2867Component', () => {
  let component: Comp2867Component;
  let fixture: ComponentFixture<Comp2867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

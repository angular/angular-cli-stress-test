/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2944Component } from './comp-2944.component';

describe('Comp2944Component', () => {
  let component: Comp2944Component;
  let fixture: ComponentFixture<Comp2944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

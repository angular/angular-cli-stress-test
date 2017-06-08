/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2700Component } from './comp-2700.component';

describe('Comp2700Component', () => {
  let component: Comp2700Component;
  let fixture: ComponentFixture<Comp2700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2564Component } from './comp-2564.component';

describe('Comp2564Component', () => {
  let component: Comp2564Component;
  let fixture: ComponentFixture<Comp2564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

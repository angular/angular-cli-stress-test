/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2246Component } from './comp-2246.component';

describe('Comp2246Component', () => {
  let component: Comp2246Component;
  let fixture: ComponentFixture<Comp2246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
